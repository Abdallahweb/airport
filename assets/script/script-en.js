// Start Search Form One

 $(document).ready(function() {

  $('#one_way_en').click();


 })

// search from 1
function searchfrom_en(){
    
    
    $.ajax({
    
    url:'airport.json',
    dataType :'json',
    cache: false ,
    success :function(data , status){
    
    
    $('.result-from-en').html('');
    var searchField = $('#search-from-en').val();
    var expression = new RegExp(searchField, "i");
    for (var x in data){
    if (  data[x].country_en.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
    {
        $('.result-from-en').append(' <li   class="result-from-li-en"> <i class="fa-solid fa-plane-departure fa-plane-departure-en"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_en +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-en"> '  + data[x].code +'</span>  </li>  ');
    }
    
    
    }
    
    
    }
    
    })
    
    }
    
    $('#search-from-en').blur(function(){

        $(".fa-location-crosshairs-en-one").removeClass("active-icon");
    
    })
    
    $('#search-from-en').focus(function(){

    $(".fa-location-crosshairs-en-one").addClass("active-icon");


    $('#search-from-en').select();
    
    })
    
    $('#search-from-en').keyup(function(){
    if($("#search-from-en").val().length >1 ){
    searchfrom_en();
    
    }
    else if($("#search-from-en").val().length <= 1){
    $('.result-from-en').html('');
    
    }
    
    
    })
    
    
    
    $('.result-from-en').on('click', 'li', function() {
    var splitted = $(this).text().split(" , ", 3);
    $('#search-from-en').val($.trim(splitted));
    $(".result-from-en").html('');
    $('#airport-from').val($.trim(splitted[2]));

    });
    ////////////////////////////////////////////////////
    
    
    
    
    
    
    
    //search to 1
    
    function searchto_en(){
    
    
    $.ajax({
    
    url:'airport.json',
    dataType :'json',
    cache: false ,
    success :function(data , status){
    
    
    $('.result-to-en').html('');
    var searchField = $('#search-to-en').val();
    var expression = new RegExp(searchField, "i");
    for (var x in data){
    if (  data[x].country_en.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
    {
    
        $('.result-to-en').append(' <li   class="result-from-li-en"> <i class="fa-solid fa-plane-departure fa-plane-departure-en"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_en +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-en"> '  + data[x].code +'</span>  </li>  ');
    }
    
    
    }
    
    
    }
    
    })
    
    }
    
    
    
    $('#search-to-en').blur(function(){

        $(".fa-location-dot-en-one").removeClass("active-icon");
    
    })
    
    $('#search-to-en').focus(function(){
        $(".fa-location-dot-en-one").addClass("active-icon");

    $('#search-to-en').select();
    
    })
    
    
    $('#search-to-en').keyup(function(){
    if($("#search-to-en").val().length >1 ){
    
    searchto_en();
    
    }
    else if($("#search-to-en").val().length <= 1){
    $('.result-to-en').html('');
    
    }
    
    
    })
    
    
    
    $('.result-to-en').on('click', 'li', function() {
    var splitted = $(this).text().split(" , ", 3);
    $('#search-to-en').val($.trim(splitted));
    $(".result-to-en").html('');
    $('#airport-to').val($.trim(splitted[2]));

    });
    
    
        


    
    $('#replace-en').on('click', function() {
    
    var from = $('#search-from-en').val();
    var to = $('#search-to-en').val();

   var split_from = $('#search-from-en').val().split(" , ", 3);
   var split_to = $('#search-to-en').val().split(" , ", 3);

    $('#search-from-en').val(to);
    $('#search-to-en').val(from);

    $('#airport-from').val(split_to[2]);
    $('#airport-to').val(split_from[2]);

    
    
    })
    

    

    
      

                        


//////////////////--------------------------------------/////////////////////////////////////////
   
      
      
  
  


    // Calender ONe

    $(document).ready(function() {
    
      
     
      var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
      ];
      
      var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
       
      var date_ready = new Date();
      
      var day_ready = date_ready.getDate();
      var day_name_ready = date_ready.getDay();
      var month_ready = date_ready.getMonth();
      
      
      $('.month-en').text(monthNames[month_ready]);
      
      $('.day-en').text(day_ready);
      
      $('.day-name-en').text(weekday[day_name_ready]);
      


      var date = new Date();
      
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      
      if (month < 10) month = "0" + month;
      if (day < 10) day = "0" + day;
      
      var today = year + "-" + month + "-" + day;       
      document.getElementById("theDate-en").value = today;
      
      var today = new Date().toISOString().split('T')[0];
      document.getElementById("theDate-en").setAttribute('min', today);
  
  
      var today = new Date().toISOString().split('T')[0];
      document.getElementById("theDate_return-en").setAttribute('min', today);
  
  
      
      
      
      });      
      
      $('#theDate-en').on('change', function() {
      
      var d = new Date();
      
      var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
      ];
      
      var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      
      var date = new Date($('#theDate-en').val());
      var day = date.getDate();
      var day_name = date.getDay();
      var month = date.getMonth();
      
      $('.month-en').text(monthNames[month]);
      
      $('.day-en').text(day);
      
      $('.day-name-en').text(weekday[day_name]);
      
      
      })
      
      
          
  
  
  
  
      
      var button = document.getElementById("calender-en");
      var dateInput = document.getElementById("theDate-en");

      
      
      button.addEventListener("click", () => {
      dateInput.showPicker();
      
      });    










  $(document).ready(function() {
  

  
    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    
    var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
     
    var date_ready = new Date();
    
    var day_ready = date_ready.getDate();
    var day_name_ready = date_ready.getDay();
    var month_ready = date_ready.getMonth();
    
    
    $('.month-return-en').text(monthNames[month_ready]);
    
    $('.day-return-en').text(day_ready);
    
    $('.day-name-return-en').text(weekday[day_name_ready]);
    
    
    }); 
    var date = new Date();
    
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    
    
    
    $('#theDate_return-en').on('change', function() {
    
    var d = new Date();
    
    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    
    var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    var date = new Date($('#theDate_return-en').val());
    var day = date.getDate();
    var day_name = date.getDay();
    var month = date.getMonth();
    
    $('.month-return-en').text(monthNames[month]);
    
    $('.day-return-en').text(day);
    
    $('.day-name-return-en').text(weekday[day_name]);
    
    
    })
    
    
        
  
  
  
  
          
        var button_return_en = document.getElementById("return-en");
        var dateInput_return_en = document.getElementById("theDate_return-en");
        
        button_return_en.addEventListener("click", () => {
        dateInput_return_en.showPicker();
        
        });    
        
    
  
      
  /////////////////-------------------------////////////////////////////////


  //passenger form 


    
  $('#passenger-en').on('click', function() {
    
    $('#passenger-list-en').toggle();
    
    })
    
    $('#drop-list').on('click', function() {
    
    $('#passenger-list-en').toggle();
    
    })
        
   

