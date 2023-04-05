import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Dashboard() {
  const [fdata, setFData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000").then((res) => {
      console.log(res.data);
      setFData(res.data);
    });
  }, []);

  // ******************delete db data */
  const deleteHandler = (e) => {
    console.log(e);
    Axios.post("http://localhost:4000/delete", { id: e }).then((res) => {
      let ack = res.data;
      if (ack === "success") {
        alert("data deleted not succesful");
      } else {
        alert("data deleted succesful");
      }
    });
  };





  return (
    <><div><ul>
      <li>
        <Link to={{ pathname: "/" }}>StudentInfo</Link>
      </li>

      <li>
        <Link to={{ pathname: "/dashbord" }}>Dashbord</Link>
      </li>

    </ul></div>

      <center>


        <div style={{
          backgroundColor: "aqua",
          width: "table",
          float: "left",
          margin: "10px",
        }}
        >
          <table border="2"> <thead>
            <tr>
              <th>Name </th>
              <th>USN </th>
              <th>Email </th>
              <th>Phone</th>
              <th>delete/Update</th>
            </tr>
          </thead>

            <tbody>
              {fdata.map((sdata) => (
                <tr key={sdata._id}>
                  <td>{sdata.Name}</td>
                  <td>{sdata.Usn}</td>
                  <td>{sdata.Email}</td>
                  <td>{sdata.Phone}</td>
                  <td><button type="submit" onClick={() => deleteHandler(sdata._id)}>
                    delete
                  </button>

                    --
                    <Link to={{ pathname: `/update/${sdata._id}` }}>Update</Link>
                  </td>
                </tr>
              ))}


            </tbody>
          </table>
        </div>
      </center>
    </>
  );
}

export default Dashboard;
