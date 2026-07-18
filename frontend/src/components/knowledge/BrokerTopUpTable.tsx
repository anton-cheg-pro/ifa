import { brokerTopUpMethods } from "../../content/knowledgeArticleExtras";
import { consultation } from "../../content/uk";
import { useConsultation } from "../../context/ConsultationContext";
import { ConsultationCta } from "../consultation/ConsultationCta";
import "./BrokerTopUpTable.css";

export function BrokerTopUpTable() {
  const { openConsultation } = useConsultation();

  return (
    <div className="broker-top-up">
      <div className="broker-top-up__table-wrap">
        <table className="broker-top-up__table">
          <thead>
            <tr>
              <th scope="col">Назва</th>
              <th scope="col">Комісія</th>
              <th scope="col">Коментар</th>
              <th scope="col">
                <span className="visually-hidden">Дія</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {brokerTopUpMethods.map((method) => (
              <tr key={method.id}>
                <th scope="row">{method.name}</th>
                <td>{method.fee}</td>
                <td>{method.comment}</td>
                <td className="broker-top-up__action">
                  <button
                    type="button"
                    className="broker-top-up__instruction-link"
                    onClick={() =>
                      openConsultation({ source: `broker-instruction:${method.id}` })
                    }
                  >
                    Отримати інструкцію
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="broker-top-up__cta">
        <ConsultationCta source="broker-top-up-ukraine">{consultation.bookCta}</ConsultationCta>
      </div>
    </div>
  );
}
