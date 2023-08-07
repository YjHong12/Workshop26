import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);

    useEffect(() => {
      async function fetchSelectedContact() {
        try {
          if (selectedContactId !== null) {
            const response = await fetch(
              `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
            );
            const result = await response.json();
            // console.log(contact)
            setContact(result);
          }
        } catch (error) {
          console.error(error);
        }
      }
      fetchSelectedContact();
    }, [selectedContactId]);

    if (contact === null) {
      return <div>No contact selected</div>;
    }
    return (
      <div>
        <h2>Contact Details</h2>
        <p>Name: {contact.name}</p>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        <button onClick={() => setSelectedContactId(null)}>Back to List</button>
      </div>
    );
  }