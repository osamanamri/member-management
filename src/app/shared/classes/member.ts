export class Member {
  private _name:string;
  private _dni:string;

  constructor(){};

  public get name(){
    return this._name;
  }
  public get dni(){
    return this._dni;
  }
  public set name(name){
    this._name = name;
  }
  public set dni(dni){
    this._dni = dni;
  }

}
