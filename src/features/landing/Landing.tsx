import { Trainer } from "./trainer/Trainer"
import { Workout } from "./workout/Workout"
import { About } from "./about/About"
import { ChampionsSlider } from "./champions-slider/ChampionsSlider"
import { Gallery } from "./gallery/Gallery"

export const Landing = () => {

  return (
    <>
      <About /> {/* about workout + video from workout */}
      <Workout /> {/* what will be improved during trainings - items list */}
      <ChampionsSlider /> {/* slider with champions */}
      <Gallery /> {/* gallery of photos from training*/}
      <Trainer /> {/* about trainer */}
    </>
  )
}