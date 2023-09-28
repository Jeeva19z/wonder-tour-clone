// window.onscroll=loadingclass();

// function loadingclass(){

//    document.querySelector(".ruff").classList.add("loaded");
//    document.querySelector(".ruffscond").classList.add("loadedscond");
//    document.querySelector(".ruffthird").classList.add("loadedsthird");


// }

window.addEventListener("load",function(){

    document.querySelector(".ruff").classList.add("loaded");
    document.querySelector(".ruffscond").classList.add("loadedscond");
    document.querySelector(".ruffthird").classList.add("loadedsthird");
  
  
  });
  
  var popup=document.querySelector(".popup");

  var xclose=document.querySelector(".x-close").addEventListener("click",function(){
popup.style.display="none"
  });

  document.querySelector(".shown").addEventListener("click",function(){
// alert(popup.innerHTML);
popup.style.display="block";
  });
  


/* --------------------------------------------------------------------------------------------------- */

/* tab section SCRIPT  START */

  function openTab(tabId) {
    // Hide all tab content
    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Remove the 'active-tab' class from all tab buttons
    var tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(function(button) {
        button.classList.remove('active-tab');
    });

    // Show the selected tab content
    document.getElementById(tabId).style.display = 'block';

    // Add the 'active-tab' class to the clicked tab button
    document.querySelector('[onclick="openTab(\'' + tabId + '\')"]').classList.add('active-tab');
}


/* --------------------------------------------------------------------------------------------------- */

/* tab section SCRIPT  END */

$("#smoothscrool").click(function(){

  $("html").animate({
    scrollTop:$("#smoothtop").offset().top},1500);




});

// ----------------------------------------- smothh scrool above-----

$(".scro").hover(function(){
// alert("sd");
$(".scrot").fadeOut();
$(".scrot").fadeOut("slow");
$(".scrot").fadeOut(3000);


});

$(".scrott").hover(function(){
  // alert("sd");
  $(".scrot").fadeIn();
  $(".scrot").fadeIn("slow");
  $(".scrot").fadeIn(3000);


  
  });

  // -------------------------------------------------------------- handburger menu

  document.querySelector(".menubar-mobile").addEventListener("click",function(){

    document.querySelector(".ulmegamenu").classList.toggle("active");




  });