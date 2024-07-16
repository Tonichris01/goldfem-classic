import React from "react";
import { useState } from "react";
import logo from '../ui/Full_logo.jpg';
import { IoHome } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoPricetag }  from "react-icons/io5";
import { IoBriefcase } from "react-icons/io5";
import { TbBulb } from "react-icons/tb";
import { TbMedal } from "react-icons/tb";
import { GiBattery100 } from "react-icons/gi";

function Sidebar(){
  
  const [nav, setNav] = useState([
      {label: 'Home', slug: '/', icon: (<IoHome />) },
      {label: 'Discover', slug: 'discover',icon: (<IoMenu />)},
      {label: 'Catergories', slug: 'cates',icon: (<IoPricetag />)},
      {label: 'My Courses', slug: 'my-courses',icon: (<IoBriefcase />)}

  ])

  const [currentpage, SetCurrentPage] =useState(["/"]);

  var navigation =[];
    for(let i =0; i < nav.length; i++){
      navigation.push(
        <li key={"Nav" + i + "." + nav[i].slug}>
            <a href={nav[i].slug} className ={"aic link noul flex c333" + (currentpage == nav[i].slug ? " on ": "")}>
              <div className="ico s20">{nav[i].icon}</div>
              <h2 className="lbl s20">{nav[i].label}</h2>
            </a>
          </li>
      );
    }

  return(
    <div className="sidebar fixed">
      <a href="#" className="logo bl">
        <img src={logo} className="logo-img bl" />      
      </a>
        <ul className="nav">
          {navigation}
        </ul>
        <div className= "updated-course flex aic">
          <div className ="ico cfff s24">
            {<TbBulb />}
          </div>
          <div className = "lbl s15 fontb c333">
            Updated Courses
            <h2 className="author s13 c777"> by Okatta Chinedu</h2>
          </div>
        </div>
        <div className="stats flex aic">
          <div className="stats-box flex aic jic">
            <div className="ico ico-points s24">
              {<TbMedal />}
              <h2 className="val s15 c333 fontb"> 1800</h2>
              <h2 className="lbl s13 c777"> points</h2>
            </div>
          </div>
          <div className="stats-box flex aic jic">
            <div className="ico ico-battery s24">
              {<GiBattery100 />}
              <h2 className="val s15 c333 fontb"> 45.3%</h2>
              <h2 className="lbl s13 c777"> complete</h2>
            </div>
          </div>
        </div>
    </div>  
  )
}

export default Sidebar;