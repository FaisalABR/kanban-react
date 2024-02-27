import Sidebar from "./Sidebar";
import PropType from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="w-full flex">
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
