import React from "react";

class Profile extends React.Component {
    
render() {
    return (
    <div>
        <h4>{this.props.profile.name}</h4>
        <img src ='erza.jpg' alt='erza scarlett'/>
        <p>
        Age: {this.props.profile.age}
        <br/>
        Bio: {this.props.profile.bio}
        <br/>
        Books Read: {this.props.profile.books_read}
        </p>
    </div>
    )
}
}


export default Profile;