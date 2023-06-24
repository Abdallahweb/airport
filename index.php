
<?php
if(isset($_POST["submit"])){


echo "<pre>";

print_r($_POST);

echo "</pre>";



}


 
  ?> 


<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
<link rel="stylesheet" href="./assets/css/english.css">
<link rel="stylesheet" href="./assets/css/arabic.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

<title>Flights Search</title>


</head>

<body>

  

<!---------------------------------------------------->
<!--ENGLISH FORM-->
<!---------------------------------------------------->

<div class="container-en" >



  <div id="forms-en" class="forms-en" style="position: relative;">
  
  
  
  
  <div class="type-container-en" >
  <button class="type-button-en active" onclick="one_way_en()" id="one_way_en">
  One-Way
  </button>
  
  <button class="type-button-en" onclick="round_trip_en()" id="round_trip-en">
  Round-Trip
  </button>
  
  <button class="type-button-en" onclick="multi_city_en()">
  Multi-City
  </button>
  
  </div>
  
  <form method="post" >

  <input type="hidden" id="type" name="type" value="">


  <div class="form-container-en">
  
  

  <div class="search-container-en" style="position: relative;">
  <div style="position: relative;">
  <input type="text"  id="search-from-en" placeholder="Origin" autocomplete="off"/>
  <i class="fa-solid fa-location-crosshairs fa-location-crosshairs-en fa-location-crosshairs-en-one"></i>
  <div class="result-from-en" ></div>
  </div>
  <i class="fa-solid fa-right-left fa-right-left-en" id="replace-en"></i>
  
  
  <div style="position: relative;">
  <input type="text" id="search-to-en" placeholder="Destination" style="position: relative;"  autocomplete="off"/>
  <i class="fa-solid fa-location-dot fa-location-dot-en fa-location-dot-en-one" ></i>
  <div class="result-to-en" ></div>
  <input type="hidden" id="airport-from" name="from[]" value="">

  <input type="hidden" id="airport-to" name="to[]" value="">

  </div>
  
  </div>
  
  
  
  
  
  
  <div id="calender-en" style="position: relative;margin-top: 2px;">
  
  <h1 style="font-size: 13px;color:#888" class="month-en"></h1>
  <h1 style="font-size: 20px;color:#333;text-align: center;font-weight: bold;" class="day-en"></h1>
  <h1 style="font-size: 13px;color:#888" class="day-name-en"></h1>
  <input type="date" style="opacity: 0;" id="theDate-en" name="date[]"/>
  
  <i class="fa-regular fa-calendar-plus" style="position: absolute;top:30px;left:20px;font-size: 30px;color:#777"></i>
  </div> 
  
  

  
  <div id="return-en"  style="position: relative;margin-top: 2px;">
  
  <h1 style="font-size: 13px;color:#888" class="month-return-en"></h1>
  <h1 style="font-size: 20px;color:#333;text-align: center;font-weight: bold;" class="day-return-en"></h1>
  <h1 style="font-size: 13px;color:#888" class="day-name-return-en"></h1>
  <input type="date" style="opacity: 0;" id="theDate_return-en" name="date[]"/>

  
  <i class="fa-regular fa-calendar-minus" style="position: absolute;top:30px;left:20px;font-size: 30px;color:#777"></i>
  
  <div id="return_button-en">
  <i class="fa-regular fa-calendar-minus" ></i>   
  <br>
  <p style="font-size: 11px;">ADD RETURN</p>
  </div>
    </div>    
  
  
  
  
  
  <div class="passenger-container-en" style="position: relative;">
  
  
  <select class="type-trip-en"  id="type-trip-en"  name="class">
  <option value="ECONOMY" selected>Economy</option>
<option value="PREMUIM ECONOMY">Premuim Economy </option>
<option value="BUSINESS">Business</option>
<option value="FIRST">First</option>
  </select>
  
  
  
  
  
  
  <input  placeholder="1 Passenger" id="passenger-en" value="" readonly >
  
