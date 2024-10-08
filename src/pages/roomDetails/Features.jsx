import React, { useState } from "react";
import "../roomDetails/features.css";
import { FiPhoneCall } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { useAuthGloabally } from "../../context/AuthContext";

const Features = ({ singleRoom }) => {

  return (
    <>
      <section className="singlePageContainer">
        <div className="roomdetails ">
          {/* <h3>Features</h3> */}
          <table className="features-table">
            <tbody>
              <tr>
                <td className="feature-label">Address:</td>
                <td>{singleRoom.address}</td>
              </tr>
              <tr>
                <td className="feature-label">Rent:</td>
                <td>{singleRoom.rent}</td>
              </tr>
              <tr>
                <td className="feature-label">Parking:</td>
                <td>{singleRoom.parking}</td>
              </tr>
              <tr>
                <td className="feature-label">Water:</td>
                <td>{singleRoom.water}</td>
              </tr>
              <tr>
                <td className="feature-label">Floor:</td>
                <td>{singleRoom.floor}</td>
              </tr>
              <tr>
                <td className="feature-label">Room Type:</td>
                <td>{singleRoom.roomType}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* showing phone call icon */}

        <div className="user_details">
          <h3>
            <FaUser /> Owner Details
          </h3>
          <div className="phoneCallCard">
            <div className="phoneDetail">
              <h4>Call Room Owner</h4>
              <a href={`tel:${singleRoom.phone}`} className="phoneDetails">
                <span className="callIcon">
                  <FiPhoneCall />
                </span>
                {singleRoom.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