var passenger_en = 1 ;
var count_adult_en = 1 ;
var count_children_en = 0 ;
var count_infants_en = 0 ;


$('#plus-adult-en').on('click', function() {
passenger_en = passenger_en + 1 ;
document.getElementById("passenger-en").setAttribute('value', passenger_en + " " + "Passengers");






})

$('#minus-adult-en').on('click', function() {
if(count_adult_en > 1){

passenger_en = passenger_en - 1 ;
document.getElementById("passenger-en").setAttribute('value', passenger_en + " " + "Passenger");




}


else if(passenger_en == 1 ){
passenger_en = 1 ;
document.getElementById("passenger-en").setAttribute('value', passenger_en + " " + "Passenger");




}


})




$('#plus-adult-en').on('click', function() {
count_adult_en = count_adult_en + 1 ;
$('#count-adult-en').text(count_adult_en);
$('#adults').val(count_adult_en);


})

$('#minus-adult-en').on('click', function() {
$('#count-adult-en').text(count_adult_en);
$('#adults').val(count_adult_en);







if(count_adult_en != 1 ){
count_adult_en = count_adult_en - 1 ;
$('#count-adult-en').text(count_adult_en);
$('#adults').val(count_adult_en);



}

else{
$('#count-adult-en').text(1);


}

})




