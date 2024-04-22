import React, { useState, useEffect } from 'react';

const AddressFromLatLng = ({ latitude, longitude }) => {
  console.log("latitudefromAddressFromLatLng" , latitude )
  const [address, setAddress] = useState('');
  const apiKey = "AIzaSyCZ0UycRv9Fy9PMDBY-uoU_SkXZGnmjP18"
  // const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
  const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?latlng=${latitude},${longitude}&key=${apiKey}`;
  // const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json`;


  useEffect(() => {
    // Function to fetch address from latitude and longitude
    const getAddressFromLatLng = async () => {
      if (latitude && longitude) {
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          setAddress(data.display_name);
          console.log("data.display_name",data.display_name )
        } catch (error) {
          console.error("Error fetching address:", error);
        }
      }
    };

    getAddressFromLatLng();
  }, [latitude, longitude]);

  return (
    <div>
      <p>{address}</p>
    </div>
  );
};

export default AddressFromLatLng;