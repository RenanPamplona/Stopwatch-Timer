import { Fragment, useState } from 'react'

const Button = (props) => {
   const [pressed, setPressed] = useState(false)

   const buttonStyle = {
      fontSize: '1rem',
      fontWeight: '900',
      color: `#f1f5f9`,
      padding: '1rem 3rem',
      borderRadius: '5px',
      backgroundColor: `${props.color}`,
      border: 'none',
      borderBottom: `solid .5rem ${props.darkerColor}`
   }

   const pressedButtonStyle = {
      fontSize: '1rem',
      fontWeight: '900',
      color: `#f1f5f9`,
      padding: '1rem 3rem',
      borderRadius: '5px',
      backgroundColor: `${props.color}`,
      border: 'none',
      transform: 'translateY(.5rem)'
   }

   return (
      <Fragment>
         <button
            style={pressed ? pressedButtonStyle : buttonStyle}
            onClick={() =>props.handleClick()}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
         >
            {props.title}
         </button>
      </Fragment>
   )
}

export default Button