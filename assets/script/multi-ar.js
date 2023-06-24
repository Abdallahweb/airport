// clone and remove buttons


var count_multi = 1 ;



function clone_ar(){


  if(count_multi == 1){      
  
      count_multi = 2 ;   

      $("#multi-form-container-ar-two").css("display" , "flex");
      start_multi_search_from_two();
      start_multi_search_to_two();
  } 


  else if(count_multi == 2){      
      
    count_multi = 3 ;   

    $("#multi-form-container-ar-three").css("display" , "flex");
    start_multi_search_from_three();
    start_multi_search_to_three();
} 


else if(count_multi == 3){      
      
  count_multi = 4 ;   

  $("#multi-form-container-ar-four").css("display" , "flex");
  start_multi_search_from_four();
  start_multi_search_to_four();
} 


else if(count_multi == 4){      
      
  count_multi = 5 ;   

  $("#multi-form-container-ar-five").css("display" , "flex");
  start_multi_search_from_five();
  start_multi_search_to_five();
} 



else if(count_multi == 5){      
      
  count_multi = 6 ;   

  $("#multi-form-container-ar-six").css("display" , "flex");
  start_multi_search_from_six();
  start_multi_search_to_six();
  $("#clone_div-ar").fadeOut();

} 



    else{
      $("#clone_div-ar").fadeIn();
    
    }
    
  
  
  }
  


 function removes_ar_two(){
  count_multi = 1;
  $("#multi-form-container-ar-two").fadeOut();
  $('#multi-airport-from-two').val("");
  $('#multi-airport-to-two').val("");

  $("#clone_div-ar").fadeIn();

 }

 
 function removes_ar_three(){
  count_multi = 2 ; 
  $("#multi-form-container-ar-three").fadeOut();
  $('#multi-airport-from-three').val("");
  $('#multi-airport-to-three').val("");
  $("#clone_div-ar").fadeIn();


 }
 
 function removes_ar_four(){
  count_multi = 3 ; 

  $("#multi-form-container-ar-four").fadeOut();  
  $('#multi-airport-from-four').val("");
  $('#multi-airport-to-four').val("");

  $("#clone_div-ar").fadeIn();

 }

 
 function removes_ar_five(){
  count_multi = 4 ; 
  $("#multi-form-container-ar-five").fadeOut();
  $('#multi-airport-from-five').val("");
  $('#multi-airport-to-five').val("");
  $("#clone_div-ar").fadeIn();

 }
 
 function removes_ar_six(){
  count_multi = 5 ; 
  $("#multi-form-container-ar-six").fadeOut();
  $('#multi-airport-from-six').val("");
  $('#multi-airport-to-six').val("");
  $("#clone_div-ar").fadeIn();

 }















// Start Search Form Two

