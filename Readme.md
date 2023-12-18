<!-- ABOUT THE PROJECT -->

## About The Project

EDTS sharing session about micro FE and microservices

### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Vue][Vue.js]][Vue-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![Go][Go.com]][Go-url]
* [![Java][Java.com]][Java-url]
* [![Springboot][Springboot.com]][Springboot-url]

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites (OSX)
- [x] NodeJS installed | v12.14.1
- [x] Java installed | openjdk 17.0.5
- [x] Go installed | go1.20.2 darwin/amd64
- [x] Gradle installed | 8.5
- [x] Npm Installed | v6.13.4

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/mzhar91/micro-fe-be-example.git
   ```
2. Install NPM packages in fe/base folder
   ```sh
   cd fe/vue && npm install
   ```
3. Install NPM packages in fe/vue folder
   ```sh
   cd fe/vue && npm install && npm run build
   ```
4. Install NPM packages in fe/react folder
   ```sh
   cd fe/react && npm install && npm run build
   ```
5. Install go packages in be/go folder
   ```sh
   cd be/go && go install && go mod vendor
   ```
6. Install java packages in be/java folder
   ```sh
   cd be/java && gradle build
   ```

### Run Application
1. Run Front End (vue & react)
   ```sh
   cd fe/base && npm start
   ```
2. Run go service
   ```sh
   cd be/go && go run main.go
   ```
3. Run Java service
   ```sh
   cd be/java && gradle bootRun
   ```

<!-- CONTACT -->

## Contact

Harry Kurniawan - harry.kurniawan@sg-dsa.com

Project Link: [https://github.com/mzhar91/micro-fe-be-example](https://github.com/mzhar91/micro-fe-be-example)


<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

* [SG EDTS: Discover the possibilities of digital transformation](https://sg-edts.com)
* [Markdown Badges](https://github.com/Ileriayo/markdown-badges)
* [Spring Boot Initializer](https://start.spring.io/)
* [What is Micro-Frontend?](https://medium.com/geekculture/what-is-micro-frontend-benefits-of-using-micro-frontend-architecture-f6d667edb03d)
* [Microservices](https://microservices.io/)
* [Podium JS](https://podium-lib.io/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white

[Next-url]: https://nextjs.org/

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB

[React-url]: https://reactjs.org/

[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D

[Vue-url]: https://vuejs.org/

[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white

[Bootstrap-url]: https://getbootstrap.com

[Go.com]: https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white

[Go-url]: https://go.dev/

[Java.com]: https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white

[Java-url]: https://www.java.com/en/

[Springboot.com]: https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white

[Springboot-url]: https://spring.io/projects/spring-boot