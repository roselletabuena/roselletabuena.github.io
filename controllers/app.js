
// var firebaseRef = firebase.database().ref();

// firebaseRef.set("hello");
// firebaseRef.child("hello").set("ssssss");


$('#menu').click(function () {
    $("#menu").toggleClass("is-active");
    $(".overlay").toggleClass("d-none");
    $(".brand-text").toggleClass("d-none");
})


$("#btn-about").click(function() {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth' 
    });
});

$("#btn-skills").click(function() {
    document.querySelector('#skills').scrollIntoView({
        behavior: 'smooth' 
    });
});


$("#btn-projects").click(function() {
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth' 
    });
});


$("#btn-contact").click(function() {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth' 
    });
});



$('[data-toggle="tooltip"]').tooltip()


$('document').ready(function() {

    $('.carousel').carousel()

    var scroll_pos = 0;
    var h = window.innerHeight;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > h) {
            $(".hamburger-inner").addClass('dark-bg');
            // $(".brand img").attr("src","img/RT pink.png");
           $(".brand img").css('background-color', 'white');
           $(".brand img").addClass('shadow-sm');
        } else {
            $(".brand img").css('background-color', 'transparent');
            $(".brand img").removeClass('shadow-sm');
            $(".hamburger-inner").removeClass('dark-bg');
            // $(".hamburger-inner").css('background-color', 'white');
        }
    });

})


// For todays date;
Date.prototype.today = function () { 
    return ((this.getDate() < 10)?"0":"") + this.getDate() +"-"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"-"+ this.getFullYear();
}

// For the time now
Date.prototype.timeNow = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}


var database = firebase.database();
var newDate = new Date();



$("#messageForm").submit(function(event) {
    
    let fullname = document.getElementsByName("fullname")[0].value;
    let email = document.getElementsByName("email")[0].value;
    let message = document.getElementsByName("message")[0].value; 
    let datetime = newDate.today() + "@" + newDate.timeNow();

    database.ref(Date.now()).set({
        email: email,
        fullname: fullname,
        message : message,
        date: datetime
    }).then( () => {

        Swal.fire(
            'Success',
            'Message sent succesfully',
            'success'
          )
          
        $('input[type="text"], input[type="email"],textarea').val('');
          
    }
    ).catch( (e) => {

        Swal.fire(
            'Error',
            `${e}`,
            'error'
        )
    })

    
    event.preventDefault();
    
});

