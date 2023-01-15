import ListContact from './components/container/ListContact';
import { useState } from 'react';
import { Contact } from './models/Contact.class';
import CreateContact from './components/forms/CreateContact';

function App() {

  let contact1 = new Contact( "Julio" )
  let contact2 = new Contact( "Pedro" )

  const [contacts,setContacts] = useState( [ contact1,contact2 ] )

  const changeStatus = ( contact ) => {
    const index = contacts.indexOf( contact );
    let newContacts = contacts

    newContacts[ index ].status === "desconectado"
    ? newContacts[ index ].status = "conectado"
    : newContacts[ index ].status = "desconectado"

    setContacts( [ ...newContacts ] )
  }

  const deleteContact = ( contact ) => {
    const index = contacts.indexOf( contact );
    let newContacts = contacts
    newContacts.splice( index,1 )
    setContacts( [ ...newContacts ] )
  }
  
  const createContact = ( nameContact ) => {
    const contact = new Contact( nameContact )
    setContacts( [ ...contacts,contact ] )
  }

  return (
    <div className="App">
      <CreateContact
        createContact={ createContact }
      />
      <ListContact
        contacts = { contacts }
        changeStatus = { changeStatus }
        deleteContact = { deleteContact }
      />
    </div>
  );
}

export default App;
