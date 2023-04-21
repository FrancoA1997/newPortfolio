import React from 'react'
import './stack.css'
const Stack = () => {
  return (
    <div className='Stack'>
      <div className='stack-container'>
        <div className='title'>
          Stack
        </div>
      </div>
      <div className='show-stack'>
        <div className='stack-mainTitle'>
          Stack and <p style={{ color: '#4E9F3D', paddingLeft: '10px' }}>technologies</p>
        </div>
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
