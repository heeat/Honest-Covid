import React from "react";
import "./VaccineTable.css";

function VaccineTable({ vaccines }) {
  return (
    <div className="HC__vaccinetable">
      <tr className="HC_first_tr">
        <th>Phase</th>
        <th>Researchers</th>
      </tr>
      {vaccines.map(({ candidates, phase }) => (
        <tr>
          <td>
            <strong>{phase}</strong>
          </td>
          <td></td>
          <td>
            <strong>{candidates}</strong>
          </td>
        </tr>
      ))}
      <p>Source : </p>
    </div>
  );
}

export default VaccineTable;
