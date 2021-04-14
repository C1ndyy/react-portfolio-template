import React from 'react';
import ProjectItem from './ProjectItem'

class Projects extends React.Component {
    state ={
        likes: 0
    }

    addLike() {
        this.setState(state => ({likes: state.likes + 1}));
      }

    render(){
        return (
            <div  className="component section">
                <h2>Projects go here</h2>
                < ProjectItem />
                <p>likes: {this.state.likes}</p>
                <button onClick={() => this.addLike()}>Like</button>
            </div>
        );
    }
}

export default Projects;