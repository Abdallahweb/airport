// clone and remove buttons


var count_multi = 1 ;



function clone_en(){


  if(count_multi == 1){      
  
      count_multi = 2 ;   

      $("#multi-form-container-en-two").css("display" , "flex");
      start_multi_search_from_two();
      start_multi_search_to_two();
  } 


  else if(count_multi == 2){      
      
    count_multi = 3 ;   

    $("#multi-form-container-en-three").css("display" , "flex");
    start_multi_search_from_three();
    start_multi_search_to_three();
} 


else if(count_multi == 3){      
      
  count_multi = 4 ;   

  $("#multi-form-container-en-four").css("display" , "flex");
  start_multi_search_from_four();
  start_multi_search_to_four();
} 


else if(count_multi == 4){      
      
  count_multi = 5 ;   

  $("#multi-form-container-en-five").css("display" , "flex");
  start_multi_search_from_five();
  start_multi_search_to_five();
} 



else if(count_multi == 5){      
      
  count_multi = 6 ;   

  $("#multi-form-container-en-six").css("display" , "flex");
  start_multi_search_from_six();
  start_multi_search_to_six();
  $("#clone_div-en").fadeOut();

} 



    else{
      $("#clone_div-en").fadeIn();
    
    }
    
  
  
  }
  


 function removes_en_two(){
  count_multi = 1;
  $("#multi-form-container-en-two").fadeOut();
  $('#multi-airport-from-two').val("");
  $('#multi-airport-to-two').val("");

  $("#clone_div-en").fadeIn();

 }

 
 function removes_en_three(){
  count_multi = 2 ; 
  $("#multi-form-container-en-three").fadeOut();
  $('#multi-airport-from-three').val("");
  $('#multi-airport-to-three').val("");
  $("#clone_div-en").fadeIn();


 }
 
 function removes_en_four(){
  count_multi = 3 ; 

  $("#multi-form-container-en-four").fadeOut();  
  $('#multi-airport-from-four').val("");
  $('#multi-airport-to-four').val("");

  $("#clone_div-en").fadeIn();

 }

 
 function removes_en_five(){
  count_multi = 4 ; 
  $("#multi-form-container-en-five").fadeOut();
  $('#multi-airport-from-five').val("");
  $('#multi-airport-to-five').val("");
  $("#clone_div-en").fadeIn();

 }
 
 function removes_en_six(){
  count_multi = 5 ; 
  $("#multi-form-container-en-six").fadeOut();
  $('#multi-airport-from-six').val("");
  $('#multi-airport-to-six').val("");
  $("#clone_div-en").fadeIn();

 }















// Start Search Form Two

