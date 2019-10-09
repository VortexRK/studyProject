import React from 'react'

const styles = {
    nav: {
        navRight: 'auto'
    }
}

function Header(){
    return(
        <header className='header'>
            <nav style={styles.nav}>                
                <a href='#s'>Home</a> &nbsp;&nbsp;                
                <a href='#s'>Contacts</a> &nbsp;&nbsp; 
                <a href='#s'>Profile</a>
            </nav>
        </header>
    )
}

export default Header