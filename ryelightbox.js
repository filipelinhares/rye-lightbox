/*
# Rye Lightbox.
# Version 1.0.0
*/
Rye.define('ligthbox', function() {

  function init(element, contentLightbox, closeButton, confirm) {

    //Store content value.
    var contentLightbox = Rye(contentLightbox)
      , overlay;

    contentLightbox.hide();
    Rye(element).on('click', function(e) {

      //Verify if overlay is true;
      if(confirm){
        Rye('body').append('<div class="overlay"></div>');
          overlay =  Rye('.overlay');
          overlay.css({
            width: '100%'
            , height: '3000px'
            , background: 'rgba(0,0,0,0.5)'
            , position: 'fixed'
            , top: '0'
          })
      }

      //Get width, height values and divide by 2;
      var width = parseInt(contentLightbox.css('width'), 10)
        , height = parseInt(contentLightbox.css('height'), 10)
        , halfWidth = width / 2
        , halfHeight = height / 2;

      // Set Style to content lightbox.
      contentLightbox.css({
          position: 'absolute'
        , top: '50%'
        , left: '50%'
        , margin: '-' + halfHeight + 'px 0 0 -' + halfWidth + 'px'
      })
      contentLightbox.css('z-index','3')


      //Show the lightbox.
      contentLightbox.show()
    })

    //Close Button
    Rye(closeButton).on('click', function() {
      contentLightbox.hide()
      overlay.hide()
    })
  }

  return {
    init: init
  }

})