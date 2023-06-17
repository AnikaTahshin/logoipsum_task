import React from "react";
import "./Table.css";

const Table = () => {
  const object = [
    {
      date: "06-17 - 06-23",
      users: "1476",
      w0: "$209",
      w1: "$209",
      w2: "$209",
      w3: "$209",
      w4: "$209",
      w5: "$209",
      w6: "$209",
      w7: "$209",
      w8: "$209",
    },

    {
      date: "06-24 - 06-30",
      users: "1476",
      w0: "$209",
      w1: "$209",
      w2: "$209",
      w3: "$209",
      w4: "$209",
      w5: "$209",
      w6: "$209",
      w7: "$209",
    },
    {
      date: "06-24 - 06-30",
      users: "1476",
      w0: "$209",
      w1: "$209",
      w2: "$209",
      w3: "$209",
      w4: "$209",
      w5: "$209",
      w6: "$209",
    },
    {
      date: "06-24 - 06-30",
      users: "1476",
      w0: "$209",
      w1: "$209",
      w2: "$209",
      w3: "$209",
      w4: "$209",
      w5: "$209",
    },
    {
      date: "06-24 - 06-30",
      users: "1476",
      w0: "$209",
      w1: "$209",
      w2: "$209",
      w3: "$209",
      w4: "$209",
    },
    {
      date: "06-24 - 06-30",
      users: "1476",
      w0: "$209",
      w1: "$209",
      w2: "$209",
      w3: "$209",
    },
  ];

  return (
    <table className="table table-bordered">
      <thead className="table-head">
        <tr>
          <th>Date</th>
          <th>Users</th>
          <th>Week 0</th>
          <th>Week 1</th>
          <th>Week 2</th>
          <th>Week 3</th>
          <th>Week 4</th>
          <th>Week 5</th>
          <th>Week 6</th>
          <th>Week 7</th>
          <th>Week 8</th>
        </tr>
      </thead>
      <tbody>
        {object.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.users}</td>
            <td>{item.w0}</td>
            <td>{item.w1}</td>
            <td>{item.w2}</td>
            <td>{item.w3}</td>
            <td>{item.w4}</td>
            <td>{item.w5}</td>
            <td>{item.w6}</td>
            <td>{item.w7}</td>
            <td>{item.w8}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
