import React from 'react';
import GetContacts from './GetContacts'
import Header from '../Header/Header'

function ContactPage() {
  const [contacts, changeContacts] = React.useState([
    {id: 1, name: 'Sasha', age: 20, email: 'something@gmail.com'},
    {id: 2, name: 'Jack', age: 31, email: 'anything@gmail.com'},
    {id: 3, name: 'Kelly', age: 25, email: 'nothing@gmail.com'},
    {id: 4, name: 'Victor', age: 28, email: 'everything@gmail.com'},
    {id: 5, name: 'Kate', age: 19, email: 'something32123@gmail.com'},
  ])

  const[visible, changeVisible] = React.useState(true)

  function Visible(){      
    changeVisible(!visible)      
    }

    let v = [];
    if(!visible){
        v.push('hide')  
    }

  return (
    <div>
       <div>
         <Header />
       </div>
       <div>
         <GetContacts contacts={contacts}/>
       </div>
       <div className={v.join(' ')}>
           something checkt
       </div>
       <div>
           <button type='button' onClick={() => Visible() }>click me</button>
       </div>
    </div>
  );
 
}

export default ContactPage
