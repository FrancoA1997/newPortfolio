import React, { useState } from 'react'
import { Title, SectionTitle, StackTitle } from '../ReusableComponents/Title/Title'
import { StackItem } from '../ReusableComponents/InfoItem/Infoitem'
import { urlFor } from '../../client'
import DoneIcon from '@mui/icons-material/Done'
import './stack.css'
const Stack = ({ english, stack, mobileViewToggle }) => {
  const SoftSkills = ['Adaptability', 'Problem solving', 'Teamwork', 'Quick Learner', 'Communication', 'Commitment', 'Critical thinking']
  const HabilidadesBlandas = ['Adaptabilidad', 'Resolucion de problemas', 'Trabajo en equipo', 'Aprendizaje rapido', 'Buen comunicador', 'Compromiso', 'Pensamiento critico']
  const languages = ['English: FCE-B2', 'Spanish: Native']
  const idiomas = ['Ingles: FCE-B2', 'Español: Nativo']
  const handleNav = (text) => {
    setFilter(text)
  }
  const [filter, setFilter] = useState('currentStack')
  return (
    <div className='Stack'>
      <div className={mobileViewToggle ? 'unmountedStack stack-container' : 'mountedStack stack-container'}>
        <SectionTitle
          styles='section-stack-title'
          text={english ? 'Stack' : 'Tecnologias'}
        />
        <Title
          text={english ? 'Soft-Skills' : 'Habilidades blandas'}
          styles='info-stack-title'
        />
        <StackItem
          stackedText={english ? SoftSkills : HabilidadesBlandas}
          styles='info-item-stack'
          icon={<DoneIcon fontSize='small' className='info-icon' />}
        />
        <Title styles='info-stack-title' text={english ? 'Languages' : 'Idiomas'} />
        <StackItem
          english={english}
          stackedText={english ? languages : idiomas}
          icon={<DoneIcon fontSize='small' className='info-icon' />}
          styles='info-item-stack'
        />
      </div>
      <div className={mobileViewToggle ? 'mountedStack show-stack' : 'unmountedStack show-stack'}>
        <StackTitle
          text={english ? ['Stack and', 'Technologies'] : ['Stack y', 'Tecnologias']}
          styles='stack-mainTitle'
        />
        <div className='stack-nav'>
          <span onClick={() => handleNav('currentStack')} className={filter === 'currentStack' ? 'span-selected' : 'default-span'}>Current Stack</span>
          <span onClick={() => handleNav('frontend')} className={filter === 'frontend' ? 'span-selected' : 'default-span'}>Frontend</span>
          <span onClick={() => handleNav('backend')} className={filter === 'backend' ? 'span-selected' : 'default-span'}>Backend</span>
          <span onClick={() => handleNav('extra')} className={filter === 'extra' ? 'span-selected' : 'default-span'}>Extra Tools</span>
        </div>
        <div className='stacks'>
          <div className={filter === 'currentStack' ? 'stack-visible stacks1-container' : 'stacks1-container'}>
            <label> Current <strong style={{ fontWeight: '400', color: '#176add' }}>Stack</strong></label>
            {stack[0]?.images.map((stack, index) => (
              <div key={index} className='stack-item'>
                <img className='stacked-img' src={urlFor(stack)} alt={stack.alt} />
                <span>{stack.alt}</span>
              </div>
            ))}
          </div>
          <div className={filter === 'backend' ? 'stack-visible stacks2-container' : 'stacks2-container'}>
            <label> Back<strong style={{ fontWeight: '400', color: '#4E9F3D' }}>end</strong></label>
            {stack[3]?.images.map((stack1, index) => (
              <div key={index} className='stack-item'>
                <img className='stacked-img' src={urlFor(stack1)} alt={stack1.alt} />
                <span>{stack1.alt}</span>
              </div>
            ))}
          </div>
          <div className={filter === 'frontend' ? 'stack-visible stacks3-container' : 'stacks3-container'}>
            <label> Front<strong style={{ fontWeight: '400', color: '#ae7ede' }}>end</strong></label>
            {stack[2]?.images.map((stack2, index) => (
              <div key={index} className='stack-item'>
                <img className='stacked-img' src={urlFor(stack2)} alt={stack2.alt} />
                <span>{stack2.alt}</span>
              </div>
            ))}
          </div>
          <div className={filter === 'extra' ? 'stack-visible stacks4-container' : 'stacks4-container'}>
            <label> Extra <strong style={{ fontWeight: '400', color: '#c8772b' }}>Tools</strong></label>
            {stack[1]?.images.map((stack3, index) => (
              <div key={index} className='stack-item'>
                <img className='stacked-img' src={urlFor(stack3)} alt={stack3.alt} />
                <span>{stack3.alt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stack
