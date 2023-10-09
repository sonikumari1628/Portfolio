import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Skills= () => {
  return (
    <section id='skills'>
      <h5> What Skills I Have</h5>
      <h2> My Skills</h2>
      <div className="container skills__container">
        {/* frontend */}
        <div className='skills__frontend'>
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>HTML5</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>CSS3</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>ReactJS</h4>
              </div>
            </article>
           
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              </div>
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>NextJS</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>TypeScript</h4>
              </div>
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>Material-UI</h4>
              </div>
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>Tailwind</h4>
              </div>
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>Shadcn-UI</h4>
              </div>
            </article>

           
            
            
          </div>
        </div>
        {/* backend */}
        <div className='skills__backend'>
        <h3>Backend Development</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>NodeJS</h4>
              </div>
              
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>ExpressJS</h4>
              </div>
              
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>SQL</h4>
              </div>
              
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>MySQL</h4>
              </div>
              
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>DBMS</h4>
              </div>
              
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>PostgreSQL</h4>
              </div>
              
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>Mongo DB</h4>
              </div>
              
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>Mongoose</h4>
              </div>
              
            </article>

          </div>
          </div>
          {/* otherskills */}
          <div className='skills__otherskills'>
          <h3>Other Skills</h3>
          <div className="skills__content">
            
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4> Data Structure & Algorithms</h4>
              </div>
              
            </article>
          
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>REST API</h4>
              </div>
              
            </article>
            
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>Operating System</h4>
              </div>
              
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>Networking</h4>
              </div>
             
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>UNIX</h4>
              </div>
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>Git</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Skills