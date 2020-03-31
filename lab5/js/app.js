/*
this is assignment for JS coding
*/
"use strict"
var firstName;

function max(v1, v2){
    var v;
    if(v1>=v2){
        v=v1;
    }else{
        v=v2;
    }
   return v;
}

function maxOfTree(v1, v2, v3){
    var v;
    if(v1>=v2 && v1>=v3){
        v=v1;
    }
    if(v2>=v1 && v2>v3){
        v=v2;
    }
    if(v3>=v1 && v3>=v1){
        v=v3;
    }
    return v;  
}
function isVowel(charVal){
  var rv=false;
  var vowels = new Array('a', 'i', 'e', 'o', 'u', 'A', 'I', 'E', 'O', 'U');
        for(var i=0;i<10;i++){
            if(vowels[i]==charVal) { rv=true; break; }
        }
    return rv;    
}

function sum(arr){
    var s=0;
    for(var i=0;i<arr.length;i++){
        s=s+arr[i];
    } 
    return s;
}

function multiply(arr){
    var s=1;
    for(var i=0;i<arr.length;i++){
        s*=arr[i];
    } 
    return s;  
}

function reverse(str){
    var rev="";
    for(var j=str.length;j>=0;j--){
        rev=rev+str.charAt(j);
    }
    return rev;
}

function findLongestWords(arr){
    var rm=0;
     for(var i=0;i<arr.length;i++){
         if(arr[i].length>rm) rm=arr[i].length;
     }
     return rm;
}

function filterLongWords(arr, i){
    var retArr=[];
    for(var j=0;j<arr.length;j++){
          if(arr[j].length>=i){
              retArr.push(arr[j]);
          }
    }
    return retArr;
}

function computeSumOfSquares(arr){
    let s = arr.map(element => element*element).reduce((sum,item) => sum+item);
    return s;
}

function printOddNumbersOnly(arr){
    var retArr=[];
    for(var i=0;i<arr.length;i++){
          if(arr[i]%2!=0){
              retArr.push(arr[i]);
          }
    }
    return retArr;
}

function computeSumOfSquaresOfEvensOnly(arr){
    var s=0;
    for(var i=0;i<arr.length;i++){
         if(arr[i]%2==0){
             s+=arr[i]*arr[i];
         }
    }
    return s;
}

function sumReImp(arr){
    return arr.map(el=>el).reduce( (sum,el) => sum+el);
}

function multiplyReImp(arr){
    return arr.map(el=>el).reduce((m,el)=>m*el);
}

function findSecondBiggest(arr){
    var tmp=0;
    var tmp1;
    for(let i=0;i<arr.length;i++){
        if(tmp<arr[i]){
            tmp1=tmp; 
            tmp=arr[i];
        }else if(tmp1<arr[i]){
                 tmp1=arr[i];
        }
    }

    return tmp1;
}

function printFibo(n,a,b){
    var arr=[];
    arr.push(a);
    arr.push(b);   
    for(let i=2;i<n;i++){
        arr.push(arr[i-1]+arr[i-2]);
    } 
    return arr;
}

console.log( "Result of function max(12,1) = " + max(12,1));

console.log("Result of function maxOfTree(1,2,3) ="  + maxOfTree(1,2,3));

console.log("Result of function isVowel('e') = " + isVowel('e'));

console.log("Result of function sum([1,2,3]) = " + sum([1,2,3]));

console.log("Result of function multiply([1,2,3]) = " + multiply([1,2,3]));

console.log("Result of function reverse('abcd') = " + reverse('abcd'));

console.log("Result of function findLongestWords(['a','aa', 'bbb']) = " + findLongestWords(['a','aa', 'bbb']) );

console.log("Result of function filterLongWords(['a','aa', 'bbb'],2) = " + filterLongWords(['a','aa', 'bbb'],2) );

console.log("Result of function computeSumOfSquares([1,2,3,4]) = " + computeSumOfSquares([1,2,3,4]));

console.log("Result of function printOddNumbersOnly([1,2,3,4]) = " + printOddNumbersOnly([1,2,3,4]) );

console.log("Result of function computeSumOfSquaresOfEvensOnly([1,2,3,4]) = " +  computeSumOfSquaresOfEvensOnly([1,2,3,4]) );

console.log("Result of function sumReImp([1,2,3]) = " + sumReImp([1,2,3]));

console.log("Result of function multiplyReImp([1,2,3,5]) = " + multiplyReImp([1,2,3,5]));

console.log("Result of function findSecondBiggest([1,2,3,4]) = " + findSecondBiggest([1,2,3,4]));

console.log("Result of function printFibo(10,0,1) = " + printFibo(10,0,1));