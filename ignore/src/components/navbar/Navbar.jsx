import "./navbar.css"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()

  const goHome = () => {
    navigate("/",)
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={goHome}>CanadaBook</span>
        <div className="navItems">
          <button className="navButton" onClick={goHome}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar