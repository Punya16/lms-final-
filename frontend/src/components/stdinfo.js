import React from "react";
import { Link } from "react-router-dom";


import { useState } from "react";
import Axios from "axios";

function Stdinfo() {
  const [fdata, setFdata] = useState({
    Name: "",
    Usn: "",
    Email: "",
    Phone: "",
   
  });
  const [msg, setMsg] = useState();

  //*************change handler */
  const ChangeHandler = (e) => {
    let name1 = e.target.name;
    let val = e.target.value;
    setFdata({ ...fdata, [name1]: val });
  };

  //*************submit handler */
  const SubmitHandler = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/ins", { fdata }).then((res) => {
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
    
    
   
    <div  style={{backgroundColor :"antiquewhite"}}>
       <ul>
        <li>
          <Link to={{ pathname: "/" }}>StudentInfo</Link>
        </li>

        <li>
          <Link to={{ pathname: "/dashbord" }}>Dashbord</Link>
        </li>
        
      </ul>
      <center>


      
        

      
      <h3>Student Info</h3>
        <form >
        <label> Name : </label>
        <input
          type="text"
          name="Name"
          value={fdata.Name}
          onChange={ChangeHandler}
        />
        <br></br>

         <label>USN  : </label>
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

        <br></br>

      <button type="submit"  onClick={SubmitHandler}>Submit</button> 
      </form>
      
      {/* <a href="https://results.kite.kerala.gov.in/analysis/analysis/schoolwisereport.php?opt=001">login</a> */}
      </center>
    </div>
  );
}

export default Stdinfo;
