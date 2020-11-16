import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';


class SocialProfile extends Component{
    render() {
        const { title, link, image } = this.props.socialProfile;

        return (
            <div style={{display: "inline-block", margin:5, alignItems:"center"}}>
                <a href = {link} style={{alignItems:"center"}}><img src= {image} alt ={title} style={{width:20, height:20}}/></a>
                <p style={{alignItems:"center", fontSize:15}}>{ title } </p>
            </div>
        )
    }
}

class SocialProfiles extends Component{
    render(){
        return(
            <div>
                <h3 style={{color:"green", fontSize:20}}>My Social Profiles</h3>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                            return <SocialProfile key = { SOCIAL_PROFILE.id } socialProfile = { SOCIAL_PROFILE } />;
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;