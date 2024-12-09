import { HomeProps } from '@/utils/home.type'
import styles from './styles.module.scss'
import Image from 'next/image'





export function Services({object}:HomeProps){
    return(
        <>
        
        <section id='servicos' className={styles.aboutContainer}> 
            <article className={styles.innerAbout}>
                <h1 className={styles.title}>Sobre</h1>
                <p>{object.metadata.about.description}</p>
            </article>

            <div className={styles.bannerAbout}>
                <Image
                className={styles.imageAbout}
                src={object.metadata.about.banner.url}
                alt="Imagem ilustrativa sobre a empresa"
                quality={100}
                fill={true}
                 sizes='(max-width:480px) 100vw , (max-width:1024) 75vw , 50vw'
                />
            </div>

        
        </section>

        <h2 className={styles.servicesTitle}>Conheca nossos servicos</h2>
            <section className={styles.services}>
                
                {
                    object.metadata.services.map((service) => (
                        <article key={service.description}> 
                                <div className={styles.innerServices}>
                                    <Image
                                    className={styles.imageService}
                                        src={service.image.url}
                                        alt="Imagem ilustrativa do servico"
                                        quality={100}
                                        fill={true}
                                         sizes='(max-width:480px) 100vw , (max-width:1024) 75vw , 50vw'
                                    />
                                </div>
                                <p >{service.description}</p>
                        </article>
                    ))
                }
            </section>
        </>
    )
}