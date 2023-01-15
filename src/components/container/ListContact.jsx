import React from 'react'
import ContactComponent from '../ContactComponent'

const ListContact = ({ contacts,changeStatus,deleteContact }) => {
    
  return (

    <div style={ { margin:'10px' } }>
        <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
              <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {contacts.map(( contact ) => {
                    return <ContactComponent 
                              contact={ contact }
                              changeStatus={ changeStatus }
                              deleteContact = { deleteContact }
                              key = { contacts.indexOf( contact ) } 
                            />
                  })}
        </tbody>
      </table>
    </div>
  )
}

export default ListContact