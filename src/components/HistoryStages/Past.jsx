import React from 'react'
import axios from "axios";
import AddressFromLatLng from "../AddressFromLatLong";
import { useState, useEffect } from "react";

const Past = ({rideData}) => {

        
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
                      {ride.status === 1 && (
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
  )
}

export default Past
