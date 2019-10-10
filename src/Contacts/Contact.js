import React from 'react'

function Contact(props){
    return(
        <tr>
            <td>{props.contact.name}</td>
            <td>{props.contact.age}</td>
            <td>{props.contact.email}</td>
        </tr>
    )
}

export default Contact