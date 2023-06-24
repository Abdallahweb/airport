
<?php
if(isset($_POST["submit"])){

   
// $from_1 = $_POST['from'][0];
// $exp_from = explode("," , $from_1);

// // $to_1 = $_POST['to'][0];
// // $exp_to = explode("," , $to_1);



//$_POST['from'][0] = $exp_from[2];

echo "<pre>";

print_r($_POST);

echo "</pre>";



}


//    echo "<pre>";

//    print_r(trim($exp_from[2]));
//    echo "<br>";
//    print_r(trim($exp_to[2]));

//    echo "</pre>";


 
  ?> 


<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
<link rel="stylesheet" href="./assets/css/arabic.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

<title>البحث عن رحلات</title>


</head>

<body>
  
  

<!---------------------------------------------------->
<!--ARABIC FORM-->
<!---------------------------------------------------->

<div class="container-ar" >



  <div id="forms-ar" class="forms-ar" style="position: relative;">
  
  
  
  
  <div class="type-container-ar" >
  <button class="type-button-ar active" onclick="one_way_ar()" id="one_way_ar">
ذهاب فقط  
</button>
  
  <button class="type-button-ar" onclick="round_trip_ar()" id="round_trip-ar">
رحلة ذهاب وعودة 
 </button>
  
  <button class="type-button-ar" onclick="multi_city_ar()">
وجهات متعددة 
 </button>
  
  </div>
  
  <form method="post" >

  <input type="hidden" id="type" name="type" value="">


  <div class="form-container-ar">
  
  

  <div class="search-container-ar" style="position: relative;">
  <div style="position: relative;">
  <input type="text"  id="search-from-ar" placeholder="محطة المغادرة" autocomplete="off"/>
  <i class="fa-solid fa-location-crosshairs fa-location-crosshairs-ar fa-location-crosshairs-ar-one"></i>
  <div class="result-from-ar" ></div>
  </div>
  <i class="fa-solid fa-right-left fa-right-left-ar" id="replace-ar"></i>
  
  
  <div style="position: relative;">
  <input type="text" id="search-to-ar" placeholder="محطة الوصول" style="position: relative;"  autocomplete="off"/>
  <i class="fa-solid fa-location-dot fa-location-dot-ar fa-location-dot-ar-one" ></i>
  <div class="result-to-ar" ></div>
  <input type="hidden" id="airport-from" name="from[]" value="">

  <input type="hidden" id="airport-to" name="to[]" value="">

  </div>
  
  </div>
  
  
  
  
  
  
  <div id="calender-ar" style="position: relative;margin-top: 2px;">
  
  <h1 style="font-size: 13px;color:#888" class="month-ar"></h1>
  <h1 style="font-size: 20px;color:#333;text-align: center;font-weight: bold;" class="day-ar"></h1>
  <h1 style="font-size: 13px;color:#888" class="day-name-ar"></h1>
  <input type="date" style="opacity: 0;" id="theDate-ar" name="date[]"/>
  
  <i class="fa-regular fa-calendar-plus" style="position: absolute;top:30px;left:20px;font-size: 30px;color:#777"></i>
  </div> 
  
  

  
  <div id="return-ar"  style="position: relative;margin-top: 2px;">
  
  <h1 style="font-size: 13px;color:#888" class="month-return-ar"></h1>
  <h1 style="font-size: 20px;color:#333;text-align: center;font-weight: bold;" class="day-return-ar"></h1>
  <h1 style="font-size: 13px;color:#888" class="day-name-return-ar"></h1>
  <input type="date" style="opacity: 0;" id="theDate_return-ar" name="date[]"/>

  
  <i class="fa-regular fa-calendar-minus" style="position: absolute;top:30px;left:20px;font-size: 30px;color:#777"></i>
  
  <div id="return_button-ar">
  <i class="fa-regular fa-calendar-minus" ></i>   
  <br>
  <p style="font-size: 11px;">إضافة رحلة العودة</p>
  </div>
    </div>    
  
  
  
  
  
  <div class="passenger-container-ar" style="position: relative;">
  
  
  <select class="type-trip-ar"  id="type-trip-ar"  name="class">
  <option value="ECONOMY" selected>السياحية</option>