$('#plus-children-en').on('click', function() {
passenger_en = passenger_en + 1 ;
document.getElementById("passenger-en").setAttribute('value', passenger_en + " " + "Passengers");


})


$('#minus-children-en').on('click', function() {
if(count_children_en != 0){

passenger_en = passenger_en - 1 ;
document.getElementById("passenger-en").setAttribute('value', passenger_en + " " + "Passengers");

}


else if(passenger_en == 0 ){
passenger_en = 1 ;
document.getElementById("passenger-en").setAttribute('value', passenger_en + " " + "Passenger");



}



})






$('#plus-children-en').on('click', function() {
count_children_en = count_children_en + 1 ;
$('#count-children-en').text(count_children_en);
$('#children').val(count_children_en);





})

$('#minus-children-en').on('click', function() {
$('#count-children-en').text(count_children_en);
$('#children').val(count_children_en);




if(count_children_en != 0 ){
count_children_en = count_children_en - 1 ;
$('#count-children-en').text(count_children_en);
$('#children').val(count_children_en);



}

else{
$('#count-children-en').text(0);

}

})



$('#plus-infants-en').on('click', function() {
passenger_en = passenger_en + 1 ;
document.getElementById("passenger-en").setAttribute('value', passenger_en + " " + "Passengers");



})




$('#minus-infants-en').on('click', function() {
if(count_infants_en != 0){

passenger_en = passenger_en - 1 ;
document.getElementById("passenger-en").setAttribute('value', passenger_en + " " + "Passengers");


}


else if(passenger == 0 ){
passenger = 1 ;
document.getElementById("passenger-en").setAttribute('value', passenger_en + " " + "Passenger");


}



})





$('#plus-infants-en').on('click', function() {
count_infants_en = count_infants_en + 1 ;
$('#count-infants-en').text(count_infants_en);
$('#infants').val(count_infants_en);




})

$('#minus-infants-en').on('click', function() {
$('#count-infants-en').text(count_infants_en);
$('#infants').val(count_infants_en);



if(count_infants_en != 0 ){
count_infants_en = count_infants_en - 1 ;
$('#count-infants-en').text(count_infants_en);
$('#infants').val(count_infants_en);



}

else{
$('#count-infants-en').text(0);


}

})



    
/////////////---------------------------------------////////////////////
  
  


// type buttons



        
$('.type-container-en button').click(function (){
    $(this).addClass('active').siblings().removeClass('active') })

        

        
    



    function one_way_en(){
     
     $('#return_button-en').show();
     $('.multi-en').hide();
     $('.multi-form-container-en').hide();
    $('#return-en').show();
     $('#clone_div-en').hide();
     $('#flights-en').hide();
     $('#type').val(1);








 }
 

 function round_trip_en(){
     
     $('#return_button-en').hide();
     $('.multi-en').hide();
     $('.multi-form-container-en').hide();
     $('#return-en').show();
     $('#clone_div-en').hide();
     $('#flights-en').hide();
     $('#type').val(2);







 }
 
 function multi_city_en(){
     
  $('#return_button-en').show();
  $('.multi-en').show();
  $('.multi-form-container-en').show();
    $('#clone_div-en').show();
  $('#return-en').hide();
  $('#flights-en').show();
  $('#type').val(3);


   start_multi_search_from_one();
   start_multi_search_to_one();
   
  


 }


 $('#return_button-en').click(function(){
  $('#round_trip-en').click();

 });

 
          
  
 ///////////////------------------------//////////////////////////



// clone and remove buttons








