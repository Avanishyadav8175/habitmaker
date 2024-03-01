import React from 'react'
import styles from './Parent.module.css'
export default function Parent({children}) {
  return (
    <div className={styles.parent}>
      {children}
    </div>
  )
}
