//code for rating stars- acting like dti stars
// $("label").click(function() {
//   $(this).parent().find("label").css({"background-color": "rgb(255, 248, 225)"}); //bring the color back to og if you change your mind on a rating
//   $(this).css("background-color", "goldenrod"); //change color of your selected star to gold
//   $(this).nextAll().css("background-color", "goldenrod"); //change all previous stars to gold as well
// });

jQuery("label").click(function() {
  jQuery(this).parent().find("label").css({"background-color": "rgb(255, 248, 225)"});
  jQuery(this).css("background-color", "goldenrod");
  jQuery(this).nextAll().css("background-color", "goldenrod");
});
