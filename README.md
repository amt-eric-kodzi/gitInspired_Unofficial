[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/AmaliTech-Training-Academy/gitinspired-frontend-june.git">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZC2u9cjLenMvYSkWUf2yLLbB_3eaACPJaYKd3c6dz-5IVnCq83YTPZVVV4d-pkB_hF6E&usqp=CAU" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Git Inspired</h3>

  <p align="center">
    This project has it inspiration from Github. The project is to help student
     have the git experience in submiting assignments and see both created and submitted assignment with a user interface. The lecturer has access to view the full content from the student. He or She is able to create assignment and invite student. The Administrator is able to add a new student or lecturer and see the number of students, lecturers, assignment created and submitted assignment.
    <br />
    <a href="#"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://gitinspired.amalitech-dev.net">View Demo</a>
    ·
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#commands">Commands</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[[Git Inspired]](https://www.amalitech.com)

### Built With

- [React Typescript]()
- [NodeJs]()

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

  ```sh
  npm install -g yarn
  ```

- docker

  ```sh
  https://www.docker.com/products/docker-desktop
  ```

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/AmaliTech-Training-Academy/gitinspired-frontend-june.git

   ```

2. Initialize git

  ```sh
 git init
 ```

3. Initialize npm

   ```sh
    npm init
    ```

4. Install NPM packages

   ```sh
   yarn install
   ```

5. Environment variables

   ```sh
     create a .env
     copy variables from example.env to .env
     change values to correct values
   ```



## Commands

- build dev

  ```sh
    docker build -f Dockerfile.dev -t .
  ```

- build prod

  ```sh
    docker build -f Dockerfile.prod -t .
  ```

- run dev

  ```sh
    docker-compose -f docker-compose.dev.yaml up -d
  ```

- run prod

  ```sh
    docker-compose -f docker-compose.prod.yaml up -d
  ```

- stop dev

  ```sh
    docker-compose -f docker-compose.dev.yaml down
  ```

- stop prod

  ```sh
    docker-compose -f docker-compose.prod.yaml down
  ```

- exec (Get access into the container)

  ```sh
    docker exec -it ${container-id} sh
  ```

- docker dev log

  ```sh
    docker-compose -f docker-compose.dev.yaml logs
  ```

- docker prod log

  ```sh
    docker-compose -f docker-compose.prod.yaml logs
  ```

- single-log:

  ```sh
  docker-compose -f docker-compose.dev.yaml logs ${service-name}
  ```

- docker services:

  ```sh
    docker-compose -f ${compose file} service
  ```

- docker tail logs:

  ```sh
    docker-compose -f ${compose-file} logs ${service-name} --tail ${count}
  ```

  <!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/AmaliTech-Training-Academy/gitinspired-frontend-june/issues) for a list of proposed features (and known issues).

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Amali-Tech Training Academy - [Email](takoraditrainingcenter@amalitech.org)

Project Link: ([Git Inspired]https://gitinspired.amalitech-dev.net)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [AmaliTech Training Academy](https://www.amalitech.org)
- [AmaliTech Service Centre](https://www.amalitech.org)



# gitInspired_Unofficial
