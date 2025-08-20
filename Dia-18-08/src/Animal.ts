export class Animal {

    protected name:string
    protected weigth:number

    constructor(name:string,weigth:number){
        this.name = name
        this.weigth = weigth
    }

    eat():void{
        console.log(`${this.name} is eating.`)
    }
}