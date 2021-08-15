import React, { Component } from 'react';




class Contact extends Component {

    render() {
        return (
            <div className="row row-content">
                <div className="text-center col-md-8 offset-md-2">
                    <h3 className="mt-3">Contact Us</h3>

                    <div className="row text-center">
                       <h5 className="mb-0"><strong>Honolulu SPCA</strong></h5>
                       </div>
                       <div className="row  text-center">
                        <p className="mb-0">124 Kapahulu Ave</p>

                        </div>  
                        <div className="row text-center"> 
                        <p className="mb-0">Honolulu, HI 96822</p>
                    </div>

                    <div className="row pt-1 text-center ">
                       
                        <p className="mb-0"><strong>Hours:</strong>Tues - Sun 10:00am-5:00pm</p>
                    </div>

                    <div className="row pt-1 text-center ">
                       
                        <p className="mb-0"><strong>Email:</strong> info@spca.com</p>
                    </div>
                </div>
            </div>



        );
    }
}


export default Contact;
