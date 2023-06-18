import React, { useState } from "react";
import { name } from "tar/lib/types";

const CRUD = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, inputs]);
    console.log("inputs", inputs);
    setInputs(
        {
            name: "",
            email: ""
        }
    )
  };

  const handleDelete = (otherIndex) => {

    const filterData = tableData.filter((item, index)=>otherIndex!==index)
    setTableData(filterData)
  }


  const handleEdit = (index) => {

    const dataEdited = tableData[index]
    setInputs(
{
    name: dataEdited.name,
    email: dataEdited.email
}
    )

  }

  return (
    <>
      <h1>CRUD App</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            value={inputs.name} 
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                    <button onClick={()=>handleEdit(index)}>edit</button>
                    <button onClick={()=>handleDelete(index)}>delete</button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CRUD;
