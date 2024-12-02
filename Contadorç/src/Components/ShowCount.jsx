import React from 'react'
import PropTypes from 'prop-types'
import './ShowCount.css'

function ShowCount({ count, increment, decrement }) {
  // Mensaje dinámico basado en el valor de `count`
  const getMessage = () => {
    if (count === 0) return '¡Empieza a contar!'
    if (count > 0 && count < 10) return '¡Sigue sumando!'
    if (count >= 10) return '¡Wow, qué alto!'
    if (count < 0) return '¡Estás en números negativos!'
  }

  return (
    <div className='show-count'>
      <p>{getMessage()}</p> {/* Mensaje dinámico */}
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement} disabled={count <= -10}>
        Decrementar
      </button>
    </div>
  )
}

// Validación de props con PropTypes
ShowCount.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

export default ShowCount
