import "../nav/nav.scss";

const NavCoin = () => {
  return (
    <nav>
      <div className="nav-left">
        {" "}
        <h1>Crypto Dashboard</h1>
      </div>

      <div className="nav-right">
        <button>login</button>
      </div>
    </nav>
  );
};
export default NavCoin;
