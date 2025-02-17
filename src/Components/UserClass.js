import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            // count: 0,
            // count2: 1,
            userInfo: {
                name: "Dummy-Name",
                location: "Default",
            },
        }

       // console.log(this.props.name +"Child Constructor ");
    }

    async componentDidMount(){
       // console.log(this.props.name +"Child cDM ");
       const data= await fetch("https://api.github.com/users/RuthvikKoutika7");
       const json = await data.json();

       console.log(json);

       this.setState({
        userInfo: json,
       });

    }

    render(){
       // console.log(this.props.name +"Child Render ");
       // const { count,count2} = this.state;
        const  {name, location, avatar_url,company} = this.state.userInfo;
        return(
            <div className="user-card">
                {/* <h1>Count :{count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count +1,
                    });
                }}>Count Increase</button> */}
               <img src={avatar_url}/>
               <h2>{name}</h2>
               <h3>{location}</h3>
               <h3>{company}</h3>
               {/* <h3>insta handle : {social}</h3> */}
            </div>
        );
    }

}

export default UserClass;