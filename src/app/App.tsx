import './App.css'
import { About } from '../features/about/About'
import { Footer } from '../common/components/footer/Footer'
import { Header } from '../common/components/header/Header'
import { Gallery } from '../features/gallery/Gallery'
import { Promo } from '../features/promo/Promo'
import { ChampionsSlider } from '../features/champions-slider/ChampionsSlider'
import { Workout } from '../features/workout/Workout'
import { Trainer } from '../features/trainer/Trainer'
import { ThemeProvider } from '../common/providers/theme/ThemeProvider'


function App() {

  return (
    <ThemeProvider>
      <div className={'wrapper'}>
        <Header /> {/* header - menu */}
        <main>
          <Promo /> {/* promo - address, photo */}
          <About /> {/* about workout + video from workout */}
          <Workout /> {/* what will be improved during trainings - items list */}
          <ChampionsSlider /> {/* slider with champions */}
          <Gallery /> {/* gallery of photos from training*/}
          <Trainer /> {/* about trainer */}
        </main>
        <Footer /> {/* footer - contacts, qr-code */}
      </div>
    </ThemeProvider>
  )
}
export default App
