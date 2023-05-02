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
        setCurrentIndex(currentIndex)
      }, 500)
    }
    setTimeout(() => {
      setIsSwitching(false)
    }, 600)
  }
  const goToPrevious = () => {
    setIsSwitching(true)
    if (isFirstSlide === false) {
      setTimeout(() => {
        setCurrentIndex(prev => { return prev - 1 })
      }, 500)
    } else {
      setTimeout(() => {
        setCurrentIndex(currentIndex)
      }, 500)
    }
    setTimeout(() => {
      setIsSwitching(false)
    }, 600)
  }
  return (

    <div className='carousel'>
      <div onClick={isLastSlide ? null : goToNext} className={isLastSlide ? 'switch-btn arrow-next-disabled' : 'switch-btn arrow-next'}>
        <img src={arrow} alt='' />
        <p style={{ rotate: '90deg' }}>{english ? 'Next' : 'Siguiente'}</p>
      </div>
      <div className='images'>
        <img
          src={isFirstSlide ? projects[projectArrayLength]?.video.asset.thumbnail : projects[currentIndex - 1]?.video.asset.thumbnail}
          alt='thumbnail-img' className={isSwitching ? 'thumbnail-notShown-top thumb-anim-top-off ' : 'thumbnail-notShown-top thumb-anim-top '}
        />
        <img
          src={projects[currentIndex]?.video.asset.thumbnail}
          alt='thumbnail-img' className={isSwitching ? 'thumbnail thumb-anim-showned-off' : 'thumbnail thumb-anim-showned'}
        />
        <img
          src={isLastSlide ? projects[0]?.video.asset.thumbnail : projects[currentIndex + 1]?.video.asset.thumbnail}
          alt='thumbnail-img' className={isSwitching ? 'thumbnail-notShown-bottom thumb-anim-bottom-off ' : 'thumbnail-notShown-bottom thumb-anim-bottom '}
        />
      </div>
      <div onClick={isFirstSlide ? null : goToPrevious} className={isFirstSlide ? 'switch-btn arrow-prev-disabled' : 'switch-btn arrow-prev'}>
        <img src={arrow} alt='' />
        <p style={{ rotate: '270deg' }}>{english ? 'Prev' : 'Anterior'}</p>
      </div>
    </div>
  )
}

export default Carousel
