/*  assignment 8   */
/* question 6 */

var count=(function(){
let counter=0;
let add=function(){
    counter+=1;
}
let reset=function(){
    counter=0;
}

let print_val=function(){
    console.log("counter value="+counter);
}    
return {
    add:add,
    reset:reset,
    print_val:print_val
}
})();

count.add()
count.print_val()
count.reset();
count.print_val()


/* question 8 */

const make_adder = function(inc) {
    let counter = 0;
    return function() {
        return counter+=inc;
    }
}
const add5 = make_adder(5);
console.log("After " + add5());
console.log("After " + add5());
console.log("After " + add5());

 /*
    Question 10     
 */       
const Employee=(function(){
    let name;
    let age;
    let salary;

    const setName=function(n){
        name=n;
    }
    const setAge=function(a){
        age=a;
    }
    const setSalary=function(s){
        salary=s;
    }
    const getName=function(){
        return name;
    }
    const getAge=function(){
        return age;
    }
    const getSalary=function(){
        return salary;
    }
    const increaseSalary=function(percentage){
        setSalary( getSalary()+(getSalary()*percentage)/100);
        console.log("after increasing salary:"+getSalary());
    }
    const incrementAge=function(){
        setAge(getAge()+1);
    }
    return {
        setName: setName,
        setSalary: setSalary,
        setAge: setAge,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge
    }
} )();

Employee.setAge(10);
Employee.setSalary(1000);
Employee.increaseSalary(1);

/* Question 11 */
Employee.extension = function(){
    const setAddress = function(){
        console.log("test");
    }
}
Employee.setAddress = function(val){
    this.address = val;
}
Employee.getAddress = function(){
    return this.address;
}
Employee.setAddress("Fairfield,IA,US");
console.log("after setting new address="+Employee.getAddress());


