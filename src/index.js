import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner"
import "semantic-ui-css/semantic.min.css";


class AppCL extends React.Component{

   
    state={lat:null,errorMessage:""};
    
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position=>this.setState({lat:position.coords.latitude}),
            err=>this.setState({errorMessage:err.message})
        )
        
        
        console.log("component did mount");
    }

    renderContent(){
        if(!this.state.errorMessage && !this.state.lat){
            return(
                <Spinner message="Please accept the location request"/>
            )
        }
        if(!this.state.errorMessage && this.state.lat){
            return(
                <SeasonDisplay lat={this.state.lat}/>
            )
        }
        return(
        <div>Error:{this.state.errorMessage}</div>
        );
    }

    render(){
        return(
            <div className="border red">{this.renderContent()}</div>
        )
    }
}

ReactDOM.render(<AppCL/>,document.querySelector("#root"));
