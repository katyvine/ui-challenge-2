//jquery to change the attributes
$(function()  {
    $('button.dropdown').on('click', function(e){
    e.preventDefault();
    $('ul').toggle();
    console.log("live dropdown button");
    $("button.dropdown").css("background-position","-640px -160px");
  });
});