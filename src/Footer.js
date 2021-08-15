import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./App.css";

class Footer extends Component {
    render() {
        return (
            <div className="footer">

                <div className="row flex-row-reverse">
                    <div className="col d-flex justify-content-end">
                        <a className="btn btn-social-icon btn-instagram btnRnd mr-1" href="http://instagram.com/"><i
                            className="fa fa-instagram" /></a>
                        <a className="btn btn-social-icon btn-facebook btnRnd mr-1" href="http://facebook.com/"><i
                            className="fa fa-facebook" /></a>
                        <a className="btn btn-social-icon btn-twitter btnRnd mr-1" href="http://twitter.com/"><i
                            className="fa fa-twitter" /></a>
                        <a className="btn btn-social-icon btn-google btnRnd mr-1" href="http://youtube.com/"><i
                            className="fa fa-youtube" /></a>
                    </div>
                    <div className="col d-inline-flex justify-content-start">
                    <Link to='/'>
                        <h5 className="ml-3" >Honolulu SPCA</h5>
                        </Link>
                    </div>
                </div>
            </div>
                
            );
    };
}


export default Footer;