// search from 2
function start_multi_search_from_one(){
function multi_searchfrom_ar_one(){
    
    
  $.ajax({
  
  url:'airport.json',
  dataType :'json',
  cache: false ,
  success :function(data , status){
  
  
  $('#multi-result-from-ar-one').html('');
  var searchField = $('#multi-search-from-ar-one').val();
  var expression = new RegExp(searchField, "i");
  for (var x in data){
  if (  data[x].country_ar.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
  {
    $('#multi-result-from-ar-one').append(' <li   class="multi-result-from-li-ar" style="  padding-left:30px;padding-top:10px;padding-bottom:20px;color: #888;border-bottom: 1px solid #ddd;"> <i class="fa-solid fa-plane-departure fa-plane-departure-ar"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_ar +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-ar"> '  + data[x].code +'</span>  </li>  ');
  }
  
  
  }
  
  
  }
  
  })
  
  }
  
      
    
  $('#multi-search-from-ar-one').blur(function(){

    $(".fa-location-crosshairs-ar-two").removeClass("active-icon");

})

$('#multi-search-from-ar-one').focus(function(){
    $(".fa-location-crosshairs-ar-two").addClass("active-icon");


  $('#multi-search-from-ar-one').select();

  })


  
  $('#multi-search-from-ar-one').keyup(function(){
  if($("#multi-search-from-ar-one").val().length >1 ){
  multi_searchfrom_ar_one();
  
  }
  else if($("#multi-search-from-ar-one").val().length <= 1){
  $('#multi-result-from-ar-one').html('');
  
  }
  
  
  })
  
  
  
  $('#multi-result-from-ar-one').on('click', 'li', function() {
  var splitted = $(this).text().split(" , ", 3);
  $('#multi-search-from-ar-one').val($.trim(splitted));
  $("#multi-result-from-ar-one").html('');
  $('#multi-airport-from-one').val($.trim(splitted[2]));

  });
  ////////////////////////////////////////////////////
  
}



// search to 2
function start_multi_search_to_one(){
  function multi_searchto_ar_one(){
      
      
    $.ajax({
    
    url:'airport.json',
    dataType :'json',
    cache: false ,
    success :function(data , status){
    
    
    $('#multi-result-to-ar-one').html('');
    var searchField = $('#multi-search-to-ar-one').val();
    var expression = new RegExp(searchField, "i");
    for (var x in data){
    if (  data[x].country_ar.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
    {
      $('#multi-result-to-ar-one').append(' <li   class="multi-result-from-li-ar" style="  padding-left:30px;padding-top:10px;padding-bottom:20px;color: #888;border-bottom: 1px solid #ddd;"> <i class="fa-solid fa-plane-departure fa-plane-departure-ar"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_ar +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-ar"> '  + data[x].code +'</span>  </li>  ');
    }
    
    
    }
    
    
    }
    
    })
    
    }
    

    
  $('#multi-search-to-ar-one').blur(function(){

    $(".fa-location-dot-ar-two").removeClass("active-icon");

})

$('#multi-search-to-ar-one').focus(function(){
  $(".fa-location-dot-ar-two").addClass("active-icon");
    
    
  
    $('#multi-search-to-ar-one').select();
  
    })
  
  
    
    $('#multi-search-to-ar-one').keyup(function(){
    if($("#multi-search-to-ar-one").val().length >1 ){
    multi_searchto_ar_one();
    
    }
    else if($("#multi-search-to-ar-one").val().length <= 1){
    $('#multi-result-to-ar-one').html('');
    
    }
    
    
    })
    
    
    
    $('#multi-result-to-ar-one').on('click', 'li', function() {
    var splitted = $(this).text().split(" , ", 3);
    $('#multi-search-to-ar-one').val($.trim(splitted));
    $("#multi-result-to-ar-one").html('');
    $('#multi-airport-to-one').val($.trim(splitted[2]));
  

  });



  ////////////////////////////////////////////////////
    
  }
  
  



    
  $('.multi-replace-ar-one').on('click', function() {
    
    var from = $('#multi-search-from-ar-one').val();
    var to = $('#multi-search-to-ar-one').val();
    
    
    
   var split_from_multi_one = $('#multi-search-from-ar-one').val().split(" , ", 3);
   var split_to_multi_one = $('#multi-search-to-ar-one').val().split(" , ", 3);

    $('#multi-search-from-ar-one').val(to);
    $('#multi-search-to-ar-one').val(from);
   
    $('#multi-airport-from-one').val(split_to_multi_one[2]);
    $('#multi-airport-to-one').val(split_from_multi_one[2]);

    

    })
    

                      

                      


//////////////////--------------------------------------/////////////////////////////////////////
 

















// Start Search Form Three

// search from 3
function start_multi_search_from_two(){
  function multi_searchfrom_ar_two(){
      
      
    $.ajax({
    
    url:'airport.json',
    dataType :'json',
    cache: false ,
    success :function(data , status){
    
    
    $('#multi-result-from-ar-two').html('');
    var searchField = $('#multi-search-from-ar-two').val();
    var expression = new RegExp(searchField, "i");
    for (var x in data){
    if (  data[x].country_ar.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
    {
      $('#multi-result-from-ar-two').append(' <li   class="multi-result-from-li-ar" style="  padding-left:30px;padding-top:10px;padding-bottom:20px;color: #888;border-bottom: 1px solid #ddd;"> <i class="fa-solid fa-plane-departure fa-plane-departure-ar"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_ar +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-ar"> '  + data[x].code +'</span>  </li>  ');
    }
    
    
    }
    
    
    }
    
    })
    
    }
    
    
    
    $('#multi-search-from-ar-two').blur(function(){

    $(".fa-location-crosshairs-ar-three").removeClass("active-icon");

})

$('#multi-search-from-ar-two').focus(function(){
  $(".fa-location-crosshairs-ar-three").addClass("active-icon");

    
  
    $('#multi-search-from-ar-two').select();
  
    })
  
  
    
    $('#multi-search-from-ar-two').keyup(function(){
    if($("#multi-search-from-ar-two").val().length >1 ){
    multi_searchfrom_ar_two();
    
    }
    else if($("#multi-search-from-ar-two").val().length <= 1){
    $('#multi-result-from-ar-two').html('');
    
    }
    
    
    })
    
    
    
    $('#multi-result-from-ar-two').on('click', 'li', function() {
    var splitted = $(this).text().split(" , ", 3);
    $('#multi-search-from-ar-two').val($.trim(splitted));
    $("#multi-result-from-ar-two").html('');
    $('#multi-airport-from-two').val($.trim(splitted[2]));
  
    });
    ////////////////////////////////////////////////////
    
  }
  
  
  
  // search to 2
  function start_multi_search_to_two(){
    function multi_searchto_ar_two(){
        
        
      $.ajax({
      
      url:'airport.json',
      dataType :'json',
      cache: false ,
      success :function(data , status){
      
      
      $('#multi-result-to-ar-two').html('');
      var searchField = $('#multi-search-to-ar-two').val();
      var expression = new RegExp(searchField, "i");
      for (var x in data){
      if (  data[x].country_ar.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
      {
        $('#multi-result-to-ar-two').append(' <li   class="multi-result-from-li-ar" style="  padding-left:30px;padding-top:10px;padding-bottom:20px;color: #888;border-bottom: 1px solid #ddd;"> <i class="fa-solid fa-plane-departure fa-plane-departure-ar"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_ar +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-ar"> '  + data[x].code +'</span>  </li>  ');
      }
      
      
      }
      
      
      }
      
      })
      
      }
      

      
      $('#multi-search-to-ar-two').blur(function(){

      $(".fa-location-dot-ar-three").removeClass("active-icon");
  
  })
  
  $('#multi-search-to-ar-two').focus(function(){
    $(".fa-location-dot-ar-three").addClass("active-icon");
  
      
      
      
    
      $('#multi-search-to-ar-two').select();
    
      })
    
    
      
      $('#multi-search-to-ar-two').keyup(function(){
      if($("#multi-search-to-ar-two").val().length >1 ){
      multi_searchto_ar_two();
      
      }
      else if($("#multi-search-to-ar-two").val().length <= 1){
      $('#multi-result-to-ar-two').html('');
      
      }
      
      
      })
      
      
      
      $('#multi-result-to-ar-two').on('click', 'li', function() {
      var splitted = $(this).text().split(" , ", 3);
      $('#multi-search-to-ar-two').val($.trim(splitted));
      $("#multi-result-to-ar-two").html('');
      $('#multi-airport-to-two').val($.trim(splitted[2]));
    
  
    });
  
  
  
    ////////////////////////////////////////////////////
      
    }
    
    
  
  
  
      
    $('.multi-replace-ar-two').on('click', function() {
      
      var from = $('#multi-search-from-ar-two').val();
      var to = $('#multi-search-to-ar-two').val();
      
      var split_from_multi_two = $('#multi-search-from-ar-two').val().split(" , ", 3);
      var split_to_multi_two = $('#multi-search-to-ar-two').val().split(" , ", 3);
   

      $('#multi-search-from-ar-two').val(to);
      $('#multi-search-to-ar-two').val(from);

      
  
       $('#multi-airport-from-two').val(split_to_multi_two[2]);
       $('#multi-airport-to-two').val(split_from_multi_two[2]);
      
      })
      
  
                        
  
  
                        
  
  
  //////////////////--------------------------------------/////////////////////////////////////////
   
  
























  
// Start Search Form Four

// search from 4
function start_multi_search_from_three(){
  function multi_searchfrom_ar_three(){
      
      
    $.ajax({
    
    url:'airport.json',
    dataType :'json',
    cache: false ,
    success :function(data , status){
    
    
    $('#multi-result-from-ar-three').html('');
    var searchField = $('#multi-search-from-ar-three').val();
    var expression = new RegExp(searchField, "i");
    for (var x in data){
    if (  data[x].country_ar.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
    {
      $('#multi-result-from-ar-three').append(' <li   class="multi-result-from-li-ar" style="  padding-left:30px;padding-top:10px;padding-bottom:20px;color: #888;border-bottom: 1px solid #ddd;"> <i class="fa-solid fa-plane-departure fa-plane-departure-ar"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_ar +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-ar"> '  + data[x].code +'</span>  </li>  ');
    }
    
    
    }
    
    
    }
    
    })
    
    }
    
    
    $('#multi-search-from-ar-three').blur(function(){

      $(".fa-location-crosshairs-ar-four").removeClass("active-icon");
  
  })
  
  $('#multi-search-from-ar-three').focus(function(){
    $(".fa-location-crosshairs-ar-four").addClass("active-icon");
  

    
  
    $('#multi-search-from-ar-three').select();
  
    })
  
  
    
    $('#multi-search-from-ar-three').keyup(function(){
    if($("#multi-search-from-ar-three").val().length >1 ){
    multi_searchfrom_ar_three();
    
    }
    else if($("#multi-search-from-ar-three").val().length <= 1){
    $('#multi-result-from-ar-three').html('');
    
    }
    
    
    })
    
    
    
    $('#multi-result-from-ar-three').on('click', 'li', function() {
    var splitted = $(this).text().split(" , ", 3);
    $('#multi-search-from-ar-three').val($.trim(splitted));
    $("#multi-result-from-ar-three").html('');
    $('#multi-airport-from-three').val($.trim(splitted[2]));
  
    });
    ////////////////////////////////////////////////////
    
  }
  
  
  
  // search to 2
  function start_multi_search_to_three(){
    function multi_searchto_ar_three(){
        
        
      $.ajax({
      
      url:'airport.json',
      dataType :'json',
      cache: false ,
      success :function(data , status){
      
      
      $('#multi-result-to-ar-three').html('');
      var searchField = $('#multi-search-to-ar-three').val();
      var expression = new RegExp(searchField, "i");
      for (var x in data){
      if (  data[x].country_ar.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
      {
        $('#multi-result-to-ar-three').append(' <li   class="multi-result-from-li-ar" style="  padding-left:30px;padding-top:10px;padding-bottom:20px;color: #888;border-bottom: 1px solid #ddd;"> <i class="fa-solid fa-plane-departure fa-plane-departure-ar"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_ar +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-ar"> '  + data[x].code +'</span>  </li>  ');
      }
      
      
      }
      
      
      }
      
      })
      
      }
      
      
      
      
      $('#multi-search-to-ar-three').blur(function(){

      $(".fa-location-dot-ar-four").removeClass("active-icon");
  
  })
  
  $('#multi-search-to-ar-three').focus(function(){
    $(".fa-location-dot-ar-four").addClass("active-icon");
  

    

    
      $('#multi-search-to-ar-three').select();
    
      })
    
    
      
      $('#multi-search-to-ar-three').keyup(function(){
      if($("#multi-search-to-ar-three").val().length >1 ){
      multi_searchto_ar_three();
      
      }
      else if($("#multi-search-to-ar-three").val().length <= 1){
      $('#multi-result-to-ar-three').html('');
      
      }
      
      
      })
      
      
      
      $('#multi-result-to-ar-three').on('click', 'li', function() {
      var splitted = $(this).text().split(" , ", 3);
      $('#multi-search-to-ar-three').val($.trim(splitted));
      $("#multi-result-to-ar-three").html('');
      $('#multi-airport-to-three').val($.trim(splitted[2]));
    
  
    });
  
  
  
    ////////////////////////////////////////////////////
      
    }
    
    
  
  
  
      
    $('.multi-replace-ar-three').on('click', function() {
      
      var from = $('#multi-search-from-ar-three').val();
      var to = $('#multi-search-to-ar-three').val();
          
   var split_from_multi_three = $('#multi-search-from-ar-three').val().split(" , ", 3);
   var split_to_multi_three = $('#multi-search-to-ar-three').val().split(" , ", 3);

      
      $('#multi-search-from-ar-three').val(to);
      $('#multi-search-to-ar-three').val(from);
          

    $('#multi-airport-from-three').val(split_to_multi_three[2]);
    $('#multi-airport-to-three').val(split_from_multi_three[2]);


      })
      
  
                        
  
  
                        
  
  
  //////////////////--------------------------------------/////////////////////////////////////////
   
  




















  
// Start Search Form Five

// search from 5
function start_multi_search_from_four(){
  function multi_searchfrom_ar_four(){
      
      
    $.ajax({
    
    url:'airport.json',
    dataType :'json',
    cache: false ,
    success :function(data , status){
    
    
    $('#multi-result-from-ar-four').html('');
    var searchField = $('#multi-search-from-ar-four').val();
    var expression = new RegExp(searchField, "i");
    for (var x in data){
    if (  data[x].country_ar.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
    {
      $('#multi-result-from-ar-four').append(' <li   class="multi-result-from-li-ar" style="  padding-left:30px;padding-top:10px;padding-bottom:20px;color: #888;border-bottom: 1px solid #ddd;"> <i class="fa-solid fa-plane-departure fa-plane-departure-ar"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_ar +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-ar"> '  + data[x].code +'</span>  </li>  ');
    }
    
    
    }
    
    
    }
    
    })
    
    }
    
          
      
    $('#multi-search-from-ar-four').blur(function(){

      $(".fa-location-crosshairs-ar-five").removeClass("active-icon");
  
  })
  
  $('#multi-search-from-ar-four').focus(function(){
    $(".fa-location-crosshairs-ar-five").addClass("active-icon");
  

    
    
  
    $('#multi-search-from-ar-four').select();
  
    })
  
  
    
    $('#multi-search-from-ar-four').keyup(function(){
    if($("#multi-search-from-ar-four").val().length >1 ){
    multi_searchfrom_ar_four();
    
    }
    else if($("#multi-search-from-ar-four").val().length <= 1){
    $('#multi-result-from-ar-four').html('');
    
    }
    
    
    })
    
    
    
    $('#multi-result-from-ar-four').on('click', 'li', function() {
    var splitted = $(this).text().split(" , ", 3);
    $('#multi-search-from-ar-four').val($.trim(splitted));
    $("#multi-result-from-ar-four").html('');
    $('#multi-airport-from-four').val($.trim(splitted[2]));
  
    });
    ////////////////////////////////////////////////////
    
  }
  
  
  
  // search to 2
  function start_multi_search_to_four(){
    function multi_searchto_ar_four(){
        
        
      $.ajax({
      
      url:'airport.json',
      dataType :'json',
      cache: false ,
      success :function(data , status){
      
      
      $('#multi-result-to-ar-four').html('');
      var searchField = $('#multi-search-to-ar-four').val();
      var expression = new RegExp(searchField, "i");
      for (var x in data){
      if (  data[x].country_ar.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
      {
        $('#multi-result-to-ar-four').append(' <li   class="multi-result-from-li-ar" style="  padding-left:30px;padding-top:10px;padding-bottom:20px;color: #888;border-bottom: 1px solid #ddd;"> <i class="fa-solid fa-plane-departure fa-plane-departure-ar"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_ar +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-ar"> '  + data[x].code +'</span>  </li>  ');
      }
      
      
      }
      
      
      }
      
      })
      
      }
      
      
      
      $('#multi-search-to-ar-four').blur(function(){

      $(".fa-location-dot-ar-five").removeClass("active-icon");
  
  })
  
  $('#multi-search-to-ar-four').focus(function(){
    $(".fa-location-dot-ar-five").addClass("active-icon");
  
    
      $('#multi-search-to-ar-four').select();
    
      })
    
    
      
      $('#multi-search-to-ar-four').keyup(function(){
      if($("#multi-search-to-ar-four").val().length >1 ){
      multi_searchto_ar_four();
      
      }
      else if($("#multi-search-to-ar-four").val().length <= 1){
      $('#multi-result-to-ar-four').html('');
      
      }
      
      
      })
      
      
      
      $('#multi-result-to-ar-four').on('click', 'li', function() {
      var splitted = $(this).text().split(" , ", 3);
      $('#multi-search-to-ar-four').val($.trim(splitted));
      $("#multi-result-to-ar-four").html('');
      $('#multi-airport-to-four').val($.trim(splitted[2]));
    
  
    });
  
  
  
    ////////////////////////////////////////////////////
      
    }
    
    
  
  
  
      
    $('.multi-replace-ar-four').on('click', function() {
      
      var from = $('#multi-search-from-ar-four').val();
      var to = $('#multi-search-to-ar-four').val();
      

      var split_from_multi_four = $('#multi-search-from-ar-four').val().split(" , ", 3);
      var split_to_multi_four = $('#multi-search-to-ar-four').val().split(" , ", 3);
   
      
      $('#multi-search-from-ar-four').val(to);
      $('#multi-search-to-ar-four').val(from);

   
       $('#multi-airport-from-four').val(split_to_multi_four[2]);
       $('#multi-airport-to-four').val(split_from_multi_four[2]);
   
      
      
      })
      
  
                        
  
  
                        
  
  
  //////////////////--------------------------------------/////////////////////////////////////////
   
  













    
// Start Search Form Six

// search from 6
function start_multi_search_from_five(){
  function multi_searchfrom_ar_five(){
      
      
    $.ajax({
    
    url:'airport.json',
    dataType :'json',
    cache: false ,
    success :function(data , status){
    
    
    $('#multi-result-from-ar-five').html('');
    var searchField = $('#multi-search-from-ar-five').val();
    var expression = new RegExp(searchField, "i");
    for (var x in data){
    if (  data[x].country_ar.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
    {
      $('#multi-result-from-ar-five').append(' <li   class="multi-result-from-li-ar" style="  padding-left:30px;padding-top:10px;padding-bottom:20px;color: #888;border-bottom: 1px solid #ddd;"> <i class="fa-solid fa-plane-departure fa-plane-departure-ar"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_ar +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-ar"> '  + data[x].code +'</span>  </li>  ');
    }
    
    
    }
    
    
    }
    
    })
    
    }
    
    $('#multi-search-from-ar-five').blur(function(){

      $(".fa-location-crosshairs-ar-six").removeClass("active-icon");
  
  })
  
  $('#multi-search-from-ar-five').focus(function(){
    $(".fa-location-crosshairs-ar-six").addClass("active-icon");
  
    
  
    $('#multi-search-from-ar-five').select();
  
    })
  
  
    
    $('#multi-search-from-ar-five').keyup(function(){
    if($("#multi-search-from-ar-five").val().length >1 ){
    multi_searchfrom_ar_five();
    
    }
    else if($("#multi-search-from-ar-five").val().length <= 1){
    $('#multi-result-from-ar-five').html('');
    
    }
    
    
    })
    
    
    
    $('#multi-result-from-ar-five').on('click', 'li', function() {
    var splitted = $(this).text().split(" , ", 3);
    $('#multi-search-from-ar-five').val($.trim(splitted));
    $("#multi-result-from-ar-five").html('');
    $('#multi-airport-from-five').val($.trim(splitted[2]));
  
    });
    ////////////////////////////////////////////////////
    
  }
  
  
  
  // search to 2
  function start_multi_search_to_five(){
    function multi_searchto_ar_five(){
        
        
      $.ajax({
      
      url:'airport.json',
      dataType :'json',
      cache: false ,
      success :function(data , status){
      
      
      $('#multi-result-to-ar-five').html('');
      var searchField = $('#multi-search-to-ar-five').val();
      var expression = new RegExp(searchField, "i");
      for (var x in data){
      if (  data[x].country_ar.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
      {
        $('#multi-result-to-ar-five').append(' <li   class="multi-result-from-li-ar" style="  padding-left:30px;padding-top:10px;padding-bottom:20px;color: #888;border-bottom: 1px solid #ddd;"> <i class="fa-solid fa-plane-departure fa-plane-departure-ar"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_ar +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-ar"> '  + data[x].code +'</span>  </li>  ');
      }
      
      
      }
      
      
      }
      
      })
      
      }
      
      $('#multi-search-to-ar-five').blur(function(){

        $(".fa-location-dot-ar-six").removeClass("active-icon");
    
    })
    
    $('#multi-search-to-ar-five').focus(function(){
      $(".fa-location-dot-ar-six").addClass("active-icon");
    
      
      
    
      $('#multi-search-to-ar-five').select();
    
      })
    
    
      
      $('#multi-search-to-ar-five').keyup(function(){
      if($("#multi-search-to-ar-five").val().length >1 ){
      multi_searchto_ar_five();
      
      }
      else if($("#multi-search-to-ar-five").val().length <= 1){
      $('#multi-result-to-ar-five').html('');
      
      }
      
      
      })
      
      
      
      $('#multi-result-to-ar-five').on('click', 'li', function() {
      var splitted = $(this).text().split(" , ", 3);
      $('#multi-search-to-ar-five').val($.trim(splitted));
      $("#multi-result-to-ar-five").html('');
      $('#multi-airport-to-five').val($.trim(splitted[2]));
    
  
    });
  
  
  
    ////////////////////////////////////////////////////
      
    }
    
    
  
  
  
      
    $('.multi-replace-ar-five').on('click', function() {
      
      var from = $('#multi-search-from-ar-five').val();
      var to = $('#multi-search-to-ar-five').val();
         
      var split_from_multi_five = $('#multi-search-from-ar-five').val().split(" , ", 3);
      var split_to_multi_five = $('#multi-search-to-ar-five').val().split(" , ", 3);

   
      $('#multi-search-from-ar-five').val(to);
      $('#multi-search-to-ar-five').val(from);
      
   
       $('#multi-airport-from-five').val(split_to_multi_five[2]);
       $('#multi-airport-to-five').val(split_from_multi_five[2]);
      
      })
      
  
                        
  
  
                        
  
  
  //////////////////--------------------------------------/////////////////////////////////////////
   
  





















      
// Start Search Form Seven

// search from 7
function start_multi_search_from_six(){
  function multi_searchfrom_ar_six(){
      
      
    $.ajax({
    
    url:'airport.json',
    dataType :'json',
    cache: false ,
    success :function(data , status){
    
    
    $('#multi-result-from-ar-six').html('');
    var searchField = $('#multi-search-from-ar-six').val();
    var expression = new RegExp(searchField, "i");
    for (var x in data){
    if (  data[x].country_ar.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
    {
      $('#multi-result-from-ar-six').append(' <li   class="multi-result-from-li-ar" style="  padding-left:30px;padding-top:10px;padding-bottom:20px;color: #888;border-bottom: 1px solid #ddd;"> <i class="fa-solid fa-plane-departure fa-plane-departure-ar"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_ar +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-ar"> '  + data[x].code +'</span>  </li>  ');
    }
    
    
    }
    
    
    }
    
    })
    
    }
    
    $('#multi-search-from-ar-six').blur(function(){

      $(".fa-location-crosshairs-ar-seven").removeClass("active-icon");
  
  })
  
  $('#multi-search-from-ar-six').focus(function(){
    $(".fa-location-crosshairs-ar-seven").addClass("active-icon");
  
    
  
    $('#multi-search-from-ar-six').select();
  
    })
  
  
    
    $('#multi-search-from-ar-six').keyup(function(){
    if($("#multi-search-from-ar-six").val().length >1 ){
    multi_searchfrom_ar_six();
    
    }
    else if($("#multi-search-from-ar-six").val().length <= 1){
    $('#multi-result-from-ar-six').html('');
    
    }
    
    
    })
    
    
    
    $('#multi-result-from-ar-six').on('click', 'li', function() {
    var splitted = $(this).text().split(" , ", 3);
    $('#multi-search-from-ar-six').val($.trim(splitted));
    $("#multi-result-from-ar-six").html('');
    $('#multi-airport-from-six').val($.trim(splitted[2]));
  
    });
    ////////////////////////////////////////////////////
    
  }
  
  
  
  // search to 2
  function start_multi_search_to_six(){
    function multi_searchto_ar_six(){
        
        
      $.ajax({
      
      url:'airport.json',
      dataType :'json',
      cache: false ,
      success :function(data , status){
      
      
      $('#multi-result-to-ar-six').html('');
      var searchField = $('#multi-search-to-ar-six').val();
      var expression = new RegExp(searchField, "i");
      for (var x in data){
      if (  data[x].country_ar.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
      {
        $('#multi-result-to-ar-six').append(' <li   class="multi-result-from-li-ar" style="  padding-left:30px;padding-top:10px;padding-bottom:20px;color: #888;border-bottom: 1px solid #ddd;"> <i class="fa-solid fa-plane-departure fa-plane-departure-ar"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_ar +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-ar"> '  + data[x].code +'</span>  </li>  ');
      }
      
      
      }
      
      
      }
      
      })
      
      }
      
        
      $('#multi-search-to-ar-six').blur(function(){

      $(".fa-location-dot-ar-seven").removeClass("active-icon");
  
  })
  
  $('#multi-search-to-ar-six').focus(function(){
    $(".fa-location-dot-ar-seven").addClass("active-icon");
  
      
    
      $('#multi-search-to-ar-six').select();
    
      })
    
    
      
      $('#multi-search-to-ar-six').keyup(function(){
      if($("#multi-search-to-ar-six").val().length >1 ){
      multi_searchto_ar_six();
      
      }
      else if($("#multi-search-to-ar-six").val().length <= 1){
      $('#multi-result-to-ar-six').html('');
      
      }
      
      
      })
      
      
      
      $('#multi-result-to-ar-six').on('click', 'li', function() {
      var splitted = $(this).text().split(" , ", 3);
      $('#multi-search-to-ar-six').val($.trim(splitted));
      $("#multi-result-to-ar-six").html('');
      $('#multi-airport-to-six').val($.trim(splitted[2]));
    
  
    });
  
  
  
    ////////////////////////////////////////////////////
      
    }
    
    
  
  
  
      
    $('.multi-replace-ar-six').on('click', function() {
      
      var from = $('#multi-search-from-ar-six').val();
      var to = $('#multi-search-to-ar-six').val();

      var split_from_multi_six = $('#multi-search-from-ar-six').val().split(" , ", 3);
      var split_to_multi_six = $('#multi-search-to-ar-six').val().split(" , ", 3);
      
      $('#multi-search-from-ar-six').val(to);
      $('#multi-search-to-ar-six').val(from);
      
   
       $('#multi-airport-from-six').val(split_to_multi_six[2]);
       $('#multi-airport-to-six').val(split_from_multi_six[2]);
      
      
      })
      
  
                        
  
  
                        
  
  
  //////////////////--------------------------------------/////////////////////////////////////////
   
  
