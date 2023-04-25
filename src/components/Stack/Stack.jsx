import React from 'react'
import { Title, SectionTitle, StackTitle } from '../ReusableComponents/Title/Title'
import { StackItem } from '../ReusableComponents/InfoItem/Infoitem'
import DoneIcon from '@mui/icons-material/Done'
import './stack.css'
const Stack = ({ english }) => {
  const SoftSkills = ['Adaptability', 'Problem solving', 'Teamwork', 'Quick Learner', 'Communication', 'Commitment', 'Critical thinking']
  const HabilidadesBlandas = ['Adaptabilidad', 'Resolucion de problemas', 'Trabajo en equipo', 'Aprendizaje rapido', 'Buen comunicador', 'Compromiso', 'Pensamiento critico']
  const languages = ['English: FCE-B2', 'Spanish: Native']
  const idiomas = ['Ingles: FCE-B2', 'Español: Nativo']
  return (
    <div className='Stack'>
      <div className='stack-container'>
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
      <div className='show-stack'>
        <StackTitle
          text={english ? ['Stack and', 'technologies'] : ['Stack y', 'tecnologias']}
          styles='stack-mainTitle'
        />
        <div className='stacks'>
          <div className='stacks1-container'>
            <label> Current <strong style={{ fontWeight: '400', color: '#4E9F3D' }}>Stack</strong></label>
            <div className='stack-item'>
              <img className='stacked-img' src='../public/images/stackImgs/mongo.png' alt='mongo-img' />
              <span>MongoDB</span>
            </div>
            <div className='stack-item'>
              <img className='stacked-img' src='../public/images/stackImgs/node.png' alt='node-img' />
              <span>Node.js</span>
            </div>
            <div className='stack-item'>
              <img className='stacked-img' src='../public/images/stackImgs/express.png' alt='express-img' />
              <span>Express.js</span>
            </div>
            <div className='stack-item'>
              <img className='stacked-img' src='../public/images/stackImgs/js.png' alt='js-img' />
              <span>JavaScript</span>
            </div>
            <div className='stack-item'>
              <img className='stacked-img' src='../public/images/stackImgs/react.png' alt='react-img' />
              <span>React.js</span>
            </div>
          </div>
          <div className='stacks2-container'>
            <label> Back<strong style={{ fontWeight: '400', color: '#4E9F3D' }}>end</strong></label>
            <div className='stack-item'>
              <img className='stacked-img' src='../public/images/stackImgs/mongo.png' alt='mongo-img' />
              <span>MongoDB</span>
            </div>
            <div className='stack-item'>
              <img className='stacked-img' src='../public/images/stackImgs/node.png' alt='node-img' />
              <span>Node.js</span>
            </div>
            <div className='stack-item'>
              <img className='stacked-img' src='../public/images/stackImgs/express.png' alt='express-img' />
              <span>Express.js</span>
            </div>
            <div className='stack-item'>
              <img className='stacked-img' src='../public/images/stackImgs/java.svg' alt='js-img' />
              <span>Java</span>
            </div>
            <div className='stack-item'>
              <img className='stacked-img' src='../public/images/stackImgs/springboot.svg' alt='react-img' />
              <span>SpringBoot</span>
            </div>
            <div className='stack-item'>
              <img className='stacked-img' src='../public/images/stackImgs/mysql.png' alt='react-img' />
              <span>My SQL</span>
            </div>
            <div className='stack-item'>
              <img className='stacked-img' src='../public/images/stackImgs/aws.svg' alt='react-img' />
              <span>AWS</span>
            </div>
          </div>
          <div className='stacks3-container'>
            <label> Front<strong style={{ fontWeight: '400', color: '#4E9F3D' }}>end</strong></label>
            <div className='stack-item'>
              <img className='stacked-img' src='../public/images/stackImgs/react.png' alt='react-img' />
              <span>React.js</span>
            </div>
            <div className='stack-item'>
              <img className='stacked-img' src='../public/images/stackImgs/angular.svg' alt='express-img' />
              <span>Angular</span>
            </div>
            <div className='stack-item'>
              <img className='stacked-img' src='../public/images/stackImgs/sass.png' alt='node-img' />
              <span>SASS</span>
            </div>
            <div className='stack-item'>
              <img className='stacked-img' src='../public/images/stackImgs/js.png' alt='js-img' />
              <span>JavaScript</span>
            </div>
            <div className='stack-item'>
              <img className='stacked-img' src='../public/images/stackImgs/typescript.png' alt='mongo-img' />
              <span>TypeScript</span>
            </div>
            <div className='stack-item'>
              <img className='stacked-img' src='../public/images/stackImgs/api.png' alt='mongo-img' />
              <span>Context API</span>
            </div>
          </div>
          <div className='stacks4-container'>
            <label> Extra <strong style={{ fontWeight: '400', color: '#4E9F3D' }}>Tools</strong></label>
            <div className='stack-item'>
              <img className='stacked-img' src='../public/images/stackImgs/canva.png' alt='node-img' />
              <span>Canva</span>
            </div>
            <div className='stack-item'>
              <img className='stacked-img' src='../public/images/stackImgs/postman.png' alt='express-img' />
              <span>Postman</span>
            </div>
            <div className='stack-item'>
              <img className='stacked-img' src='../public/images/stackImgs/material.svg' alt='js-img' />
              <span>Material UI</span>
            </div>
            <div className='stack-item'>
              <img className='stacked-img' src='../public/images/github.png' alt='react-img' />
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stack
