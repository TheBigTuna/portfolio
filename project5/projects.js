$(document).ready(function(){
    $(".hoverBox").hover(function logoFlip(){
        $("h4").attr("class", "Animated flipInX");

        $(".hoverBox").mouseleave(function(){
        $("h4").removeAttr("class", "Animated flipInX");
    })
    })



    $(".box1").click(function(){
        $(".modal-container1").addClass('active');
    });

    $(".exit").click(function(){
        $(".modal-container1").removeClass("active");
    })




     $(".box2").click(function(){
        $(".modal-container2").addClass('active');
    });

    $(".exit").click(function(){
        $(".modal-container2").removeClass("active");
    })



    
     $(".box3").click(function(){
        $(".modal-container3").addClass('active');
    });

    $(".exit").click(function(){
        $(".modal-container3").removeClass("active");
    })
    

    
     $(".box4").click(function(){
        $(".modal-container4").addClass('active');
    });

    $(".exit").click(function(){
        $(".modal-container4").removeClass("active");
    })
    
    
     $(".box5").click(function(){
        $(".modal-container5").addClass('active');
    });

    $(".exit").click(function(){
        $(".modal-container5").removeClass("active");
    })
    
    
     $(".box6").click(function(){
        $(".modal-container6").addClass('active');
    });

    $(".exit").click(function(){
        $(".modal-container6").removeClass("active");
    })
});


