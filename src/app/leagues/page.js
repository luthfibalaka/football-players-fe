"use client";
import Navbar from "../components/navbar";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Link from "next/link";

export default function Page() {
  const nonChosenClass =
    "mb-3 me-3 rounded-full border border-1 border-red-600 px-5 py-2.5 text-medium hover:bg-red-600 hover:text-white transition duration-300";
  const chosenClass =
    "mb-3 me-3 rounded-full px-5 py-2.5 text-medium bg-red-600 text-white transition duration-300";

  const [league, setLeague] = useState("EPL");
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchPlayers() {
      const apiURL =
        "https://footballplayersbe.pythonanywhere.com/search-by-league/";
      const params = {
        league: league,
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
    });
  }, [league]);

  return (
    <div>
      <Navbar />
      <div className="my-2 columns-1">
        <h1 className="text-center text-4xl">Find Players By Leagues</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center  md:py-8 mt-8 lg:mt-0">
        <button onClick={() => setLeague("EPL")} type="button" className={league == "EPL" ? chosenClass : nonChosenClass}>
          EPL
        </button>
        <button onClick={() => setLeague("LaLiga")} type="button" className={league == "LaLiga" ? chosenClass : nonChosenClass}>
          La Liga
        </button>
        <button onClick={() => setLeague("Bundesliga")} type="button" className={league == "Bundesliga" ? chosenClass : nonChosenClass}>
          Bundesliga
        </button>
        <button onClick={() => setLeague("SerieA")} type="button" className={league == "SerieA" ? chosenClass : nonChosenClass}>
          Serie A
        </button>
        <button onClick={() => setLeague("Ligue1")} type="button" className={league == "Ligue1" ? chosenClass : nonChosenClass}>
          Ligue 1
        </button>
        <button onClick={() => setLeague("Other")} type="button" className={league == "Other" ? chosenClass : nonChosenClass}>
          Other
        </button>
      </div>

      {Object.keys(data).length > 0 ? (
        <>
          <div className="mx-auto mb-10 max-w-lg rounded overflow-hidden shadow-md shadow-red-800">
            <Image
              className="mx-auto mt-5"
              src={"/" + league + ".png"}
              alt={"Logo of the league"}
              width={200}
              height={200}
            />
            <div className="px-6 py-4 max-h-96 overflow-y-scroll">
              <div className="text-lg mb-2 text-center">
                Select any of these players to know more!
              </div>
              {Object.keys(data).map((datum, i) => {
                return (
                  <div
                    key={datum}
                    className="mx-auto mb-3 max-w-sm rounded overflow-hidden shadow"
                  >
                    <Link href={"/details/" + datum.split("#")[1]}>
                    <div className="px-6 py-4 hover:bg-red-800 hover:text-white duration-300 cursor-pointer">
                        <span>{i + 1}. {data[datum]}</span>
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
