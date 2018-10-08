import React from 'react'
import classes from './Cockpit.module.css'

const cockpit = props => {
  const assigned = []
  let btnClass = ''

  if (props.showPersons) {
    btnClass = classes.Red
  }

  if (props.persons.length <= 2) {
    assigned.push(classes.red) // class will be red
  }
  if (props.persons.length <= 1) {
    assigned.push(classes.bold) // class will be red + bold
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assigned.join('')}>This is really working</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Person
      </button>
    </div>
  )
}

export default cockpit
