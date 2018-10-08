import React from 'react'
// import './Person.css'
import classes from './Person.module.css'
// import Radium from 'radium'

const person = props => {
  // const style = {
  //   '@media (min-width:500px)': {
  //     width: '450px'
  //   }
  // }

  // const rnd = Math.random()
  // if (rnd > 0.7) {
  //   throw new Error('error please')
  // }

  return (
    // <div className="Person" style={style}>
    // <div className="Person">
    <div className={classes.Person}>
      {/* <p onClick={props.click}> */}
      <p onClick={props.delete}>
        I'm a {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} defaultValue={props.name} />
    </div>
  )
}

// export default Radium(person)
export default person
