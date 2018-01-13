$('#option').click(function(){
$('#optionsBlock').show();
});

$('#optionsClose').click(function(){
  $('#optionsBlock').hide();
});

$('#menuBlock').click(function(){
$('#menuBlockcontent').show();
});

$('#menuCloseBlock').click(function(){
  $('#menuBlockcontent').hide();
});

$('#logInBlock').click(function(){
    $('#menuBlockcontent').hide();
  $('#overlayBlock').show();
$('#logInPopUp').fadeIn(3000);
});

$('#signUpBlock').click(function(){
    $('#menuBlockcontent').hide();
  $('#overlayBlock').show();
$('#signUpPopUp').fadeIn(3000);
});

$('#logInPopUpClose').click(function(){
  $('#logInPopUp').hide();
    $('#overlayBlock').hide();
});

$('#signUpPopUpClose').click(function(){
  $('#signUpPopUp').hide();
    $('#overlayBlock').hide();
});

$('#signUpBlockMax').click(function(){
  $('#overlayBlock').show();
$('#signUpPopUp').fadeIn(3000);
});

$('#logInBlockMax').click(function(){
  $('#overlayBlock').show();
$('#logInPopUp').fadeIn(3000);
});

$('#signUpSwitch').click(function(){
    $('#logInPopUp').hide();
$('#signUpPopUp').show();
});

$('#logInSwitch').click(function(){
    $('#signUpPopUp').hide();
$('#logInPopUp').show();
});
