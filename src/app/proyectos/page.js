/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect } from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { fjalla, kodchasan, pressStart } from '../ui/fonts';
import  AOS  from "aos";
import "aos/dist/aos.css";

const Proyectos = () => {

  useEffect(() => {
    
    AOS.init({
      duration:800,
      once:false,
    })
  }, [])

  return (
    <div className='pageGeneral'>
    
    {/* title */}
    <div data-aos="fade-right">
      <p className={`${pressStart.className} titleProyectos`}>PROYECTOS</p>
    </div>

    {/* sistema de cartas*/}

    <div className='containerProyect'>


    <div data-aos="fade-right">
    <Card className="cardproyectos">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <div data-aos="fade-right">
        <p className={`${fjalla.className} titleCardProyecto text-tiny uppercase font-bold`}>Biblioteca de cartas</p>
        </div>
        <div data-aos="fade-left">
        <p className={`${kodchasan.className} proyectosDescripcion`} >desarrollada con React, Redux y JavaScript</p>
        </div>

        
        
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <div data-aos="fade">
      <img src='/sistemaDeCartas.png'
      alt='Sistema de cartas'
      className='SistemaEducacion'/>
      </div>
      </CardBody>
    </Card>
    </div>

        {/* Sistema de inventario  */}

    <div data-aos="fade-up">
    <Card className="cardproyectos">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <div data-aos="fade-right">
        <p className={`${fjalla.className} titleCardProyecto text-tiny uppercase font-bold`}>Sistema web de Inventario</p>
        </div>
        <div data-aos="fade-left">
        <p className={`${kodchasan.className} proyectosDescripcion`} >desarrollada con PHP y Mysql</p>
        </div>

        
      </CardHeader>
      <CardBody className="overflow-visible py-2">
      <div data-aos="fade">
      <img src='sistemaInventario.png'
      alt='SistemaEducacion'
      className='SistemaEducacion'/>
      </div>
      </CardBody>
    </Card>
    </div>

    {/* sistema de carga de notas */}

    <div data-aos="fade-left">

      <Card className="cardproyectos">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <div data-aos="fade-right">
        <p className={`${fjalla.className} titleCardProyecto text-tiny uppercase font-bold`}>Sistema web de carga de notas </p>
        
        </div>
        <div data-aos="fade-left">
        <p className={`${kodchasan.className} proyectosDescripcion`} >desarrollada con Nextjs y MongoDB</p>
        </div>
        
      </CardHeader>
      <CardBody className="overflow-visible py-2">

      <div data-aos="fade">
      <img src='sistemaEscolar.png'
      alt='SistemaEducacion'
      className='SistemaEducacion'/>
      </div>
      </CardBody>
    </Card>
    </div>
    </div>
    </div>
  )
}

export default Proyectos