<option value="PREMUIM ECONOMY">السياحية المتميزة</option>
<option value="BUSINESS">رجال اﻷعمال</option>
<option value="FIRST">الاولى</option>
  </select>
  
  
  
  
  
  
  <input  placeholder="1 مسافر" id="passenger-ar" value="" readonly >
  
<input  id="adults" type="hidden" name="adults"  value="1" >
<input  id="children" type="hidden" name="children" >
<input  id="infants" type="hidden" name="infants" >
  <section  id="passenger-list-ar" style="position: absolute;top:120px;z-index:1000001" >
  
  <div style="display:flex;position: relative;font-size: 15px"><p>بالغ - 12 عاما فأكثر</p>
  <i class="fa-solid fa-plus"  id="plus-adult-ar" style="position:absolute;left: 3px;top:12px;background-color:  #316585;border-radius:999px;padding: 5px;color:#fff"></i> 
  <p  id="count-adult-ar" style="position:absolute;left: 33px">1</p>
  <i class="fa-solid fa-minus" id="minus-adult-ar" style="position:absolute;left: 50px;top:12px;background-color:  #316585;border-radius:999px;padding: 5px;color:#fff"></i>
  </div>
  
  <div style="display:flex;position: relative;font-size: 15px"><p>طفل - من 2 - 11 عاما</p>
  <i class="fa-solid fa-plus"  id="plus-children-ar" style="position:absolute;left: 3px;top:12px;background-color:  #316585;border-radius:999px;padding: 5px;color:#fff"></i> 
  <p  id="count-children-ar" style="position:absolute;left: 33px"></p>
  <i class="fa-solid fa-minus" id="minus-children-ar" style="position:absolute;left: 50px;top:12px ; background-color:  #316585;border-radius:999px;padding: 5px;color:#fff"></i>
  </div>
  
  <div style="display:flex;position: relative;font-size: 15px;"><p>رضيع - أقل من عامين</p>
  <i class="fa-solid fa-plus"  id="plus-infants-ar" style="position:absolute;left: 3px;top:12px ; background-color:#316585;border-radius:999px;padding: 5px;color:#fff"></i> 
  <p  id="count-infants-ar" style="position:absolute;left: 33px"></p>
  <i class="fa-solid fa-minus" id="minus-infants-ar" style="position:absolute;left: 50px;top:12px;background-color:  #316585;border-radius:999px;padding: 5px;color:#fff"></i>
  </div>
  
  
  </div>
  
  
  
  

  <div class="search-button-container-ar" >
  <div class="search-ar" id="search-ar">
  <i class="fa-solid fa-magnifying-glass fa-magnifying-glass-ar"></i><br>
  <input type="submit" name="submit" style="font-size: 15px;font-weight:bold;background-color:transparent;color:#fff;border:none;cursor:pointer;padding-top:15px" value="البحث عن رحلات">
  </div>
      
  </div>
  </div>
  


    <!--Multi Search -->
    
    
  
  <div id="flights-ar" style="display: none;margin-top: 20px;">
    <div  style="text-align: left;display: flex"> 
    <span class="plane-icon-ar">&#9992;</span>
    <span id="count_flight-ar"> الرحلات</span>
    <div style="width:45%;height:4px;background-color: rgba(62, 87, 107, 0.5);margin:15px 10px 0px 0px"></div>
    </div></div>
  
  
    <div id="multi-ar" class="multi-ar" style="position: relative;">
  
  <div class="multi-form-container-ar" id="multi-form-container-ar">
  
  
  
  <div class="multi-search-container-ar" style="position: relative;">
  <div style="position: relative;">
  <input type="text" id="multi-search-from-ar-one" placeholder="محطة المغادرة"  autocomplete="off"/>
  <i class="fa-solid fa-location-crosshairs fa-location-crosshairs-ar fa-location-crosshairs-ar-two"></i>
  <div id="multi-result-from-ar-one" style="position: absolute;
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

  <i class="fa-solid fa-right-left fa-right-left-ar multi-replace-ar-one"></i>
  
  
  <div style="position: relative;">
  <input type="text" id="multi-search-to-ar-one" placeholder="محطة الوصول" style="position: relative;"  autocomplete="off"/>
  <i class="fa-solid fa-location-dot fa-location-dot-ar fa-location-dot-ar-two" ></i>
  <div id="multi-result-to-ar-one"  style="      position: absolute;
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
    
    
    <div  class="multi-calender-container-ar"  id="multi-calender-one" style="position: relative;margin-top: 2px;">
    
    <h1 style="font-size: 13px;color:#888" class="month-ar-multi-one"></h1>
    <h1 style="font-size: 20px;color:#333;text-align: center;font-weight: bold;" class="day-ar-multi-one"></h1>
    <h1 style="font-size: 13px;color:#888" class="day-name-ar-multi-one"></h1>
    <input type="date" style="opacity: 0;" id="theDate-ar-multi-one" name="date[]"/>
    
    <i class="fa-regular fa-calendar-plus " style="position: absolute;top:30px;left:20px;font-size: 30px;color:#777"></i>
    </div> 
    
  
    

    <div style="flex: 24%;">
    
      </div>    
    
    
    
  
    
    
    <div class="search-button-container-ar" >
   
    </div>
        
    </div>
    
  




    
  <div   id="multi-form-container-ar-two"  style="position: relative;">
  
    
  
  
  <div class="multi-search-container-ar" style="position: relative;">
  <div style="position: relative;">
  <input type="text" id="multi-search-from-ar-two" placeholder="محطة المغادرة"  autocomplete="off"/>
  <i class="fa-solid fa-location-crosshairs fa-location-crosshairs-ar fa-location-crosshairs-ar-three "></i>
  <div id="multi-result-from-ar-two" style="position: absolute;
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

  <i class="fa-solid fa-right-left fa-right-left-ar multi-replace-ar-two"></i>
  
  
  <div style="position: relative;">
  <input type="text" id="multi-search-to-ar-two" placeholder="محطة الوصول" style="position: relative;"  autocomplete="off"/>
  <i class="fa-solid fa-location-dot fa-location-dot-ar fa-location-dot-ar-three" ></i>
  <div id="multi-result-to-ar-two"  style="      position: absolute;
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
    
    
  <div  class="multi-calender-container-ar"  id="multi-calender-two" style="position: relative;margin-top: 2px;">
    
    <h1 style="font-size: 13px;color:#888" class="month-ar-multi-two"></h1>
    <h1 style="font-size: 20px;color:#333;text-align: center;font-weight: bold;" class="day-ar-multi-two"></h1>
    <h1 style="font-size: 13px;color:#888" class="day-name-ar-multi-two"></h1>
    <input type="date" style="opacity: 0;" id="theDate-ar-multi-two" name="date[]"/>
    
    <i class="fa-regular fa-calendar-plus " style="position: absolute;top:30px;left:20px;font-size: 30px;color:#777"></i>
    </div> 
    
    <i class="fa-solid fa-circle-xmark fa-circle-xmark-ar" onclick="removes_ar_two()"></i>

    
    
    <div style="flex: 24%;">
    
      </div>    
    
    
    
  
    
    
    <div class="search-button-container-ar" >
   
    </div>
        
    </div>
    
  























    
    <div   id="multi-form-container-ar-three" style="position: relative;">
  
  <div class="multi-search-container-ar" style="position: relative;">
  <div style="position: relative;">
  <input type="text" id="multi-search-from-ar-three" placeholder="محطة المغادرة"  autocomplete="off"/>
  <i class="fa-solid fa-location-crosshairs fa-location-crosshairs-ar fa-location-crosshairs-ar-four"></i>
  <div id="multi-result-from-ar-three" style="position: absolute;
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

  <i class="fa-solid fa-right-left fa-right-left-ar multi-replace-ar-three"></i>
  
  
  <div style="position: relative;">
  <input type="text" id="multi-search-to-ar-three" placeholder="محطة الوصول" style="position: relative;"  autocomplete="off"/>
  <i class="fa-solid fa-location-dot fa-location-dot-ar fa-location-dot-ar-four" ></i>
  <div id="multi-result-to-ar-three"  style="      position: absolute;
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
    
    
  <div  class="multi-calender-container-ar"  id="multi-calender-three" style="position: relative;margin-top: 2px;">
    
    <h1 style="font-size: 13px;color:#888" class="month-ar-multi-three"></h1>
    <h1 style="font-size: 20px;color:#333;text-align: center;font-weight: bold;" class="day-ar-multi-three"></h1>
    <h1 style="font-size: 13px;color:#888" class="day-name-ar-multi-three"></h1>
    <input type="date" style="opacity: 0;" id="theDate-ar-multi-three" name="date[]"/>
    
    <i class="fa-regular fa-calendar-plus " style="position: absolute;top:30px;left:20px;font-size: 30px;color:#777"></i>
    </div> 
    
  
    <i class="fa-solid fa-circle-xmark fa-circle-xmark-ar" onclick="removes_ar_three()"></i>

    
    <div style="flex: 24%;">
    
      </div>    
    
    
    
  
    
    
    <div class="search-button-container-ar" >
   
    </div>
        
    </div>
    
  




















    
    <div   id="multi-form-container-ar-four" style="position: relative;">
  
  <div class="multi-search-container-ar" style="position: relative;">
  <div style="position: relative;">
  <input type="text" id="multi-search-from-ar-four" placeholder="محطة المغادرة"  autocomplete="off"/>
  <i class="fa-solid fa-location-crosshairs fa-location-crosshairs-ar fa-location-crosshairs-ar-five"></i>
  <div id="multi-result-from-ar-four" style="position: absolute;
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

  <i class="fa-solid fa-right-left fa-right-left-ar multi-replace-ar-four"></i>
  
  
  <div style="position: relative;">
  <input type="text" id="multi-search-to-ar-four" placeholder="محطة الوصول" style="position: relative;"  autocomplete="off"/>
  <i class="fa-solid fa-location-dot fa-location-dot-ar fa-location-dot-ar-five" ></i>
  <div id="multi-result-to-ar-four"  style="      position: absolute;
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
    
    
  <div  class="multi-calender-container-ar"  id="multi-calender-four" style="position: relative;margin-top: 2px;">
    
    <h1 style="font-size: 13px;color:#888" class="month-ar-multi-four"></h1>
    <h1 style="font-size: 20px;color:#333;text-align: center;font-weight: bold;" class="day-ar-multi-four"></h1>
    <h1 style="font-size: 13px;color:#888" class="day-name-ar-multi-four"></h1>
    <input type="date" style="opacity: 0;" id="theDate-ar-multi-four" name="date[]"/>
    
    <i class="fa-regular fa-calendar-plus " style="position: absolute;top:30px;left:20px;font-size: 30px;color:#777"></i>
    </div> 
    
  
    <i class="fa-solid fa-circle-xmark fa-circle-xmark-ar" onclick="removes_ar_four()"></i>

    
    <div style="flex: 24%;">
    
      </div>    
    
    
    
  
    
    
    <div class="search-button-container-ar" >
   
    </div>
        
    </div>
    
  





        
    <div   id="multi-form-container-ar-five" style="position: relative;">
  
  <div class="multi-search-container-ar" style="position: relative;">
  <div style="position: relative;">
  <input type="text" id="multi-search-from-ar-five" placeholder="محطة المغادرة"  autocomplete="off"/>
  <i class="fa-solid fa-location-crosshairs fa-location-crosshairs-ar fa-location-crosshairs-ar-six"></i>
  <div id="multi-result-from-ar-five" style="position: absolute;
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

  <i class="fa-solid fa-right-left fa-right-left-ar multi-replace-ar-five"></i>
  
  
  <div style="position: relative;">
  <input type="text" id="multi-search-to-ar-five" placeholder="محطة الوصول" style="position: relative;"  autocomplete="off"/>
  <i class="fa-solid fa-location-dot fa-location-dot-ar  fa-location-dot-ar-six" ></i>
  <div id="multi-result-to-ar-five"  style="      position: absolute;
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
    
    
  <div  class="multi-calender-container-ar"  id="multi-calender-five" style="position: relative;margin-top: 2px;">
    
    <h1 style="font-size: 13px;color:#888" class="month-ar-multi-five"></h1>
    <h1 style="font-size: 20px;color:#333;text-align: center;font-weight: bold;" class="day-ar-multi-five"></h1>
    <h1 style="font-size: 13px;color:#888" class="day-name-ar-multi-five"></h1>
    <input type="date" style="opacity: 0;" id="theDate-ar-multi-five" name="date[]"/>
    
    <i class="fa-regular fa-calendar-plus " style="position: absolute;top:30px;left:20px;font-size: 30px;color:#777"></i>
    </div> 
    
  
    <i class="fa-solid fa-circle-xmark fa-circle-xmark-ar" onclick="removes_ar_five()"></i>

    
    <div style="flex: 24%;">
    
      </div>    
    
    
    
  
    
    
    <div class="search-button-container-ar" >
   
    </div>
        
    </div>
    


    



    

        
    <div   id="multi-form-container-ar-six" style="position: relative;">
  
  <div class="multi-search-container-ar" style="position: relative;">
  <div style="position: relative;">
  <input type="text" id="multi-search-from-ar-six" placeholder="محطة المغادرة"  autocomplete="off"/>
  <i class="fa-solid fa-location-crosshairs fa-location-crosshairs-ar fa-location-crosshairs-ar-seven"></i>
  <div id="multi-result-from-ar-six" style="position: absolute;
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

  <i class="fa-solid fa-right-left fa-right-left-ar multi-replace-ar-six"></i>
  
  
  <div style="position: relative;">
  <input type="text" id="multi-search-to-ar-six" placeholder="محطة الوصول" style="position: relative;"  autocomplete="off"/>
  <i class="fa-solid fa-location-dot fa-location-dot-ar fa-location-dot-ar-seven" ></i>
  <div id="multi-result-to-ar-six"  style="      position: absolute;
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
    
    
  <div  class="multi-calender-container-ar"  id="multi-calender-six" style="position: relative;margin-top: 2px;">
    
    <h1 style="font-size: 13px;color:#888" class="month-ar-multi-six"></h1>
    <h1 style="font-size: 20px;color:#333;text-align: center;font-weight: bold;" class="day-ar-multi-six"></h1>
    <h1 style="font-size: 13px;color:#888" class="day-name-ar-multi-six"></h1>
    <input type="date" style="opacity: 0;" id="theDate-ar-multi-six" name="date[]"/>
    
    <i class="fa-regular fa-calendar-plus " style="position: absolute;top:30px;left:20px;font-size: 30px;color:#777"></i>
    </div> 
    
  
    <i class="fa-solid fa-circle-xmark fa-circle-xmark-ar" onclick="removes_ar_six()"></i>

    
    <div style="flex: 24%;">
    
      </div>    
    
    
    
  
    
    
    <div class="search-button-container-ar" >
   
    </div>
        
    </div>
    

    
    </div>
   
  
  
  
  
      </form>   

  

      <div  id="clone_div-ar" >
      <i class="fa-solid fa-circle-plus fa-circle-plus-ar"></i>
      <button class="Add_More-ar" onclick="clone_ar()">إضافة 6 رحلات كحد أقصى</button>
      
      </div>
  </div>
  
  
  
  
  
  
  
  
  
  
  
  </div>






  
<div style="text-align: center;margin-top: 15px;">
  <button id="english-arabic" style="background-image: linear-gradient(rgb(2, 56, 100), rgb(0, 15, 46));color: #fff;padding: 10px 20px; cursor: pointer;font-weight: bold;border-radius: 999px;border: none;font-size: 20px;">
    <a  href="./index.php" style="text-decoration: none;color:#fff">
    
    English </a></button>
  
  </div>



  <script src="./assets/script/script-ar.js"></script>
<script src="./assets/script/multi-ar.js"></script>
<script src="./assets/script/calender-ar.js"></script>



</body>
</html>




