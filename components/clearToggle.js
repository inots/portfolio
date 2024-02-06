import { useState } from 'react'
import { Switch } from '@headlessui/react'
import styles from '@/styles/ClearToggle.module.css';

const ClearToggle = ({updateClear}) => {
  const [enabled, setEnabled] = useState(false)

  const updateChange = () => {
    setEnabled(!enabled);
    updateClear(!enabled);
  }

  return (
    <div className={styles.container}>
        <span className="">Clear</span>
        <Switch
        checked={enabled}
        onChange={updateChange}
        className={ styles.switch }
        >
        <span
            className={ `${styles.innerSwitch} ${enabled ? styles.innerOn : styles.innerOff}` }
        />
        </Switch>
    </div>
  )
}

export default ClearToggle;