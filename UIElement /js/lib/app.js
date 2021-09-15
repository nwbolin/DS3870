var arrEmployees;
$.getJSON("https://www.swollenhippo.com/getEmployeesByAPIKey.php?APIKey=Mickey2021!", function(result){
    console.log(result);
    arrEmployees = result;
    buildEmployeeCard();
    $.each(result,function(i,person){
        console.log(person.FirstName);
        console.log(person.FirstName + ' ' + person.LastName);
        $('#txtEmail').val(person.Email);
    })
})

function buildEmployeeCard(){
    $.each(arrEmployees,function(i,person){
            let strHTML = '<div class="card col-3 ml-4 mt-5">';
            strHTML += '<h3 class="text-center"><a href="mailto:' + person.Email + '">' + person.FirstName + ' ' + person.LastName + '</a></h3>';
            strHTML += '<h4 class="text-center">' + person.Postion +'</h4>';
            strHTML += '<h4 class="mt-3">Profile Details</h4>';
            strHTML += '<h5 class="HourlyRate"> Hourly Rate:' + person.HourlyRate + '</h5>';
            strHTML += '<p>Email: '+ person.Email +'</p>';
            strHTML += '<p>Date Hired:  ' + person.HireDate +'</p>';
            strHTML += '<div class="form-group">';
            strHTML += '<label class="txtHours">Hours Worked</label>';
            strHTML += '<input class="txtHours">';
            strHTML += '<label class="txtPayCheck">Total</label>';
            strHTML += '<input class="txtPayCheck" placeholder="Hours worked * Pay rate" disabled="">'
            strHTML += '<button class="btn btn-primary btn-block btnCalculate">Calculate</button>'
            strHTML += '</div>';
            strHTML += '</div>';
            $('#divEmployeeCards').append(strHTML);
        
        
    });
}





