function compute()
{
    //Declare all necessary references from html file
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);

    //If entered amount is zero or negative
    if(principal <= 0){
        alert("Enter a positive number");
        document.getElementById("amount").innerHTML="<mark>Amount </mark>";     //Set focus on the amount/principal box
        document.getElementById("result").innerHTML="";                         //Clear result
    }
    else{
        //Display result
        document.getElementById("result").innerHTML="If you deposit <mark>"+principal+
        "</mark>,\<br\>at an interest rate of <mark>"+rate+
        "%</mark>\<br\>You will receive an amount of <mark>"+interest+
        "</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>";

        document.getElementById("amount").innerHTML="<unmark>Amount </unmark>";     //Clear formatting for the amount/principal box
    }
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";      //Update rate slider
}
        