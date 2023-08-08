import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) { // {pickMyId, myId}
    const [contact, setContact] = useState({})

    useEffect(() => {
      async function fetchSelectedContact() {
        try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);            //${myId}
            const result = await response.json();
            setContact(result);
        } catch (error) {
          console.error(error);
        }
      }
      fetchSelectedContact(); //calls selected function
    }, []); // [] empty dependency array bc not choosing selected contact

    return (
      <div>
        <h2>Contact Details</h2>
        <p>Name: {contact.name}</p> 
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        <div>
          Address:           {/* ? means if address has data look for street/city/zipcode  */}
          <p>{contact.address?.street}</p> 
          <p>{contact.address?.city}</p>
          <p>{contact.address?.zipcode}</p>
        </div>
        <button onClick={() => setSelectedContactId(null)}>Back to List</button>
      </div>
    );
  }