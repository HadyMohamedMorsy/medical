export function Messages(MessageExist : any){
    if(MessageExist.id){
        return {
            message : 'the data is inserted on row Table',
            status : 200
        }
    }else{
        return {
            message : 'the data is not inserted on row Table',
            status : 404
        }
    }
}