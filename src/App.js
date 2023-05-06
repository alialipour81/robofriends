import React from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';
import ErrorBoundry from "./Component/ErrorBoundry";

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            robots : [],
            Searchfield : ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>response.json()).then(users =>this.setState({robots : users }));
    }

    unSearchChange = (event) =>{
        this.setState({Searchfield : event.target.value })
    }

    render() {
        const filterdRobot = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
        });
        if (this.state.robots.length === 0){
          return   <h1>Loading...</h1>
        }else{
            return (
                <div className='tc'>
                    <h1>robo Frendes</h1>
                    <SearchBox searchchange = {this.unSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots = {filterdRobot}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }

    }
}

export default App;