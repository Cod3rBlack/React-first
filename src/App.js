import React, { Component } from 'react';

class RegularClass{}
class ComponentClass extends Component{}

const regularClassInstance = new RegularClass();
const componentClassInstance = new ComponentClass();


console.log('regularClassInstance', regularClassInstance);
console.log('componentClassInstance', componentClassInstance);

class App extends Component{
    render() {
        return (
            <div>
                <h1> Hello</h1>
                <p> My name is Vishwajeet Kumar.</p>
                <p> i am a software developer and data analyst.</p>
            </div>
        )
    }
}

export default App;