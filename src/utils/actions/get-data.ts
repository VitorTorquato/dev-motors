import { redirect } from "next/navigation";


// function delay(ms:number){
//     return new Promise(resolve => setTimeout(resolve,ms))
// }

export async function getDataHome(){
    try{

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/675079be4eaf9a736887f7c5?pretty=true&read_key=${process.env.READ_KEY_SECRET}&depth=1&props=slug,title,metadata,type` , {next: {revalidate:120}})

        if(!res.ok){
            throw new Error("Failed to fetch data")
        }

        return res.json()

    }catch(error){
        throw new Error("Failed to fetch data")
    }
}


export async function getSubMenu(){

    try{

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY_SECRET}&depth=1&props=slug,title` ,{next:{revalidate:120}})

        if(!response.ok){
            throw new Error("Failed to fetch data")
        }

        return response.json()

    }catch(error){
        throw new Error("Failed to fetch data")
    }
}


///objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=tkjaUioMX7Ua7Yt85CoXpyqcvVRE1YHLivdiLsEXT0Qdow4vuN&depth=1&props=slug,title,


export async function getItemBySlug(itemSlug:string){
        const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects/`


        //definindo o objecto de consuta pelo slug

        const queryParams = new URLSearchParams({
            query:JSON.stringify({
                slug: itemSlug
            }),
            props: 'slug,title,metadata',
            read_key : process.env.READ_KEY_SECRET as string
        })


        const url = `${baseUrl}?${queryParams.toString()}`;


        try{


            //await delay(3000)
            
            const response = await fetch(url, {next:{revalidate:120}})

            if(!response.ok){
                throw new Error("Failed to fetch data")
            }

            return response.json();
        }catch(error){
            //console.log(error)
            redirect('/')
        }
}