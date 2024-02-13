import React from 'react'
import styles from '../Components/PageHeading.module.css'

function PageHeading(props) {
  return (
    <>
        {/* if we give margin bottom in PageHeading.modules.css */}
        <h2 className={`flexCenter ${styles.title} header`} > {props.children} </h2>
                              {/* OR */}
        {/* <h2 className={`${styles.title} mb-3`}>{props.children}</h2> */}
    </>
  )
}

export default PageHeading
