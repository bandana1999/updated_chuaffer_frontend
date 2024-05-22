import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
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
  const [currentPage, setCurrentPage] = useState("upcoming");

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
    <div className="">
      <div className="history-bg-image w-100%">
        <Header />
        <div className="text-content customheader">
          <div className="text-div">
            <div className="text-heading-first">
              <h2> History</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="history-container">

        <header>
          <nav className="tab-bar-container">
            <ul className="tab-bar">
              {["upcoming", "past", "cancel"].map((tab) => (
                <li
                  key={tab}
                  className={`nav-item ${
                    currentPage === tab ? "selected-history-tab" : ""
                  }`}
                  onClick={(e) => handlePageChange(e, tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main>{renderPage()}</main>
      </div>
    </div>
  );
};

export default History;
