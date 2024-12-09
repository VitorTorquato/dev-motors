"use client"

import Link from 'next/link'
import styles from './styles.module.scss'


import {X,Menu} from 'lucide-react'
import { useEffect, useState } from 'react';
import { MenuProps } from '@/utils/menu.types';



interface SubMenuProps{
    menu:MenuProps
}

export function SubMenu({menu} : SubMenuProps){
   
   const [isOpen,setIsOpen] = useState(false);




   function toggleMenu() {
    setIsOpen(!isOpen)
   }


   useEffect(() => {
        const handleResize = () => {
                if(window.innerWidth > 768){
                    setIsOpen(false)
                }
        }

        window.addEventListener("resize" , handleResize)


        return () => window.removeEventListener("resize" , handleResize)

   }, [])
   
    return(
        <section className={styles.submenu}>

            <div onClick={toggleMenu} className={styles.subMenuIcon}>
                <Menu  size={34} color='#121212'/>
                Menu
            </div>

            <ul className={`${styles.ul} ${isOpen ? styles.open : ''}`}>

                {isOpen && (
                    <button
                    className={styles.closeMenu}
                    onClick={toggleMenu}>
                        <X size={54} color='#121212'/>
                    </button>
                )}
                
                {
                    menu.objects.map(item => (
                        
                <li key={item.title}>
                <Link href={`/post/${item.slug}`}>
                   {item.title}
                </Link>                    
            </li>
                    ))
                }

              
            </ul>

        </section>
    )
}