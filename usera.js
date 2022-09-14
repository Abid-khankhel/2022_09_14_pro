export default class user{

constructor(name,lastname,age){

    this.name = name;
    this.lastname = lastname;
    this.age = age;
}
print(){

return `the user name is: ${this.name} and user lastname: ${this.lastname} and user age is ${this.age}`

}

}




 function printname(user) {
    return `this is the print name method` + user.name + user.lastname;
}


function printage(age){


return `this is print age method`  + age.age;


}






// export default user;

export {printname,printage};

