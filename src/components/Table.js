import React from 'react';

const Table = ({ data }) => {
  return (
    <table className="table table-bordered table-striped">
      <thead className="text-left">
        <tr>
          <th>เบอร์โทร</th>
          <th>แผนก</th>
          <th>ตึก</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.telnum}</td>
            <td>{item.department}</td>
            <td>{item.buildingaddress}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
