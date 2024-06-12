/* eslint-disable @next/next/no-img-element */
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {Avatar} from "@nextui-org/react";
import { fjalla } from "../app/ui/fonts";




const Navbarconst = () => {
  return (

    <Navbar shouldHideOnScroll className="navbar">
    <div className="flex gap-3 items-center" >
      {/* avatar */}
    <Avatar isBordered src='/logosolo2.png' size="md"/>
   </div>

      

      <NavbarItem>
        <Link className={`${fjalla.className} LinkSimform`} color="foreground" href="/">
        Simform
        </Link>
      </NavbarItem>



      <NavbarItem>
        <Link className={`${fjalla.className} LinkNavbar`} color="foreground" href="/habilidades">
          Habilidades
        </Link>
      </NavbarItem>
      <NavbarItem >
        <Link className={`${fjalla.className} LinkNavbar`} color="foreground" href="/experiencia">
          Experiencia
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link className={`${fjalla.className} LinkNavbar`} color="foreground" href="/proyectos">
          Proyectos
        </Link>
      </NavbarItem>

      {/* elementos aparte */}

        
      

         <Button className={`${fjalla.className} buttonNavbar2`} variant="solid"  >
          <Link href="https://github.com/JesusMendoza2303">
          
          <img 
          src="/github.png"
          // src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          // src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png"
           alt="githubIcon" 
           className="githubIcon"
           />
           </Link>
        </Button> 
     


      
        <Button className={`${fjalla.className} buttonNavbar2`} variant="solid" >
          <Link href="https://wa.me/+584247084816" className="linkContactame">
          {/* Contactame! */}
          
          <img 
          src="/whatsapp.png"
           alt="githubIcon" 
           className="githubIcon"
           />
          </Link>
          
        </Button>
     


  </Navbar>

  )
}

export default Navbarconst