import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Services } from "@/components/home/services";
import { SubMenu } from "@/components/home/subMenu";
import { HomeProps } from "@/utils/home.type";
import { MenuProps } from "@/utils/menu.types";

import {Phone} from 'lucide-react'

import { getDataHome } from "@/utils/actions/get-data";
import { getSubMenu } from "@/utils/actions/get-data";

export default async function Home() {

  const {object}:HomeProps = await getDataHome()
  const menu:MenuProps = await getSubMenu();

  


  //console.log(object)

  //console.log(JSON.stringify(data,null,2))

  return (
   <main>
    {
      menu.objects.length > 0 &&  <SubMenu menu={menu}/>
    } 

     <Hero
      heading={object.metadata.heading}
      buttonTitle={object.metadata.cta_button.titulo_do_botao}
      buttonUrl={object.metadata.cta_button.url}
      bannerUrl={object.metadata.banner.url}
      icon={<Phone size={24} color="#FFF"/>}
     />

     <Container>
        <Services
        object={object}
        />
        <Footer
        object={object}
        />
     </Container>

     
   </main>
  );
}
