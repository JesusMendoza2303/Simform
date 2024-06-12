/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect } from 'react'
import {Button, Link} from "@nextui-org/react";
import { brawler, chackra, exo, fjalla, pressStart, rowdies, skils, squada } from "../app/ui/fonts";
import Habilidades from './habilidades/page';
import Experiencia from './experiencia/page';
import Proyectos from './proyectos/page';
import { motion } from "framer-motion"
import  AOS  from "aos";
import "aos/dist/aos.css";
import AboutMe from './aboutMe/page';


//  export const metadata = {
//    title: "Gabriel Mendoza Portfolio",
//    description: "Generated by create next app",
//  };

const HomePage = () => {

  
  useEffect(() => {
    
    AOS.init({
      duration:800,
      once:false,
    })
  }, [])

  return (
    <div className='pageGeneral'>
    
      <div className='titleArea'>
        <div className={` textarea`}>
          
       
      <div data-aos="fade-up">
      <p className={`${squada.className} Simform`}>
      
        SIMFORM
      </p>
        </div>
      
      <div data-aos="fade-up">
      <p className={`${pressStart.className} title2`}>
        TU EXITO NUESTRO CODIGO
      </p>
      <p className={`${skils.className} title3`}>
        Diseñando soluciones, construyendo éxitos
      </p>
      <div data-aos="fade">
        
      <Button className={`${chackra.className} butonRedes`} >
        <Link  className='botonPrincipal'
         href='https://www.linkedin.com/in/jesus-gabriel-mendoza-arraiz-2a0838300/overlay/1712281489089/single-media-viewer/?profileId=ACoAAE0CipgBy2OoPgJ9E9ObxrpXrE3zZXVYsMc'>
      Instagram

      </Link>

      </Button>

      <Button className={`${chackra.className} butonRedes`} >
        <Link  className='botonPrincipal'
         href='https://www.linkedin.com/in/jesus-gabriel-mendoza-arraiz-2a0838300/overlay/1712281489089/single-media-viewer/?profileId=ACoAAE0CipgBy2OoPgJ9E9ObxrpXrE3zZXVYsMc'>
      Facebook

      </Link>

      </Button>

      <Button className={`${chackra.className} butonRedes`} >
        <Link  className='botonPrincipal'
         href='https://www.linkedin.com/in/jesus-gabriel-mendoza-arraiz-2a0838300/overlay/1712281489089/single-media-viewer/?profileId=ACoAAE0CipgBy2OoPgJ9E9ObxrpXrE3zZXVYsMc'>
      Tiktok

      </Link>

      </Button>
      </div>
      <div data-aos="fade">
        


      </div>

      </div>

      </div>
      
      <div data-aos="fade-left">

      <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzZvYXk2dTc3ZWZpdjBhZmRxaGg1a3JhNGx3ZHBvMGw4MTA3eWpmMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif'
      alt='gif'
      className='gif'/>
      </div>
      
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
     
    <AboutMe/> 

    <Habilidades/>


   
    <Experiencia/>
    

    
    <Proyectos/>
   
      

    </div>
  )
}

export default HomePage