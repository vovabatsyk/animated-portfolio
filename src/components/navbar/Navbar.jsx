import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>Volodymyr Batsyk</span>
        <div className="social">
          <a href="#">
            <img src="/dribbble.png" />
          </a>
          <a href="#">
            <img src="/facebook.png" />
          </a>
          <a href="#">
            <img src="/instagram.png" />
          </a>
          <a href="#">
            <img src="/youtube.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
