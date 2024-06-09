import { ChangeEvent } from 'react'
import styles from './SwitchButton.module.css'

type Props = {
  onClick: (value: string) => void
  value: string
}

export const SwitchButton = ({
  onClick,
  value,
}: Props) => {

  const callback = (e: ChangeEvent<HTMLInputElement>) => {
    onClick(e.currentTarget.value);
  }

  return (
    <div className={styles.switchWrapper}>
      <p>{value === 'light'
        ? 'на темную сторону'
        : 'на светлую сторону'
      }</p>
      <label className={styles.switch}>
        <input 
          onChange={callback}
          value={value}
          type="checkbox"
          checked={value === 'light'}
        />
        <span className={styles.slider + ' ' + styles.round}></span>
      </label>
    </div>
  )
}