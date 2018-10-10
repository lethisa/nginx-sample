import React, { PureComponent } from 'react'
import classes from './App.module.css'
// import './App.css'
import Person from '../components/Persons/Person/Person'
// import Radium, { StyleRoot } from 'radium'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends PureComponent {
  constructor(props) {
    super(props)
    console.log('[App.js] Inside Constructor', props)
    this.state = {
      persons: [
        { name: 'name-1', age: 12, id: 'as' },
        { name: 'name-2', age: 19, id: 'ad' },
        { name: 'name-3', age: 20, id: 'af' }
      ],
      showPersons: false
    }
  }

  componentWillMount() {
    console.log('[App.js] Insie componentWillMount()')
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     '[UPDATE App.js] Inside shouldComponentUpdate',
  //     nextProps,
  //     nextState
  //   )
  //   // return false
  //   // return nextProps.persons !== this.props.persons
  //   // return true

  //   return (
  //     nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons
  //   )
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      '[UPDATE App.js] Inside componentWillUpdate',
      nextProps,
      nextState
    )
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate')
  }

  // state available on components + class
  // state = {
  //   persons: [
  //     { name: 'name-1', age: 12, id: 'as' },
  //     { name: 'name-2', age: 19, id: 'ad' },
  //     { name: 'name-3', age: 20, id: 'af' }
  //   ],
  //   showPersons: false
  // }

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
    console.log('[App.js] Inside Render')

    // const style = {
    //   backgroundColor: 'red',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   color: 'white'
    //   // ':hover': {
    //   //   backgroundColor: 'lightgreen',
    //   //   color: 'black'
    //   // }
    // }

    let persons = null
    // let btnClass = ''

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
          {/* {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary>
                <Person
                  delete={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  change={event => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            )
          })} */}
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

      // btnClass = classes.Red

      // style.backgroundColor = 'blue'
      // style[':hover'] = {
      //   backgroundColor: 'pink',
      //   color: 'black'
      // }
    }

    // let classes = ['red', 'bold'].join(' ')
    // const assigned = []
    // if (this.state.persons.length <= 2) {
    //   assigned.push(classes.red) // class will be red
    // }
    // if (this.state.persons.length <= 1) {
    //   assigned.push(classes.bold) // class will be red + bold
    // }

    return (
      // <StyleRoot>
      // <div className="App">
      <div className={classes.App}>
        <button
          onClick={() => {
            this.setState({ showPersons: true })
          }}
        >
          Show Persons
        </button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {/* <h1>Hi, I'm React App</h1>
        <p className={assigned.join('')}>This is really working</p>

        <button
          // style={style} // inline properti
          // onClick={() => this.switchNameHandler('name-change-click-2')}
          className={btnClass}
          onClick={this.togglePersonHandler}
        >
          Toggle Person
        </button> */}
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
