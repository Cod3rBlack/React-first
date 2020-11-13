import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log('i am', this.name, 'and i am ', this.age, 'years old.');
    }
}


const animal1 = new Animal('Lion', 3);
animal1.speak();

// console.log(animal1);


class Lion extends Animal{
    constructor(name, age, furColor, speed){
        super(name, age);
        this.furColor = furColor;
        this.speed = speed;
    }

    roar(){
        console.log('i have'
        ,this.furColor
        ,'i can run'
        , this.speed
        ,'miles per hour'
        );
    }
}

const lion1 = new Lion('Big lion', 8,'red', 90);

lion1.roar();

