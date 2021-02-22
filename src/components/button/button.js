import React from "react";

import styles from './button.module.scss';
import PropTypes from 'prop-types'

function ButtonComponent(props) {
    return (
        <div id="getStartedButton" className={styles.buttonStyle}>
            {props.children}
        </div>
    )
}

ButtonComponent.propTypes = {

}

export default ButtonComponent;