import React, { PureComponent } from 'react'
import Person from './Person/Person'

// stateless
// const persons = props =>
//   props.persons.map((person, index) => {
//     return (
//       <Person
//         delete={() => props.clicked(index)}
//         name={person.name}
//         age={person.age}
//         key={person.id}
//         change={event => props.changed(event, person.id)}
//       />
//     )
//   })

// export default persons

// statefull
class Persons extends PureComponent {
  constructor(props) {
    super(props)
    console.log('[Person.js] Inside Constructor', props)
  }

  componentWillMount() {
    console.log('[Person.js] Insie componentWillMount()')
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()')
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      '[UPDATE Person.js] Inside componentWillReceiveProps',
      nextProps
    )
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     '[UPDATE Person.js] Inside shouldComponentUpdate',
  //     nextProps,
  //     nextState
  //   )
  //   // return false
  //   return (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   )
  //   // return true
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      '[UPDATE Person.js] Inside componentWillUpdate',
      nextProps,
      nextState
    )
  }

  componentDidUpdate() {
    console.log('[UPDATE Person.js] Inside componentDidUpdate')
  }

  render() {
    console.log('[Person.js] Inside render')
    return this.props.persons.map((person, index) => {
      return (
        <Person
          delete={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          change={event => this.props.changed(event, person.id)}
        />
      )
    })
  }
}

export default Persons
