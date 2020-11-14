import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';


class App extends Component{

    state = { displayBio: false };

    // constructor(){
    //     super();
    //     this.state = { displayBio : false };

    //     // this.readMore = this.readMore.bind(this);
    //     // this.showLess = this.showLess.bind(this);
    //     this.toggleDispalyBio = this.toggleDispalyBio.bind(this);
    // }

    // readMore(){
    //     this.setState({ displayBio: true });
    // }

    // showLess() {
    //     this.setState({ displayBio : false});
    // }

    toggleDispalyBio = () => {
        this.setState({ displayBio: !this.state.displayBio});
    }

    render() {
        return (
            <div>
                <h1> Hello</h1>
                <p> My name is Vishwajeet Kumar.</p>
                <p> i am a software developer and data analyst.</p>
                {
                    this.state.displayBio ? 
                    (
                        <div>
                            <p>I am from Ara, Bihar, India.</p>
                            <p>My favorite languages are Hindi and English.</p>
                            <p>Other than coding , i also love playing Chess.</p>
                            <button onClick = {this.toggleDispalyBio }>Show Less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick = {this.toggleDispalyBio }> Read More </button>
                        </div>
                    )
                }

                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;