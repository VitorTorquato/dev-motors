"use client"

import styles from './error.module.scss'
import Link from "next/link"

export default function Error(){
    return(
        <div className={styles.error}>
            <h1>Ops essa pagina nao existe</h1>

            <Link href='/'>
            Voltar para home
            </Link>
        </div>
    )
}