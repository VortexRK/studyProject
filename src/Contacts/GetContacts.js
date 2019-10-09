import React from 'react'
import Contact from './Contact'


function GetContacts(props){

    return (
        <table className='table'>
         <tr>
           <th>Name</th>
           <th>Age</th>
           <th>email</th>
         </tr>
         {props.contacts.map(contact => {
             return (<Contact 
                contact={contact}
                key={contact.id}
                />                         
             )
         })}
         
       </table>
    )
}

export default GetContacts