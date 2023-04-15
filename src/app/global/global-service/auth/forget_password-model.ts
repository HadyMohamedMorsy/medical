export class UserForget{
  constructor(
    private id : number,
    private expire_in : string | Date
  ){}

  get expire(){
    if(!this.expire_in || new Date(this.convertTime()) > new Date(this.expire_in)){
      console.log('null');
      return null;
    }
    return {
      id : this.id,
      expire_in : this.expire_in
    }
  }

  get getId(){
    return this.id;
  }

  private convertTime(){
    const now = new Date();
    const year = now.getFullYear();
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const day = ('0' + now.getDate()).slice(-2);
    let hours = now.getHours();
    const minutes = ('0' + now.getMinutes()).slice(-2);
    const seconds = ('0' + now.getSeconds()).slice(-2);
    // hours = hours % 12;
    // hours = hours ? hours : 12;
    hours = hours;
    const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedTime
  }
}
