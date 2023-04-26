import { margin } from "@mui/system"

const Footer = () => {

    const footer1={
        background: "black",
    }
    const footermain1={
        background:'black'
       

    }
    
    const footermain2={
        background:"black",
        
    
       
    }
    const footermain11={
        background:'rgb(66, 19, 251)'
    }
    return (
        <div style={{background:"red"}}>

            <footer className="text-center text-lg-start  text-muted" style={{background:'black'}}>

                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 " style={footermain1}>
            

                    <div className="me-5 d-none d-lg-block" style={{background:"black"}}> 
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div style={{background:"black"}}>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>

                </section>
                
                <section  style={footermain2}>
                    <div className="container text-center text-md-start mt-5" style={{background:"black"}}>

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Image Inpainting 
                                </h6>
                                <p>
                                Restoration in certain places has the great value of making the outlines and structural planes seem more energetic.
                                </p>
                            </div>



                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Inpainting!</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset"></a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset"></a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Repair!</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Service
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Online Service</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">For mac/win</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">For ios/Android</a>
                                </p>
                               
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i className="fas fa-home me-3"></i> Lalitpur, chakupat 10012, US</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    infohcoe.edu.np
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>
                              
                         

                        </div>

                    </div>
                </section>
                <div className="text-center p-4" style={footer1}>
                    © 2021 Copyright: 
                     <a className="text-reset fw-bold" href="https://mdbootstrap.com/">imageInpainting.com</a></div>
            </footer >
           
        </div >
    )
    
}
export default Footer;