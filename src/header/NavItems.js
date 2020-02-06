import React from 'react'
import Button from 'react-bootstrap/Button';
import styles from './header.module.css'

function NavItems() {
    return (
     <div>
        <Button>Test bootstrap</Button>
        <div className="testing">testing</div>
        <div className={styles.testing}>modules</div>
     </div>   
    )
}

export default NavItems
