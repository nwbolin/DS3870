var arrEmployees;
$.getJSON("https://www.swollenhippo.com/getEmployeesByAPIKey.php?APIKey=Mickey2021!", function(result){
    console.log(result);
    arrEmployees = result;
    $.each(result,function(i,person){
        console.log(person.FirstName);
        console.log(person.FirstName + ' ' + person.LastName);
        $('#txtEmail').val(person.Email);
    })
})

function buildEmployeeCard(){
    let strHTML= '<div class="card mt-5 col-6 offset-3">';
    strHTML += '<h3 class="text-center mt-3"><a href="mailto:nwbolin42@tntech.edu">' + person.FirstName + person.LastName +'</a> </h3>';
    strHTML += '<h4 class="text-center">'+ person.Postion + '</h4>';
    strHTML += '<h4 class="mt-3">Profile Details</h4>';
    strHTML += ' <p>Hourly Rate:' + person.HourlyRate + '</p>';
    strHTML += ' <p>Address: 321 Peach Tree Lane, Cookeville, TN 38501</p>';
    strHTML += '<p>Assignment: Johnson Hall</p>';
    strHTML += '<div class="form-group">';
    strHTML += '    <label for="txtPayRate">Pay Rate</label>';
    strHTML += '    <input id="txtPayRate">';
    strHTML += ' </div>';
    $('body').append(strHTML);
}

$('#btnTest').click(function() {
    const decTaxRate = .0925;
    let decHours = $('#txtHours').val();
    let decRate = $('#txtPayRate').val();
    console.log(decHours * decRate);
});
$('#txtPayRate').change(function(){
    if($('#cboEmployeeType').val() == 'FULL'){
        //$('#divHours').slideUp();
        // $('#divHours').css('display','none');
         $('#divHours').addClass('d-none');
    }else{
        $('#divHours').slideDown();
    }