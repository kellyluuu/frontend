import { Link } from "react-router-dom";

function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

  return (
<div>
    <header className="px-4">
      <h1 className="mt-3">My Portfolio Page</h1>
      <ul className="nav nav-tabs">
          <li className="nav-item"> <Link className="nav-link active" data-bs-toggle="tab" to="/">HOME</Link></li>
          <li className="nav-item"> <Link className="nav-link active" data-bs-toggle="tab" to="/about">ABOUT</Link></li>
          <li className="nav-item"><Link className="nav-link active" data-bs-toggle="tab" to="/projects">PROJECTS</Link></li>
     </ul>
    </header>
</div>
  );
}

export default Header;


