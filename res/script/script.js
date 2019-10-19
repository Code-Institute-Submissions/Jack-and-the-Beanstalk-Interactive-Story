$(document).ready(function() {





    //Global variables
    var storyContent = document.getElementById("story-container");
    var i = keys.length;
    var a = keys.length + 1;
    var titleImg = document.getElementById("title-img");




    $("#next").click(function next() { //control button "Next" function
        if (i < keys.length) { // Code from Web Zone at https://www.youtube.com/watch?v=sQuniQCzNlY //
            i = i + 1;
        }
        else { i = 1; }
        storyContent.innerHTML = "<p class='mb-5'><h4>" + keys[i - 1] + "</h4></p>";
        titleImg.innerHTML = `<img src="res/media/c` + [i] + `.png" class="mt-1 pt-1">`;


        if (a < keys.length) { // Section counter "increasing"
            a = a + 1;
        }
        else { a = 1; }
        pn.innerHTML = "<p>" + [a] + "</p>";
    });



    $("#prev").click(function prev() { //control button "previous" function

        if (i < keys.length + 1 && i > 1) {
            i = i - 1;
        }
        else { i = keys.length; } // Code from Web Zone at https://www.youtube.com/watch?v=sQuniQCzNlY //
        storyContent.innerHTML = "<p class='mb-5'><h4>" + keys[i - 1] + "</h4></p>";
        titleImg.innerHTML = `<img src="res/media/c` + [i] + `.png" class="mt-1 pt-1">`;
        // Section counter "decreasing"
        if (a < keys.length + 1 && a > 1) {
            a = a - 1;
        }
        else { a = keys.length; }
        pn.innerHTML = "<p>" + [a] + "</p>"
    });

    //Text blink function//
    $("#startStory").delay( 2500 ).animate({ opacity: 0 }, 200, "linear", function() {
        $(this).animate({ opacity: 1 }, 300);
        $(this).animate({ opacity: 0 }, 400);
        $(this).animate({ opacity: 1 }, 500);
        $(this).animate({ opacity: 0 }, 400);
        $(this).animate({ opacity: 1 }, 300);
        $(this).animate({ opacity: 0 }, 400);
        $(this).animate({ opacity: 1 }, 500);
        $(this).animate({ opacity: 0 }, 400);
        $(this).animate({ opacity: 1 }, 300);
        $(this).animate({ opacity: 0 }, 400);
        $(this).animate({ opacity: 1 }, 500);

    });


    function myFunction(mx) { //fixed contorl button position on desktop view
        if (mx.matches) { // If media query matches
            $("#button-container").addClass("fixed-bottom");
        }
    }

    var mx = window.matchMedia("(min-width: 1243px)");
    myFunction(mx); // Call listener function at run time
    mx.addListener(myFunction); // Attach listener function on state changes













}); //end function document ready
