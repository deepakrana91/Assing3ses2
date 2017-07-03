
// defining the class containg name and a valid member ( if valid =1 then name is valid else name is invalid)
export class person {

    name:string;
    valid:number;


   // will work as a set function and provide data to the members
    constructor(name:string,valid:number){

        this.name=name;
        this.valid=valid;
    }

  //will work as a getter function to check whether name is valid or not and return the same
    isvalid():string{
        
        if( this.valid==1)
        return `Username ${this.name} is a valid user`;

        else

        return `The User is not valid`;
    }
    
}