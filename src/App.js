import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots : robots,
            searchfield : ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className='tc'>
              <h1 className='f1'> RoboSearch </h1>
              <SearchBox searchChange={ this.onSearchChange }/>
              <Scroll>
                <CardList robots = {filteredRobots} />
              </Scroll>
            </div>
        );
    }
}

export default App; 


// componentDidMount() {
//     fetch('url')
//     .then(response => response.json)
//     .then(users => {this.setState({  robots: users})});
// }  This methood is used to fetch data from some other website.