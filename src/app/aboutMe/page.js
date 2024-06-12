/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { fjalla, pressStart, teko } from '../ui/fonts'

const AboutMe = () => {
  return (
    <div className='pageGeneralMe'>

      <div className='principalArea'>

        {/* logo empresa */}

    <div data-aos="fade-right">
    <img src='/logoequisde.png'
    alt='logo'
    className='logoCompleto'/>
    </div> 

    <div className={` textareaMe`}>
      {/* title */}
     <div data-aos="fade-left">
     <p className={`${pressStart.className} titleAboutMe`}>ACERCA DE NOSOTROS</p>
    </div>

      

      <div data-aos="fade-up">

          <p className={`${teko.className} descriptionMe`}>
          En Desarrollo Web Dinámico, somos una empresa vanguardista dedicada 
          a crear sistemas web personalizados para pequeños negocios, con el objetivo de 
          potenciar su presencia online y su rendimiento en el mercado. Ofrecemos diseño web 
          único, soluciones de e-commerce, optimización SEO y soporte técnico constante,
          todo con la misión de ser el aliado estratégico que trabaja junto a ti para el
          crecimiento de tu negocio, garantizando que con nosotros, darás un paso gigante
          hacia la revolución digital y el éxito</p>
      </div>
      
      </div>
      </div>

       

      
    </div>
  )
}

export default AboutMe