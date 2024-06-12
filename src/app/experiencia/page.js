"use client"
import React, { useEffect } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {Chip} from "@nextui-org/react";
import { chackra, fjalla, kodchasan, pressStart, rowdies, skils } from "../ui/fonts";
import  AOS  from "aos";
import "aos/dist/aos.css";

export default function Experiencia() {

  useEffect(() => {
    
    AOS.init({
      duration:800,
      once:false,
    })
  }, [])

  return (
    <div className="pageGeneral">
     {/* title */}
     <div data-aos="fade-right">
     <p className={`${pressStart.className} titleExperiencia`}>EXPERIENCIA</p>
    </div>

     {/* tabla */}
     <div data-aos="fade-up">
    <Table className="experienciaTable" >
      <TableHeader >
        <TableColumn className={`${skils.className} LinkNavbar text-center tableHeaderExperiencia`}>
        <div  data-aos="fade-right">
         <p className={`tableTitlesColumns`}>  Fecha</p>
        </div>
        </TableColumn>
        <TableColumn className={`${skils.className} LinkNavbar tableHeaderExperiencia`}>
        <div  data-aos="fade-right">
         <p className="tableTitlesColumns"> Role </p>
        </div>
        </TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell  className={`${chackra.className} fecha `}>
        <div data-aos="fade-right">
            11/2022 - 04/2023
          </div>
          </TableCell>
          <TableCell>
          <div data-aos="fade-right">
            <p className={`${fjalla.className} titleTableExperiencia`}>
              Comercializadora María de los Angeles
            </p>
            </div>
            <div data-aos="fade-up">
            <Chip color="secondary" className={` ${skils.className} chips`}>PHP</Chip> 
            <Chip color="primary" className={` ${skils.className} chips`}>MySql</Chip> 
            </div>
            <br/>
            <div data-aos="fade-right">
           <p className={`${kodchasan.className} experienciaDescripcion `}>
            Este proyecto se centro en la creación de un sistema web de inventario, registro de proveedores y registro de ventas para mayor faclilidad de trabajo a los empleados de la distribuidora

            </p>
            </div>


          </TableCell>
          
        </TableRow>
        <TableRow key="2">
          <TableCell className={`${chackra.className} fecha`}>
          <div data-aos="fade-right">
            08/2023 - 11/2023
            </div>
          </TableCell>
          <TableCell>
            <div data-aos="fade-right">
            <p className={`${fjalla.className} titleTableExperiencia`}>U.E. Simon Candiales</p>
            </div>
            <div data-aos="fade-up">
            <Chip color="secondary" className={` ${skils.className} chips`}>NextJs</Chip> 
            <Chip color="success" className={` ${skils.className} chips`}>MongDB</Chip>
            </div> 
            <br/>
            <div data-aos="fade-right">
           <p className={`${kodchasan.className} experienciaDescripcion `}>
            Este proyecto se centro en la creación de un sistema web de carga de estudiantes, carga y edicion de notas para facilitar las tareas de los trabajadores de la unidad educativa
            </p>
            </div>


          </TableCell>
          
        </TableRow>
        <TableRow key="3">
          <TableCell className={`${chackra.className} fecha`}>
          <div data-aos="fade-right">
            04/2023 - 12/2023 
            </div>
          </TableCell>
          <TableCell>
          <div data-aos="fade-right">
          <p className={`${fjalla.className} titleTableExperiencia`}>
            Ozzy Academy
            </p>
            </div>
            <div data-aos="fade-up">
          <Chip color="warning" className={` ${skils.className} chips`}>JavaScript</Chip> 
            <Chip color="primary" className={` ${skils.className} chips`}>React</Chip> 
            <Chip color="secondary" className={` ${skils.className} chips`}>Redux</Chip> 
            <Chip color="success" className={` ${skils.className} chips`}>Node</Chip> 
            <Chip color="success" className={` ${skils.className} chips`}>MongoDB</Chip> 
            </div>
            <br/>

            <div data-aos="fade-right">
            <p className={`${kodchasan.className} experienciaDescripcion `}>

            En dicho proyecto se desarrollo de indicadores en Pine Script, desarrollo de sitio web educativo en donde se centraba en la publicacion de contenido aduiovisual para niños.
            </p>
            </div>


          </TableCell>
          
        </TableRow>
      </TableBody>
    </Table>
    </div>
    </div>
  );
}