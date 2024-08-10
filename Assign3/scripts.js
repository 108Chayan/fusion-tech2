// scripts.js

$(document).ready(function() {
    // Carousel functionality
    let currentSlide = 0;
    const slides = $(".carousel-slide");
    
    function showSlide(index) {
        slides.removeClass("active");
        slides.eq(index).addClass("active");
    }
    
    $(".next").click(function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });
    
    $(".prev").click(function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });
    
    showSlide(currentSlide);
    
    // Modal functionality
    const modal = $("#modal-window");
    const btn = $("#open-modal");
    const span = $(".close");
    
    btn.click(function() {
        modal.show();
    });
    
    span.click(function() {
        modal.hide();
    });
    
    $(window).click(function(event) {
        if ($(event.target).is(modal)) {
            modal.hide();
        }
    });
    
    // Form validation
    $("#form").submit(function(event) {
        event.preventDefault();
        alert("Registration successful!");
    });
});
