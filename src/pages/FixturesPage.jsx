import React, { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import FixturesList from "../components/FixturesList";

const FixturesPage = () => {
  const [fixtures, setFixtues] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY;
  const getLiveFixtures = () => {
    setLoading(true);
    fetch("http://37.59.197.183:5000/api/fixtures", {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        "X-API-KEY": apiKey.toString(),
      },
    })
      .then((res) => res.json())
      .then((fixtures) => {
        setLoading(false);
        setFixtues(fixtures);
      })
      .catch((error) => {
        setLoading(false);
        alert(error.message);
      });
  };

  useEffect(() => {
    getLiveFixtures();
  }, []);

  const loadingStyle =
    "w-full h-screen flex flex-col items-center justify-center";
  const loaddedStyle = "w-full h-screen flex flex-col items-center p-5";

  return (
    <div className={isLoading ? loadingStyle : loaddedStyle}>
      {isLoading ? <LoadingSpinner /> : <FixturesList fixtures={fixtures} />}
    </div>
  );
};

export default FixturesPage;
