import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  SubmitButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  slides: React.ReactNode[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="lg:max-w-2/3 mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {slides.map((slide, index) => (
            <div className="flex-[0_0_100%] min-w-0" key={index}>
              <div>{slide}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <div className="flex justify-end">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          {!nextBtnDisabled && <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />}
          {nextBtnDisabled && <SubmitButton />}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
