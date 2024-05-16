export default function Home() {
  return (
    <main className="flex  justify-between">
      <img src="Logo.png" alt="logo" />
      <main>
        <a href="home" className="text-green-600">
          Home
        </a>
        <a href="home" className="text-grey-600">
          Menu
        </a>
        <a href="home" className="text-grey-600 ">
          Blog
        </a>
        <a href="home" className="text-grey-600 ">
          Contact Us
        </a>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-gray-600">
          <a href="click">Order now</a>
        </button>
      </main>
    </main>
  );
}