<input  id="adults" type="hidden" name="adults"  value="1" >
<input  id="children" type="hidden" name="children" >
<input  id="infants" type="hidden" name="infants" >
  <section  id="passenger-list-en" style="position: absolute;top:120px;z-index:1000001" >
  
  <div style="display:flex;position: relative;font-size: 15px"><p>Adults(12+ Years)</p>
  <i class="fa-solid fa-plus"  id="plus-adult-en" style="position:absolute;right: 3px;top:12px;background-color:  #316585;border-radius:999px;padding: 5px;color:#fff"></i> 
  <p  id="count-adult-en" style="position:absolute;right: 33px">1</p>
  <i class="fa-solid fa-minus" id="minus-adult-en" style="position:absolute;right: 50px;top:12px;background-color:  #316585;border-radius:999px;padding: 5px;color:#fff"></i>
  </div>
  
  <div style="display:flex;position: relative;font-size: 15px"><p>Children(2 - 11 Years)</p>
  <i class="fa-solid fa-plus"  id="plus-children-en" style="position:absolute;right: 3px;top:12px;background-color:  #316585;border-radius:999px;padding: 5px;color:#fff"></i> 
  <p  id="count-children-en" style="position:absolute;right: 33px"></p>
  <i class="fa-solid fa-minus" id="minus-children-en" style="position:absolute;right: 50px;top:12px ; background-color:  #316585;border-radius:999px;padding: 5px;color:#fff"></i>
  </div>
  
  <div style="display:flex;position: relative;font-size: 15px;"><p>Infants(Under 2 Years)</p>
  <i class="fa-solid fa-plus"  id="plus-infants-en" style="position:absolute;right: 3px;top:12px ; background-color:#316585;border-radius:999px;padding: 5px;color:#fff"></i> 
  <p  id="count-infants-en" style="position:absolute;right: 33px"></p>
  <i class="fa-solid fa-minus" id="minus-infants-en" style="position:absolute;right: 50px;top:12px;background-color:  #316585;border-radius:999px;padding: 5px;color:#fff"></i>
  </div>
  
  
  </div>
  
  
  
  

  <div class="search-button-container-en" >
  <div class="search-en" id="search-en">
  <i class="fa-solid fa-magnifying-glass fa-magnifying-glass-en"></i><br>
  <input type="submit" name="submit" style="font-size: 15px;font-weight:bold;background-color:transparent;color:#fff;border:none;cursor:pointer;padding-top:15px" value="Search Flights">
  </div>
      
  </div>
  </div>
  

    <!--Multi Search -->
    
    
  
  <div id="flights-en" style="display: none;margin-top: 20px;">
    <div  style="text-align: left;display: flex"> 
    <span class="plane-icon-en">&#9992;</span>
    <span id="count_flight-en"> Flights</span>
    <div style="width:45%;height:4px;background-color: rgba(62, 87, 107, 0.5);margin:15px 0px 0px 10px"></div>
    </div></div>
  
  
    <div id="multi-en" class="multi-en" style="position: relative;">
  
  <div class="multi-form-container-en" id="multi-form-container-en">
  
  
  
  <div class="multi-search-container-en" style="position: relative;">
  <div style="position: relative;">
  <input type="text" id="multi-search-from-en-one" placeholder="Origin"  autocomplete="off"/>
  <i class="fa-solid fa-location-crosshairs fa-location-crosshairs-en fa-location-crosshairs-en-two"></i>
  <div id="multi-result-from-en-one" style="position: absolute;
      width: 450PX;
      cursor: pointer;
      overflow-y: scroll;
      box-sizing: border-box;
      z-index: 100001;
      background-color: #fff;
      font-size: 15px;
      max-height: 400px;
      text-align: left;
      list-style: none;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;" ></div>
  </div>

  <i class="fa-solid fa-right-left fa-right-left-en multi-replace-en-one"></i>
  
  
  <div style="position: relative;">
  <input type="text" id="multi-search-to-en-one" placeholder="Destination" style="position: relative;"  autocomplete="off"/>
  <i class="fa-solid fa-location-dot fa-location-dot-en fa-location-dot-en-two" ></i>
  <div id="multi-result-to-en-one"  style="      position: absolute;
      width: 450PX;
      cursor: pointer;
      overflow-y: scroll;
      box-sizing: border-box;
      z-index: 100001;
      background-color: #fff;
      font-size: 15px;
      max-height: 400px;
      text-align: left;
      list-style: none;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"></div>

  </div>
  
  </div>
    
  
  <input type="hidden" id="multi-airport-from-one" name="from[]" value="">

  <input type="hidden" id="multi-airport-to-one" name="to[]" value="">  
    
    
    <div  class="multi-calender-container-en"  id="multi-calender-one" style="position: relative;margin-top: 2px;">
    
    <h1 style="font-size: 13px;color:#888" class="month-en-multi-one"></h1>
    <h1 style="font-size: 20px;color:#333;text-align: center;font-weight: bold;" class="day-en-multi-one"></h1>
    <h1 style="font-size: 13px;color:#888" class="day-name-en-multi-one"></h1>
    <input type="date" style="opacity: 0;" id="theDate-en-multi-one" name="date[]"/>
    
    <i class="fa-regular fa-calendar-plus " style="position: absolute;top:30px;left:20px;font-size: 30px;color:#777"></i>
    </div> 
    
  
    

    <div style="flex: 24%;">
    
      </div>    
    
    
    
  
    
    
    <div class="search-button-container-en" >
   
    </div>
        
    </div>
    
  




    
  <div   id="multi-form-container-en-two"  style="position: relative;">
  
    
  
  
  <div class="multi-search-container-en" style="position: relative;">
  <div style="position: relative;">
  <input type="text" id="multi-search-from-en-two" placeholder="Origin"  autocomplete="off"/>
  <i class="fa-solid fa-location-crosshairs fa-location-crosshairs-en fa-location-crosshairs-en-three "></i>
  <div id="multi-result-from-en-two" style="position: absolute;
      width: 450PX;
      cursor: pointer;
      overflow-y: scroll;
      box-sizing: border-box;
      z-index: 100001;
      background-color: #fff;
      font-size: 15px;
      max-height: 400px;
      text-align: left;
      list-style: none;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;" ></div>
  </div>

  <i class="fa-solid fa-right-left fa-right-left-en multi-replace-en-two"></i>
  
  
  <div style="position: relative;">
  <input type="text" id="multi-search-to-en-two" placeholder="Destination" style="position: relative;"  autocomplete="off"/>
  <i class="fa-solid fa-location-dot fa-location-dot-en fa-location-dot-en-three" ></i>
  <div id="multi-result-to-en-two"  style="      position: absolute;
      width: 450PX;
      cursor: pointer;
      overflow-y: scroll;
      box-sizing: border-box;
      z-index: 100001;
      background-color: #fff;
      font-size: 15px;
      max-height: 400px;
      text-align: left;
      list-style: none;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"></div>

  </div>
  
  </div>
    
  
  <input type="hidden" id="multi-airport-from-two" name="from[]" value="">

  <input type="hidden" id="multi-airport-to-two" name="to[]" value="">  
    
    
  <div  class="multi-calender-container-en"  id="multi-calender-two" style="position: relative;margin-top: 2px;">
    
    <h1 style="font-size: 13px;color:#888" class="month-en-multi-two"></h1>
    <h1 style="font-size: 20px;color:#333;text-align: center;font-weight: bold;" class="day-en-multi-two"></h1>
    <h1 style="font-size: 13px;color:#888" class="day-name-en-multi-two"></h1>
    <input type="date" style="opacity: 0;" id="theDate-en-multi-two" name="date[]"/>
    
    <i class="fa-regular fa-calendar-plus " style="position: absolute;top:30px;left:20px;font-size: 30px;color:#777"></i>
    </div> 
    
    <i class="fa-solid fa-circle-xmark fa-circle-xmark-en" onclick="removes_en_two()"></i>

    
    
    <div style="flex: 24%;">
    
      </div>    
    
    
    
  
    
    
    <div class="search-button-container-en" >
   
    </div>
        
    </div>
    
  























    
    <div   id="multi-form-container-en-three" style="position: relative;">
  
  <div class="multi-search-container-en" style="position: relative;">
  <div style="position: relative;">
  <input type="text" id="multi-search-from-en-three" placeholder="Origin"  autocomplete="off"/>
  <i class="fa-solid fa-location-crosshairs fa-location-crosshairs-en fa-location-crosshairs-en-four"></i>
  <div id="multi-result-from-en-three" style="position: absolute;
      width: 450PX;
      cursor: pointer;
      overflow-y: scroll;
      box-sizing: border-box;
      z-index: 100001;
      background-color: #fff;
      font-size: 15px;
      max-height: 400px;
      text-align: left;
      list-style: none;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;" ></div>
  </div>

  <i class="fa-solid fa-right-left fa-right-left-en multi-replace-en-three"></i>
  
  
  <div style="position: relative;">
  <input type="text" id="multi-search-to-en-three" placeholder="Destination" style="position: relative;"  autocomplete="off"/>
  <i class="fa-solid fa-location-dot fa-location-dot-en fa-location-dot-en-four" ></i>
  <div id="multi-result-to-en-three"  style="      position: absolute;
      width: 450PX;
      cursor: pointer;
      overflow-y: scroll;
      box-sizing: border-box;
      z-index: 100001;
      background-color: #fff;
      font-size: 15px;
      max-height: 400px;
      text-align: left;
      list-style: none;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"></div>

  </div>
  
  </div>
    
  
  <input type="hidden" id="multi-airport-from-three" name="from[]" value="">

  <input type="hidden" id="multi-airport-to-three" name="to[]" value="">  
    
    
  <div  class="multi-calender-container-en"  id="multi-calender-three" style="position: relative;margin-top: 2px;">
    
    <h1 style="font-size: 13px;color:#888" class="month-en-multi-three"></h1>
    <h1 style="font-size: 20px;color:#333;text-align: center;font-weight: bold;" class="day-en-multi-three"></h1>
    <h1 style="font-size: 13px;color:#888" class="day-name-en-multi-three"></h1>
    <input type="date" style="opacity: 0;" id="theDate-en-multi-three" name="date[]"/>
    
    <i class="fa-regular fa-calendar-plus " style="position: absolute;top:30px;left:20px;font-size: 30px;color:#777"></i>
    </div> 
    
  
    <i class="fa-solid fa-circle-xmark fa-circle-xmark-en" onclick="removes_en_three()"></i>

    
    <div style="flex: 24%;">
    
      </div>    
    
    
    
  
    
    
    <div class="search-button-container-en" >
   
    </div>
        
    </div>
    
  




















    
    <div   id="multi-form-container-en-four" style="position: relative;">
  
  <div class="multi-search-container-en" style="position: relative;">
  <div style="position: relative;">
  <input type="text" id="multi-search-from-en-four" placeholder="Origin"  autocomplete="off"/>
  <i class="fa-solid fa-location-crosshairs fa-location-crosshairs-en fa-location-crosshairs-en-five"></i>
  <div id="multi-result-from-en-four" style="position: absolute;
      width: 450PX;
      cursor: pointer;
      overflow-y: scroll;
      box-sizing: border-box;
      z-index: 100001;
      background-color: #fff;
      font-size: 15px;
      max-height: 400px;
      text-align: left;
      list-style: none;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;" ></div>
  </div>

  <i class="fa-solid fa-right-left fa-right-left-en multi-replace-en-four"></i>
  
  
  <div style="position: relative;">
  <input type="text" id="multi-search-to-en-four" placeholder="Destination" style="position: relative;"  autocomplete="off"/>
  <i class="fa-solid fa-location-dot fa-location-dot-en fa-location-dot-en-five" ></i>
  <div id="multi-result-to-en-four"  style="      position: absolute;
      width: 450PX;
      cursor: pointer;
      overflow-y: scroll;
      box-sizing: border-box;
      z-index: 100001;
      background-color: #fff;
      font-size: 15px;
      max-height: 400px;
      text-align: left;
      list-style: none;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"></div>

  </div>
  
  </div>
    
  
  <input type="hidden" id="multi-airport-from-four" name="from[]" value="">

  <input type="hidden" id="multi-airport-to-four" name="to[]" value="">  
    
    
  <div  class="multi-calender-container-en"  id="multi-calender-four" style="position: relative;margin-top: 2px;">
    
    <h1 style="font-size: 13px;color:#888" class="month-en-multi-four"></h1>
    <h1 style="font-size: 20px;color:#333;text-align: center;font-weight: bold;" class="day-en-multi-four"></h1>
    <h1 style="font-size: 13px;color:#888" class="day-name-en-multi-four"></h1>
    <input type="date" style="opacity: 0;" id="theDate-en-multi-four" name="date[]"/>
    
    <i class="fa-regular fa-calendar-plus " style="position: absolute;top:30px;left:20px;font-size: 30px;color:#777"></i>
    </div> 
    
  
    <i class="fa-solid fa-circle-xmark fa-circle-xmark-en" onclick="removes_en_four()"></i>

    
    <div style="flex: 24%;">
    
      </div>    
    
    
    
  
    
    
    <div class="search-button-container-en" >
   
    </div>
        
    </div>
    
  





        
    <div   id="multi-form-container-en-five" style="position: relative;">
  
  <div class="multi-search-container-en" style="position: relative;">
  <div style="position: relative;">
  <input type="text" id="multi-search-from-en-five" placeholder="Origin"  autocomplete="off"/>
  <i class="fa-solid fa-location-crosshairs fa-location-crosshairs-en fa-location-crosshairs-en-six"></i>
  <div id="multi-result-from-en-five" style="position: absolute;
      width: 450PX;
      cursor: pointer;
      overflow-y: scroll;
      box-sizing: border-box;
      z-index: 100001;
      background-color: #fff;
      font-size: 15px;
      max-height: 400px;
      text-align: left;
      list-style: none;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;" ></div>
  </div>

  <i class="fa-solid fa-right-left fa-right-left-en multi-replace-en-five"></i>
  
  
  <div style="position: relative;">
  <input type="text" id="multi-search-to-en-five" placeholder="Destination" style="position: relative;"  autocomplete="off"/>
  <i class="fa-solid fa-location-dot fa-location-dot-en  fa-location-dot-en-six" ></i>
  <div id="multi-result-to-en-five"  style="      position: absolute;
      width: 450PX;
      cursor: pointer;
      overflow-y: scroll;
      box-sizing: border-box;
      z-index: 100001;
      background-color: #fff;
      font-size: 15px;
      max-height: 400px;
      text-align: left;
      list-style: none;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"></div>

  </div>
  
  </div>
    
  
  <input type="hidden" id="multi-airport-from-five" name="from[]" value="">

  <input type="hidden" id="multi-airport-to-five" name="to[]" value="">  
    
    
  <div  class="multi-calender-container-en"  id="multi-calender-five" style="position: relative;margin-top: 2px;">
    
    <h1 style="font-size: 13px;color:#888" class="month-en-multi-five"></h1>
    <h1 style="font-size: 20px;color:#333;text-align: center;font-weight: bold;" class="day-en-multi-five"></h1>
    <h1 style="font-size: 13px;color:#888" class="day-name-en-multi-five"></h1>
    <input type="date" style="opacity: 0;" id="theDate-en-multi-five" name="date[]"/>
    
    <i class="fa-regular fa-calendar-plus " style="position: absolute;top:30px;left:20px;font-size: 30px;color:#777"></i>
    </div> 
    
  
    <i class="fa-solid fa-circle-xmark fa-circle-xmark-en" onclick="removes_en_five()"></i>

    
    <div style="flex: 24%;">
    
      </div>    
    
    
    
  
    
    
    <div class="search-button-container-en" >
   
    </div>
        
    </div>
    


    



    

        
    <div   id="multi-form-container-en-six" style="position: relative;">
  
  <div class="multi-search-container-en" style="position: relative;">
  <div style="position: relative;">
  <input type="text" id="multi-search-from-en-six" placeholder="Origin"  autocomplete="off"/>
  <i class="fa-solid fa-location-crosshairs fa-location-crosshairs-en fa-location-crosshairs-en-seven"></i>
  <div id="multi-result-from-en-six" style="position: absolute;
      width: 450PX;
      cursor: pointer;
      overflow-y: scroll;
      box-sizing: border-box;
      z-index: 100001;
      background-color: #fff;
      font-size: 15px;
      max-height: 400px;
      text-align: left;
      list-style: none;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;" ></div>
  </div>

  <i class="fa-solid fa-right-left fa-right-left-en multi-replace-en-six"></i>
  
  
  <div style="position: relative;">
  <input type="text" id="multi-search-to-en-six" placeholder="Destination" style="position: relative;"  autocomplete="off"/>
  <i class="fa-solid fa-location-dot fa-location-dot-en fa-location-dot-en-seven" ></i>
  <div id="multi-result-to-en-six"  style="      position: absolute;
      width: 450PX;
      cursor: pointer;
      overflow-y: scroll;
      box-sizing: border-box;
      z-index: 100001;
      background-color: #fff;
      font-size: 15px;
      max-height: 400px;
      text-align: left;
      list-style: none;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"></div>

  </div>
  
  </div>
    
  
  <input type="hidden" id="multi-airport-from-six" name="from[]" value="">

  <input type="hidden" id="multi-airport-to-six" name="to[]" value="">  
    
    
  <div  class="multi-calender-container-en"  id="multi-calender-six" style="position: relative;margin-top: 2px;">
    
    <h1 style="font-size: 13px;color:#888" class="month-en-multi-six"></h1>
    <h1 style="font-size: 20px;color:#333;text-align: center;font-weight: bold;" class="day-en-multi-six"></h1>
    <h1 style="font-size: 13px;color:#888" class="day-name-en-multi-six"></h1>
    <input type="date" style="opacity: 0;" id="theDate-en-multi-six" name="date[]"/>
    
    <i class="fa-regular fa-calendar-plus " style="position: absolute;top:30px;left:20px;font-size: 30px;color:#777"></i>
    </div> 
    
  
    <i class="fa-solid fa-circle-xmark fa-circle-xmark-en" onclick="removes_en_six()"></i>

    
    <div style="flex: 24%;">
    
      </div>    
    
    
    
  
    
    
    <div class="search-button-container-en" >
   
    </div>
        
    </div>
    

    
    </div>
   
  
  
  
  
      </form>   

  

      <div  id="clone_div-en" >
      <button class="Add_More-en" onclick="clone_en()">Add More Flights (6 Max)</button>
      <i class="fa-solid fa-circle-plus fa-circle-plus-en"></i>
      
      </div>
  </div>
  
  </div>




  <div style="text-align: center;margin-top: 15px;">
  <button id="english-arabic" style="background-image: linear-gradient(rgb(2, 56, 100), rgb(0, 15, 46));color: #fff;padding: 10px 20px; cursor: pointer;font-weight: bold;border-radius: 999px;border: none;font-size: 20px;">
    <a  href="./arabic.php" style="text-decoration: none;color:#fff">
    
    Arabic </a></button>
  
  </div>
  



<script src="./assets/script/script-en.js"></script>
<script src="./assets/script/multi-en.js"></script>
<script src="./assets/script/calender-en.js"></script>



</body>
</html>




