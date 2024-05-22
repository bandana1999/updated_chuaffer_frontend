import React from "react";
import Pickup_green from "../../cab_images/Pickup_green.png";
import Drop_red from "../../cab_images/Drop_red.png";
import Pickup_date from "../../cab_images/pickup_date.png";
import upcoming_date from "../../cab_images/upcoming_date.png";
import buss_car from "../../cab_images/buss_car.png";
import "../../CssStyle/Upcoming.css";

const Upcoming = ({ rideData }) => {
  return (
    <div className="ride-history-container">
      <div className="container-fluid">
        <div className="row">
          {rideData &&
            rideData.map((ride, index) => {
              return (
                ride.status === 0 &&
                <div className="col-md-4">
                  <div className="history-card">
                    <div className="card-row">
                      <img src={Pickup_green} alt="" />
                      <p>{ride.pickUpLocation.substring(0,45)+" ..."}</p>
                    </div>

                    <div className="card-row">
                      <img src={Drop_red} alt="" />
                      <p>{ride.dropLocation.substring(0,45)+" ..."}</p>
                    </div>

                     <hr style={{border: "1px solid black"}}/>
                    <div className="date-row">
                      <div className="card-row">
                        <img src={Pickup_date} alt="" />
                        <p>
                          {ride.date + " "}
                          {ride.time}
                        </p>
                      </div>

                      <div className="card-row">
                        <img src={upcoming_date} alt="" />
                        <p>Upcoming</p>
                      </div>
                    </div>

                    <div className="date-row">
                      <div className="card-row"> 
                      <img src={buss_car} alt="" />
                      <p>{ride.brand}</p>
                      </div>
                     
                      <div>
                      <p className="ride-amount">{ride.amount}</p>
                      </div>

                      
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
