import React, {useEffect, useState} from "react";
import {Button} from "reactstrap";

const Navba = () => {
    const [isLoggedIn,
        setIsloggedIn] = useState(false)
    useEffect(() => {
        const x = (JSON.parse(localStorage.getItem("user")));

        if (x) {
            if (x.token && x._id) {
                setIsloggedIn(true)
            }
        }
    }, [])
    const handleLOgout = (e) => {
        e.preventDefault();
        localStorage.clear()
        window
            .location
            .reload()(alert("Logged out succesfully"))
    }
    return (
        <div>
            <section id="topbar" className="d-none d-lg-block">
                <div className="container d-flex">
                    <div className="contact-info mr-auto">
                        
                        <a href="mailto:principal_svuce2003@yahoo.co.in">Placement and Training Cell</a><br></br>
                        
                        Sri Venkateswara Vniversity College of Engineering
                    </div>

                </div>
            </section>
            <header id="header">
                <div className="container d-flex">

                    <div className="logo mr-auto">

                        <h1 className="text-light">
                            <a href="/">PLACEMENT CELL</a>
                        </h1>

                    </div>

                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li className="drop-down">
                                <a href={window.location}>About us</a>
                                <ul>
                                    <li>
                                        <a href="/about svuce">About SVUCE</a>
                                    </li>
                                    <li>
                                        <a href="/linktopdf">Academics</a>
                                    </li>
                                    <li>
                                        <a href="/courses_offered">Student Graduating</a>
                                    </li>
                                    <li>
                                        <a href="/linktopdf">Student research</a>
                                    </li>
                                    <li>
                                        <a href="/linktopdf">Activities</a>
                                    </li>
                                    {/* <li className="drop-down">
                                        <a href="/academic_regulations">
                                            Academic Regulations</a>
                                        <ul>
                                            <li>
                                                <a href="/btech_reg_file.pdf">B.Tech</a>
                                            </li>
                                            <li>
                                                <a href="/mtech_reg_file.pdf">M.Tech</a>
                                            </li>
                                        </ul>
    </li>*/}
                                   
                                  
                                </ul>
                            </li>
                            <li className="drop-down">
                                <a href={window.location}>For Recruiters</a>
                                <ul>
                                <li className="drop-down">
                                        <a href="/academic_regulations">
                                            Placement Broucher</a>
                                        <ul>
                                        <li>
                                        <a href="/ChE">Chemical Engineering</a>
                                   
                                    </li>
                                    <li>
                                        <a href="/NotFound">Civil Engineering</a>
                                     
                                    </li>
                                    <li >
                                        <a href="/EEE">Electrical and Electronics Engineering</a>
                                    </li>
                                    <li >
                                        <a href="/ECE">Electronics and Communication Engineering</a>
                                    </li>
                                    <li >
                                        <a href="/ME">Mechanical Engineering</a>
                                    </li>
                                    <li>
                                        <a href="/CSE">Computer Science & Engineering</a>
                                    </li>
                                        </ul>
                                    </li>


                                   

                                    <li className="drop-down">
                                        <a href="/academic_regulations">
                                            Reaching svu</a>
                                        <ul>
                                        <li>
                                        <a href="/Contact">Contact</a>
                                   
                                    </li>
                                    <li>
                                        <a href="/CE">Route map</a>
                                     
                                    </li>
                               
                                        </ul>
                                    </li>

                                    <li>
                                        <a href="/CE">Guidelines</a>
                                    </li>
                                    <li>
                                        <a href="/CE">Facilities</a>
                                    </li>
                                    <li>
                                        <a href="/CE">Data of previous years</a>
                                    </li>
                                    <li>
                                        <a href="/CE">companies visited</a>
                                    </li>

                                    {/*<li>
                                        <a href="/ChE">Chemical Engineering</a>
                                   
                                    </li>
                                    <li>
                                        <a href="/CE">Civil Engineering</a>
                                     
                                    </li>
                                    <li >
                                        <a href="/EEE">Electrical and Electronics Engineering</a>
                                    </li>
                                    <li >
                                        <a href="/ECE">Electronics and Communication Engineering</a>
                                    </li>
                                    <li >
                                        <a href="/ME">Mechanical Engineering</a>
                                    </li>
                                    <li>
                                        <a href="/CSE">Computer Science & Engineering</a>
                                    </li>*/}
                                </ul>
                            </li>
                            {/* <li className="drop-down"><a href="examinations">Examinations</a>
          <ul>
            <li><a href="exam_notifications">Notifications</a></li>
            <li><a href="exam_results">Results</a></li>
            <li><a href="exam_applications">Applications</a></li>
            <li><a href="exam_halltickets">Hall Tickets</a></li>
          </ul>
        </li> */}

                           <li className="drop-down">
                                <a href={window.location}>For Students</a>
                                <ul>
                                    <li>
                                        <a href="/courses_offered">Placement policy </a>
                                    </li>
                                    <li>
                                        <a href="/linktopdf">Resume generators</a>
                                    </li>
                                    <li>
                                        <a href="/courses_offered">Students portal</a>
                                    </li>
                 
                                  
                                </ul>
                            </li>

                         
                                <li className="drop-down">
                                <a href={window.location}>For Alumni</a>
                                <ul>
                                    <li>
                                        <a href="/courses_offered">Alumni Notes </a>
                                    </li>
                                    <li>
                                        <a href="/linktopdf">Alumni Reference</a>
                                    </li>      
                                  
                                </ul>
                            </li>

           
                            <li>
                                <a href="/newsportal">News Board</a>
                            </li>

                            {isLoggedIn
                                ? (
                                    <li>

                                        <Button
                                            onClick={handleLOgout}
                                            style={{
                                            marginTop: 10,
                                            fontSize: 15,
                                            padding: "6px 10px"
                                        }}>LOGOUT</Button>

                                    </li>
                                )
                                : (
                                    <li className="drop-down">
                                    <a href={window.location}>LOGIN</a>
                                    <ul>
                                        <li>
                                            <a href="/admin login">Admin LOGIN </a>
                                        </li>
                                        <li>
                                            <a href="/recuriters login">Recuriters LOGIN</a>
                                        </li>   
                                        <li>
                                            <a href="/student login">Student LOGIN</a>
                                        </li>     
                                      
                                    </ul>
                                </li>
    
                                    
                                )}
                        </ul>
                    </nav>
                </div>
            </header>
        </div>

    )
}
export default Navba
