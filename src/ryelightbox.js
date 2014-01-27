/**
 *  $~ Rye LightBox --version
 *  // 0.0.1
 */

Rye.define('Ligthbox', function() {

  function lightBox(element, elementlight, botaofechar) {

    //Deixa o elemento do lightbox escondido.
    Rye(elementlight).hide();

    Rye(element).on('click', function(e) {


      /**
       * Pega automaticamente a largura da div e a divide por 2
       * para poder alinhar o lightbox exatamente no centro.
       */
      var largura = Rye(elementlight).css('width')
      altura = Rye(elementlight).css('height')

      largura = largura.replace('px', '') / 2
      altura = altura.replace('px', '') / 2


      /**
       *Declara os estilos ao elemento para poder
       *centralizar, a váriavel 'largura' é resultado
       *da largura da div dividio por dois.
       */
      Rye(elementlight).css({
          position: 'absolute'
        , top: '50%'
        , left: '50%'
        , margin: '-' + altura + 'px 0 0 -' + largura + 'px'
      })

      //Exibe o lightshow
      Rye(elementlight).show()

    })


    //Manipulação do botão fechar
    Rye(botaofechar).on('click', function() {
      Rye(elementlight).hide();
    })
  }

  return {
    init: lightBox
  }

})
var Ligthbox = Rye.require('Ligthbox');