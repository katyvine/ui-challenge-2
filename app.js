//jquery to change the attributes
$(function()  {
    $('button.dropdown').on('click', function(e){
    e.preventDefault();
    $('ul').toggle();
    $("button.dropdown").css("background-position", "-640px -160px");
  });

  $('button.checkbox').on('click', function(e){
    e.preventDefault();
  $('button.checkbox').css("background-position", "-220px -130px");
  });

  $('button.radio').on('click', function(e){
    e.preventDefault();
  $('button.radio').css("background-position", "-500px -130px");
  });
});