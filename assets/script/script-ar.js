// Start Search Form One

 $(document).ready(function() {

  $('#one_way_ar').click();


 })

// search from 1
function searchfrom_ar(){
    
    
    $.ajax({
    
    url:'airport.json',
    dataType :'json',
    cache: false ,
    success :function(data , status){
    
    
    $('.result-from-ar').html('');
    var searchField = $('#search-from-ar').val();
    var expression = new RegExp(searchField, "i");
    for (var x in data){
    if (  data[x].country_ar.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
    {
        $('.result-from-ar').append(' <li   class="result-from-li-ar"> <i class="fa-solid fa-plane-departure fa-plane-departure-ar"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_ar +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-ar"> '  + data[x].code +'</span>  </li>  ');
    }
    
    
    }
    
    
    }
    
    })
    
    }
    
    $('#search-from-ar').blur(function(){

        $(".fa-location-crosshairs-ar-one").removeClass("active-icon");
    
    })
    
    $('#search-from-ar').focus(function(){

    $(".fa-location-crosshairs-ar-one").addClass("active-icon");


    $('#search-from-ar').select();
    
    })
    
    $('#search-from-ar').keyup(function(){
    if($("#search-from-ar").val().length >1 ){
    searchfrom_ar();
    
    }
    else if($("#search-from-ar").val().length <= 1){
    $('.result-from-ar').html('');
    
    }
    
    
    })
    
    
    
    $('.result-from-ar').on('click', 'li', function() {
    var splitted = $(this).text().split(" , ", 3);
    $('#search-from-ar').val($.trim(splitted));
    $(".result-from-ar").html('');
    $('#airport-from').val($.trim(splitted[2]));

    });
    ////////////////////////////////////////////////////
    
    
    
    
    
    
    
    //search to 1
    
    function searchto_ar(){
    
    
    $.ajax({
    
    url:'airport.json',
    dataType :'json',
    cache: false ,
    success :function(data , status){
    
    
    $('.result-to-ar').html('');
    var searchField = $('#search-to-ar').val();
    var expression = new RegExp(searchField, "i");
    for (var x in data){
    if (  data[x].country_ar.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
    {
    
        $('.result-to-ar').append(' <li   class="result-from-li-ar"> <i class="fa-solid fa-plane-departure fa-plane-departure-ar"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_ar +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-ar"> '  + data[x].code +'</span>  </li>  ');
    }
    
    
    }
    
    
    }
    
    })
    
    }
    
    
    
    $('#search-to-ar').blur(function(){

        $(".fa-location-dot-ar-one").removeClass("active-icon");
    
    })
    
    $('#search-to-ar').focus(function(){
        $(".fa-location-dot-ar-one").addClass("active-icon");

    $('#search-to-ar').select();
    
    })
    
    
    $('#search-to-ar').keyup(function(){
    if($("#search-to-ar").val().length >1 ){
    
    searchto_ar();
    
    }
    else if($("#search-to-ar").val().length <= 1){
    $('.result-to-ar').html('');
    
    }
    
    
    })
    
    
    
    $('.result-to-ar').on('click', 'li', function() {
    var splitted = $(this).text().split(" , ", 3);
    $('#search-to-ar').val($.trim(splitted));
    $(".result-to-ar").html('');
    $('#airport-to').val($.trim(splitted[2]));

    });
    
    
        


    
    $('#replace-ar').on('click', function() {
    
    var from = $('#search-from-ar').val();
    var to = $('#search-to-ar').val();

   var split_from = $('#search-from-ar').val().split(" , ", 3);
   var split_to = $('#search-to-ar').val().split(" , ", 3);

    $('#search-from-ar').val(to);
    $('#search-to-ar').val(from);

    $('#airport-from').val(split_to[2]);
    $('#airport-to').val(split_from[2]);

    
    
    })
    

    

    
      

                        


//////////////////--------------------------------------/////////////////////////////////////////
   
      
      
  
  


    // Calender ONe

    $(document).ready(function() {
    
      
     
   
        var monthNames = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
        "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
        ];
        
        var weekday = ["الأحد","الأثنين","الثلاثاء","اﻷربعاء","الخميس","الجمعة","السبت"];
               
      var date_ready = new Date();
      
      var day_ready = date_ready.getDate();
      var day_name_ready = date_ready.getDay();
      var month_ready = date_ready.getMonth();
      
      
      $('.month-ar').text(monthNames[month_ready]);
      
      $('.day-ar').text(day_ready);
      
      $('.day-name-ar').text(weekday[day_name_ready]);
      


      var date = new Date();
      
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      
      if (month < 10) month = "0" + month;
      if (day < 10) day = "0" + day;
      
      var today = year + "-" + month + "-" + day;       
      document.getElementById("theDate-ar").value = today;
      
      var today = new Date().toISOString().split('T')[0];
      document.getElementById("theDate-ar").setAttribute('min', today);
  
  
      var today = new Date().toISOString().split('T')[0];
      document.getElementById("theDate_return-ar").setAttribute('min', today);
  
  
      
      
      
      });      
      
      $('#theDate-ar').on('change', function() {
      
      var d = new Date();
      
   
      var monthNames = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
      "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
      ];
      
      var weekday = ["الأحد","الأثنين","الثلاثاء","اﻷربعاء","الخميس","الجمعة","السبت"];
            
      var date = new Date($('#theDate-ar').val());
      var day = date.getDate();
      var day_name = date.getDay();
      var month = date.getMonth();
      
      $('.month-ar').text(monthNames[month]);
      
      $('.day-ar').text(day);
      
      $('.day-name-ar').text(weekday[day_name]);
      
      
      })
      
      
          
  
  
  
  
      
      var button = document.getElementById("calender-ar");
      var dateInput = document.getElementById("theDate-ar");

      
      
      button.addEventListener("click", () => {
      dateInput.showPicker();
      
      });    










  $(document).ready(function() {
  

  
   
    var monthNames = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
    "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
    ];
    
    var weekday = ["الأحد","الأثنين","الثلاثاء","اﻷربعاء","الخميس","الجمعة","السبت"];
         
    var date_ready = new Date();
    
    var day_ready = date_ready.getDate();
    var day_name_ready = date_ready.getDay();
    var month_ready = date_ready.getMonth();
    
    
    $('.month-return-ar').text(monthNames[month_ready]);
    
    $('.day-return-ar').text(day_ready);
    
    $('.day-name-return-ar').text(weekday[day_name_ready]);
    
    
    }); 
    var date = new Date();
    
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    
    
    
    $('#theDate_return-ar').on('change', function() {
    
    var d = new Date();
    
   
    var monthNames = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
    "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
    ];
    
    var weekday = ["الأحد","الأثنين","الثلاثاء","اﻷربعاء","الخميس","الجمعة","السبت"];
        
    var date = new Date($('#theDate_return-ar').val());
    var day = date.getDate();
    var day_name = date.getDay();
    var month = date.getMonth();
    
    $('.month-return-ar').text(monthNames[month]);
    
    $('.day-return-ar').text(day);
    
    $('.day-name-return-ar').text(weekday[day_name]);
    
    
    })
    
    
        
  
  
  
  
          
        var button_return_ar = document.getElementById("return-ar");
        var dateInput_return_ar = document.getElementById("theDate_return-ar");
        
        button_return_ar.addEventListener("click", () => {
        dateInput_return_ar.showPicker();
        
        });    
        
    
  
      
  /////////////////-------------------------////////////////////////////////


  //passenger form 


    
  $('#passenger-ar').on('click', function() {
    
    $('#passenger-list-ar').toggle();
    
    })
    
    $('#drop-list').on('click', function() {
    
    $('#passenger-list-ar').toggle();
    
    })
        
   

