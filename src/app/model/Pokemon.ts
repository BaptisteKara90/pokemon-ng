import { typeWithParameters } from "@angular/compiler/src/render3/util"

export class Pokemon{
    public id:number
    public name:number
    public type: any
    public image: sprites
    public height: number | undefined
    public weight:number | undefined

    constructor(id:number, name:number, type: any, image: sprites, height: number | undefined, weight:number | undefined){
        this.id = id
        this.name = name
        this.type = type
        this.image = image
        this.height = height
        this.weight = weight
    }
}

export interface sprites{
    front_default:string
    back_default:string
}