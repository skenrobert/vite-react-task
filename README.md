# ***vite-react-task***

use Vite because is a manager Next Generation Frontend Tooling, working with many framework: 

See create-vite for more details on each supported template: vanilla, vanilla-ts, vue, vue-ts, react, react-ts,
react-swc, react-swc-ts, preact, preact-ts, lit, lit-ts, svelte, svelte-ts.

# ***this is small app, only try show Built-in React Hooks as:***

State Hooks
* useState is a React Hook that lets you add a state variable to your component.
const [state, setState] = useState(initialState);

* useEffect is a React Hook that lets you synchronize a component with an external system.
useEffect(setup, dependencies?)

* useContext is a React Hook that lets you read and subscribe to context from your component.
allow have anything useState, useEffect, etc. within reach every application, no need send any variable into
the component, them call what you need. 

note: is more fast develoment if use emmet for react as (VScode), only show 4:

1. clg => console.log()
2. imp => import second from 'first'
3. rfce => import React from 'react'

function test() {
  return (
    <div>test</div>
  )
}
export default test


4. rfcredux => import React from 'react'
import { connect } from 'react-redux'

export const test = (props) => {
  return (
    <div>test</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(test)
