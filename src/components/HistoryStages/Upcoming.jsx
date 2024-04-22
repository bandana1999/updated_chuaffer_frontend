import React from "react";
import axios from "axios";
import AddressFromLatLng from "../AddressFromLatLong";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../CssStyle/Upcoming.css";

const Upcoming = () => {
  const URL =
    "https://chauffer-staging-tse4a.ondigitalocean.app/v1/ride/allRide";
  const token = localStorage.getItem("token");
  const [rideData, setRideData] = useState(null);
  const navigate = useNavigate();

  const headers = {
    "Content-Type": "application/json",
    token: token,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const response = await axios.get(URL, {
            method: "GET",
            headers: headers,
          });
          console.error("response for ride", response);
          setRideData(response.data.items);
        } else {
          navigate("/login", { state: { from: "/history" } });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ride-history-conainer">
      <div className="container">
        <div className="row">
          <div className="col">
            <table>
              <thead>
                <tr>
                  <th>Pickup location</th>
                  <th>Drop location</th>
                  <th>Fare Amount</th>
                  <th>Date</th>
                  <th>Brand</th>
                </tr>
              </thead>
              <tbody>
                {rideData &&
                  rideData.map((ride) => {
                    const pickUpLocation = ride.pickUpLocation
                      ? ride.pickUpLocation
                      : "";
                    const dropLocation = ride.dropLocation
                      ? ride.dropLocation
                      : "";

                    const [latitude, longitude] = pickUpLocation
                      .split(",")
                      .map((coord) => parseFloat(coord.trim()));
                    const [dropLatitude, dropLongitude] = dropLocation
                      .split(",")
                      .map((coord) => parseFloat(coord.trim()));
                    return (
                      <tr key={ride._id}>
                        {ride.status === 0 && (
                          <>
                            <td>
                              <AddressFromLatLng
                                latitude={latitude}
                                longitude={longitude}
                              />
                            </td>
                            <td>
                              <AddressFromLatLng
                                latitude={dropLatitude}
                                longitude={dropLongitude}
                              />
                            </td>
                            <td>{ride.amount}</td>
                            <td>{ride.date}</td>
                            <td>{ride.brand}</td>
                          </>
                        )}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;

//<div className="ride-history-block">
// <p>Pickup location</p>
//<AddressFromLatLng
//     latitude={latitude}
//     longitude={longitude}
//   />
//   <p>Drop location</p>
//   <AddressFromLatLng
//     latitude={dropLatitude}
//     longitude={dropLongitude}
//   />

//   <p>Amount - {ride.amount}</p>
//   <p>Date - {ride.date}</p>
//   <p>Brand - {ride.brand}</p>
// </div>
