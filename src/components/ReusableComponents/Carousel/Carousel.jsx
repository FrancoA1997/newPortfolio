import React, { useEffect, useState } from 'react'
import './carousel.css'
import arrow from '../../../../public/images/arrow.png'
const Carousel = ({ isSwitching, setIsSwitching, english, projects, currentIndex, setCurrentIndex, setProjectDisplayed }) => {
  const [isLastSlide, setIsLastSlide] = useState(false)
  const [isFirstSlide, setIsFirstSlide] = useState(true)
  const projectArrayLength = projects.length - 1
  useEffect(() => {
    setIsLastSlide(currentIndex === projects.length - 1)
    setIsFirstSlide(currentIndex === 0)
    setProjectDisplayed(projects[currentIndex])
  }, [currentIndex])

  const goToNext = () => {
    setIsSwitching(true)
    if (isLastSlide === false) {
      setTimeout(() => {
        setCurrentIndex(prev => { return prev + 1 })
      }, 500)
    } else {
      setTimeout(() => {
        setCurrentIndex(0)
      }, 500)
    }
    setTimeout(() => {
      setIsSwitching(false)
    }, 800)
  }
  const goToPrevious = () => {
    setIsSwitching(true)
    if (isFirstSlide === false) {
      setTimeout(() => {
        setCurrentIndex(prev => { return prev - 1 })
      }, 500)
    } else {
      setTimeout(() => {
        setCurrentIndex(projectArrayLength)
      }, 500)
    }
    setTimeout(() => {
      setIsSwitching(false)
    }, 800)
  }
  return (

    <div className='carousel'>
      <div onClick={goToNext} className='switch-btn arrow-next'>
        <img src={arrow} alt='' />
        <p>{english ? 'Next' : 'Siguiente'}</p>
      </div>
      <div className='images'>
        <div>
          <img
            onClick={goToPrevious}
            src={isFirstSlide ? projects[projectArrayLength]?.video.asset.thumbnail : projects[currentIndex - 1]?.video.asset.thumbnail}
            alt='thumbnail-img' className={isSwitching ? 'thumbnail-notShown-top thumb-anim-top-off ' : 'thumbnail-notShown-top thumb-anim-top '}
          />
          {english
            ? <span className='thumbnail-top-text'>{isFirstSlide ? projects[projectArrayLength].title : projects[currentIndex - 1]?.title}</span>
            : <span className='thumbnail-top-text'>{isFirstSlide ? projects[projectArrayLength].titulo : projects[currentIndex - 1]?.titulo}</span>}
        </div>
        <img
          src={projects[currentIndex]?.video.asset.thumbnail}
          alt='thumbnail-img' className={isSwitching ? 'thumbnail thumb-anim-showned-off' : 'thumbnail thumb-anim-showned'}
        />
        <img
          onClick={goToNext}
          src={isLastSlide ? projects[0]?.video.asset.thumbnail : projects[currentIndex + 1]?.video.asset.thumbnail}
          alt='thumbnail-img' className={isSwitching ? 'thumbnail-notShown-bottom thumb-anim-bottom-off ' : 'thumbnail-notShown-bottom thumb-anim-bottom '}
        />
        {english
          ? <span className='thumbnail-bottom-text'>{isLastSlide ? projects[0]?.title : projects[currentIndex + 1]?.title}</span>
          : <span className='thumbnail-bottom-text'>{isLastSlide ? projects[0]?.titulo : projects[currentIndex + 1]?.titulo}</span>}

      </div>
      <div onClick={goToPrevious} className='switch-btn arrow-prev'>
        <img src={arrow} alt='' />
        <p>{english ? 'Prev' : 'Anterior'}</p>
      </div>
    </div>
  )
}

export default Carousel
