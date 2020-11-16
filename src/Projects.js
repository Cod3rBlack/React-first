import React, { Component } from 'react';
import PROJECTS from './data/projects';


class Project extends Component{
    render() {
        const {title, image, description, link } = this.props.project; 

        return(
            <div style = {{display: "inline-block", width:200, margin:10, borderColor:"black" }}>
                <h3> { title } </h3>
                <img src={image} alt='profile' style={{ width : 200, height: 120 }} />
                <p> { description }</p>
                <a href={ link } > { link }</a>
            </div>
        )
    }
}


class Projects extends Component {
    render(){
        return(
            <div>
                <h2> Highlighted Projects</h2>
                <div>
                    {/* <div>{ PROJECTS[0].title }</div>
                    <div>{ PROJECTS[1].title }</div>
                    <div>{ PROJECTS[2].title }</div> */}

                    {
                        PROJECTS.map(PROJECT => {
                            return(
                            // <div key={PROJECTS.id}> {PROJECTS.title} </div>
                            <Project key={PROJECT.id} project = {PROJECT} />
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}


export default Projects;