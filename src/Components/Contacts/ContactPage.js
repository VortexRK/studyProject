import React from "react";
import GetContacts from "./GetContacts";
import SideDrawer from "../SideDrawer/SideDrawer";
import BackDrop from "../BackDrop/BackDrop";
import "./contact.css";

function ContactPage() {
  const [contacts, changeContacts] = React.useState([
    { id: 1, name: "Sasha", age: 20, email: "something@gmail.com" },
    { id: 2, name: "Jack", age: 31, email: "anything@gmail.com" },
    { id: 3, name: "Kelly", age: 25, email: "nothing@gmail.com" },
    { id: 4, name: "Victor", age: 28, email: "everything@gmail.com" },
    { id: 5, name: "Kate", age: 19, email: "something32123@gmail.com" },
  ]);

  const [contact, setData] = React.useState([{}]);

  const [drawer, changeState] = React.useState(false);
  function visible() {
    changeState(!drawer);
  }
  let openDrawer;
  let closeDrawer;
  if (drawer) {
    openDrawer = <SideDrawer contact={contact} />;
    closeDrawer = <BackDrop click={visible} />;
  }
  return (
    <div>
      <GetContacts contacts={contacts} visible={visible} setContact={setData} />
      {openDrawer}
      {closeDrawer}
    </div>
  );
}

export default ContactPage;
