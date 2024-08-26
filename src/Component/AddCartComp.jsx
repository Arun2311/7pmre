import React, { Component } from "react";
import ExampleComp from "./ExampleComp";

class AddCartComp extends Component {


  state = {
    count: 2,
    moviename:"arunachalam"
  };


  handleadd = ()=>{

this.setState({count : this.state.count + 1})

  }


  handlesub = () =>{


    if(this.state.count == 0){
        this.setState({count : 0})

    }else{
        this.setState({count : this.state.count - 1})

    }
  }


  render() {
    return (
      <>

      <h1>Movie Name - {this.state.moviename}</h1>
        <h1>Count : {this.state.count} </h1>

        <button onClick={this.handleadd}>Add </button>



        <button onClick={this.handlesub}>Sub </button>

      </>
    );
  }
}

export default AddCartComp;
