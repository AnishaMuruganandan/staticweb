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
$('#logInPopUp').fadeIn();
});

$('#signUpBlock').click(function(){
    $('#menuBlockcontent').hide();
  $('#overlayBlock').show();
$('#signUpPopUp').fadeIn();
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
$('#signUpPopUp').fadeIn();
});

$('#logInBlockMax').click(function(){
  $('#overlayBlock').show();
$('#logInPopUp').fadeIn();
});

$('#signUpSwitch').click(function(){
    $('#logInPopUp').hide();
$('#signUpPopUp').show();
});

$('#logInSwitch').click(function(){
    $('#signUpPopUp').hide();
$('#logInPopUp').show();
});
