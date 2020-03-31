window.onload = function(){
    document.getElementById("textDecoratorBtn").onclick = biggerDecorator;
    document.getElementById("bling").onchange = changeFontWeight;
    document.getElementById("MalBtn").onclick=funcMal;
	"use strict";
    
    function biggerDecorator(){ 
        /* alert("Hello World"); */
        //var fs=document.getElementById("textDecorator").style.fontSize;
        //
        var el = document.getElementById('textDecorator');
        var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
        var fontSize = parseFloat(style); 
        document.getElementById("textDecorator").style.fontSize=(fontSize+2) +"pt";
    
        var myVar = setInterval(function(){biggerDecorator()},500);
     }

	function biggerFont() {
		var textArea = document.getElementById("text-decorations");
		var size = parseInt(textArea.style.fontSize) ? parseInt(textArea.style.fontSize) : 12;
		size += 2;
  		textArea.style.fontSize =  size + "pt";
	}

	function changeFontWeight() {
        if (document.getElementById("bling").checked){
            document.getElementById("textDecorator").style.textDecoration="underline"; 
            document.getElementById("textDecorator").style.fontWeight="bold";
            document.getElementById("textDecorator").style.color="green";
            document.body.style.backgroundImage="url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        }else{
            document.getElementById("textDecorator").style.fontWeight="normal";
            document.getElementById("textDecorator").style.color="initial"
            document.getElementById("textDecorator").style.textDecoration="none";
            document.body.style.backgroundImage='';
        }
	}

    function funcMal(){
        var words = [];
        words=document.getElementById("textDecorator").value.split(/\s/);
        for(let i=0;i<words.length;i++){
            if(words[i].length>=5){
                words[i]='Malcovitch';
            }
        }

        var arr=[];
        for(let i=0;i<words.length;i++){
            if(words[i]!='')arr.push(words[i]);
        }
        document.getElementById("textDecorator").value='';
        var s="";
        for(let i=0;i<arr.length;i++){
            s=s+" " + arr[i];
        }
        document.getElementById("textDecorator").value=s;
    }

};