import {Suspense} from 'react';
import { PostProps } from '@/utils/post.type'

import { getItemBySlug } from '@/utils/actions/get-data'


import { Content } from './components/content'

import { LoadingPost } from './components/loading';
import {Metadata} from 'next'


export async function generateMetadata(
    props:{
        params : Promise<{slug:string}>
    }
): Promise<Metadata> {
    const params = await props.params;

    const {
        slug
    } = params;


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


  
  
  export default async function Page(props) {
      const params = await props.params;


      //npx @next/codemod@canary next-async-request-api 




      return(
          <>
          <Suspense fallback={<LoadingPost/>}>
             <Content slug={params.slug}/>
          </Suspense>
          </>
      )
  }