import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/Contact.class'

const ContactComponent = ({ contact,changeStatus,deleteContact }) => {
  return (

    <tr>
        <td>{ contact.name }</td>
        <td>{ contact.status }</td>
        <td>
            <button onClick={ ()=>{changeStatus( contact )} }>
                change
            </button>
        </td>
        <td>
            <button onClick={ ()=>{deleteContact( contact )}}>
                delete
            </button>
        </td>
        </tr>

  )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf( Contact ).isRequired,
}

export default ContactComponent