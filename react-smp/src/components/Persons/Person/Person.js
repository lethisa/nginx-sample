import React, { Component } from 'react'
// import './Person.css'
import classes from './Person.module.css'
// import Radium from 'radium'

// stateless
// const person = props => {
//   // const style = {
//   //   '@media (min-width:500px)': {
//   //     width: '450px'
//   //   }
//   // }

//   // const rnd = Math.random()
//   // if (rnd > 0.7) {
//   //   throw new Error('error please')
//   // }

//   return (
//     // <div className="Person" style={style}>
//     // <div className="Person">
//     <div className={classes.Person}>
//       {/* <p onClick={props.click}> */}
//       <p onClick={props.delete}>
//         I'm a {props.name} and I am {props.age} years old
//       </p>
//       <p>{props.children}</p>
//       <input type="text" onChange={props.change} defaultValue={props.name} />
//     </div>
//   )
// }

// export default Radium(person)
// export default person

// statefull
class Person extends Component {
  render() {
    return (
      <div className={classes.Person}>
        <p onClick={this.props.delete}>
          I'm a {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.change}
          defaultValue={this.props.name}
        />
      </div>
    )

    // return [
    //   <p key='1' onClick={this.props.delete}>
    //     I'm a {this.props.name} and I am {this.props.age} years old
    //   </p>
    //       <p key='2'>{this.props.children} </p>
    //       <input key='3'
    //         type="text"
    //         onChange={this.props.change}
    //         defaultValue={this.props.name}
    //       />
    // ]
  }
}

export default Person
