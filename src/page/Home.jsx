import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="w-full py-2">
      <div className="flex">
        <Sidebar />
        {/* Top */}
        <div className="px-3">
          <h1>Hallo this is home page</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
