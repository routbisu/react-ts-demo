import React, { FC } from "react";
import Moment from "react-moment";
import "./SimpleTable.scss";
import { Transaction } from "../../types/transaction";

interface Props {
  data: Transaction[];
}

const SimpleTable: FC<Props> = ({ data }) => {
  if (data && data.length)
    return (
      <table className="simple-table">
        <thead>
          <tr>
            <th>Merchant ID</th>
            <th>Currency</th>
            <th>Amount</th>
            <th>Contact Name</th>
            <th>Contact Email</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((record, i) => (
            <tr key={i}>
              <td>{record.merchantId}</td>
              <td>{record.currency}</td>
              <td>{record.amount}</td>
              <td>{record.contactName}</td>
              <td>{record.contactEmail}</td>
              <td>
                <Moment format="DD-MMM-YYYY">{record.created}</Moment>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );

  return null;
};

export default SimpleTable;
