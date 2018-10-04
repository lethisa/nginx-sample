import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  // state available on components + class
  state = {
    persons: [
      { name: 'name-1', age: 12 },
      { name: 'name-2', age: 19 },
      { name: 'name-3', age: 20 }
    ]
  }

  switchNameHandler = newName => {
    // console.log('click')
    // dont work ---> this
    // this.state.persons[0] = 'minmin'

    this.setState({
      persons: [
        { name: newName, age: 12 },
        { name: 'name-2', age: 19 },
        { name: newName, age: 20 }
      ]
    })
  }

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'name-change-1', age: 12 },
        { name: event.target.value, age: 19 },
        { name: 'name-change-3', age: 20 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'red',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('name-change-click-2')}
        >
          Switch Name
        </button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          change={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, 'name-change-click-1')}
        />
      </div>
    )

    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, "Hi , I'm a React App!")
    // );
  }
}

export default App
