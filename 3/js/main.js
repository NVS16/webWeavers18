$(document).ready(function() {

    var ctr = 0;




    $("#add").click(function() {
        var val = $("#input").val();
        if(val !== "") {
            ctr++;
            $("#list").append("<tr><td>" + val +  "</td><td><input type='checkbox' id = " + ctr + " ></td></tr>");
        }
        else 
            alert("Form Field Empty!");
    });

    $(document).on('change', 'input[type="checkbox"]', function(e){
        console.log(e.target);
        var id = $(e.target).attr("id");
        document.getElementById(id).disabled = true;
        $(e.target).parent().parent().addClass('checked');
    });

    $(".complete").on('click', function() {
        alert("hello");
        alert($(this).attr("id"));
    });

});