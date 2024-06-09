import styles from './Button.module.css'

type Props = {
  type: 'button' | 'submit' | 'reset' | undefined
  size: 'sm' | 'md' | 'lg'
  color: string
  title: string
}

export const Button = ({
  type,
  size,
  color,
  title,
}: Props) => {

  const buttonSize = size === 'sm' 
    ? styles.sm 
    : size === 'md'
    ? styles.md
    : styles.lg

  const buttonColor = color === 'blue'
    ? styles.blue
    : styles.dark 

  const buttonStyles = styles.button + ' ' + buttonSize + ' ' + buttonColor

  return (
    <button
      type={type}
      className={buttonStyles}
    >
      {title}
    </button>
  )
}