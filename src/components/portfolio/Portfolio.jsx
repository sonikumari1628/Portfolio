import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.png'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png';

const data=[
    {
        id:1,
        image:IMG1,
        title:'Trip Stay APP ',
        github:'https://github.com/sonikumari1628/Booking-App',
        demo:'https://booking-app-h8w1.onrender.com'
    },
    {
        id:2,
        image:IMG2,
        title:'Real Time Messenger',
        github:'https://github.com/sonikumari1628/messenger',
        demo:'https://messenger-snowy.vercel.app'
    },
    {
        id:3,
        image:IMG3,
        title:'Fitness App',
        github:' https://github.com/sonikumari1628/Exercises',
        demo:'https://melodic-basbousa-e4d695.netlify.app'
    }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
            {
                data.map(({id,image,title,github,demo})=>{
                    return(
                        <article key={id} className='portfolio__item'>
                        <div className="portfolio__item-image">
                            <img src={image} alt={title}/>
                        </div>
                        <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                        <a href={github} className='btn' target="blank">Github</a>
                        <a href={demo} className='btn btn-primary' target="blank">Live Demo</a>
                        </div>
                        </article>
                    )
                })
            }

 


        </div>
    </section>
  )
}

export default Portfolio