var passenger_ar = 1 ;
var count_adult_ar = 1 ;
var count_children_ar = 0 ;
var count_infants_ar = 0 ;


$('#plus-adult-ar').on('click', function() {
passenger_ar = passenger_ar + 1 ;
document.getElementById("passenger-ar").setAttribute('value', passenger_ar + " " + "مسافرين");






})

$('#minus-adult-ar').on('click', function() {
if(count_adult_ar > 1){

passenger_ar = passenger_ar - 1 ;
document.getElementById("passenger-ar").setAttribute('value', passenger_ar + " " + "مسافر");




}


else if(passenger_ar == 1 ){
passenger_ar = 1 ;
document.getElementById("passenger-ar").setAttribute('value', passenger_ar + " " + "مسافر");




}


})




$('#plus-adult-ar').on('click', function() {
count_adult_ar = count_adult_ar + 1 ;
$('#count-adult-ar').text(count_adult_ar);
$('#adults').val(count_adult_ar);


})

$('#minus-adult-ar').on('click', function() {
$('#count-adult-ar').text(count_adult_ar);
$('#adults').val(count_adult_ar);







if(count_adult_ar != 1 ){
count_adult_ar = count_adult_ar - 1 ;
$('#count-adult-ar').text(count_adult_ar);
$('#adults').val(count_adult_ar);



}

else{
$('#count-adult-ar').text(1);


}

})




