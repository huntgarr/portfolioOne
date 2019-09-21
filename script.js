$(function(){
  let today = new Date();
  let hours = today.getHours();
  if (hours <= 11){
    $('.timeWelcome').append('<p>Good Morning! ..and welcome!</p>').css('text-align','center').css('font-size','26px');
  } else if(hours <= 17){
    $('.timeWelcome').append('<p>Good Afternoon! ..and welcome!</p>').css('text-align','center').css('font-size','26px')
  } else if(hours <= 23){
    $('.timeWelcome').append('<p>Good Evening! ..and welcome!</p>').css('text-align','center').css('font-size','26px')
  }
})
