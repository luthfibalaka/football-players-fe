"use client";
import Navbar from "../components/navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Link from "next/link";

export default function Page() {
  const [club, setClub] = useState("WestHam");
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchPlayers() {
      const apiURL =
        "https://footballplayersbe.pythonanywhere.com/search-by-club/";
      const params = {
        club: club,
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
  }, [club]);

  return (
    <div>
      <Navbar />
      <div className="my-2 columns-1">
        <h1 className="text-center text-4xl">Find Players By Clubs</h1>
      </div>
      <div className="flex items-center justify-center">
        <select
          onChange={(e) => {setClub(e.target.value)}}
          id="club"
          name="club"
          autoComplete="club-name"
          className="block m-5 w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-red-300 focus:ring-2 focus:ring-inset focus:ring-red-800 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value={"WestHam"}>West Ham</option>
          <option value={"OGCNice"}>OGC Nice</option>
          <option value={"ManUtd"}>Man Utd</option>
          <option value={"RBLeipzig"}>RB Leipzig</option>
          <option value={"Sassuolo"}>Sassuolo</option>
          <option value={"AngersSCO"}>Angers SCO</option>
          <option value={"Troyes"}>Troyes</option>
          <option value={"Bologna"}>Bologna</option>
          <option value={"B.Leverkusen"}>B. Leverkusen</option>
          <option value={"UDAlmería"}>UD Almería</option>
          <option value={"Espanyol"}>Espanyol</option>
          <option value={"HellasVerona"}>Hellas Verona</option>
          <option value={"RealBetis"}>Real Betis</option>
          <option value={"LOSCLille"}>LOSC Lille</option>
          <option value={"StadeBrestois"}>Stade Brestois</option>
          <option value={"Villarreal"}>Villarreal</option>
          <option value={"SpeziaCalcio"}>Spezia Calcio</option>
          <option value={"Girona"}>Girona</option>
          <option value={"RayoVallecano"}>Rayo Vallecano</option>
          <option value={"ACMilan"}>AC Milan</option>
          <option value={"SSCNapoli"}>SSC Napoli</option>
          <option value={"R.Strasbourg"}>R. Strasbourg</option>
          <option value={"Monaco"}>Monaco</option>
          <option value={"ParisSG"}>Paris SG</option>
          <option value={"Inter"}>Inter</option>
          <option value={"CádizCF"}>Cádiz CF</option>
          <option value={"BayernMunich"}>Bayern Munich</option>
          <option value={"RCDMallorca"}>RCD Mallorca</option>
          <option value={"OlympiqueLyon"}>Olympique Lyon</option>
          <option value={"Athletic"}>Athletic</option>
          <option value={"Valencia"}>Valencia</option>
          <option value={"Torino"}>Torino</option>
          <option value={"WerderBremen"}>Werder Bremen</option>
          <option value={"B.DortmundII"}>B. Dortmund II</option>
          <option value={"Arsenal"}>Arsenal</option>
          <option value={"CeltaVigoB"}>Celta Vigo B</option>
          <option value={"ACAjaccio"}>AC Ajaccio</option>
          <option value={"Marseille"}>Marseille</option>
          <option value={"Southampton"}>Southampton</option>
          <option value={"StadeReims"}>Stade Reims</option>
          <option value={"HerthaBSC"}>Hertha BSC</option>
          <option value={"CAOsasuna"}>CA Osasuna</option>
          <option value={"Wolves"}>Wolves</option>
          <option value={"Monza"}>Monza</option>
          <option value={"Lazio"}>Lazio</option>
          <option value={"Cremonese"}>Cremonese</option>
          <option value={"RealValladolid"}>Real Valladolid</option>
          <option value={"Getafe"}>Getafe</option>
          <option value={"Newcastle"}>Newcastle</option>
          <option value={"FCAugsburg"}>FC Augsburg</option>
        </select>
      </div>
      {Object.keys(data).length > 0 ? (
        <>
          <div className="mx-5 md:mx-auto mb-10 max-w-lg rounded overflow-hidden shadow-md shadow-red-800">
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
