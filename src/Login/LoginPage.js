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
    if(loginPass[0].login===login && loginPass[0].pass===pass){
        window.alert('Successful!!!!!!!!!')
    }
    else {
        window.alert('invalid data')
    }
}

function LoginPage(){
    const [value, setValue] = React.useState({login: '', password: ''});
    let login;
    let pass;

   return(
       <div>
           <div>
             <Header />
           </div>
           <div>
             <form style={styles.form}>
               <input type='text' name='login' placeholder="login"/>
               <input value={value.password} onChange={event => setValue(event.target.value)}/>
               <button type='submit' onClick={() => check(value[0].login, value[0].password)}>submit</button>
             </form>
           </div>

       </div>
   )
}

export default LoginPage