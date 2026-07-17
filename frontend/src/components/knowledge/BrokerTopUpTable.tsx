import { Link } from "react-router-dom";
import { brokerTopUpMethods } from "../../content/knowledgeArticleExtras";
import { consultation } from "../../content/uk";
import { Button } from "../ui/Button";
import "./BrokerTopUpTable.css";

export function BrokerTopUpTable() {
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
                  <Link
                    to="/uk/contact#consultation-form"
                    className="broker-top-up__instruction-link"
                  >
                    Отримати інструкцію
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="broker-top-up__cta">
        <Button to="/uk/contact#consultation-form" variant="primary">
          {consultation.bookCta}
        </Button>
      </div>
    </div>
  );
}
