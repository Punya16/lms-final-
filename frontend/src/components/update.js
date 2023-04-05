import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";


function Update() {
  const [fdata, setFdata] = useState({
    Name: "",
    Usn: "",
    Email: "",
    Phone: "",
  });
  const [msg, setMsg] = useState();
  const params = useParams(); //get id from url
  let id = params.id;

  //*****fetch data  */
  useEffect(() => {
    Axios.post("http://localhost:4000/get", { id: id }).then((res) => {
      let data = res.data;
      console.log(data);
      setFdata(...data);
    });
  }, [id]);

  //*************change handler */
  const ChangeHandler = (e) => {
    let name1 = e.target.name;
    let val = e.target.value;
    setFdata({ ...fdata, [name1]: val });
  };

  //*************submit handler */
  const UpdateHandler = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/update", fdata).then((res) => {
      let ack = res.data;
      if (ack === "success") {
        setMsg("Data inserted successful");
        console.log(msg);
        alert("data inserted successfully");
      } else {
        setMsg("Data not inserted ");
        console.log(msg);
        alert("data not inserted");
      }
    });
  };
  return (
    <>
      <ul>
      <li>
          <Link to={{ pathname: "/" }}>StudentInfo</Link>
        </li>

        <li>
          <Link to={{ pathname: "/dashbord" }}>Dashbord</Link>
        </li>
    
  </ul>

      <hr></hr>
      <div>Enter  Detail</div>

      <form onSubmit={UpdateHandler}>
      <label> Name : </label>
        <input
          type="text"
          name="Name"
          value={fdata.Name}
          onChange={ChangeHandler}
        />
        <br></br>

         <label>USN : </label>
        <input
          type="text"
          name="Usn"
          value={fdata.Usn}
          onChange={ChangeHandler}
        />
        <br></br> 
        <label>Email : </label>
        <input
          type="text"
          name="Email"
          value={fdata.Email}
          onChange={ChangeHandler}
        />
        <br></br>
        <label>Phone : </label>
        <input
          type="number"
          name="Phone"
          value={fdata.Phone}
          onChange={ChangeHandler}
        />
        <br></br> 

        <button onClick={UpdateHandler} type="submit">Update</button>
      </form>
    </>
  );
}

export default Update;
