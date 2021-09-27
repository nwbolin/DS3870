var arrAgents;
$.getJSON("https://www.swollenhippo.com/getProfileDetailsByAPIKey.php?APIKey=DuffManSays,Phrasing!", function(result){
    console.log(result);
    arrAgents = result;
   buildAgentCard();
   buildAddInfoCard();
})

var arrPayStubs;
$.getJSON("https://www.swollenhippo.com/getPayStubsByAPIKey.php?APIKey=DuffManSays,Phrasing!", function(result){
    console.log(result);
    arrPayStubs = result;
   buildPayTable();
})


   function buildAgentCard(){
    $.each(arrAgents,function(i,person){
       
            let strHTML = '<div class="card row ">';
            strHTML += '<img src="images/profilePlaceholder.png" alt="Profile Image style="margin:auto;max-width:100%;">';
            strHTML += '<h3 class="text-center"><a href="mailto:' + person.Email + '">' + person.FirstName + ' ' + person.LastName + '</a></h3>';
            strHTML += '<h4 class="mt-1">Codename: '+ person.CodeName +'</h4>';
            strHTML += '<h4 class="mt-1">Billing Agency: '+ person.Agency +'</h4>';
            strHTML += '<h4 class="mt-1">Position: ' + person.Job + '</h4>';
            strHTML += '<h4 class="mt-1">Hire Date: ' + person.HireDate + '</h4>';
            strHTML += '<button type="button" class="btn btn-primary mb-2" id="btnAddInfo">Toggle Contact Details</button>';
            $('#divAgentCards').append(strHTML);
            $('#tblAgents tbody').append('<tr><td>' + payStub.Month + '</td><td>' + person.LastName + '</td><td>' + person.Title + '</td><td>' + '</td></tr>');
        }
        
    )};

    function buildAddInfoCard(){
        $.each(arrAgents,function(i,person){
           
                let strHTML = '<div class="card row text-wrap" id="divAdditionalInfo">';
               strHTML = '<h4 class="mt-1"><a href"mailto:'+ person.email +'">Email: ' + person.Email +'</h4>';
               strHTML = '<h4 class="mt-1">Phone: ' + person.Phone +'</h4>';
               strHTML = '<h4 class="mt-2">Street Address: ' + person.Address +'</h4>';
               strHTML = '<h4 class="mt-1">City: ' + person.City +'</h4>';
               strHTML = '<h4 class="mt-1">State: ' + person.State +'</h4>';
               strHTML = '<h4 class="mt-1">Zip Code: ' + person.Zip +'</h4>';
               strHTML = '<h4 class="mt-2">Emergency Contact: ' + person.Econtact +'</h4>';
               strHTML = '<h4 class="mt-1">Emergency Phone: ' + person.Ephone +'</h4>';
                $('#divAdditionalInfo').append(person);
                
            }
            
        )};

    $(document).ready( function () {
        $('#tblAgents').DataTable();
    } );

    $(document).on('click','#btnAddInfo',function(){
        $('#divAdditionalInfo').slideToggle();
    } );
    
    
