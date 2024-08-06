// src/components/Table.js
import React from 'react';

function Table({ data, onEdit, onDelete }) {
  return (
    <table className="table table-striped mt-3">
      <thead>
        <tr>
          <th>เบอร์โทร</th>
          <th>department</th>
          <th>buildingaddress</th>
          <th>action</th>
    
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.telnum}</td>
            <td>{item.department}</td>
            <td>{item.buildingaddress}</td>
            <td>
              <button className="btn btn-warning btn-sm mr-2" onClick={() => onEdit(item)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => onDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
