import React from "react";
import "./VaccineTable.css";

function VaccineTable({ vaccines }) {
  return (
    <div className="HC__vaccinetable">
      {vaccines.map(({ candidates, phase }) => (
        <tr>
          <td>
            <strong>{phase}</strong>
          </td>
          <td>
            <strong>{candidates}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default VaccineTable;
