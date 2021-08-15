import React, { Component } from "react";
import Routes from "./Routes";
import Navigate from "./Navigate";
import Footer from "./Footer";
// import whiskey from "./images/whiskey.jpg";
// import tubby from "./images/tubby.jpg";
// import hazel from "./images/hazel.jpg";
import { DOGS} from "./dogs";
import { CATS} from "./cats";
import "./App.css";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {dogs: DOGS, cats:CATS }
  }
  
  render() {
    return (
      <div>
        <Navigate dogs={this.state.dogs} cats={this.state.cats}/>
        <div className='container'>
          <Routes dogs={this.state.dogs} cats={this.state.cats}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
