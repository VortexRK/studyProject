import React from "react";
import "./contact.css";

function Contact(props) {
  function handleClick() {
    props.setContact({
      id: props.contact.id,
      name: props.contact.name,
      age: props.contact.age,
      email: props.contact.email,
    });
    props.visible();
  }

  return (
    <tbody>
      <tr onClick={handleClick}>
        <td>{props.contact.name}</td>
        <td>{props.contact.age}</td>
        <td>{props.contact.email}</td>
      </tr>
    </tbody>
  );
}

export default Contact;
