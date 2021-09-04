(function($) { 
    $(function() { 
      $(".classes" ).hide();
      $(".Matiere" ).hide();
      $(".Mat" ).hide();
      $(".MatPara" ).hide();
      $("#math" ).hide();
      $(".mathList" ).hide();
      $(".mathListF" ).hide();
      $("#chimi" ).hide();
      $(".chimiList" ).hide();
      $(".chimiListF" ).hide();
      $("#physic" ).hide();
      $(".physicList" ).hide();
      $(".physicListF" ).hide();

      $("#presentiel").click(function(){
        $(".classes").slideToggle("slow");
      });
   
      $("#distance").click(function(){
        $(".classes").slideToggle("slow");
      });
      $("#first").click(function(){
        $(".Matiere").slideToggle("slow");
      });
      $("#second").click(function(){
        $(".Matiere").slideToggle("slow");
      });
      $("#third").click(function(){
        $(".Matiere").slideToggle("slow");
      });

      $(".Fac").click(function(){
        $(".Mat").slideToggle("slow");
      });
      // faculter animation
      $("#Facfirst").click(function(){
        $("#FacfirstPara").slideToggle("slow");
        
      });
      $("#FacSecond").click(function(){
        $("#FacSecondPara").slideToggle("slow");
        
      });
      $("#FacThird").click(function(){
        $("#FacThirdPara").slideToggle("slow");
        
      });
      $("#FacForth").click(function(){
        $("#FacForthPara").slideToggle("slow");
        
      });
      $("#FacFif").click(function(){
        $("#FacFifPara").slideToggle("slow");
        
      });
      $("#FacSi").click(function(){
        $("#FacSiPara").slideToggle("slow");
        
      });
      $("#FacSiinfo").click(function(){
        $("#FacSiParainfo").slideToggle("slow");
        
      });
      //  open and close nav 
      $('#navbar-toggle').click(function() {
        $('nav ul').slideToggle();
      });
     

      $('#img1').on('click', function() {
        $('#math').slideToggle();
      });
      $('#ly').on('click', function() {
        $('.mathList').slideToggle();
      });
      $('#fa').on('click', function() {
        $('.mathListF').slideToggle();
      });

      // chimi toggle
      $('#img2').on('click', function() {
        $('#chimi').slideToggle();
      });
      $('#chimily').on('click', function() {
        $('.chimiList').slideToggle();
      });
      $('#chimifa').on('click', function() {
        $('.chimiListF').slideToggle();
      });

      // physics
        // chimi toggle
        $('#img3').on('click', function() {
          $('#physic').slideToggle();
        });
        $('#physicly').on('click', function() {
          $('.physicList').slideToggle();
        });
        $('#physicfa').on('click', function() {
          $('.physicListF').slideToggle();
        });
  
      // Hamburger toggle
      $('#navbar-toggle').on('click', function() {
        this.classList.toggle('active');
        $('.home-slider').toggle();
        $('.logo').toggle(1000);
      });
  
  
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.navbar-dropdown').slideToggle("slow");
  
        // Close dropdown when select another dropdown
        $('.navbar-dropdown').not($(this).siblings()).hide("slow");
        e.stopPropagation();
      });
  
     
      // Click outside the dropdown will remove the dropdown class
      $('html').click(function() {
        $('.navbar-dropdown').hide();
      });
      $('li a').on('click', function (e) {
        var targetSec = $(this).text();
        $('html, body').animate({
            scrollTop: $('#' + targetSec).offset().top
        }, 1500);
    });
    }); 

  })(jQuery); 


  
 
  