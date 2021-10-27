# COMO CRIAR UMA APP ELECTRON EM POUCOS MINUTOS

## Criando a Aplicação:

1. Crie toda a página HTML, com CSS e JS próprios normalmente.

2. Iniciemos um projeto nodeJS:
    ~~~ bash
    npm init 
    ~~~

3. Altere o arquivo **package.json** com nome da app, autor, etc e principalmente na linha:
~~~ js
 "scripts": {
    "start": "electron ."
  },
~~~

4. Crie um arquivo chamado **index.js** que será o "coração" da aplicação Electron, pois ele definirá as medidas das janelas e qual o html que será iniciado.
    - Basta copiar o index.js deste repositório tal como está.

5. Uma vez feito isto, é hora de instalar o Electron nesta sua pasta local que você acabou de criar:
    ~~~ bash
        npm i electron
    ~~~ 


6. Depois de instalado, a sua app já está pronta. Para abrí-la basta o seguinte comando:
    ~~~ bash
        npm start
    ~~~

7. Sua app se abrirá como um app para desktop!

## Preparando um controle de versão e commitando

- Crie o arquivo .gitignore e adicione a pasta node_modules dentro dele
- Dê o comando *git init*
- Abra um repositório no Github
- siga as instruções do Github (parecidas a esta abaixo:
  - git remote add origin https://github.com/HelioGiroto/nome.git
  - git branch -M main
  - git push -u origin main

  - git add . 
  - git commit -m '1o. commit - etc etc'
  - git push
  - git push -u origin main

## TERMINADO

