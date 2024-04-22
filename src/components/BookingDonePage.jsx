import React from 'react'
import { useEffect ,useState } from 'react';
import axios from 'axios';

const BookingDonePage = () => {

    const URL = " https://chauffer-staging-tse4a.ondigitalocean.app/v1/ride/bookRide";
    const [rideBookingData, setrideBookingData] = useState({
         "pickUpLocation": "",
          "dropLocation": "",
          "date": "",
          "time": "",
          "userId": "",
          "vehicleId": "",
          "bookingFor": "",
          "flightNumber": "",
          "notesForChauffer": "",
          "referenceNumberOrCostCenter": "",
          "firstName": "",
          "lastName": "",
          "email": "@gmail.com",
          "phoneNumber": null,
          "status": 0,
          "cardName": " ",
          "cardNumber": null,
          "expiryDate": "02/26",
          "cvv": null,
          "amount": null
  });
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post(URL , rideBookingData);
          setrideBookingData(response.data.items);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <div>
      <p> Booking Done</p>
    </div>
  )
}

export default BookingDonePage
