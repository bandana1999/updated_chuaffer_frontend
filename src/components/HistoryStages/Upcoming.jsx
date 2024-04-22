import React from "react";
import "../../CssStyle/Upcoming.css";

const Upcoming = ({ rideData }) => {
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
                    return (
                      <tr key={ride._id}>
                        {ride.status === 0 && (
                          <>
                            <td> {ride.pickUpLocation}</td>
                            <td> {ride.dropLocation}</td>
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