// search from 2
function start_multi_search_from_one(){
function multi_searchfrom_en_one(){
    
    
  $.ajax({
  
  url:'airport.json',
  dataType :'json',
  cache: false ,
  success :function(data , status){
  
  
  $('#multi-result-from-en-one').html('');
  var searchField = $('#multi-search-from-en-one').val();
  var expression = new RegExp(searchField, "i");
  for (var x in data){
  if (  data[x].country_en.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
  {
    $('#multi-result-from-en-one').append(' <li   class="multi-result-from-li-en" style="  padding-left:30px;padding-top:10px;padding-bottom:20px;color: #888;border-bottom: 1px solid #ddd;"> <i class="fa-solid fa-plane-departure fa-plane-departure-en"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_en +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-en"> '  + data[x].code +'</span>  </li>  ');
  }
  
  
  }
  
  
  }
  
  })
  
  }
  
      
    
  $('#multi-search-from-en-one').blur(function(){

    $(".fa-location-crosshairs-en-two").removeClass("active-icon");

})

$('#multi-search-from-en-one').focus(function(){
    $(".fa-location-crosshairs-en-two").addClass("active-icon");


  $('#multi-search-from-en-one').select();

  })


  
  $('#multi-search-from-en-one').keyup(function(){
  if($("#multi-search-from-en-one").val().length >1 ){
  multi_searchfrom_en_one();
  
  }
  else if($("#multi-search-from-en-one").val().length <= 1){
  $('#multi-result-from-en-one').html('');
  
  }
  
  
  })
  
  
  
  $('#multi-result-from-en-one').on('click', 'li', function() {
  var splitted = $(this).text().split(" , ", 3);
  $('#multi-search-from-en-one').val($.trim(splitted));
  $("#multi-result-from-en-one").html('');
  $('#multi-airport-from-one').val($.trim(splitted[2]));

  });
  ////////////////////////////////////////////////////
  
}



// search to 2
function start_multi_search_to_one(){
  function multi_searchto_en_one(){
      
      
    $.ajax({
    
    url:'airport.json',
    dataType :'json',
    cache: false ,
    success :function(data , status){
    
    
    $('#multi-result-to-en-one').html('');
    var searchField = $('#multi-search-to-en-one').val();
    var expression = new RegExp(searchField, "i");
    for (var x in data){
    if (  data[x].country_en.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
    {
      $('#multi-result-to-en-one').append(' <li   class="multi-result-from-li-en" style="  padding-left:30px;padding-top:10px;padding-bottom:20px;color: #888;border-bottom: 1px solid #ddd;"> <i class="fa-solid fa-plane-departure fa-plane-departure-en"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_en +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-en"> '  + data[x].code +'</span>  </li>  ');
    }
    
    
    }
    
    
    }
    
    })
    
    }
    

    
  $('#multi-search-to-en-one').blur(function(){

    $(".fa-location-dot-en-two").removeClass("active-icon");

})

$('#multi-search-to-en-one').focus(function(){
  $(".fa-location-dot-en-two").addClass("active-icon");
    
    
  
    $('#multi-search-to-en-one').select();
  
    })
  
  
    
    $('#multi-search-to-en-one').keyup(function(){
    if($("#multi-search-to-en-one").val().length >1 ){
    multi_searchto_en_one();
    
    }
    else if($("#multi-search-to-en-one").val().length <= 1){
    $('#multi-result-to-en-one').html('');
    
    }
    
    
    })
    
    
    
    $('#multi-result-to-en-one').on('click', 'li', function() {
    var splitted = $(this).text().split(" , ", 3);
    $('#multi-search-to-en-one').val($.trim(splitted));
    $("#multi-result-to-en-one").html('');
    $('#multi-airport-to-one').val($.trim(splitted[2]));
  

  });



  ////////////////////////////////////////////////////
    
  }
  
  



    
  $('.multi-replace-en-one').on('click', function() {
    
    var from = $('#multi-search-from-en-one').val();
    var to = $('#multi-search-to-en-one').val();
    
    
    
   var split_from_multi_one = $('#multi-search-from-en-one').val().split(" , ", 3);
   var split_to_multi_one = $('#multi-search-to-en-one').val().split(" , ", 3);

    $('#multi-search-from-en-one').val(to);
    $('#multi-search-to-en-one').val(from);
   
    $('#multi-airport-from-one').val(split_to_multi_one[2]);
    $('#multi-airport-to-one').val(split_from_multi_one[2]);

    

    })
    

                      

                      


//////////////////--------------------------------------/////////////////////////////////////////
 

















// Start Search Form Three

// search from 3
function start_multi_search_from_two(){
  function multi_searchfrom_en_two(){
      
      
    $.ajax({
    
    url:'airport.json',
    dataType :'json',
    cache: false ,
    success :function(data , status){
    
    
    $('#multi-result-from-en-two').html('');
    var searchField = $('#multi-search-from-en-two').val();
    var expression = new RegExp(searchField, "i");
    for (var x in data){
    if (  data[x].country_en.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
    {
      $('#multi-result-from-en-two').append(' <li   class="multi-result-from-li-en" style="  padding-left:30px;padding-top:10px;padding-bottom:20px;color: #888;border-bottom: 1px solid #ddd;"> <i class="fa-solid fa-plane-departure fa-plane-departure-en"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_en +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-en"> '  + data[x].code +'</span>  </li>  ');
    }
    
    
    }
    
    
    }
    
    })
    
    }
    
    
    
    $('#multi-search-from-en-two').blur(function(){

    $(".fa-location-crosshairs-en-three").removeClass("active-icon");

})

$('#multi-search-from-en-two').focus(function(){
  $(".fa-location-crosshairs-en-three").addClass("active-icon");

    
  
    $('#multi-search-from-en-two').select();
  
    })
  
  
    
    $('#multi-search-from-en-two').keyup(function(){
    if($("#multi-search-from-en-two").val().length >1 ){
    multi_searchfrom_en_two();
    
    }
    else if($("#multi-search-from-en-two").val().length <= 1){
    $('#multi-result-from-en-two').html('');
    
    }
    
    
    })
    
    
    
    $('#multi-result-from-en-two').on('click', 'li', function() {
    var splitted = $(this).text().split(" , ", 3);
    $('#multi-search-from-en-two').val($.trim(splitted));
    $("#multi-result-from-en-two").html('');
    $('#multi-airport-from-two').val($.trim(splitted[2]));
  
    });
    ////////////////////////////////////////////////////
    
  }
  
  
  
  // search to 2
  function start_multi_search_to_two(){
    function multi_searchto_en_two(){
        
        
      $.ajax({
      
      url:'airport.json',
      dataType :'json',
      cache: false ,
      success :function(data , status){
      
      
      $('#multi-result-to-en-two').html('');
      var searchField = $('#multi-search-to-en-two').val();
      var expression = new RegExp(searchField, "i");
      for (var x in data){
      if (  data[x].country_en.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
      {
        $('#multi-result-to-en-two').append(' <li   class="multi-result-from-li-en" style="  padding-left:30px;padding-top:10px;padding-bottom:20px;color: #888;border-bottom: 1px solid #ddd;"> <i class="fa-solid fa-plane-departure fa-plane-departure-en"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_en +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-en"> '  + data[x].code +'</span>  </li>  ');
      }
      
      
      }
      
      
      }
      
      })
      
      }
      

      
      $('#multi-search-to-en-two').blur(function(){

      $(".fa-location-dot-en-three").removeClass("active-icon");
  
  })
  
  $('#multi-search-to-en-two').focus(function(){
    $(".fa-location-dot-en-three").addClass("active-icon");
  
      
      
      
    
      $('#multi-search-to-en-two').select();
    
      })
    
    
      
      $('#multi-search-to-en-two').keyup(function(){
      if($("#multi-search-to-en-two").val().length >1 ){
      multi_searchto_en_two();
      
      }
      else if($("#multi-search-to-en-two").val().length <= 1){
      $('#multi-result-to-en-two').html('');
      
      }
      
      
      })
      
      
      
      $('#multi-result-to-en-two').on('click', 'li', function() {
      var splitted = $(this).text().split(" , ", 3);
      $('#multi-search-to-en-two').val($.trim(splitted));
      $("#multi-result-to-en-two").html('');
      $('#multi-airport-to-two').val($.trim(splitted[2]));
    
  
    });
  
  
  
    ////////////////////////////////////////////////////
      
    }
    
    
  
  
  
      
    $('.multi-replace-en-two').on('click', function() {
      
      var from = $('#multi-search-from-en-two').val();
      var to = $('#multi-search-to-en-two').val();
      
      var split_from_multi_two = $('#multi-search-from-en-two').val().split(" , ", 3);
      var split_to_multi_two = $('#multi-search-to-en-two').val().split(" , ", 3);
   

      $('#multi-search-from-en-two').val(to);
      $('#multi-search-to-en-two').val(from);

      
  
       $('#multi-airport-from-two').val(split_to_multi_two[2]);
       $('#multi-airport-to-two').val(split_from_multi_two[2]);
      
      })
      
  
                        
  
  
                        
  
  
  //////////////////--------------------------------------/////////////////////////////////////////
   
  
























  
// Start Search Form Four

// search from 4
function start_multi_search_from_three(){
  function multi_searchfrom_en_three(){
      
      
    $.ajax({
    
    url:'airport.json',
    dataType :'json',
    cache: false ,
    success :function(data , status){
    
    
    $('#multi-result-from-en-three').html('');
    var searchField = $('#multi-search-from-en-three').val();
    var expression = new RegExp(searchField, "i");
    for (var x in data){
    if (  data[x].country_en.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
    {
      $('#multi-result-from-en-three').append(' <li   class="multi-result-from-li-en" style="  padding-left:30px;padding-top:10px;padding-bottom:20px;color: #888;border-bottom: 1px solid #ddd;"> <i class="fa-solid fa-plane-departure fa-plane-departure-en"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_en +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-en"> '  + data[x].code +'</span>  </li>  ');
    }
    
    
    }
    
    
    }
    
    })
    
    }
    
    
    $('#multi-search-from-en-three').blur(function(){

      $(".fa-location-crosshairs-en-four").removeClass("active-icon");
  
  })
  
  $('#multi-search-from-en-three').focus(function(){
    $(".fa-location-crosshairs-en-four").addClass("active-icon");
  

    
  
    $('#multi-search-from-en-three').select();
  
    })
  
  
    
    $('#multi-search-from-en-three').keyup(function(){
    if($("#multi-search-from-en-three").val().length >1 ){
    multi_searchfrom_en_three();
    
    }
    else if($("#multi-search-from-en-three").val().length <= 1){
    $('#multi-result-from-en-three').html('');
    
    }
    
    
    })
    
    
    
    $('#multi-result-from-en-three').on('click', 'li', function() {
    var splitted = $(this).text().split(" , ", 3);
    $('#multi-search-from-en-three').val($.trim(splitted));
    $("#multi-result-from-en-three").html('');
    $('#multi-airport-from-three').val($.trim(splitted[2]));
  
    });
    ////////////////////////////////////////////////////
    
  }
  
  
  
  // search to 2
  function start_multi_search_to_three(){
    function multi_searchto_en_three(){
        
        
      $.ajax({
      
      url:'airport.json',
      dataType :'json',
      cache: false ,
      success :function(data , status){
      
      
      $('#multi-result-to-en-three').html('');
      var searchField = $('#multi-search-to-en-three').val();
      var expression = new RegExp(searchField, "i");
      for (var x in data){
      if (  data[x].country_en.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
      {
        $('#multi-result-to-en-three').append(' <li   class="multi-result-from-li-en" style="  padding-left:30px;padding-top:10px;padding-bottom:20px;color: #888;border-bottom: 1px solid #ddd;"> <i class="fa-solid fa-plane-departure fa-plane-departure-en"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_en +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-en"> '  + data[x].code +'</span>  </li>  ');
      }
      
      
      }
      
      
      }
      
      })
      
      }
      
      
      
      
      $('#multi-search-to-en-three').blur(function(){

      $(".fa-location-dot-en-four").removeClass("active-icon");
  
  })
  
  $('#multi-search-to-en-three').focus(function(){
    $(".fa-location-dot-en-four").addClass("active-icon");
  

    

    
      $('#multi-search-to-en-three').select();
    
      })
    
    
      
      $('#multi-search-to-en-three').keyup(function(){
      if($("#multi-search-to-en-three").val().length >1 ){
      multi_searchto_en_three();
      
      }
      else if($("#multi-search-to-en-three").val().length <= 1){
      $('#multi-result-to-en-three').html('');
      
      }
      
      
      })
      
      
      
      $('#multi-result-to-en-three').on('click', 'li', function() {
      var splitted = $(this).text().split(" , ", 3);
      $('#multi-search-to-en-three').val($.trim(splitted));
      $("#multi-result-to-en-three").html('');
      $('#multi-airport-to-three').val($.trim(splitted[2]));
    
  
    });
  
  
  
    ////////////////////////////////////////////////////
      
    }
    
    
  
  
  
      
    $('.multi-replace-en-three').on('click', function() {
      
      var from = $('#multi-search-from-en-three').val();
      var to = $('#multi-search-to-en-three').val();
          
   var split_from_multi_three = $('#multi-search-from-en-three').val().split(" , ", 3);
   var split_to_multi_three = $('#multi-search-to-en-three').val().split(" , ", 3);

      
      $('#multi-search-from-en-three').val(to);
      $('#multi-search-to-en-three').val(from);
          

    $('#multi-airport-from-three').val(split_to_multi_three[2]);
    $('#multi-airport-to-three').val(split_from_multi_three[2]);


      })
      
  
                        
  
  
                        
  
  
  //////////////////--------------------------------------/////////////////////////////////////////
   
  




















  
// Start Search Form Five

// search from 5
function start_multi_search_from_four(){
  function multi_searchfrom_en_four(){
      
      
    $.ajax({
    
    url:'airport.json',
    dataType :'json',
    cache: false ,
    success :function(data , status){
    
    
    $('#multi-result-from-en-four').html('');
    var searchField = $('#multi-search-from-en-four').val();
    var expression = new RegExp(searchField, "i");
    for (var x in data){
    if (  data[x].country_en.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
    {
      $('#multi-result-from-en-four').append(' <li   class="multi-result-from-li-en" style="  padding-left:30px;padding-top:10px;padding-bottom:20px;color: #888;border-bottom: 1px solid #ddd;"> <i class="fa-solid fa-plane-departure fa-plane-departure-en"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_en +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-en"> '  + data[x].code +'</span>  </li>  ');
    }
    
    
    }
    
    
    }
    
    })
    
    }
    
          
      
    $('#multi-search-from-en-four').blur(function(){

      $(".fa-location-crosshairs-en-five").removeClass("active-icon");
  
  })
  
  $('#multi-search-from-en-four').focus(function(){
    $(".fa-location-crosshairs-en-five").addClass("active-icon");
  

    
    
  
    $('#multi-search-from-en-four').select();
  
    })
  
  
    
    $('#multi-search-from-en-four').keyup(function(){
    if($("#multi-search-from-en-four").val().length >1 ){
    multi_searchfrom_en_four();
    
    }
    else if($("#multi-search-from-en-four").val().length <= 1){
    $('#multi-result-from-en-four').html('');
    
    }
    
    
    })
    
    
    
    $('#multi-result-from-en-four').on('click', 'li', function() {
    var splitted = $(this).text().split(" , ", 3);
    $('#multi-search-from-en-four').val($.trim(splitted));
    $("#multi-result-from-en-four").html('');
    $('#multi-airport-from-four').val($.trim(splitted[2]));
  
    });
    ////////////////////////////////////////////////////
    
  }
  
  
  
  // search to 2
  function start_multi_search_to_four(){
    function multi_searchto_en_four(){
        
        
      $.ajax({
      
      url:'airport.json',
      dataType :'json',
      cache: false ,
      success :function(data , status){
      
      
      $('#multi-result-to-en-four').html('');
      var searchField = $('#multi-search-to-en-four').val();
      var expression = new RegExp(searchField, "i");
      for (var x in data){
      if (  data[x].country_en.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
      {
        $('#multi-result-to-en-four').append(' <li   class="multi-result-from-li-en" style="  padding-left:30px;padding-top:10px;padding-bottom:20px;color: #888;border-bottom: 1px solid #ddd;"> <i class="fa-solid fa-plane-departure fa-plane-departure-en"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_en +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-en"> '  + data[x].code +'</span>  </li>  ');
      }
      
      
      }
      
      
      }
      
      })
      
      }
      
      
      
      $('#multi-search-to-en-four').blur(function(){

      $(".fa-location-dot-en-five").removeClass("active-icon");
  
  })
  
  $('#multi-search-to-en-four').focus(function(){
    $(".fa-location-dot-en-five").addClass("active-icon");
  
    
      $('#multi-search-to-en-four').select();
    
      })
    
    
      
      $('#multi-search-to-en-four').keyup(function(){
      if($("#multi-search-to-en-four").val().length >1 ){
      multi_searchto_en_four();
      
      }
      else if($("#multi-search-to-en-four").val().length <= 1){
      $('#multi-result-to-en-four').html('');
      
      }
      
      
      })
      
      
      
      $('#multi-result-to-en-four').on('click', 'li', function() {
      var splitted = $(this).text().split(" , ", 3);
      $('#multi-search-to-en-four').val($.trim(splitted));
      $("#multi-result-to-en-four").html('');
      $('#multi-airport-to-four').val($.trim(splitted[2]));
    
  
    });
  
  
  
    ////////////////////////////////////////////////////
      
    }
    
    
  
  
  
      
    $('.multi-replace-en-four').on('click', function() {
      
      var from = $('#multi-search-from-en-four').val();
      var to = $('#multi-search-to-en-four').val();
      

      var split_from_multi_four = $('#multi-search-from-en-four').val().split(" , ", 3);
      var split_to_multi_four = $('#multi-search-to-en-four').val().split(" , ", 3);
   
      
      $('#multi-search-from-en-four').val(to);
      $('#multi-search-to-en-four').val(from);

   
       $('#multi-airport-from-four').val(split_to_multi_four[2]);
       $('#multi-airport-to-four').val(split_from_multi_four[2]);
   
      
      
      })
      
  
                        
  
  
                        
  
  
  //////////////////--------------------------------------/////////////////////////////////////////
   
  













    
// Start Search Form Six

// search from 6
function start_multi_search_from_five(){
  function multi_searchfrom_en_five(){
      
      
    $.ajax({
    
    url:'airport.json',
    dataType :'json',
    cache: false ,
    success :function(data , status){
    
    
    $('#multi-result-from-en-five').html('');
    var searchField = $('#multi-search-from-en-five').val();
    var expression = new RegExp(searchField, "i");
    for (var x in data){
    if (  data[x].country_en.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
    {
      $('#multi-result-from-en-five').append(' <li   class="multi-result-from-li-en" style="  padding-left:30px;padding-top:10px;padding-bottom:20px;color: #888;border-bottom: 1px solid #ddd;"> <i class="fa-solid fa-plane-departure fa-plane-departure-en"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_en +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-en"> '  + data[x].code +'</span>  </li>  ');
    }
    
    
    }
    
    
    }
    
    })
    
    }
    
    $('#multi-search-from-en-five').blur(function(){

      $(".fa-location-crosshairs-en-six").removeClass("active-icon");
  
  })
  
  $('#multi-search-from-en-five').focus(function(){
    $(".fa-location-crosshairs-en-six").addClass("active-icon");
  
    
  
    $('#multi-search-from-en-five').select();
  
    })
  
  
    
    $('#multi-search-from-en-five').keyup(function(){
    if($("#multi-search-from-en-five").val().length >1 ){
    multi_searchfrom_en_five();
    
    }
    else if($("#multi-search-from-en-five").val().length <= 1){
    $('#multi-result-from-en-five').html('');
    
    }
    
    
    })
    
    
    
    $('#multi-result-from-en-five').on('click', 'li', function() {
    var splitted = $(this).text().split(" , ", 3);
    $('#multi-search-from-en-five').val($.trim(splitted));
    $("#multi-result-from-en-five").html('');
    $('#multi-airport-from-five').val($.trim(splitted[2]));
  
    });
    ////////////////////////////////////////////////////
    
  }
  
  
  
  // search to 2
  function start_multi_search_to_five(){
    function multi_searchto_en_five(){
        
        
      $.ajax({
      
      url:'airport.json',
      dataType :'json',
      cache: false ,
      success :function(data , status){
      
      
      $('#multi-result-to-en-five').html('');
      var searchField = $('#multi-search-to-en-five').val();
      var expression = new RegExp(searchField, "i");
      for (var x in data){
      if (  data[x].country_en.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
      {
        $('#multi-result-to-en-five').append(' <li   class="multi-result-from-li-en" style="  padding-left:30px;padding-top:10px;padding-bottom:20px;color: #888;border-bottom: 1px solid #ddd;"> <i class="fa-solid fa-plane-departure fa-plane-departure-en"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_en +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-en"> '  + data[x].code +'</span>  </li>  ');
      }
      
      
      }
      
      
      }
      
      })
      
      }
      
      $('#multi-search-to-en-five').blur(function(){

        $(".fa-location-dot-en-six").removeClass("active-icon");
    
    })
    
    $('#multi-search-to-en-five').focus(function(){
      $(".fa-location-dot-en-six").addClass("active-icon");
    
      
      
    
      $('#multi-search-to-en-five').select();
    
      })
    
    
      
      $('#multi-search-to-en-five').keyup(function(){
      if($("#multi-search-to-en-five").val().length >1 ){
      multi_searchto_en_five();
      
      }
      else if($("#multi-search-to-en-five").val().length <= 1){
      $('#multi-result-to-en-five').html('');
      
      }
      
      
      })
      
      
      
      $('#multi-result-to-en-five').on('click', 'li', function() {
      var splitted = $(this).text().split(" , ", 3);
      $('#multi-search-to-en-five').val($.trim(splitted));
      $("#multi-result-to-en-five").html('');
      $('#multi-airport-to-five').val($.trim(splitted[2]));
    
  
    });
  
  
  
    ////////////////////////////////////////////////////
      
    }
    
    
  
  
  
      
    $('.multi-replace-en-five').on('click', function() {
      
      var from = $('#multi-search-from-en-five').val();
      var to = $('#multi-search-to-en-five').val();
         
      var split_from_multi_five = $('#multi-search-from-en-five').val().split(" , ", 3);
      var split_to_multi_five = $('#multi-search-to-en-five').val().split(" , ", 3);

   
      $('#multi-search-from-en-five').val(to);
      $('#multi-search-to-en-five').val(from);
      
   
       $('#multi-airport-from-five').val(split_to_multi_five[2]);
       $('#multi-airport-to-five').val(split_from_multi_five[2]);
      
      })
      
  
                        
  
  
                        
  
  
  //////////////////--------------------------------------/////////////////////////////////////////
   
  





















      
// Start Search Form Seven

// search from 7
function start_multi_search_from_six(){
  function multi_searchfrom_en_six(){
      
      
    $.ajax({
    
    url:'airport.json',
    dataType :'json',
    cache: false ,
    success :function(data , status){
    
    
    $('#multi-result-from-en-six').html('');
    var searchField = $('#multi-search-from-en-six').val();
    var expression = new RegExp(searchField, "i");
    for (var x in data){
    if (  data[x].country_en.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
    {
      $('#multi-result-from-en-six').append(' <li   class="multi-result-from-li-en" style="  padding-left:30px;padding-top:10px;padding-bottom:20px;color: #888;border-bottom: 1px solid #ddd;"> <i class="fa-solid fa-plane-departure fa-plane-departure-en"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_en +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-en"> '  + data[x].code +'</span>  </li>  ');
    }
    
    
    }
    
    
    }
    
    })
    
    }
    
    $('#multi-search-from-en-six').blur(function(){

      $(".fa-location-crosshairs-en-seven").removeClass("active-icon");
  
  })
  
  $('#multi-search-from-en-six').focus(function(){
    $(".fa-location-crosshairs-en-seven").addClass("active-icon");
  
    
  
    $('#multi-search-from-en-six').select();
  
    })
  
  
    
    $('#multi-search-from-en-six').keyup(function(){
    if($("#multi-search-from-en-six").val().length >1 ){
    multi_searchfrom_en_six();
    
    }
    else if($("#multi-search-from-en-six").val().length <= 1){
    $('#multi-result-from-en-six').html('');
    
    }
    
    
    })
    
    
    
    $('#multi-result-from-en-six').on('click', 'li', function() {
    var splitted = $(this).text().split(" , ", 3);
    $('#multi-search-from-en-six').val($.trim(splitted));
    $("#multi-result-from-en-six").html('');
    $('#multi-airport-from-six').val($.trim(splitted[2]));
  
    });
    ////////////////////////////////////////////////////
    
  }
  
  
  
  // search to 2
  function start_multi_search_to_six(){
    function multi_searchto_en_six(){
        
        
      $.ajax({
      
      url:'airport.json',
      dataType :'json',
      cache: false ,
      success :function(data , status){
      
      
      $('#multi-result-to-en-six').html('');
      var searchField = $('#multi-search-to-en-six').val();
      var expression = new RegExp(searchField, "i");
      for (var x in data){
      if (  data[x].country_en.search(expression) != -1 || data[x].country_ar.search(expression) != -1 || data[x].country_iso.search(expression) != -1 ||  data[x].code.search(expression) != -1 ||   data[x].airport.search(expression) != -1  || data[x].city.search(expression) != -1 )
      {
        $('#multi-result-to-en-six').append(' <li   class="multi-result-from-li-en" style="  padding-left:30px;padding-top:10px;padding-bottom:20px;color: #888;border-bottom: 1px solid #ddd;"> <i class="fa-solid fa-plane-departure fa-plane-departure-en"></i> <span class="text-muted" style="color:#333">'  + data[x].city + '  ' + ' , ' + '  ' + data[x].country_en +   '  ' + ' <br> <span style="padding-left:29px">' + data[x].airport + ' <span style="opacity:0"> , </span> ' +  '</span></span>   <span class="iata-en"> '  + data[x].code +'</span>  </li>  ');
      }
      
      
      }
      
      
      }
      
      })
      
      }
      
        
      $('#multi-search-to-en-six').blur(function(){

      $(".fa-location-dot-en-seven").removeClass("active-icon");
  
  })
  
  $('#multi-search-to-en-six').focus(function(){
    $(".fa-location-dot-en-seven").addClass("active-icon");
  
      
    
      $('#multi-search-to-en-six').select();
    
      })
    
    
      
      $('#multi-search-to-en-six').keyup(function(){
      if($("#multi-search-to-en-six").val().length >1 ){
      multi_searchto_en_six();
      
      }
      else if($("#multi-search-to-en-six").val().length <= 1){
      $('#multi-result-to-en-six').html('');
      
      }
      
      
      })
      
      
      
      $('#multi-result-to-en-six').on('click', 'li', function() {
      var splitted = $(this).text().split(" , ", 3);
      $('#multi-search-to-en-six').val($.trim(splitted));
      $("#multi-result-to-en-six").html('');
      $('#multi-airport-to-six').val($.trim(splitted[2]));
    
  
    });
  
  
  
    ////////////////////////////////////////////////////
      
    }
    
    
  
  
  
      
    $('.multi-replace-en-six').on('click', function() {
      
      var from = $('#multi-search-from-en-six').val();
      var to = $('#multi-search-to-en-six').val();

      var split_from_multi_six = $('#multi-search-from-en-six').val().split(" , ", 3);
      var split_to_multi_six = $('#multi-search-to-en-six').val().split(" , ", 3);
      
      $('#multi-search-from-en-six').val(to);
      $('#multi-search-to-en-six').val(from);
      
   
       $('#multi-airport-from-six').val(split_to_multi_six[2]);
       $('#multi-airport-to-six').val(split_from_multi_six[2]);
      
      
      })
      
  
                        
  
  
                        
  
  
  //////////////////--------------------------------------/////////////////////////////////////////
   
  
