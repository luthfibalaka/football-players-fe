"use client";
import Navbar from "@/app/components/navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "@/app/components/footer";

export default function Page({ params }) {
  const suffix = params.suffix;
  const [data, setData] = useState({});
  const [showDetail, setShowDetail] = useState(false);
  useEffect(() => {
    async function fetchPlayers() {
      const apiURL = "https://footballplayersbe.pythonanywhere.com/detail/" + suffix;
      try {
        const response = await axios.get(apiURL);
        console.log(response.data);
        return response.data;
      } catch (error) {
        return {};
      }
    }
    fetchPlayers().then((players) => {
      setData(players);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-red-800 py-3">
        <div className="my-2 columns-1">
          <h1 className="text-center text-white text-5xl mt-3">Player Details</h1>
        </div>

        {Object.keys(data).length > 0 ? (
          <div className="bg-white h-auto md:max-w-full rounded-lg shadow-lg p-5 m-5 md:mx-auto md:w-1/2">
            <div className="border-b-2 border-black pb-5 mb-5">
            <h1 className="text-xl">Short Bio</h1>
            <h2 className="text-md shadow rounded p-3 mb-2 hover:text-white hover:bg-red-800 duration-300">
              Name: {data.name}
            </h2>
            <h2 className="text-md shadow rounded p-3 mb-2 hover:text-white hover:bg-red-800 duration-300">
              Full Name: {data.full_name}
            </h2>
            <h2 className="text-md shadow rounded p-3 mb-2 hover:text-white hover:bg-red-800 duration-300">
              Place of Birth:{" "}
              <a
                target="_blank"
                href={"https://dbpedia.org/page/" + data.place_of_birth}
                className="text-blue-800 underline"
              >
                {data.place_of_birth}↗
              </a>
            </h2>
            <h2 className="text-md shadow rounded p-3 mb-2 hover:text-white hover:bg-red-800 duration-300">
              Nationality:{" "}
              <a
                target="_blank"
                href={"https://dbpedia.org/page/" + data.nationality}
                className="text-blue-800 underline"
              >
                {data.nationality}↗
              </a>
            </h2>
            <h2 className="text-md shadow rounded p-3 mb-2 hover:text-white hover:bg-red-800 duration-300">
              Age: {data.age} years old
            </h2>
            <h2 className="text-md shadow rounded p-3 mb-2 hover:text-white hover:bg-red-800 duration-300">
              Height: {data.height} m
            </h2>
            <h2 className="text-md shadow rounded p-3 mb-2 hover:text-white hover:bg-red-800 duration-300">
              Language:{" "}
              <a
                target="_blank"
                href={"" + data.language_iri}
                className="text-blue-800 underline"
              >
                {data.languaged_used}↗
              </a>
            </h2>
            </div>
            <h1 className="text-xl">Professional Careers</h1>
            <h2 className="text-md shadow rounded p-3 mb-2 hover:text-white hover:bg-red-800 duration-300">
              Current Price: {data.price} million (Max: {data.max_price} million)
            </h2>
            <h2 className="text-md shadow rounded p-3 mb-2 hover:text-white hover:bg-red-800 duration-300">
              Current Club: {data.club}
            </h2>
            <h2 className="text-md shadow rounded p-3 mb-2 hover:text-white hover:bg-red-800 duration-300">
              Joined Club Date: {data.joined_club}
            </h2>
            <h2 className="text-md shadow rounded p-3 mb-2 hover:text-white hover:bg-red-800 duration-300">
              Contract Expiration Date: {data.contract_expires}
            </h2>
            <h2 className="text-md shadow rounded p-3 mb-2 hover:text-white hover:bg-red-800 duration-300">
              Shirt Num: {data.shirt_num}
            </h2>
            <h2 className="text-md shadow rounded p-3 mb-2 hover:text-white hover:bg-red-800 duration-300">
              Position: {data.position}
            </h2>
            <h2 className="text-md shadow rounded p-3 mb-2 hover:text-white hover:bg-red-800 duration-300">
              League: {data.league}
            </h2>
            <h2 onClick={() => {setShowDetail(!showDetail)}} className="cursor-pointer text-md shadow rounded p-3 mb-2 hover:text-white hover:bg-red-800 duration-300">
              <span>{showDetail ? data.league_description : "Click to get the description of " + data.league}</span>
            </h2>
          </div>
        ) : (
          <div className="mx-auto max-w-lg rounded overflow-hidden shadow-md shadow-red-800 animate-pulse">
            <p>Loading...</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
