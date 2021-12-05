import React from 'react'
import './MainArea.css'
import {IconContext} from 'react-icons'
import {MdHome, MdPlaylistPlay, MdVideoLibrary, MdWatchLater, MdHistory, MdRssFeed} from 'react-icons/md'
import {FaGripfire ,FaFutbol, FaMusic,FaNewspaper} from 'react-icons/fa'
import {BsFillCollectionPlayFill} from 'react-icons/bs'
import {GiGamepad} from 'react-icons/gi'
import ReactPlayer from 'react-player'
function MainArea(){
return (

    <div className="MainArea">
      <div className="Sidebar">
          <div className="Home">
              <div className="Quick_Icon">
                  <IconContext.Provider value={{style:{ width:"55px",height:"26px"}}}>
                  <MdHome color="black " fontsize="5rem"/></IconContext.Provider>
                  <div id="ic">Accueil</div>
              </div>
              <div className="Quick_Icon">
              <IconContext.Provider value={{style:{ width:"55px",height:"26px"}}}>
                  <FaGripfire color="black" fontsize="2rem"/></IconContext.Provider>
                  <div id="ic">Tendance</div>
              </div>
              <div className="Quick_Icon">
              <IconContext.Provider value={{style:{ width:"40px",height:"26px"}}}>
                  <BsFillCollectionPlayFill color="black" fontsize="2rem"/></IconContext.Provider>
                  <div >Abonnements</div>
              </div>
              <hr id="ligne1"></hr>
              <div className="Library">
              
              <div className="Quick_Icon">
              <IconContext.Provider value={{style:{ width:"40px",height:"26px"}}}>
                  <MdVideoLibrary color="black" fontsize="2rem"/></IconContext.Provider>
                  <div >Bibliothéque</div>
              </div>
              <div className="Quick_Icon">
              <IconContext.Provider value={{style:{ width:"55px",height:"26px"}}}>
                  <MdHistory color="black" fontsize="2rem"/></IconContext.Provider>
                  <div >Historique</div>
              </div>
              <div className="Quick_Icon">
              <IconContext.Provider value={{style:{ width:"45px",height:"26px"}}}>
                  <MdWatchLater color="black" fontsize="2rem"/></IconContext.Provider>
                  <div id="ic">A regarder</div>
              </div>
              <div className="Quick_Icon">
              <IconContext.Provider value={{style:{ width:"55px",height:"26px"}}}>
                  <MdPlaylistPlay color="black" fontsize="2rem"/></IconContext.Provider>
                  <div id="ic">Vos vidéos </div>
              </div>
              </div>
              <hr id="ligne2"></hr>
              <div className="More_From_Youtube">
              <div className="Quick_Icon">
              <IconContext.Provider value={{style:{ width:"55px",height:"28px"}}}>
                  <GiGamepad color="black" fontsize="3rem"/></IconContext.Provider>
                  <div id="ic"> Jeux Vidéos </div>
              </div>
              <div className="Quick_Icon">
              <IconContext.Provider value={{style:{ width:"55px",height:"26px"}}}>
                  <MdRssFeed color="black" fontsize="3rem"/></IconContext.Provider>
                  <div id="ic">Directe</div>
              </div>
              <div className="Quick_Icon">
                  <IconContext.Provider value={{style:{ width:"45px",height:"26px"}}}>
                  <FaFutbol color="black" fontsize="3rem"/></IconContext.Provider>
                  <div id="ic">Sports</div>
              </div>
              <div className="Quick_Icon">
              <IconContext.Provider value={{style:{ width:"40px",height:"25px"}}}>
                  <FaMusic color="black " fontsize="3rem"/></IconContext.Provider>
                  <div id="ic">Musiques</div>
              </div>
              <div className="Quick_Icon">
              <IconContext.Provider value={{style:{ width:"40px",height:"26px"}}}>
                  <FaNewspaper color="black" fontsize="3rem"/></IconContext.Provider>
                  <div id="ic">Actualité</div>
              </div>
              </div>
          </div>
      </div>
      
      <div className="Main">
         <div className="Videos">
             <div className ="Video">
                  <ReactPlayer
                      url="https://youtu.be/60srCXniY94" height="165px" 
                      width="255px"
                      controls
                      />  <br></br>   
                      <div className="Logo"  >
                          <img src="/images/nb.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%" }}/>
                           
                          <div>Site du club robotique</div> 
                     </div>  
                          <br></br> 
                          <div className="view">
                              10 vues.5 déc.2021
                           </div>   
                                
             </div>
             <div className ="Video">
                  <ReactPlayer
                      url="https://youtu.be/v6vNP5p72JQ" height="165px" 
                      width="255px"
                      controls
                      />  <br></br>   
                      <div className="Logo"  >
                          <img src="/images/mk.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%" }}/>
                           
                          <div id="site">Site web avec Wix</div> 
                     </div>  
                          <br></br> 
                          <div className="view">
                          10 vues 4 déc. 2021
                           </div>   
                                
             </div>
             <div className ="Video">
                  <ReactPlayer
                      url="https://youtu.be/llqofCTXFZA" height="165px" 
                      width="255px"
                      controls
                      />  <br></br>   
                      <div className="Logo"  >
                          <img src="/images/ich.png" alt="React" style={{height:"35px", width:"40px", borderRadius:"50%" }}/>
                           
                          <div>SOS Addiction avec wix</div> 
                     </div>  
                          <br></br> 
                          <div className="view">
                              45k views 5 déc. 2021
                           </div>   
                                
             </div>
             <div className ="Video">
                  <ReactPlayer
                      url="https://youtu.be/XG1VcDbihPM" height="165px" 
                      width="255px"
                      controls
                      />  <br></br>   
                      <div className="Logo"  >
                          <img src="/images/o.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%" }}/>
                           
                          <div>Site e-commerce avec wix</div> 
                     </div>  
                          <br></br> 
                          <div className="view">
                          12 vues 5 déc. 2021
                           </div>   
                                
             </div>
             
         </div>
      </div>
    </div>

)

}
export default MainArea