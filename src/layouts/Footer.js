import React, {useState} from "react"
import {Button, Modal, ModalBody, ModalFooter,ModalHeader} from 'reactstrap';

const Footer = () => {
    const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
    return (
        <div id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 footer-contact">
                            <h3>Placements and Training Cell</h3>
                            <p>
                                Sri Venkateswara University
                                <br/>
                                Tirupati, Andhra Pradesh - 517 502<br/>
                                India
                                <br/><br/>
                                <strong>Phone:</strong>
                                +91-9603078920<br/>
                                <strong>prof.M.Sri Murali(M.Tech,Phd)Placement officer</strong><br/>
                                <strong>Email:</strong>
                                msrimurali@gmail.com<br/>
                            </p>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="/">Home</a>
                                </li>
                                {/* <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="academics.html">Academics</a>
                                </li> */}
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="/placements">Placements</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="/linktofile">TimeTables</a>
                                </li>
                                {/* <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="examinations.html">Examinations</a>
                                </li> */}
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="/TQ">TEQIP</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Facilities</h4>
                            <ul>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="/alumni">Alumni</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="/healthcentre">Health Centre</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="/library">Library</a>
                                </li>

                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="/nss_ncc">NSS / NCC</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="container">

                    <div>
                        &copy; Copyright
                        <strong>
                            <span> Developed by
                                <span
                                    onClick={toggle}
                                    style={{
                                    color: "cyan",
                                    cursor: "pointer"
                                }}> Web-Team</span>
                            </span>
                        </strong>. All Rights Reserved
                    </div>
                    <div className="credits"></div>
                </div>
                {/* <Button color="danger" onClick={toggle}>Web Team</Button> */}
                <Modal isOpen={modal} toggle={toggle} style={{marginTop:100}}>
                    <ModalHeader toggle={toggle}>DEVELOPERS</ModalHeader>
                    <ModalBody>
                      
                        <a
                            href="https://gracious-williams-9a607a.netlify.app/?#"
                            style={{
                            color: "blue"
                        }}>NSR Jyothish Chandra,</a>
                        <span>Full Stack developer</span>
                        <br/>
                        <a
                            href="#"
                            style={{
                            color: "blue"
                        }}>Maxwell ALan Joseph,</a>
                        <span>FULL STACK DEV, Team lead</span>
                        <br/>
                        <a
                            href="#"
                            style={{
                            color: "blue"
                        }}>Veman Mohan Gandhi,</a>
                        <span>FULL STACK DEV, Team lead</span>
                        <br/>
                        <a
                            href="#"
                            style={{
                            color: "blue"
                        }}>Rangannagari Raghu Vamsi Sai,</a>
                        <span>FULL STACK DEV, Team lead</span>
                        <br/>
                        <a
                            href="#"
                            style={{
                            color: "blue"
                        }}>Bala subramaniyam Mohitha,</a>
                        <span>FULL STACK DEV,</span>
                        <br/>
                        <a
                            href="#"
                            style={{
                            color: "blue"
                        }}>Neeharika,</a>
                        <span>FULL STACK DEV,</span>
                        <br/>
                        <a
                            href="#"
                            style={{
                            color: "blue"
                        }}>Holali Ramesh Navya,</a>
                        <span>FULL STACK DEV,</span>
                    </ModalBody>
                    <ModalFooter>
                      
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>

        </div>

    )
}
export default Footer