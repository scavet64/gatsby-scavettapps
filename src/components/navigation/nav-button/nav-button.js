import React from 'react'

import styles from './nav-button.module.scss';

const scrollToRef = (ref) => {
    var element = document.getElementById(ref);
    element.scrollIntoView({ behavior: "smooth" });
}

function NavButton({ content, scrollingTo }) {
    return (
        <div onClick={() => scrollToRef(scrollingTo)} className={styles.menuButton}>
            {content}
        </div>
    )
}

NavButton.propTypes = {

}

export default NavButton

