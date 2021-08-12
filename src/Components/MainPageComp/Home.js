const Home = () =>{
 

  
  return(
   <div>
     <section id="hero">
    <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

      <div className="carousel-inner" role="listbox">

      
        <div className="carousel-item active" style={{backgroundImage: "url(img/img-1.jpg)"}}>
          <div className="carousel-container">
            <div className="carousel-content animate__animated animate__fadeInUp">
              <h2>Welcome to <span>Placement and Training Cell</span></h2>
              <p>
              Placement Cell of Sri Venkateswara University College of Engineering has been operational for the last twenty four years, with dual objectives of imparting required training to students and liaisoning with the industry to arrange campus interviews for the students studying in the backward region of Rayalaseema.  The cell is headed by a Professor, nominated by the Principal in association with a committee consisting of a faculty member from each department and is supported by Placement Mentor & Placement Secretary.
                </p>
              {/* <div className="text-center"><a href="" className="btn-get-started">Read More</a></div> */}
            </div>
          </div>
        </div>

       
        <div className="carousel-item" style={{backgroundImage: "url(img/img-2.jpeg)"}}>
          <div className="carousel-container">
            <div className="carousel-content animate__animated animate__fadeInUp">
            <h2>OUR VISION <span>Placement and Training Cell</span></h2>
              <p>
              A Training and Placement Cell is found to be necessary to meet the global competition so as to train the students to know the High-Tech environment in addition to the usual academic activities.  Further, to inculcate the need of standards and quality of education by the time they enter the practical world.  Thus students of all disciplines of the University will have the provision to get maximum placement opportunities.
              </p>
              {/* <div className="text-center"><a href="" className="btn-get-started">Read More</a></div> */}
            </div>
          </div>
        </div>

       
        <div className="carousel-item"style={{backgroundImage: "url(/img/img-3.jpeg)" ,backgroundSize:"auto"}}>
          <div className="carousel-container">
            <div className="carousel-content animate__animated animate__fadeInUp">
            <h2>OUR MISSION <span>Placement and Training Cell</span></h2>
              {/* <div className="text-center"><a href="" className="btn-get-started">Read More</a></div>
           
             */}
             <p>
             Our mission is to make the students for self-sustainable development by starting their own industries / consultancy services to make the Training & Placement Cell by developing continuous interaction with the industries. <a href="svucealumni.org">svucealumni.org.</a>
             </p>
              </div>
          </div>
        </div>

      </div>

      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon bx bx-left-arrow" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>

      <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon bx bx-right-arrow" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>

      <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

    </div>
    
  </section>
  
  <main id="main">

   
    <section id="cta" className="cta">
      <div className="container">

        <div className="row">
          <div className="col-lg-9 text-center text-lg-left">
            <h3>Placement and training   <span>Cell</span></h3>
            <p> Placement Cell of Sri Venkateswara University College of Engineering has been operational for the last twenty four years, with dual objectives of imparting required training to students and liaisoning with the industry to arrange campus interviews for the students studying in the backward region of Rayalaseema.  The cell is headed by a Professor, nominated by the Principal in association with a committee consisting of a faculty member from each department and is supported by Placement Mentor & Placement Secretary.</p>

{/* <p>The foundation stone for the college Main Building was laid on 13 October 1959 by Pandit Jawaharlal Nehru, the first Prime Minister of India. It was declared open on 21 November 1968 by Sri. K Brahmananda Reddy, the then Chief Minister of Andhra Pradesh.</p>

<p>From the year 1977-78, the names of BE and ME were changed as B.Tech and M.Tech. The institution achieved autonomous status in 2005.</p> */}
           
              
          
          </div>
         
        </div>

      </div>

    </section>

   
   
/</main>
   </div>
  )
}
export default Home