// Underline Navigation After Click
$(document).ready(function () {
    // Get current page URL
    var url = window.location.href;
  
    // remove # from URL
    url = url.substring(
      0,
      url.indexOf("#") == -1 ? url.length : url.indexOf("#")
    );
  
    // remove parameters from URL
    url = url.substring(
      0,
      url.indexOf("?") == -1 ? url.length : url.indexOf("?")
    );
  
    // select file name
    url = url.substr(url.lastIndexOf("/") + 1);
  
    // If file name not avilable
    if (url == "") {
      url = "index.html";
    }
  
    // Loop all menu items
    $(".nav li").each(function () {
      // select href
      var href = $(this).find("a").attr("href");
  
      // Check filename
      if (url == href) {
        // Add active class
        $(this).addClass("navActive");
      }
    });

  
//Scroll To Footer on NAV "Contact Me" Click

    $("#contactMe").click(function () {
      $("html, body").animate({ scrollTop: $(document).height() }, "slow");
      return false;
    });

  
//Scroll To Footer on BURGER "Contact Me" Click

    $("#contactMe2").click(function () {
      $("html, body").animate({ scrollTop: $(document).height() }, "slow");
      return false;
    });

  
//Toggle Burger Menu

    console.log("READY")
  
    $(".burger").click(function () {
      console.log("CLICKING")
  
      // $("ul.burgerContainer li").toggleClass("open");
      $("div.burgerContainer").slideToggle("fast");
      // $("ul.burgerContainerList").toggleClass(".visible");
    });


//Scroll To Introduction on Click
$("#introductionP").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $(".introductionP").offset().top},
      'slow');
}); 

//Scroll To Research on Click
$("#research").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $(".research").offset().top},
      'slow');
}); 

//Scroll To Analysis & Definition on Click
  $("#analysisDefinition").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".analysisDefinition").offset().top},
        'slow');
  }); 

//Scroll To Prototypeing & User Testing on Click
$("#prototypingUserTesting").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $(".prototypingUserTesting").offset().top},
      'slow');
}); 

//Scroll To Final Prototype on Click
$("#finalPrototype").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $(".finalPrototype").offset().top},
      'slow');
}); 


  });
  