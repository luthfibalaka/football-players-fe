"use client";
import Navbar from "../components/navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Link from "next/link";
import Image from "next/image";

const specificPosition = {
  "Attack": ["", "Centre-Forward", "LeftWinger", "RightWinger", "SecondStriker"],
  "Defender": ["", "Centre-Back", "Left-Back", "Right-Back"],
  "midfield": ["", "RightMidfield", "LeftMidfield", "DefensiveMidfield", "AttackingMidfield", "CentralMidfield"],
  "Goalkeeper": [""]
}

export default function Page() {
  const [position, setPosition] = useState("Attack");
  const [data, setData] = useState({});
  const [filteredData, setFilteredData] = useState({});
  useEffect(() => {
    async function fetchPlayers() {
      const apiURL =
        "https://footballplayersbe.pythonanywhere.com/search-by-position/";
      const params = {
        position: position,
      };
      try {
        const response = await axios.get(apiURL, { params });
        return response.data;
      } catch (error) {
        return {};
      }
    }
    fetchPlayers().then((players) => {
      setData(players);
      const filteredProperties = Object.keys(players).filter((key) => {
        if (players[key][1].startsWith(position)) {
          return key;
        }
      })
      let playersWithCorrectPosition = {};
      filteredProperties.forEach(key => {
        playersWithCorrectPosition[key] = players[key];
      });
      setFilteredData(playersWithCorrectPosition);
    });
  }, [position]);

  return (
    <div>
      <Navbar />
      <div className="my-2 columns-1">
        <h1 className="text-center text-4xl">Find Players By Positions</h1>
      </div>
      <div className="flex items-center justify-center">
        <select
          onChange={(e) => {
            setPosition(e.target.value);
          }}
          id="position"
          name="position"
          autoComplete="position-name"
          className="p-3 rounded-md shadow shadow-red-800 sm:max-w-xs"
        >
          <option value={"Attack"}>Attack</option>
          <option value={"Defender"}>Defender</option>
          <option value={"midfield"}>Mid Field</option>
          <option value={"Goalkeeper"}>Goalkeeper</option>
        </select>
        <select
          onChange={(e) => {
            const specificPos = e.target.value;
            console.log(specificPos === "")
            const filteredProperties = Object.keys(data).filter((key) => {
              if (specificPos !== "" && data[key][1].endsWith(specificPos)) {
                return key;
              }
              if (specificPos === "" && data[key][1].startsWith(position)) {
                console.log("MASUK")
                return key;
              }
            })
            let dataWithCorrectPosition = {};
            filteredProperties.forEach(key => {
              dataWithCorrectPosition[key] = data[key];
            });
            setFilteredData(dataWithCorrectPosition);
          }}
          id="position2"
          name="position2"
          autoComplete="position-name2"
          className="p-3 m-5 rounded-md shadow shadow-red-800 sm:max-w-xs"
        >
          {specificPosition[position].map((specificPos, i) => {
            return (
              <option key={i} value={specificPos}>{specificPos}</option>
            )
          })}
        </select>
      </div>
      {Object.keys(filteredData).length > 0 ? (
        <>
          <div className="mx-5 md:mx-auto mb-10 max-w-lg rounded overflow-hidden shadow-md shadow-red-800">
            <div className="px-6 py-4 max-h-96 overflow-y-scroll">
            <Image
                    src={"/position.svg"}
                    className="mx-auto my-3"
                    alt={"Name"}
                    width={100}
                    height={100} />
              <div className="text-lg mb-2 text-center">
                Select any of these players to know more!
              </div>
              {Object.keys(filteredData).map((datum, i) => {
                return (
                  <div
                    key={datum}
                    className="mx-auto mb-3 max-w-sm rounded overflow-hidden shadow"
                  >
                    <Link href={"/details/" + datum.split("#")[1]}>
                      <div className="px-6 shadow-xl py-4 hover:bg-red-800 hover:text-white duration-300 cursor-pointer">
                        <span>
                          {i + 1}. {filteredData[datum][0]} → {filteredData[datum][1]}
                        </span>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <div className="mx-auto max-w-lg rounded overflow-hidden shadow-md shadow-red-800 animate-pulse">
          <p>Loading...</p>
        </div>
      )}
      <Footer />
    </div>
  );
}
