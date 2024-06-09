import { ChangeEvent } from 'react'
import styles from './SwitchButton.module.css'
import sun from './../../assets/img/icons/sun.svg'
import moon from './../../assets/img/icons/moon.svg'

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
      <label className={styles.switch}>
        <input 
          onChange={callback}
          value={value}
          type="checkbox"
          checked={value === 'light'}
        />
        <span className={styles.slider + ' ' + styles.round}>
          <img src={sun} alt="sun" width={20} className={styles.switchImgSun} />
          <img src={moon} alt="moon" width={20} className={styles.switchImgMoon} />
        </span>
      </label>
    </div>
  )
}