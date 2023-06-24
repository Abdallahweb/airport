



        // start calender for form two



        
        $('#theDate-ar-multi-one').on('change', function() {
        
            var d = new Date();
            
           
var monthNames = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
"يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
];

var weekday = ["الأحد","الأثنين","الثلاثاء","اﻷربعاء","الخميس","الجمعة","السبت"];

            
            var date = new Date($('#theDate-ar-multi-one').val());
            var day = date.getDate();
            var day_name = date.getDay();
            var month = date.getMonth();
            
            $('.month-ar-multi-one').text(monthNames[month]);
            
            $('.day-ar-multi-one').text(day);
            
            $('.day-name-ar-multi-one').text(weekday[day_name]);
            
            
            })
            
        
      
      var button_one = document.getElementById("multi-calender-one");
      var dateInput_one = document.getElementById("theDate-ar-multi-one");

      button_one.addEventListener("click", () => {
      dateInput_one.showPicker();
            
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
          
          
          $('.month-ar-multi-one').text(monthNames[month_ready]);
          
          $('.day-ar-multi-one').text(day_ready);
          
          $('.day-name-ar-multi-one').text(weekday[day_name_ready]);
          
      
      
          var date = new Date();
          
          var day = date.getDate();
          var month = date.getMonth() + 1;
          var year = date.getFullYear();
          
          if (month < 10) month = "0" + month;
          if (day < 10) day = "0" + day;
          
          var today = year + "-" + month + "-" + day;   
          
          
          $('#theDate-ar-multi-one').value = today;
        

          var today = new Date().toISOString().split('T')[0];
      
          var dateInput_one_min = document.getElementById("theDate-ar-multi-one");

          dateInput_one_min.setAttribute('min', today);      
          var today = new Date().toISOString().split('T')[0];
      
        
        
          
          });      
          
      
          // End Date Multi Today


































          



        // start calender for form three



        
        $('#theDate-ar-multi-two').on('change', function() {
        
          var d = new Date();
          
   
          var monthNames = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
          "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
          ];
          
          var weekday = ["الأحد","الأثنين","الثلاثاء","اﻷربعاء","الخميس","الجمعة","السبت"];
                    
          var date = new Date($('#theDate-ar-multi-two').val());
          var day = date.getDate();
          var day_name = date.getDay();
          var month = date.getMonth();
          
          $('.month-ar-multi-two').text(monthNames[month]);
          
          $('.day-ar-multi-two').text(day);
          
          $('.day-name-ar-multi-two').text(weekday[day_name]);
          
          
          })
          
      
    
    var button_two = document.getElementById("multi-calender-two");
    var dateInput_two = document.getElementById("theDate-ar-multi-two");

    button_two.addEventListener("click", () => {
    dateInput_two.showPicker();
          
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
        
        
        $('.month-ar-multi-two').text(monthNames[month_ready]);
        
        $('.day-ar-multi-two').text(day_ready);
        
        $('.day-name-ar-multi-two').text(weekday[day_name_ready]);
        
    
    
        var date = new Date();
        
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        
        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        
        var today = year + "-" + month + "-" + day;   
        
        
        $('#theDate-ar-multi-two').value = today;
      

        var today = new Date().toISOString().split('T')[0];
    
        var dateInput_two_min = document.getElementById("theDate-ar-multi-two");

        dateInput_two_min.setAttribute('min', today);      
        var today = new Date().toISOString().split('T')[0];
    
      
      
        
        });      
        
    
        // End Date Multi Today




















        
        // start calender for form four



        
        $('#theDate-ar-multi-three').on('change', function() {
        
          var d = new Date();
          
   
          var monthNames = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
          "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
          ];
          
          var weekday = ["الأحد","الأثنين","الثلاثاء","اﻷربعاء","الخميس","الجمعة","السبت"];
                    
          var date = new Date($('#theDate-ar-multi-three').val());
          var day = date.getDate();
          var day_name = date.getDay();
          var month = date.getMonth();
          
          $('.month-ar-multi-three').text(monthNames[month]);
          
          $('.day-ar-multi-three').text(day);
          
          $('.day-name-ar-multi-three').text(weekday[day_name]);
          
          
          })
          
      
    
    var button_three = document.getElementById("multi-calender-three");
    var dateInput_three = document.getElementById("theDate-ar-multi-three");

    button_three.addEventListener("click", () => {
    dateInput_three.showPicker();
          
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
        
        
        $('.month-ar-multi-three').text(monthNames[month_ready]);
        
        $('.day-ar-multi-three').text(day_ready);
        
        $('.day-name-ar-multi-three').text(weekday[day_name_ready]);
        
    
    
        var date = new Date();
        
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        
        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        
        var today = year + "-" + month + "-" + day;   
        
        
        $('#theDate-ar-multi-three').value = today;
      

        var today = new Date().toISOString().split('T')[0];
    
        var dateInput_three_min = document.getElementById("theDate-ar-multi-three");

        dateInput_three_min.setAttribute('min', today);      
        var today = new Date().toISOString().split('T')[0];
    
      
      
        
        });      
        
    
        // End Date Multi Today





















        
        
        // start calender for form five



        
        $('#theDate-ar-multi-four').on('change', function() {
        
          var d = new Date();
          
   
          var monthNames = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
          "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
          ];
          
          var weekday = ["الأحد","الأثنين","الثلاثاء","اﻷربعاء","الخميس","الجمعة","السبت"];
                    
          var date = new Date($('#theDate-ar-multi-four').val());
          var day = date.getDate();
          var day_name = date.getDay();
          var month = date.getMonth();
          
          $('.month-ar-multi-four').text(monthNames[month]);
          
          $('.day-ar-multi-four').text(day);
          
          $('.day-name-ar-multi-four').text(weekday[day_name]);
          
          
          })
          
      
    
    var button_four = document.getElementById("multi-calender-four");
    var dateInput_four = document.getElementById("theDate-ar-multi-four");

    button_four.addEventListener("click", () => {
    dateInput_four.showPicker();
          
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
        
        
        $('.month-ar-multi-four').text(monthNames[month_ready]);
        
        $('.day-ar-multi-four').text(day_ready);
        
        $('.day-name-ar-multi-four').text(weekday[day_name_ready]);
        
    
    
        var date = new Date();
        
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        
        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        
        var today = year + "-" + month + "-" + day;   
        
        
        $('#theDate-ar-multi-four').value = today;
      

        var today = new Date().toISOString().split('T')[0];
    
        var dateInput_four_min = document.getElementById("theDate-ar-multi-four");

        dateInput_four_min.setAttribute('min', today);      
        var today = new Date().toISOString().split('T')[0];
    
      
      
        
        });      
        
    
        // End Date Multi Today






















        
        
        // start calender for form six



        
        $('#theDate-ar-multi-five').on('change', function() {
        
          var d = new Date();
          
   
          var monthNames = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
          "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
          ];
          
          var weekday = ["الأحد","الأثنين","الثلاثاء","اﻷربعاء","الخميس","الجمعة","السبت"];
                    
          var date = new Date($('#theDate-ar-multi-five').val());
          var day = date.getDate();
          var day_name = date.getDay();
          var month = date.getMonth();
          
          $('.month-ar-multi-five').text(monthNames[month]);
          
          $('.day-ar-multi-five').text(day);
          
          $('.day-name-ar-multi-five').text(weekday[day_name]);
          
          
          })
          
      
    
    var button_five = document.getElementById("multi-calender-five");
    var dateInput_five = document.getElementById("theDate-ar-multi-five");

    button_five.addEventListener("click", () => {
    dateInput_five.showPicker();
          
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
        
        
        $('.month-ar-multi-five').text(monthNames[month_ready]);
        
        $('.day-ar-multi-five').text(day_ready);
        
        $('.day-name-ar-multi-five').text(weekday[day_name_ready]);
        
    
    
        var date = new Date();
        
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        
        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        
        var today = year + "-" + month + "-" + day;   
        
        
        $('#theDate-ar-multi-five').value = today;
      

        var today = new Date().toISOString().split('T')[0];
    
        var dateInput_five_min = document.getElementById("theDate-ar-multi-five");

        dateInput_five_min.setAttribute('min', today);      
        var today = new Date().toISOString().split('T')[0];
    
      
      
        
        });      
        
    
        // End Date Multi Today
























        
        
        // start calender for form seven



        
        $('#theDate-ar-multi-six').on('change', function() {
        
          var d = new Date();
          
   
          var monthNames = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
          "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
          ];
          
          var weekday = ["الأحد","الأثنين","الثلاثاء","اﻷربعاء","الخميس","الجمعة","السبت"];
                    
          var date = new Date($('#theDate-ar-multi-six').val());
          var day = date.getDate();
          var day_name = date.getDay();
          var month = date.getMonth();
          
          $('.month-ar-multi-six').text(monthNames[month]);
          
          $('.day-ar-multi-six').text(day);
          
          $('.day-name-ar-multi-six').text(weekday[day_name]);
          
          
          })
          
      
    
    var button_six = document.getElementById("multi-calender-six");
    var dateInput_six = document.getElementById("theDate-ar-multi-six");

    button_six.addEventListener("click", () => {
    dateInput_six.showPicker();
          
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
        
        
        $('.month-ar-multi-six').text(monthNames[month_ready]);
        
        $('.day-ar-multi-six').text(day_ready);
        
        $('.day-name-ar-multi-six').text(weekday[day_name_ready]);
        
    
    
        var date = new Date();
        
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        
        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        
        var today = year + "-" + month + "-" + day;   
        
        
        $('#theDate-ar-multi-six').value = today;
      

        var today = new Date().toISOString().split('T')[0];
    
        var dateInput_six_min = document.getElementById("theDate-ar-multi-six");

        dateInput_six_min.setAttribute('min', today);      
        var today = new Date().toISOString().split('T')[0];
    
      
      
        
        });      
        
    
        // End Date Multi Today