import React from "react";

export default function ContactRow({ setSelectedContactId, contact }) { //({ bubbles, pickId })
    const handleClick = () => {
      setSelectedContactId(contact.id);
    };
    return (
    <tr
    onClick={() => {          //triggering a function
      setSelectedContactId(contact.id); //pickId(bubbles.id)
    }}
  >
        <td>{contact.name}</td>     {/* bubbles.name */}
        <td>{contact.email}</td>    {/* bubbles.email */}
        <td>{contact.phone}</td>    {/* bubbles.phone */}
      </tr>
    );
  }
