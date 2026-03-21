import React from 'react'

const Buttons = (props) => {
  return (
    <button className={props.className}>
      {props.text}
    </button>
  )
}

export default Buttons
