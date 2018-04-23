//jquery to change the attributes
$(function()  {
    $('button.dropdownA').on('click', function(e){
    e.preventDefault();
    $('ul').toggle();
    $("button.dropdownA").hide();
    $("button.dropdownB").show();
  });

  $('button.dropdownB').on('click', function(e){
    e.preventDefault();
    $('ul').toggle();
    $("button.dropdownA").show();
    $("button.dropdownB").hide();
  });



  $('button.checkboxA').on('click', function(e){
    e.preventDefault();
  $('button.checkboxB').show();
  $('button.checkboxA').hide();
  });

  $('button.checkboxB').on('click', function(e){
    e.preventDefault();
  $('button.checkboxA').show();
  $('button.checkboxB').hide();
  });



  $('button.radioA').on('click', function(e){
    e.preventDefault();
  $('button.radioB').show();
  $('button.radioA').hide();
  });

  $('button.radioB').on('click', function(e){
    e.preventDefault();
    $('button.radioA').show();
    $('button.radioB').hide();
  });



  $('button.submitA').on('click', function(e){
    e.preventDefault();
  $('button.submitB').show();
  $('button.submitA').hide();
  });

  $('button.submitB').on('click', function(e){
    e.preventDefault();
    $('button.submitA').show();
    $('button.submitB').hide();
  });
});A