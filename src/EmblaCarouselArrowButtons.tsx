import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState
} from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

type PropType = ComponentPropsWithRef<'button'>

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      style={{ padding: '0px' }}
      className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors p-0"
      type="button"
      {...restProps}
    >
      <IoChevronBack 
        className={"p-0 " + (props.disabled ? 'text-gray-300' : 'text-black')} 
        size={32}
      />
      {children}
    </button>
  )
}

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      style={{ padding: '0px' }}
      className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors p-0"
      type="button"
      {...restProps}
    >
      <IoChevronForward 
        className={" " + (props.disabled ? 'text-gray-300' : 'text-black')} 
        size={32}
      />
      {children}
    </button>
  )
}


export const SubmitButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <>
    <button
      style={{ padding: '0px' }}
      className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors p-0"
      type="submit"
      {...restProps}
    >
      Done
    </button>
    </>
    
  )
}