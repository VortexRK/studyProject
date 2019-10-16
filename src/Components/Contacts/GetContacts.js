import React from "react";
import Contact from "./Contact";

function GetContacts(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>email</th>
        </tr>
      </thead>
      {props.contacts.map((contact) => {
        return <Contact contact={contact} key={contact.id} visible={props.visible} setContact={props.setContact} />;
      })}
    </table>
  );
}

export default GetContacts;
