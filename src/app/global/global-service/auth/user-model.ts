export class User {
  constructor(
     public user : string | undefined,
     public role : string | undefined,
     private _token : string | undefined ,
     private _token_type : string | undefined ,
     private _expires_in : Date | undefined
    )
  {}

  get token() : string | null{
    if(!this._expires_in || new Date(this.convertTime()) > new Date(this._expires_in)){
      return null;
    }
    return `${this._token}`;
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
