var arrEmployees;
$.getJSON("https://www.swollenhippo.com/getStaffByAPIKey.php?APIKey=DuffManSays,Phrasing!", function(result){
    console.log(result);
    arrEmployees = result;
   buildEmployeeCard();

})

function buildEmployeeCard(){
    $.each(arrEmployees,function(i,person){
       
            let strHTML = '<div class="card col-3 mt-5 ml-3">';
            strHTML += '<img src="images/profilePlaceholder.png" alt="Profile Image" style="margin:auto; max-width:100%;">';
            strHTML += '<h3 class="text-center"><a href="mailto:' + person.Email + '">' + person.FirstName + ' ' + person.LastName + '</a></h3>';
            strHTML += '<h4 class="text-center">' + person.Title +'</h4>';
            strHTML += '<h4 class="mt-3">Contact Details</h4>';
            strHTML += '<p>Phone Number: ' + person.HomePhone + '</p>';
            strHTML += '<p>Email: ' + person.Email +'</p>';
            strHTML += '<h4 class="mt-3">Address</h4>';
            strHTML += '<p>' + person.StreetAddress1 +'</p>';
            strHTML += '<p>' + person.State + '</p>';
            strHTML += '<h5 class="mt-3">Pay Details<h5>';
            strHTML += '<div></div>'
            strHTML += '<p>Pay Rate:' + person.HourlyWage + '</p>';
            strHTML += '<p class="txtHours" data-rate=">Hours Worked:' + person.Hours + '"</p>';
            strHTML += '<p>Tax Rate: ' + person.TaxRate + '</p>';
            strHTML += '<div class="form-group mt-3">';
            strHTML += '<label>Goal Pay</label>'
            strHTML += '<input class="txtGoalPay">';
            strHTML += '</div>';
            strHTML += '<div class="form-control mt-2">'
            strHTML += '<label> Hours Needed</label'
            strHTML += '<input class="txtHoursNeeded" disabled>'
            strHTML += '</div>'
            strHTML += '<button class="btn btn-primary btnblock btnCalculateGoal">Calculate</button>';
            $('#divEmployeeCards').append(strHTML);
            $('#tblEmployees tbody').append('<tr><td>' + person.FirstName + '</td><td>' + person.LastName + '</td><td>' + person.Title + '</td><td>' + $("#txtTotalPay").val(),'</td></tr>');
        }
        
    );
}

let decHours = $(this).closest('.card').find('.txtHours').val();
let decPayRate= person.HourlyWage;
let txtTotalPay = decHours * decPayRate;
let txtTaxedPay = txtTotalPay * person.TaxRate;
console.log(decHours);

//I had issues with the JS portions of the assignment as well as the CSS scroll feature.