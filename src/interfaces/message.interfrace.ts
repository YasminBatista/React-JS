export interface IMessage {
    id?:number
    title?: string
    message?: string
    user?:{
        name:string
    }
}