import Navbar from "../components/navbar";

export default function Page() {
  const nonChosenClass =
    "mb-3 me-3 rounded-full border border-1 border-red-600 px-5 py-2.5 text-medium hover:bg-red-600 hover:text-white transition duration-300";
  const chosenClass =
    "mb-3 me-3 rounded-full px-5 py-2.5 text-medium bg-red-600 text-white transition duration-300";

  return (
    <div>
      <Navbar />
      <div className="my-2 columns-1">
        <h1 className="text-center text-4xl">Find Players By Leagues</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center  md:py-8 mt-8 lg:mt-0">
        <button type="button" className={chosenClass}>
          EPL
        </button>
        <button type="button" className={nonChosenClass}>
          La Liga
        </button>
        <button type="button" className={nonChosenClass}>
          Bundesliga
        </button>
        <button type="button" className={nonChosenClass}>
          Serie A
        </button>
        <button type="button" className={nonChosenClass}>
          Ligue 1
        </button>
        <button type="button" className={nonChosenClass}>
          Other
        </button>
      </div>
      {/* <div>

      </div> */}
      {/* <div className="m-5 grid grid-cols-2 gap-4 md:grid-cols-3">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
            alt=""
          />
        </div>
      </div> */}
    </div>
  );
}
