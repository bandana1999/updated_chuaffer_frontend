import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Upcoming from "./HistoryStages/Upcoming";
import Past from "./HistoryStages/Past";
import Cancel from "./HistoryStages/Cancel";
import "../CssStyle/History.css";

const History = () => {
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

  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "upcoming":
        return <Upcoming rideData={rideData} />;
      case "past":
        return <Past rideData={rideData} />;
      case "cancel":
        return <Cancel rideData={rideData} />;
      default:
        return <Upcoming rideData={rideData} />;
    }
  };

  const handlePageChange = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  return (
    <div className="history-container">
      <header>
        <nav className="">
          <ul className="tab-bar">
            <li
              className="nav-item"
              onClick={(e) => handlePageChange(e, "upcoming")}
            >
              Upcoming
            </li>
            <li
              className="nav-item"
              onClick={(e) => handlePageChange(e, "past")}
            >
              Past
            </li>
            <li
              className="nav-item"
              onClick={(e) => handlePageChange(e, "cancel")}
            >
              Cancel
            </li>
          </ul>
        </nav>
      </header>
      <main>{renderPage()}</main>
    </div>
  );
};

export default History;
