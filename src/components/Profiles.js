import React from "react";
import Profile from "./Profile";


class Profiles extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            top_profiles: [
                { name: 'Beyonce', age: '39', bio: 'A star. Period.', books_read: '83'},
                { name: 'Olivia', age: '22', bio: 'Just git pushing n pulling', books_read: '80'},
                { name: 'Kathy', age: '43', bio: 'Business owner', books_read: '77'},
            ],
            other_profiles: [
                { name: 'Bob', age: '35', bio: 'Hi', books_read: '44'},
                { name: 'Dave', age: '76', bio: 'Hello', books_read: '30'},
                { name: 'Ben', age: '69', bio: 'Sup', books_read: '28'},
                { name: 'Paula', age: '23', bio: 'Wagarwn', books_read: '7'}
            ]

        };
    }
    render() {
        return (
            <div>
                <p className='animate__animated animate__zoomInUp animate__slower animate__delay-1s' style={{color: 'purple', fontWeight: 'bold', backgroundColor: 'orange', textAlign: 'center'}}>Who Will Make The Top 3 Next Week?! <br/> Will It Be You? <br/> Get Reading!</p>
                <h3>Top Readers Profiles of the Week</h3>
                {this.state.top_profiles.map(profile => <Profile profile={profile} /> )}

                <h3>Other Profiles</h3>
                {this.state.other_profiles.map(profile => <Profile profile={profile} /> )}
            </div>
        )
    }
}

export default Profiles;