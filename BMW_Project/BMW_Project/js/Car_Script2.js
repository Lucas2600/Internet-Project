//-------------------------- START --------------------------//

$(document).ready(function()
{
  $('.next').on('click', function()
  {
    var currentImg = $('img.active');
    var nextImg = currentImg.next();

    if(nextImg.length)
	{
      currentImg.removeClass('active').css('z-index', -10);
      nextImg.addClass('active').css('z-index', 10);
    }
  });

  $('.prev').on('click', function()
  {
    var currentImg = $('img.active');
    var prevImg = currentImg.prev();

    if(prevImg.length)
	{
      currentImg.removeClass('active').css('z-index', -10);
      prevImg.addClass('active').css('z-index', 10);
    }
  });
});


//-----------------------New Navigation------------------//
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}