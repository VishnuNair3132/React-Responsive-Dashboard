import { Link } from "react-router-dom"
import "./navbar.scss"
const Navbar = () => {
  return (
    <div className="navbar">
      
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>DashAdmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notifications">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
          </div>
        <div className="user">
          <img src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=400"/>
          <span>Jane</span>
        </div>
        <img src="/setting.svg" alt="" />
      </div>
    </div>
  )
}

export default Navbar