'use client'
import React, { useEffect } from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Progress} from "@nextui-org/react";
import { fjalla, kodchasan, pressStart } from "../ui/fonts";
import  AOS  from "aos";
import "aos/dist/aos.css";

const Habilidades = () => {

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
     <p className={`${pressStart.className} titleHabilidades`}>HERRAMIENTAS</p>
     </div>

    <div className="containerCard">

     {/*  Java Script  */}

     <div data-aos="fade-right">
    <Card className="card">
      <CardHeader className="flex gap-3">
      <div data-aos="fade-right">
        <Image
          alt="JavaScriptLogo"
          height={40}
          radius="md"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          width={40}
        />
        </div>
        <div className="flex flex-col">
        <div data-aos="fade-right">
          <p className={`${fjalla.className} titleTableExperiencia`}>JavaScript</p>
          </div>
          {/* <p className="text-small text-default-500">nextui.org</p> */}
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
      <div data-aos="fade-up">
        <p className={`${kodchasan.className} habilidadesDescripcion `}> lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas</p>
        </div>
      </CardBody>
      <Divider/>
      <CardFooter>
        
      <Progress
      
      aria-label="Downloading..."
      size="md"
      value='90'
      color="warning"
      showValueLabel={true}
      className="max-w-md"
    />
        
      </CardFooter>
    </Card>
    </div>

    {/* react */}
    <div data-aos="fade-up">

     <Card className="card">
     <CardHeader className="flex gap-3">
     <div data-aos="fade-right">
       <Image
         alt="ReactLogo"
         height={40}
         radius="md"
         src="https://cdn.worldvectorlogo.com/logos/react-1.svg"
         width={40}
       />
       </div>
       <div className="flex flex-col">
       <div data-aos="fade-right">
         <p className={`${fjalla.className} titleTableExperiencia`}>React</p>
         </div>
         {/* <p className="text-small text-default-500">nextui.org</p> */}
       </div>
     </CardHeader>
     <Divider/>
     <CardBody>
     <div data-aos="fade-up">
       <p className={`${kodchasan.className} habilidadesDescripcion `}>  Biblioteca de JavaScript diseñada para construir interfaces de usuario en aplicaciones web</p>
       </div>
     </CardBody>
     <Divider/>
     <CardFooter>
       
     <Progress
     
     aria-label="Downloading..."
     size="md"
     value='80'
    color="primary"
     showValueLabel={true}
     className="max-w-md"
     />
       
     </CardFooter>
   </Card>
     </div>

     {/* PHP */}

   <div data-aos="fade-left">
     <Card className="card">
     <CardHeader className="flex gap-3">
     <div data-aos="fade-right">
       <Image
         alt="PHPLogo"
         height={40}
         radius="md"
         src="https://logowik.com/content/uploads/images/php.jpg"
         width={40}
       />
       </div>
       <div className="flex flex-col">
       <div data-aos="fade-right">
         <p className={`${fjalla.className} titleTableExperiencia`}>PHP</p>
         </div>
         {/* <p className="text-small text-default-500">nextui.org</p> */}
       </div>
     </CardHeader>
     <Divider/>
     <CardBody>
     <div data-aos="fade-up">
       <p className={`${kodchasan.className} habilidadesDescripcion `}>Lenguaje de programación para desarrollo web backend.</p>
       </div>
     </CardBody>
     <Divider/>
     <CardFooter>
       
     <Progress
     
     aria-label="Downloading..."
     size="md"
     value='60'
    color="secondary"
     showValueLabel={true}
     className="max-w-md"
   />
       
     </CardFooter>
   </Card>
    </div>

   {/* redux */}

   <div data-aos="fade-left">
     <Card className="card">
     <CardHeader className="flex gap-3">
     <div data-aos="fade-right">
       <Image
         alt="ReduxLogo"
         height={40}
         radius="md"
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWLBe-VaJIYEbmTPrm1XyFy35MInioRpbpKK48hmPbj-m8TCYEG_GSIUZZIpXNuTqG-U&usqp=CAU"
         width={40}
       />
       </div>
       <div className="flex flex-col">
       <div data-aos="fade-right">
         <p className={`${fjalla.className} titleTableExperiencia`}>Redux</p>
         </div>
         {/* <p className="text-small text-default-500">nextui.org</p> */}
       </div>
     </CardHeader>
     <Divider/>
     <CardBody>
     <div data-aos="fade-up">
       <p className={`${kodchasan.className} habilidadesDescripcion `}> Biblioteca de JavaScript que maneja estados de una aplicación, proporciona un estado global para toda la aplicación</p>
       </div>
     </CardBody>
     <Divider/>
     <CardFooter>
       
     <Progress
     
     aria-label="Downloading..."
     size="md"
     value='90'
    color="secondary"
     showValueLabel={true}
     className="max-w-md"
   />
       
     </CardFooter>
   </Card>
   </div>

   {/* node */}

   <div data-aos="fade-right">
     <Card className="card">
     <CardHeader className="flex gap-3">
     <div data-aos="fade-right">
       <Image
         alt="NodeLogo"
         height={40}
         radius="md"
         src="https://static-00.iconduck.com/assets.00/nodejs-icon-2048x2048-rueyo8fw.png"
         width={40}
       />
       </div>
       <div className="flex flex-col">
       <div data-aos="fade-right">
         <p className={`${fjalla.className} titleTableExperiencia`}>Node</p>
         </div>
         {/* <p className="text-small text-default-500">nextui.org</p> */}
       </div>
     </CardHeader>
     <Divider/>
     <CardBody>
     <div data-aos="fade-up">
       <p className={`${kodchasan.className} habilidadesDescripcion `}>Entorno de ejecución de JavaScript orientado a eventos asíncronos, diseñados para construir aplicaciones en red escalables</p>
       </div>
     </CardBody>
     <Divider/>
     <CardFooter>
       
     <Progress
     
     aria-label="Downloading..."
     size="md"
     value='50'
    color="success"
     showValueLabel={true}
     className="max-w-md"
   />
       
     </CardFooter>
   </Card>
    </div>

    {/* maria db */}

   <div data-aos="fade-up">
     <Card className="card">
     <CardHeader className="flex gap-3">
     <div data-aos="fade-right">
       <Image
         alt="mariaDBLogo"
         height={40}
         radius="md"
         src="https://logodix.com/logo/1886499.png"
         width={40}
       />
       </div>
       <div className="flex flex-col">
       <div data-aos="fade-right">
         <p className={`${fjalla.className} titleTableExperiencia`}>Maria DB</p>
         </div>
         {/* <p className="text-small text-default-500">nextui.org</p> */}
       </div>
     </CardHeader>
     <Divider/>
     <CardBody>
     <div data-aos="fade-up">
       <p className={`${kodchasan.className} habilidadesDescripcion `}>MariaDB Server es un sistema de gestión de bases de datos relacionales de código abierto.</p>
       </div>
     </CardBody>
     <Divider/>
     <CardFooter>
       
     <Progress
     
     aria-label="Downloading..."
     size="md"
     value='80'
     color="danger"
     showValueLabel={true}
     className="max-w-md"
   />
       
     </CardFooter>
   </Card>
   </div>

   {/* next */}
   <div data-aos="fade-up">
     <Card className="card">
     <CardHeader className="flex gap-3">
     <div data-aos="fade-right">
       <Image
         alt="NextLogo"
         height={40}
         radius="md"
         src="https://logowik.com/content/uploads/images/nextjs7685.logowik.com.webp"
         width={40}
       />
       </div>
       <div className="flex flex-col">
       <div data-aos="fade-right">
         <p className={`${fjalla.className} titleTableExperiencia`}>NextJs</p>
         </div>
         {/* <p className="text-small text-default-500">nextui.org</p> */}
       </div>
     </CardHeader>
     <Divider/>
     <CardBody>
     <div data-aos="fade-up">
       <p className={`${kodchasan.className} habilidadesDescripcion `}>Framework de React que simplifica el fetching de datos, enrutamiento, renderizado y optimizaciones para el desarrollo web, empleable para desarrollo Frontend y Backend</p>
       </div>
     </CardBody>
     <Divider/>
     <CardFooter>
       
     <Progress
     
     aria-label="Downloading..."
     size="md"
     value='50'
     color="default"
     showValueLabel={true}
     className="max-w-md"
   />
       
     </CardFooter>
   </Card>
   </div>

   

   {/* mongodb */}

   <div data-aos="fade-right">
     <Card className="card">
     <CardHeader className="flex gap-3">
     <div data-aos="fade-right">
       <Image
         alt="MongoLogo"
         height={40}
         radius="md"
         src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png"
         width={40}
       />
       </div>
       <div className="flex flex-col">
       <div data-aos="fade-right">
         <p className={`${fjalla.className} titleTableExperiencia`}>Mongo DB</p>
         </div>
         {/* <p className="text-small text-default-500">nextui.org</p> */}
       </div>
     </CardHeader>
     <Divider/>
     <CardBody>
     <div data-aos="fade-up">
       <p className={`${kodchasan.className} habilidadesDescripcion `}>Software de base de datos NoSQL que gestiona información orientada a documentos, empleada para almacenar volúmenes masivos de datos. A diferencia de una base de datos relacional SQL tradicional.</p>
       </div>
     </CardBody>
     <Divider/>
     <CardFooter>
       
     <Progress
     
     aria-label="Downloading..."
     size="md"
     value='90'
     color="success"
     showValueLabel={true}
     className="max-w-md"
   />
       
     </CardFooter>
   </Card>
    </div>

   

   {/* mysql */}

    <div data-aos="fade-left">
     <Card className="card">
     <CardHeader className="flex gap-3">
     <div data-aos="fade-right">
       <Image
         alt="mysqlLogo"
         height={40}
         radius="md"
         src="https://www.liveagent.com/app/uploads/2020/11/MySQL-Logo.png"
         width={40}
       />
       </div>
       <div className="flex flex-col">
       <div data-aos="fade-right">
         <p className={`${fjalla.className} titleTableExperiencia`}>MySql</p>
         </div>
         {/* <p className="text-small text-default-500">nextui.org</p> */}
       </div>
     </CardHeader>
     <Divider/>
     <CardBody>
     <div data-aos="fade-up">
       <p className={`${kodchasan.className} habilidadesDescripcion `}>MySQL es un sistema open source de administración de bases de datos que es desarrollado y soportado por Oracle.</p>

       </div>
     </CardBody>
     <Divider/>
     <CardFooter>
       
     <Progress
     
     aria-label="Downloading..."
     size="md"
     value='80'
     color="primary"
     showValueLabel={true}
     className="max-w-md"
   />
       
     </CardFooter>
   </Card>
   </div>
   
   </div>
   </div>
  );

}

export default Habilidades




  
