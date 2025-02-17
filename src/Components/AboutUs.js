import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../Utils/UserContext";

class AboutUs extends React.Component{
   
    constructor(props){
        super(props);
        console.log("Parent Constructor ");
    }

    componentDidMount(){
        console.log("Parent cDM");
    }
    
    render(){

    console.log("Parent Render");
        return (
            <div className="aboutUs">
                <h1>About Us</h1>
                <div>
                    <UserContext.Consumer>
                        {({loggedInUser})=><h2 className="text-xl font-bold">{loggedInUser}</h2>}
                    </UserContext.Consumer>
                </div>
                <h2>This is Learning Exercise of React for building Food ordering app</h2>
                <UserClass name={"Ruthvik  "} location={"Hyderabad"} social={"@_taffik7_"} />
                
            </div>
        )
    }
}

// const AboutUs = () =>{
//     return (
//         <div className="aboutUs">
//             <h1>About Us</h1>
//             <h2>This is Learning Exercise of React for building Food ordering app</h2>
//             <User name={"Ruthvik Koutika "} location={"Hyderabad"} social={"@_taffik7_"} />
//             <UserClass name={"Maniruth Koutika"} location={"Bengaluru"} social={"@_maniruth7"}/>
//         </div>
//     )

// }
export default AboutUs;

