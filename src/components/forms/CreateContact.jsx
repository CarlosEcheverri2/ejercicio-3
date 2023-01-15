import React, { useRef } from 'react'

const CreateContact = ({ createContact }) => {

  const refName = useRef()

  const getData = ( name ) => {
    createContact( name )
    refName.current.value = "" 
  }

  return (
    <div style={ { margin:'10px' } }>
        <label >Nombre del contacto</label>
        <input ref={ refName } type="text" />
        <button onClick={ () => { getData( refName.current.value ) }}>
            Crear
        </button>
    </div>
  )
}

export default CreateContact