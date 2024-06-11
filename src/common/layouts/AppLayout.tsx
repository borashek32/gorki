import styles from './AppLayout.module.css'
import { ReactElement } from 'react'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'
import { Promo } from '../components/promo/Promo'

type Props = {
  children: ReactElement
}

export const AppLayout = ({
  children,
}: Props) => {
  
  return (
    <div className={styles.wrapper}>
      <Header /> {/* header - menu */}
      <Promo /> {/* promo - address, photo */}
      <main>
        {children}
      </main>
      <Footer /> {/* footer - contacts, qr-code */}
    </div>
  )
}