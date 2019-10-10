import React from 'react'
import Header from '../Header/Header'

const styles = {
    form: {
        marginLeft: '100px',
        marginRight: 'auto',
        marginTop: '7%'
    }
}

const loginPass = [ {id:1, login: 'Admin', pass: 'test1A'}]

function check(login, pass){
    if(loginPass[0].login === login && loginPass[0].pass === pass){
        window.alert('Successful!!!!!!!!!')
    }
    else {
        window.alert('invalid data')
    }
}

function LoginPage(){
    const [login, setLogin] = React.useState('');
    const [pass, setPass] = React.useState('');

   return(
       <div>
           <div>
             <Header />
           </div>
           <div>
             <form style={styles.form}>
               <input value={login} onChange={event => setLogin(event.target.value)} placeholder="login"/>
               <br/>
               <br/>
               <input value={pass} onChange={event => setPass(event.target.value)} placeholder="password" type='password' maxLength='15'/>
               &nbsp;
               <button type='submit' onClick={() => check(login, pass)}>submit</button>
             </form>
           </div>
       </div>
   )
}

export default LoginPage