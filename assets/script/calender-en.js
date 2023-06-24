



        // start calender for form two



        
        $('#theDate-en-multi-one').on('change', function() {
        
            var d = new Date();
            
            var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
            ];
            
            var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            
            var date = new Date($('#theDate-en-multi-one').val());
            var day = date.getDate();
            var day_name = date.getDay();
            var month = date.getMonth();
            
            $('.month-en-multi-one').text(monthNames[month]);
            
            $('.day-en-multi-one').text(day);
            
            $('.day-name-en-multi-one').text(weekday[day_name]);
            
            
            })
            
        
      
      var button_one = document.getElementById("multi-calender-one");
      var dateInput_one = document.getElementById("theDate-en-multi-one");

      button_one.addEventListener("click", () => {
      dateInput_one.showPicker();
            
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
          
          
          $('.month-en-multi-one').text(monthNames[month_ready]);
          
          $('.day-en-multi-one').text(day_ready);
          
          $('.day-name-en-multi-one').text(weekday[day_name_ready]);
          
      
      
          var date = new Date();
          
          var day = date.getDate();
          var month = date.getMonth() + 1;
          var year = date.getFullYear();
          
          if (month < 10) month = "0" + month;
          if (day < 10) day = "0" + day;
          
          var today = year + "-" + month + "-" + day;   
          
          
          $('#theDate-en-multi-one').value = today;
        

          var today = new Date().toISOString().split('T')[0];
      
          var dateInput_one_min = document.getElementById("theDate-en-multi-one");

          dateInput_one_min.setAttribute('min', today);      
          var today = new Date().toISOString().split('T')[0];
      
        
        
          
          });      
          
      
          // End Date Multi Today


































          



        // start calender for form three



        
        $('#theDate-en-multi-two').on('change', function() {
        
          var d = new Date();
          
          var monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
          ];
          
          var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
          
          var date = new Date($('#theDate-en-multi-two').val());
          var day = date.getDate();
          var day_name = date.getDay();
          var month = date.getMonth();
          
          $('.month-en-multi-two').text(monthNames[month]);
          
          $('.day-en-multi-two').text(day);
          
          $('.day-name-en-multi-two').text(weekday[day_name]);
          
          
          })
          
      
    
    var button_two = document.getElementById("multi-calender-two");
    var dateInput_two = document.getElementById("theDate-en-multi-two");

    button_two.addEventListener("click", () => {
    dateInput_two.showPicker();
          
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
        
        
        $('.month-en-multi-two').text(monthNames[month_ready]);
        
        $('.day-en-multi-two').text(day_ready);
        
        $('.day-name-en-multi-two').text(weekday[day_name_ready]);
        
    
    
        var date = new Date();
        
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        
        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        
        var today = year + "-" + month + "-" + day;   
        
        
        $('#theDate-en-multi-two').value = today;
      

        var today = new Date().toISOString().split('T')[0];
    
        var dateInput_two_min = document.getElementById("theDate-en-multi-two");

        dateInput_two_min.setAttribute('min', today);      
        var today = new Date().toISOString().split('T')[0];
    
      
      
        
        });      
        
    
        // End Date Multi Today




















        
        // start calender for form four



        
        $('#theDate-en-multi-three').on('change', function() {
        
          var d = new Date();
          
          var monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
          ];
          
          var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
          
          var date = new Date($('#theDate-en-multi-three').val());
          var day = date.getDate();
          var day_name = date.getDay();
          var month = date.getMonth();
          
          $('.month-en-multi-three').text(monthNames[month]);
          
          $('.day-en-multi-three').text(day);
          
          $('.day-name-en-multi-three').text(weekday[day_name]);
          
          
          })
          
      
    
    var button_three = document.getElementById("multi-calender-three");
    var dateInput_three = document.getElementById("theDate-en-multi-three");

    button_three.addEventListener("click", () => {
    dateInput_three.showPicker();
          
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
        
        
        $('.month-en-multi-three').text(monthNames[month_ready]);
        
        $('.day-en-multi-three').text(day_ready);
        
        $('.day-name-en-multi-three').text(weekday[day_name_ready]);
        
    
    
        var date = new Date();
        
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        
        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        
        var today = year + "-" + month + "-" + day;   
        
        
        $('#theDate-en-multi-three').value = today;
      

        var today = new Date().toISOString().split('T')[0];
    
        var dateInput_three_min = document.getElementById("theDate-en-multi-three");

        dateInput_three_min.setAttribute('min', today);      
        var today = new Date().toISOString().split('T')[0];
    
      
      
        
        });      
        
    
        // End Date Multi Today





















        
        
        // start calender for form five



        
        $('#theDate-en-multi-four').on('change', function() {
        
          var d = new Date();
          
          var monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
          ];
          
          var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
          
          var date = new Date($('#theDate-en-multi-four').val());
          var day = date.getDate();
          var day_name = date.getDay();
          var month = date.getMonth();
          
          $('.month-en-multi-four').text(monthNames[month]);
          
          $('.day-en-multi-four').text(day);
          
          $('.day-name-en-multi-four').text(weekday[day_name]);
          
          
          })
          
      
    
    var button_four = document.getElementById("multi-calender-four");
    var dateInput_four = document.getElementById("theDate-en-multi-four");

    button_four.addEventListener("click", () => {
    dateInput_four.showPicker();
          
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
        
        
        $('.month-en-multi-four').text(monthNames[month_ready]);
        
        $('.day-en-multi-four').text(day_ready);
        
        $('.day-name-en-multi-four').text(weekday[day_name_ready]);
        
    
    
        var date = new Date();
        
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        
        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        
        var today = year + "-" + month + "-" + day;   
        
        
        $('#theDate-en-multi-four').value = today;
      

        var today = new Date().toISOString().split('T')[0];
    
        var dateInput_four_min = document.getElementById("theDate-en-multi-four");

        dateInput_four_min.setAttribute('min', today);      
        var today = new Date().toISOString().split('T')[0];
    
      
      
        
        });      
        
    
        // End Date Multi Today






















        
        
        // start calender for form six



        
        $('#theDate-en-multi-five').on('change', function() {
        
          var d = new Date();
          
          var monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
          ];
          
          var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
          
          var date = new Date($('#theDate-en-multi-five').val());
          var day = date.getDate();
          var day_name = date.getDay();
          var month = date.getMonth();
          
          $('.month-en-multi-five').text(monthNames[month]);
          
          $('.day-en-multi-five').text(day);
          
          $('.day-name-en-multi-five').text(weekday[day_name]);
          
          
          })
          
      
    
    var button_five = document.getElementById("multi-calender-five");
    var dateInput_five = document.getElementById("theDate-en-multi-five");

    button_five.addEventListener("click", () => {
    dateInput_five.showPicker();
          
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
        
        
        $('.month-en-multi-five').text(monthNames[month_ready]);
        
        $('.day-en-multi-five').text(day_ready);
        
        $('.day-name-en-multi-five').text(weekday[day_name_ready]);
        
    
    
        var date = new Date();
        
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        
        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        
        var today = year + "-" + month + "-" + day;   
        
        
        $('#theDate-en-multi-five').value = today;
      

        var today = new Date().toISOString().split('T')[0];
    
        var dateInput_five_min = document.getElementById("theDate-en-multi-five");

        dateInput_five_min.setAttribute('min', today);      
        var today = new Date().toISOString().split('T')[0];
    
      
      
        
        });      
        
    
        // End Date Multi Today
























        
        
        // start calender for form seven



        
        $('#theDate-en-multi-six').on('change', function() {
        
          var d = new Date();
          
          var monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
          ];
          
          var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
          
          var date = new Date($('#theDate-en-multi-six').val());
          var day = date.getDate();
          var day_name = date.getDay();
          var month = date.getMonth();
          
          $('.month-en-multi-six').text(monthNames[month]);
          
          $('.day-en-multi-six').text(day);
          
          $('.day-name-en-multi-six').text(weekday[day_name]);
          
          
          })
          
      
    
    var button_six = document.getElementById("multi-calender-six");
    var dateInput_six = document.getElementById("theDate-en-multi-six");

    button_six.addEventListener("click", () => {
    dateInput_six.showPicker();
          
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
        
        
        $('.month-en-multi-six').text(monthNames[month_ready]);
        
        $('.day-en-multi-six').text(day_ready);
        
        $('.day-name-en-multi-six').text(weekday[day_name_ready]);
        
    
    
        var date = new Date();
        
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        
        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        
        var today = year + "-" + month + "-" + day;   
        
        
        $('#theDate-en-multi-six').value = today;
      

        var today = new Date().toISOString().split('T')[0];
    
        var dateInput_six_min = document.getElementById("theDate-en-multi-six");

        dateInput_six_min.setAttribute('min', today);      
        var today = new Date().toISOString().split('T')[0];
    
      
      
        
        });      
        
    
        // End Date Multi Today