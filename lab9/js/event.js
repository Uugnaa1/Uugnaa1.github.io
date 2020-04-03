"use strict"

$(function(){
    
    $('#contactForm').submit(function( event ) {
        event.preventDefault();
        var fieldPair = {};
        $(this).find("input").each(function(){
            fieldPair[$(this).attr("name")] = $(this).val();
        });
        console.log(fieldPair);
    });
    $('#productForm').submit(function( event ) {
        event.preventDefault();
        let fieldPair = "";
        $(this).find("input").each(function(){
            fieldPair += $(this).attr("name") + " : " + $(this).val() + "<br/>";
        });
        $(this).after($("<div>",{
            "class":"alert alert-success",
            "html":fieldPair
        }));    
    });
});