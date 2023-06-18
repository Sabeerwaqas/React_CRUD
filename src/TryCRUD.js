import React, { useState } from "react";

// Create start

const TryCRUD = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

    console.log(data);
  };

  // Create End

  // Read start

  const [readData, setReadData] = useState([]);

  const handleSubmit = (e) => {
     e.preventDefault();
    setReadData([...readData, data]);
    setData({
      name: "",
      email: ""
    });
  };

  // Read end

//   Delete start

const handleDelete = (otherIndex) => {

    const dataFiltered = readData.filter((Data, index) => otherIndex !== index);
    setReadData(dataFiltered);
    setEditButton(true)
    setUpdateData(index)
    
}



// Delete end

// Edit start

    const handleEdit = (index) => {

        const edited = readData[index];
        setData({
            name: edited.name,
            email: edited.email
        })
        setEditButton(true)


    }



// Edit end

// Update button start

const [editButton, setEditButton] = useState(false)

// Update button end


// update data start

const [updateData, setUpdateData] = useState("")

// update data end

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              value={data.name}
            />
          </div>

          <div>
            <label>Email</label>
            <input
              onChange={handleChange}
              type="text"
              name="email"
              value={data.email}
            />
          </div>
          <button type="submit">{editButton?"Update":"Add"}</button>
        </form>
      </div>

      <div>
        {readData.map((Data, index) => {
          return (
            <div>
              <p>{Data.name}</p>
              <p>{Data.email}</p>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleEdit(index)}>Edit</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TryCRUD;
