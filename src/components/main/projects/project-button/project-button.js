import React from "react";

import styles from './project-button.module.scss';
import PropTypes from 'prop-types'

function ProjectButton(props) {
    return (
        <div className={styles.buttonStyle}>
            {props.children}
        </div>
    )
}

ProjectButton.propTypes = {

}

export default ProjectButton;