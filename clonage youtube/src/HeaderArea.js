import React from 'react'
import './HeaderArea.css'
import {IconContext} from 'react-icons'
import {FaYoutube} from 'react-icons/fa'
import {MdSearch, MdVideoCall, MdViewComfy} from 'react-icons/md'
import {AiTwotoneBell} from 'react-icons/ai'
function HeaderArea(){
    return (
      <body>
      <div  className="HeaderArea">
      <div  className="Header">
      <header className="header" >
        
        <button  className="button">
          &#9776;
        </button>
        <IconContext.Provider value={{style:{ width:"80px",height:"35px"}}}>
        <FaYoutube color="red" fontsize="3rem" ></FaYoutube></IconContext.Provider>
        <div id="ytb">YouTube</div>
      </header>

      <div className="Search">
        <input type="search" placeholder="Rechercher"/>
        <div className="search"><IconContext.Provider value={{style:{ }}}>
          <MdSearch fontsize="4rem"/></IconContext.Provider></div> 
      </div>
      <div className="Icon">
      <IconContext.Provider value={{style:{ width:"55px",height:"26px"}}}>
        <div className="icon"><MdVideoCall fontsize="2.8rem"/></div>
        <div className="icon"><MdViewComfy fontsize="2.8rem"/> </div>
        <div className="icon"><AiTwotoneBell fontsize="2.8rem"/> </div></IconContext.Provider>
        
        <div className="icon">
          <img src="/images/user1.png" alt="user"/> </div>
        
      </div>
      </div>
      </div>
      <hr></hr>
      </body>
      
    );
  }
 
export default HeaderArea;