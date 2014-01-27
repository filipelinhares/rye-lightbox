#Rye Lightbox

##O que é?
Rye Lightbox, é um plugin de lightbox, feito para a biblioteca [Rye.JS](http://www.ryejs.com)

##Como utilizar?
Faça o download da [Rye.JS](http://www.ryejs.com) e da Rye Ligthbox. Faça a chamada dos dois no seu código normalmente.

Após isso você deve criar uma div que será seu lightbox:

```
<div class="lighbox">
	Conteúdo do seu lighbox aqui.
</div>
```
Essa div, devera conter um o botão de fechar:

```
<div class="lightbox">
	<span class="fechar">x</span>
</div>
```

Feito isso, precisamos adicionar o efeito, é hora de javascript.
Para utilizar basta você fazer a chamada da seguinte função.

`Lightbox.init('disparo', 'elem-lightbox', 'elem-fechar')`

###disparo:8
É o elemento que acionara o ligthbox (*.classe*, *#id*, *elemento*);

###elem-lightbox:
É o seu content do lightbox no nosso exemplo no caso seria o:
*.lightbox*

###fechar
É o botão que será usado para fechar o lightbox.

##Exemplo

```
index.html

<div class="lightbox">
	Conteúdo do nosso Lightbox.
    <span class="fechar">X</span>
</div>

<button class="ativar">Abrir Lightbox</button>
```
```
script.js

Lightbox.init('.ativar', '.lightbox', '.fechar');
```
##Estilização

A estilização do lightbox é por sua conta, coloque a cor que preferir, posicione o botão aonde bem quiser. 

ps: Só não esqueça de declarar uma altura(height) e uma largura(width) fixa para seu lightbox.
