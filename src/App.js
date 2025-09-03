import React, { useState } from "react";
import "./App.css";
import { MdPrint } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import logo from "./Images/logo.png";
import admin from "./Images/admin.png";
import gate from "./Images/gate.PNG";
import sign from "./Images/sign.jpg";
import barcode from "./Images/barcode.png";

import moment from "moment";

function App() {
  const [show, setShow] = useState(false);

  const [image, setImage] = useState();

  const [courseName, setCourseName] = useState("");

  const [registrationNumber, setRegistrationNumber] = useState("");

  const [department, setDepartment] = useState("");

  const [hostelName, setHostelName] = useState("");

  const [hostelNumber, setHostelNumber] = useState("");

  const [dist, setDist] = useState("");
  const [address, setAddress] = useState("");

  const [fName, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [eContact, setEContact] = useState("");
  const [blood, setBlood] = useState("");


  const [pin, setPin] = useState("");
  const [hNo, setHNo] = useState("");

  const [name, setName] = useState("");

  const [dateValue, setDateValue] = useState(moment());
  const [datesValue, setDatesValue] = useState(moment());
  const [datesbValue, setDatesbValue] = useState(moment());

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleDateUpdate = (e) => {
    const dateValue = e.target.value;
    setDateValue(moment(dateValue));
  };

  const handleDatesUpdate = (e) => {
    const datesValue = e.target.value;
    setDatesValue(moment(datesValue));
  };

  const handleDatesbUpdate = (e) => {
    const datesbValue = e.target.value;
    setDatesbValue(moment(datesbValue));
  };

  return (
    <>
      {show ? (
        <div className="popUp">
          <div className="frame dl" style={{ border: "1px solid #000" }}>
            <div className="university-title">
              <div className="logo">
                {" "}
                {<img src={logo} alt="" height="90%" />}
              </div>
              <div className="university-name" style={{ color: "#000" }}>
                <p
                  style={{
                    fontWeight: "1000",
                    color: "#000",
                    fontSize: "22px",
                  }}
                >
                  MAHARSHI DAYANAND UNIVERSITY
                </p>
                <p
                  style={{
                    marginTop: "-22px",
                    lineHeight: "1.2",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  Rohtak-124001, Haryana (INDIA)
                  <br />
                  NAAC Accredited A<sup>+</sup> (State University)
                </p>
              </div>
            </div>

            <div className="#076fdb blue-box">
              Student Identity-cum-Library Card
            </div>

            <div
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.41)), url(${gate})`,
                 backgroundSize: "100%",
                backgroundPosition: "0px -40px",
                backgroundRepeat:"no-repeat",
                width: "105%",
                margin: "-10px 0px 0px -10px",
                height: "300px",
              }}
            >
              <div
                className="content"
                style={{ margin: "11px", paddingTop:"10px", height: "58%" }}
              >
                <div
                  className="content"
                  style={{ height: "105%",marginTop:"10px", width: "30%" }}
                >
                  <img
                    src={!image ? admin : URL.createObjectURL(image)}
                    alt="user"
                    height="100%"
                    width="90%"
                    style={{ border: "4px solid green" }}
                  />
                </div>
                <div
                  style={{
                    color: "#000",
                    lineHeight: "1.2",
                    fontWeight: "700",
                    paddingLeft: "10px",
                    height: "100%",
                    width: "70%",
                  }}
                >
                  <div
                    style={{
                      color: "#076fdb",
                      fontSize: "20px",
                      fontWeight: "20000",
                      marginBottom: "4px",
                      textTransform: "capitalize",
                    }}
                  >
                    {name ? name : "NAME"}
                  </div>
                  <div style={{ textTransform: "capitalize" }}>
                    {" "}
                    {courseName ? courseName : "Course Name"}
                  </div>
                  <div> {department ? department : "Department Name"}</div>
                  <div>
                    {" "}
                    {dateValue.format("YYYY")}-{datesValue.format("YYYY")}
                  </div>
                  <div
                    style={{
                      color: "green",
                      margin: "2px 0px",
                      textTransform: "uppercase",
                    }}
                  >
                    {" "}
                    {hostelName ? hostelName : "Hostel"} (
                    {hostelNumber ? hostelNumber : "Number"})
                  </div>
                  <div
                    style={{
                      padding: "10px 0px",
                      margin: "5px 0px",
                      color: "#076fdb",
                      width: "96%",
                      border: "2px dotted #076fdb",
                      borderLeft: "none",
                      borderRight: "none",
                    }}
                  >
                    {" "}
                    Registration No :{" "}
                    <span style={{ color: "#000" }}>
                      {registrationNumber ? registrationNumber : "check it"}
                    </span>
                  </div>
                  <div style={{ color: "#076fdb" }}>
                    {" "}
                    D. O. B. :
                    <span style={{ color: "#000" }}>
                      {" "}
                      {datesbValue.format("DD-MM-YYYY")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <br />

          <div
            className="frame"
            style={{ border:"1px solid #000",
              padding: "10px 20px",
              overflow: "hidden",
                 backgroundImage: `linear-gradient(rgba(253, 249, 249, 0.8), rgba(255, 255, 255, 0.89)), url(${logo})`,
                backgroundSize: "45%",
                backgroundPosition: "130px 20px",
                backgroundRepeat:"no-repeat",
            }}>

          <table cellPadding="0" cellSpacing="0" style={{ fontWeight:"800", width: "85%", background:"none" }}>
  <tbody>
    <tr>
      <td style={{ color: "#076fdb" }}>Father's Name</td>
      <td style={{ color: "black" }}>{fName ? fName : "Father Name"}</td>
    </tr>
    <tr>
      <td style={{ color: "#076fdb" }}>Email Address</td>
      <td style={{ color: "black" }}>{email ? email : "Email Id"}</td>
    </tr>
    <tr>
      <td style={{ color: "#076fdb" }}>contact Number</td>
      <td style={{ color: "black" }}>{contact ? contact : "Mobile No."}</td>
    </tr>
    <tr>
      <td style={{ color: "#076fdb" }}>Emergency Contact Number</td>
      <td style={{ color: "black" }}>{eContact ? eContact : "Contact No."}</td>
    </tr>
    <tr>
      <td style={{ color: "#076fdb" }}>Blood Group</td>
      <td style={{ color: "black" }}>({blood ? blood : "Group"})</td>
    </tr>
  </tbody>
</table>

<div style={{height:"40px", color:"#076fdb", fontWeight:"1000", display:"flex", justifyContent:"center", alignItems:"center", paddingLeft:"270px", borderBottom:"2px dotted #076fdb"}}> 
 <img src={sign} alt="" style={{margin:"0px -30px 50px 40px"}} height="50px" />
<label style={{margin:"10px 0px 0px -50px"}}>DSW</label>
</div>

<div style={{lineHeight:"1.2"}}>
  <b style={{color:"#076fdb"}}>Residential Address</b> <br />
  <b   style={{ textTransform: "capitalize" }}>H.No.  {hNo ? hNo : "H.No"} {address ? address : "Village"} {dist ? dist : "District"} Haryana  {pin ? pin : "Pin Code"}</b>
</div>
            <div style={{ display:"flex", justifyContent:"center", alignItems:"center"}}> 
              <div style={{ marginTop:"30px",  display:"flex", justifyContent:"center", alignItems:"center", width:"80%", background:"#fff"}}>
                <img src={barcode} alt="" height="45px" width="60%" />
              </div>
               </div>
            <div style={{border:"1px solid red", height:"50px", paddingBottom:"4px", fontSize:"15px", marginTop:"-18px", background:"#701224",marginLeft:"-20px", width:"110%", fontWeight:"600", color:"#fff", display:'flex', justifyContent:"center", alignItems:"flex-end"}}>
              &#9654;  In the event of loss of id card, inform the HoD immediately.
            </div>
            </div>

          <br />

          <div>
            <button className="close" onClick={() => setShow(false)}>
              Edit <CiEdit />
            </button>
            <button className="close" onClick={() => window.print(false)}>
              Print <MdPrint />
            </button>
          </div>
        </div>
      ) : null}

      {/* inputs start */}

      <center>
        <br />
        <h1>
          <img src={logo} alt="logo" height="50px" />
          Create your Hostel Id-card (MDU){" "}
        </h1>
      </center>

      <div className="mainBox">
        <input type="file" accept="image/*" onChange={handleImageChange} />

        <input
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label> Session From</label>
        <input type="month" onChange={(e) => handleDateUpdate(e)} />
        <label>Session To</label>
        <input type="month" onChange={(e) => handleDatesUpdate(e)} />

        <input
          type="text"
          placeholder="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Department Name"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />

        <input type="date" onChange={(e) => handleDatesbUpdate(e)} />

        <input
          type="text"
          placeholder="Hostel Name"
          value={hostelName}
          onChange={(e) => setHostelName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Hostel Number (BH-
          5)"
          value={hostelNumber}
          onChange={(e) => setHostelNumber(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Registration number"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Pin Code"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="District"
          value={dist}
          onChange={(e) => setDist(e.target.value)}
          required
        />

   <input
          type="text"
          placeholder="Address (VPO-xyz)"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="House Number"
          value={hNo}
          onChange={(e) => setHNo(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Contact Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Emergency Contact"
          value={eContact}
          onChange={(e) => setEContact(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Blood Group"
          value={blood}
          onChange={(e) => setBlood(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Father Name"
          value={fName}
          onChange={(e) => setFName(e.target.value)}
          required
        />

        <button type="submit" onClick={() => setShow(true)}>
          {" "}
          Submit{" "}
        </button>
      </div>
    </>
  );
}

export default App;
