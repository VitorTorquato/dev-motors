import {Suspense} from 'react';
import { PostProps } from '@/utils/post.type'

import { getItemBySlug } from '@/utils/actions/get-data'


import {Metadata} from 'next'
import { Content } from './components/content'

import { LoadingPost } from './components/loading';

import { PageProps } from 'next';

export async function generateMetadata({params:{slug}} :{
    params : {slug:string}
}): Promise<Metadata>{


    try{
        
        const {objects}:PostProps = await getItemBySlug(slug)
        .catch(() => {
            return{
                title: "Dev motors - sua oficina especializada",
                description: "Oficina de carros personalizada",
            }
        })

        return{
            title: `DevMotor - ${objects[0].title}`,
            description: `${objects[0].metadata.description.text}`,
            openGraph:{
                title: "Dev motors - sua oficina especializada",
                images: [objects[0].metadata.banner.url],
              },
              robots:{
                index:true,
                follow:true,
                nocache:true,
                googleBot:{
                  index:true,
                  follow:true,
                  noimageindex:true
                }
              }

        }

    }catch(error){
        return{
            title: "Dev motors - sua oficina especializada",
            description: "Oficina de carros personalizada",
        }
    }

}

interface CustomPageProps extends PageProps {
    params: {
      slug: string;
    };
  }
  
  export default function Page({ params }: CustomPageProps) {
    const { slug } = params;


    //const {objects}:PostProps = await getItemBySlug(slug)

    

    
    return(
        <>
        <Suspense fallback={<LoadingPost/>}>
           <Content slug={slug}/>
        </Suspense>
        </>
    )
}