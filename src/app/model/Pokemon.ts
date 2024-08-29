import { typeWithParameters } from "@angular/compiler/src/render3/util"

export class Pokemons{
    public id:number
    public name:number
    public type: any
    public image: string
    public height: number | undefined
    public weight:number | undefined

    constructor(id:number, name:number, type: any, image: string, height: number | undefined, weight:number | undefined){
        this.id = id
        this.name = name
        this.type = type
        this.image = image
        this.height = height
        this.weight = weight
    }
}