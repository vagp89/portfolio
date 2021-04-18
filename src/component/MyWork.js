import React from 'react'
import "./MyWork.css"
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import img4 from "../images/img4.png"
import img5 from "../images/img5.png"
import img6 from "../images/img6.png"

const MyWork = () => {
  return (
    <div className="mywork-section" id="my-work">
      <h1 className="title">My Work</h1>
      <div className="container-fluid text-center my-4 item-container">
        <p className="text muted pt-2 title2">
            You can take a look to my work
        </p>
        <div className="row py-5">

         <div className="col-md-3 item-card">
           <img className="image" src={img1} alt=""/>
           <h2> WELCOME</h2>
           <p className="text-muted py-1">
           <a href="url">http://www.welcome-mentors.com</a>
           </p>
         </div>
         <div className="col-md-3 item-card">
           <img className="image" src={img2} alt=""/>
           <h2> BIKE MATCH</h2>
           <p className="text-muted py-1">
             <a href="url">https://bike-match-sweetening.herokuapp.com</a>
            </p>
         </div>
         <div className="col-md-3 item-card">
           <img className="image" src={img3} alt=""/>
           <h2> COVID TRACKER </h2>
           <p className="text-muted py-1">
             <a href="url">https://covid19-tracker-ac6fa.web.app/</a>
            </p>
         </div>
         <div className="col-md-3 item-card">
           <img className="image" src={img4} alt=""/>
           <h2> AMAZON CLONE</h2>
           <p className="text-muted py-1">
             <a href="url">https://amzon-clone-vagp.firebaseapp.com</a>
           </p>
         </div>
         <div className="col-md-3 item-card">
           <img className="image" src={img6} alt=""/>
           <h2> TASK TRACKER</h2>
           <p className="text-muted py-1">
             <a href="url">https://github.com/vagp89/react-task-tracker</a>
            </p>
         </div>
         <div className="col-md-3 item-card">
           <img className="image" src={img5} alt=""/>
           <h2> SPOTIFY CLONE</h2>
           <p className="text-muted py-1">
             <a href="url">https://github.com/vagp89/react-spotify-clone</a>
            </p>
         </div>
        </div>
      </div>
    </div>
  )
}

export default MyWork
