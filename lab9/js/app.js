/*
   assignment 9
*/
"use strict"
//  Question 1
const Person ={
    name: '',
    dateOfBirth: '',
    getName: function(){
        return this.name;
    },
    setName: function(s){
        this.name=s;
    },
    printValues: function(){
        console.log("The person's name is " + this.name)
        console.log(this.name +" was born on " + this.dateOfBirth)
    }
}
let p=Object.create(Person);
p.setName('John')
p.dateOfBirth='1998-12-10'
p.printValues()

// Question 2
const Employee= {
    Salary: 0,
    hireDate: '2020-04-02',
    DoJob: function(s){
       console.log(this.getName() + " is a "+s +" who earns $"+this.Salary )
    },
    __proto__: Person 
}

let emp=Object.create(Employee)
emp.name='Anna';
emp.Salary=parseFloat("249.995.50")

emp.DoJob('Programmer')

// Question 3
class Person1{
    constructor(name, dateOfBirth){
        this.name=name
        this.dateOfBirth=dateOfBirth
    }
    setName=function(s){
        this.name=s.toString()
    }
    getName=function(){
        return this.name
    }
    toString=function(){
        console.log('Name is '+ this.name +", DateOfBirth is "+ this.dateOfBirth)
    }
}

let p1 = new Person1('Peter','1985-11-10')
p1.toString()