$('#plus-children-ar').on('click', function() {
passenger_ar = passenger_ar + 1 ;
document.getElementById("passenger-ar").setAttribute('value', passenger_ar + " " + "مسافرين");


})


$('#minus-children-ar').on('click', function() {
if(count_children_ar != 0){

passenger_ar = passenger_ar - 1 ;
document.getElementById("passenger-ar").setAttribute('value', passenger_ar + " " + "مسافرين");

}


else if(passenger_ar == 0 ){
passenger_ar = 1 ;
document.getElementById("passenger-ar").setAttribute('value', passenger_ar + " " + "مسافر");



}



})






$('#plus-children-ar').on('click', function() {
count_children_ar = count_children_ar + 1 ;
$('#count-children-ar').text(count_children_ar);
$('#children').val(count_children_ar);





})

$('#minus-children-ar').on('click', function() {
$('#count-children-ar').text(count_children_ar);
$('#children').val(count_children_ar);




if(count_children_ar != 0 ){
count_children_ar = count_children_ar - 1 ;
$('#count-children-ar').text(count_children_ar);
$('#children').val(count_children_ar);



}

else{
$('#count-children-ar').text(0);

}

})



$('#plus-infants-ar').on('click', function() {
passenger_ar = passenger_ar + 1 ;
document.getElementById("passenger-ar").setAttribute('value', passenger_ar + " " + "مسافرين");



})




$('#minus-infants-ar').on('click', function() {
if(count_infants_ar != 0){

passenger_ar = passenger_ar - 1 ;
document.getElementById("passenger-ar").setAttribute('value', passenger_ar + " " + "مسافرين");


}


else if(passenger == 0 ){
passenger = 1 ;
document.getElementById("passenger-ar").setAttribute('value', passenger_ar + " " + "مسافر");


}



})





$('#plus-infants-ar').on('click', function() {
count_infants_ar = count_infants_ar + 1 ;
$('#count-infants-ar').text(count_infants_ar);
$('#infants').val(count_infants_ar);




})

$('#minus-infants-ar').on('click', function() {
$('#count-infants-ar').text(count_infants_ar);
$('#infants').val(count_infants_ar);



if(count_infants_ar != 0 ){
count_infants_ar = count_infants_ar - 1 ;
$('#count-infants-ar').text(count_infants_ar);
$('#infants').val(count_infants_ar);



}

else{
$('#count-infants-ar').text(0);


}

})



    
/////////////---------------------------------------////////////////////
  
  


// type buttons



        
$('.type-container-ar button').click(function (){
    $(this).addClass('active').siblings().removeClass('active') })

        

        
    



    function one_way_ar(){
     
     $('#return_button-ar').show();
     $('.multi-ar').hide();
     $('.multi-form-container-ar').hide();
    $('#return-ar').show();
     $('#clone_div-ar').hide();
     $('#flights-ar').hide();
     $('#type').val(1);








 }
 

 function round_trip_ar(){
     
     $('#return_button-ar').hide();
     $('.multi-ar').hide();
     $('.multi-form-container-ar').hide();
     $('#return-ar').show();
     $('#clone_div-ar').hide();
     $('#flights-ar').hide();
     $('#type').val(2);







 }
 
 function multi_city_ar(){
     
  $('#return_button-ar').show();
  $('.multi-ar').show();
  $('.multi-form-container-ar').show();
    $('#clone_div-ar').show();
  $('#return-ar').hide();
  $('#flights-ar').show();
  $('#type').val(3);


   start_multi_search_from_one();
   start_multi_search_to_one();
   
  


 }


 $('#return_button-ar').click(function(){
  $('#round_trip-ar').click();

 });

 
          
  
 ///////////////------------------------//////////////////////////



// clone and remove buttons








