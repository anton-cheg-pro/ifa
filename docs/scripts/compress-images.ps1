# Compress images in frontend/public/images for web deploy.
# Backs up originals as *.original.<ext> (gitignored). Overwrites deploy files in place.
# Usage: pwsh -File docs/scripts/compress-images.ps1

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$imagesRoot = Join-Path $PSScriptRoot "..\..\frontend\public\images" | Resolve-Path
$maxW = 1920
$quality = 82L

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }

function Save-Jpeg($bitmap, $path) {
  $ep = New-Object System.Drawing.Imaging.EncoderParameters 1
  $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), $quality
  $bitmap.Save($path, $jpegCodec, $ep)
}

function Compress-File($file) {
  if ($file.Name -match "\.original\.") { return }

  $img = [System.Drawing.Image]::FromFile($file.FullName)
  $scale = [Math]::Min(1.0, $maxW / $img.Width)
  $newW = [Math]::Max(1, [int]($img.Width * $scale))
  $newH = [Math]::Max(1, [int]($img.Height * $scale))

  $bmp = New-Object System.Drawing.Bitmap $newW, $newH
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.DrawImage($img, 0, 0, $newW, $newH)
  $g.Dispose()
  $img.Dispose()

  $backup = [System.IO.Path]::Combine(
    $file.DirectoryName,
    [System.IO.Path]::GetFileNameWithoutExtension($file.Name) + ".original" + $file.Extension
  )
  if (-not (Test-Path $backup)) {
    Copy-Item $file.FullName $backup
  }

  $outPath = $file.FullName
  $ext = $file.Extension.ToLowerInvariant()
  if ($ext -eq ".png") {
    $outPath = [System.IO.Path]::ChangeExtension($file.FullName, ".jpg")
  }

  Save-Jpeg $bmp $outPath
  $bmp.Dispose()

  if ($ext -eq ".png" -and $outPath -ne $file.FullName) {
    Remove-Item $file.FullName -Force
    Write-Host "  -> $($file.Name) converted to $([IO.Path]::GetFileName($outPath))"
  }

  $sizeKb = [math]::Round((Get-Item $outPath).Length / 1KB)
  Write-Host "OK $sizeKb KB  $([IO.Path]::GetFileName($outPath))"
}

$targets = Get-ChildItem -Path $imagesRoot -Recurse -File |
  Where-Object {
    $_.Extension -match "^\.(jpe?g|png)$" -and
    $_.Name -notmatch "\.original\." -and
    $_.DirectoryName -notmatch "placeholders"
  }

Write-Host "Compressing $($targets.Count) images in $imagesRoot ..."
foreach ($file in $targets) {
  Compress-File $file
}
Write-Host "Done."
