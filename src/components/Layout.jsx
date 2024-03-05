import Sidebar from "./Sidebar";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="w-full flex">
      <Sidebar />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};
export default Layout;
