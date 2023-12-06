"use client";

import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="bg-red-800 p-4 min-h-screen">
        <div
          aria-hidden="true"
          className="absolute inset-0 h-max w-full m-auto grid grid-cols-2"
        ></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="md:w-2/3 lg:w-1/2 mt-12 text-white">
            <h2 className="my-8 text-4xl md:text-5xl">
              Welcome to <span className="font-bold">Football Players Hub</span>!
            </h2>
            <p className="text-xl">
              We have built helpful features for you to explore:
            </p>
          </div>
          <div className="mt-16 grid divide-x divide-y overflow-hidden  rounded-3xl sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4 mb-5">
            <Link href={"/name"} className="group relative bg-gray-50 transition hover:z-[1] hover:shadow-2xl hover:scale-105 duration-300">
              <div className="relative space-y-8 py-12 p-8">
                <Image
                  src={"/name.svg"}
                  alt={"Name"}
                  width={200}
                  height={200}
                />
                <div className="space-y-2 text-center">
                  <h5 className="text-xl font-semibold">
                    Search Players
                  </h5>
                  <p>
                    Search players by name
                  </p>
                </div>
              </div>
            </Link>
            <Link href={"/positions"} className="group relative bg-gray-50 transition hover:z-[1] hover:shadow-2xl hover:scale-105 duration-300">
              <div className="relative space-y-8 py-12 p-8">
                <Image
                  src={"/position.svg"}
                  alt={"Name"}
                  width={200}
                  height={200}
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold">
                    Positions
                  </h5>
                  <p>
                    Search players by positions
                  </p>
                </div>
              </div>
            </Link>
            <Link href={"/clubs"} className="group relative bg-gray-50 transition hover:z-[1] hover:shadow-2xl hover:scale-105 duration-300">
              <div className="relative space-y-8 py-12 p-8">
                <Image
                  src={"/club.svg"}
                  alt={"Name"}
                  width={200}
                  height={200}
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold">
                    Clubs
                  </h5>
                  <p>
                    Search players by clubs
                  </p>
                </div>
              </div>
            </Link>
            <Link href={"/leagues"} className="group relative bg-gray-50 transition hover:z-[1] hover:shadow-2xl hover:scale-105 duration-300">
              <div className="relative space-y-8 py-12 p-8">
                <Image
                  src={"/league.svg"}
                  alt={"Name"}
                  width={200}
                  height={200}
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold">
                    Leagues
                  </h5>
                  <p>
                    Search players by leagues
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
