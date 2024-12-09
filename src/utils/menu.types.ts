import { title } from "process"

export interface MenuProps{
    objects:ItemMenuProps[]
}


interface ItemMenuProps{
    slug:string;
    title:string
}