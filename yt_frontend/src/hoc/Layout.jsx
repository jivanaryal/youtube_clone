import Navbar from "../components/navigation/Navbar";

const Layout = () => {
  return (
    <div>
      <div>
        <div className="Navbar">
          <Navbar />
        </div>
        <div className="side_content">
          <div className="sidebar"></div>
          <div className="conte"></div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
