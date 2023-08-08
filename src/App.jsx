import React, { useState } from "react";
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from "./components/SelectedContact"; 

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null); // null because anticipating number value and null = empty number/string

  return (
    <>
      {
        selectedContactId ? ( //if variable is not null it will render selected

            // Selected Contact View 
            <SelectedContact
            selectedContactId={selectedContactId}
            setSelectedContactId={setSelectedContactId}
          />
        //    <SelectedContact
        //     myId={selectedContactId}
        //     pickMyId={setSelectedContactId}
        //   /> 

        ) : (
          <ContactList setSelectedContactId={setSelectedContactId} /> //<ContactList chosenId={setSelectedContactId} />
        )
      }
    </> 
  )
}