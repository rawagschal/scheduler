// on DOM ready
$(function() {
    // display current day
    $("#currentDay").text(moment().format("MMMM Do YYYY"));
    
    // listen for saveBtn click
    $(".saveBtn").on("click", function saveEvent() {
        //look for the description sibling of the clicked saveBtn
        var description = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        
        // save to localStorage
        localStorage.setItem(time, description);
    });

    function updateHour() {
        // get hours using moment.js
        var currentHour = moment().hours();
        console.log(currentHour);

        // loop over time blocks 
        $(".time-block").each(function() {
            // get the integer from each timeblock hour id
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            
            // if that hour has passed
            if (blockHour < currentHour) {
                // set the class to past
                $(this).addClass("past");
            // if it is the current hour
            } else if (blockHour === currentHour) {
                // set class to present 
                $(this).addClass("present");
            // if that hour hasn't happened yet
            } else {
                // set class to future
                $(this).addClass("future");
            }
        });   
    }
    updateHour();

    // check time every minute
    setInterval(updateHour, 60000);

    // load data from localStorage
    $("#time-9 .description").val(localStorage.getItem("time-9"));
    $("#time-10 .description").val(localStorage.getItem("time-10"));
    $("#time-11 .description").val(localStorage.getItem("time-11"));
    $("#time-12 .description").val(localStorage.getItem("time-12"));
    $("#time-13 .description").val(localStorage.getItem("time-13"));
    $("#time-14 .description").val(localStorage.getItem("time-14"));
    $("#time-15 .description").val(localStorage.getItem("time-15"));
    $("#time-16 .description").val(localStorage.getItem("time-16"));
    $("#time-17 .description").val(localStorage.getItem("time-17"));
})

