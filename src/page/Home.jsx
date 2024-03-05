import Layout from "../components/Layout";
import welcome from "../assets/welcome.svg";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <Layout>
      <div className="py-2 px-3 dark:bg-[#212121] md:basis-10/12 md:ml-56 flex flex-col items-center h-svh">
        <h1 className="md:text-5xl text-center font-semibold mt-10 dark:text-white">
          Welcome to{" "}
          <span className="font-bold text-violet-kanban">Kanban</span>
        </h1>
        <img src={welcome} className="w-5/12 my-10" />
        <div className="px-10">
          <p className="italic dark:text-white">
            &quot;Kanban (Japanese: 看板, meaning signboard or billboard) is a
            lean method to manage and improve work across human systems. This
            approach aims to manage work by balancing demands with available
            capacity, and by improving the handling of system-level
            bottlenecks.&quot; - Wikipedia
          </p>
        </div>
        <div className="px-10"></div>
      </div>
      <Navbar />
    </Layout>
  );
}

export default Home;
