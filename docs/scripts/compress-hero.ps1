# Compress hero image (Windows / PowerShell)

Original backup: `hero.original.jpg` (gitignored).

```powershell
$bak = "frontend/public/images/hero.original.jpg"
$out = "frontend/public/images/hero.jpg"
Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile($bak)
$maxW = 1920
$scale = [Math]::Min(1.0, $maxW / $img.Width)
$newW = [int]($img.Width * $scale)
$newH = [int]($img.Height * $scale)
$bmp = New-Object System.Drawing.Bitmap $newW, $newH
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($img, 0, 0, $newW, $newH)
$g.Dispose(); $img.Dispose()
$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$ep = New-Object System.Drawing.Imaging.EncoderParameters 1
$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), 82L
$bmp.Save($out, $codec, $ep)
$bmp.Dispose()
```

CI uses Node 20; for future automation consider `sharp` in GitHub Actions.
