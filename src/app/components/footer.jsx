export default function Footer() {
  let year = new Date().getFullYear();

  return (
    <footer>
      <div className={"px-5 py-8 text-center font-semibold"}>
        <p>&#169; {year} <span className="text-red-800">RDF Enthusiast</span>. All rights reserved.</p>
      </div>
    </footer>
  );
}
