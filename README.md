<p align="center">
  <img src="https://www.alura.com.br/assets/img/quarentenadev/imersaogamedev.1591132734.svg">
</p>

---

<p align="center">
  <br />
  <img src="https://img.shields.io/badge/made%20by-SkullDarth-lightgrey">
  

  <!-- Indice personalizado -->
  <p align="center">
      <a href="#about-the-courses">About the courses</a>
      <strong>|</strong>
      <a href="#resources-and-procedures">Resources and Procedures</a>
      <strong>|</strong>
      <a href="#running-for-first-time">Running for First Time</a>
      <strong>|</strong>
      <a href="#project-tree">Project Tree</a>
      <strong>|</strong>
      <a href="#project-in-function">Project in function</a>
      <strong>|</strong>
      <a href="#license">License</a>
      <br />
      <br />
      <p align="center"> <strong>Gamedev immersion</strong></p>
   </p>

</p>

  > "Success is not the result of a game, but the destiny of a journey." !

---
## **About the Courses**
#### GameDev immersion is one event created by alura to provide some game developer knoledge using javascript to create runner games styles.
#### Objective: Create one full-game called hipster-runner using **javascript** and **p5.js** library based on these [characters][characters]. 
---
# Resources and Procedures
---
## Technologies APIs and Libraries used to create this project

#### Course 01 - Game engine

- [x] [P5.js][P5.js]

- [x] Canvas

---
#### Course 02 - Colision and enemies

- [x] [P5.js Collide2D][P5.js_collide2D]

---
#### Course 03 - Power Ups, maps and interaction texts

- [x] Add your technologies here 

---
#### Course 04 - Management states

- [x] Add your technologies here

---
#### Course 05 - Adding complexity

- [x] Add your technologies here

---
## Developed Features

- [x] Add your features here

---
## Running for First Time
To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [npm][npm] + [Yarn v1.13][yarn] or higher + [Live Server][liveServer] + [VScode v1.46][vscode] or higher installed on your computer.

Note: I'm preferer to use Vscode but if you like another editor just use.

After prepare your enviroment execute this comands from you command line:

```bash

# Clone this repository
$ git clone https://github.com/SkullDarth/hipster-runner.git

# Go into the repository
$ cd hipster-runner/

# Open with VScode or use your favorite editor
$ code .

```

Open index.html with Live Server using **right click** on the mouse and select **"Open with Live Server"**

---
## Project Tree
To create a tree files in project run commands present right below in respository folder:

```bash
$ yarn add tree-cli

$ yarn tree -l 4 -o out.txt --ignore node_modules,.gitignore,.gitattributes

```

#### Result after run comand present in top:

```bash

├── LICENSE
├── README.md
├── assets
|  ├── imagens
|  |  ├── assets
|  |  |  ├── coracao.png
|  |  |  ├── fonteTelaInicial.otf
|  |  |  ├── game-over.png
|  |  |  └── telaInicial.png
|  |  ├── cenario
|  |  |  └── floresta.png
|  |  ├── inimigos
|  |  |  ├── gotinha-voadora.png
|  |  |  ├── gotinha.png
|  |  |  └── troll.png
|  |  └── personagem
|  |     └── correndo.png
|  └── sons
|     ├── somPulo.mp3
|     └── trilha_jogo.mp3
├── package.json
├── src
|  ├── index.html
|  ├── index.js
|  ├── scripts
|  |  └── game
|  |     ├── character.js
|  |     └── scenario.js
|  └── sketch.js
└── yarn.lock

directory: 461 file: 1969

```
---
## Project in function

![Project in function][project-in-function]

---
## License
This project is under the MIT license. See the [LICENSE](./LICENSE) for more information.

---

#### Made with 💙 by Yan Oliveira [Get in touch!][MylinkedIn] 🖖

<!-- Hiperlinks structure to base -->
<!-- Just refer the link using this sintax: "[challenger 02][challenge02]" -->
[challenge02]: https://github.com/SkullDarth/bootcamp-gostack-challenge-02

[liveServer]: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
[vscode]:https://code.visualstudio.com/
[tree-cli]:https://github.com/MrRaindrop/tree-cli
[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[npm]: #
[characters]: https://pipoya.itch.io/pipoya-free-2d-game-character-sprites
[P5.js]: https://p5js.org/
[P5.js_collide2D]: https://github.com/bmoren/p5.collide2D

[project-in-function]: https://user-images.githubusercontent.com/16024701/85500913-c1e86980-b5ba-11ea-977a-48d7fb374474.gif

[initialized-project]: #
[project-in-function-02]: #
[projectFunctionInVideo]: #

[MylinkedIn]:https://www.linkedin.com/in/yan-brito/

