function printUserInfoToConsole(){
    var email=document.getElementById("inputEmail1").value;
    var pass=document.getElementById("inputPassword1").value;
    var url=document.getElementById("inputUrl").value;
    console.log("email is " + email + ", password is " + pass + " website url is " + url);
}

function showProductInfo(){
    var productNumber = document.getElementById("inputNumber").value;
    var productName = document.getElementById("inputName").value;
    var unitPrice = document.getElementById("inputUnitPrice").value;
    var inputQuantity= document.getElementById("inputQuantity").value;
    var supplier = document.getElementById("inputSupplier").value;
    var date = document.getElementById("inputDateSupplied").value;
    alert("Product Number is " + productNumber +", Name is " + productName + 
    ", Unit Price is " + unitPrice +", Quantity in Stock is " + inputQuantity +
    ", Supplier is " +supplier +", Date Supplied is " +date );
}