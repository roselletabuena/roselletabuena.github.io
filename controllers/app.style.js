
$(document).ready(function() {
    // var macy = Macy({
    //     container: '#project-items',
    //     trueOrder: false,
    //     waitForImages: true,
    //     margin: 0,
    //     columns: 2,
    //     breakAt: {
    //         1200: 2,
    //         940: 2,
    //         640: 2,
    //         520: 1,
    //         400: 1
    //     }
    // });
    // macy.runOnImageLoad(function () {
    //     var show = document.getElementById("project-items");
    //     show.classList.add("show");
    //     macy.recalculate(true, true);
    // });
})


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

// $("#project-items").slick({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     fade: true,
//     cssEase: 'linear'
// });    

$('[data-toggle="tooltip"]').tooltip()


$('#resume').click(function () {
    $('.ui.modal')
    .modal({
      blurring: true
    })
    .modal('show')
  ;
  
})

PDFObject.embed("static/RoselleTabuena.pdf", "#resume-view"); 