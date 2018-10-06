import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'
// import Radium, { StyleRoot } from 'radium'

class App extends Component {
  // state available on components + class
  state = {
    persons: [
      { name: 'name-1', age: 12, id: 'as' },
      { name: 'name-2', age: 19, id: 'ad' },
      { name: 'name-3', age: 20, id: 'af' }
    ],
    showPersons: false
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    // OR
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })

    // this.setState({
    //   persons: [
    //     { name: 'name-change-1', age: 12 },
    //     { name: event.target.value, age: 19 },
    //     { name: 'name-change-3', age: 20 }
    //   ]
    // })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons] // copy aray

    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  render() {
    const style = {
      backgroundColor: 'red',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      color: 'white'
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                delete={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                change={event => this.nameChangedHandler(event, person.id)}
              />
            )
          })}

          {/* <Person
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
          /> */}
        </div>
      )

      style.backgroundColor = 'blue'
      style[':hover'] = {
        backgroundColor: 'pink',
        color: 'black'
      }
    }

    // let classes = ['red', 'bold'].join(' ')
    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red') // class will be red
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold') // class will be red + bold
    }

    return (
      // <StyleRoot>
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p className={classes.join('')}>This is really working</p>

        <button
          style={style}
          // onClick={() => this.switchNameHandler('name-change-click-2')}
          onClick={this.togglePersonHandler}
        >
          Toggle Person
        </button>

        {/* {this.state.showPersons === true ? (
          <div>
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
        ) : null} */}

        {persons}
      </div>
      // </StyleRoot>
    )

    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, "Hi , I'm a React App!")
    // );
  }
}

// export default Radium(App)
export default App
