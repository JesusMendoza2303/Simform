import React from 'react'
import { pressStart, skils, squada } from '../app/ui/fonts'

const Footer = () => {
  return (
    <div  className='footer'>
      
      <p  className={`${pressStart.className} autoresTitle`}>Autores:</p>

      <div className='divAutores'>
      <p className={`${ squada.className } autores`}> Jesus Mendoza </p> 

      <p className={`${skils.className} cedula`}>CI: 30.056.274</p>
      </div>

      <div className='divAutores'>

      <p className={`${ squada.className } autores`}> Moises Bermudez</p> 

      <p className={`${skils.className} cedula`}>CI: 30.261.733</p>

      </div>

      <div className='divAutores'>

      <p className={`${ squada.className } autores`}> Marlon Contreras </p> 

      <p className={`${skils.className} cedula`}>CI: 30.201.159</p>

      </div>

      <div className='divAutores'>

      <p className={`${ squada.className } autores`}> Ramses Jaimes </p> 

      <p className={`${skils.className} cedula`}>CI: 29.905.102</p>

      </div>
      <div className='divAutores'>

      <p className={`${ squada.className } autores`}> SID4A </p> 

      <p className={`${skils.className} cedula`}>FORMACION CRITICA IV</p>

      </div>

      <br/>



    </div>
  )
}

export default Footer