$(document).ready(function(){
    // Set div display to none
    $(".hide-btn").click(function(){
        $("#myDiv").css("display", "none");
    });
    
    // Set div display to block
    $(".show-btn").click(function(){
        $("#myDiv").css("display", "block");
    });
});