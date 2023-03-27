export interface Login {
  username : string,
  password : string,
  remember? : boolean,
  email?: 'string',
}

export enum LoginForm {
  username = '',
  password = '',
}

export interface Authentication {
  errors ?  : null | string ;
  message ? :   string;
  result?   :   {
    token : token,
    user : user
  };
  status? : number
}

export interface token {
  access_token? : string,
  expires_in? : Date,
  token_type? : string
}

export interface user {
  Last_Name? : string,
  First_Name? : string,
  National_Id? : number,
  Birthday? : Date,
  Address? : string | null,
  Phone_Number : number,
  Age? : number,
  Created_Date? : Date,
  Deleted_Date? : Date | null,
  Full_Name? : string,
  ID? : number,
  Other_Details? : string | null,
  Updated_Date? : Date,
  User_Type? : string,
  Username? : string
}
