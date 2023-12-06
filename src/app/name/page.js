"use client";
import Navbar from "../components/navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Link from "next/link";

export default function Page() {
  const [name, setName] = useState("");
  const [data, setData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setName(e.target.query.value);
  }
  useEffect(() => {
    async function fetchPlayers() {
      const apiURL = "https://footballplayersbe.pythonanywhere.com/search-by-name/";
      const params = {
        name: name,
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
  }, [name]);

  return (
    <div>
      <Navbar />
      <div className="my-2 columns-1">
        <h1 className="text-center text-4xl">Find Players By Name</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="mb-4">
          <form onSubmit={handleSubmit}>
          <input
            required
            name="query"
            className="shadow shadow-red-800 rounded py-2 pl-3 my-3"
            type="text"
            placeholder="Enter player's name"
          />
          <button type="submit" className="ml-3 shadow shadow-red-800 p-2 rounded hover:bg-red-800 hover:text-white duration-300">Search</button>
          </form>
        </div>
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
                        <span>
                          {i + 1}. {data[datum]}
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
