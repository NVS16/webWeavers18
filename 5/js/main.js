$(document).ready(function() {

    var ctr = 0;

    var items = [
        {
            name : "Roti",
            price : 8,
            discount : 0.1
        },
        {
            name : "Rice",
            price : 30,
            discount : 0.1
        },
        {
            name : "Dal",
            price : ,
            discount : 
        },
        {
            name : "",
            price : ,
            discount : 
        },
        {
            name : "",
            price : ,
            discount : 
        },
        {
            name : "",
            price : ,
            discount : 
        },
        {
            name : "",
            price : ,
            discount : 
        },
        {
            name : "",
            price : ,
            discount : 
        },
        {
            name : "",
            price : ,
            discount : 
        },
        {
            name : "",
            price : ,
            discount : 
        },
        {
            name : "",
            price : ,
            discount : 
        }
    ];


    $(".").click(function() {
        var val = $("#input").val();
        if(val !== "") {
            ctr++;
            $("#list").append("<tr><td>" + val +  "</td><td><button class='btn btn-warning complete' id=" + ctr + "'>Complete</button></td></tr>");
        }
        else 
            alert("Form Field Empty!");
    });


    $(".complete").on('click', function() {
        alert("hello");
        alert($(this).attr("id"));
    });

});