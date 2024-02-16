import { Link } from "react-router-dom"
import "./menu.scss"
import { menu } from "../../data"
import { useState } from "react"




const Menu = () => {

  const [selected,setSelected] =useState("Home")

  return (
    <div className="menu">

      {menu.map((item)=>(
        <div className="items" key={item.id}>
        <span className="title">{item.title}</span>

        {item.listItems.map((listItem)=>(
          <Link to={listItem.url}  className="listItem" onClick={()=>setSelected(listItem.title)} key={listItem.id} style={{background:listItem.title===selected && "#384256",color:"white"}}>
          <img src={listItem.icon}/>
          <span className="listItemTitle">{listItem.title}</span>
          </Link>
          ))}
        
      </div>
      ))}
 
    </div>
  )
}

export default Menu