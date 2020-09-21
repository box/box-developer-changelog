# Installation & setup

[**Previous:** Contribution guidelines](../CONTRIBUTING.md) |
[**Next:** Notes for Box employees](./boxers.md)

---

## Prerequisites

This project has a few prerequisites.

* [`Git`](https://git-scm.com/) to download the source code
* When using Docker
  * A local installation of Docker. I'd recommend the
    [Docker Desktop](https://www.docker.com/products/docker-desktop)
    on Mac.
  * [Docker Compose](https://docs.docker.com/compose/) which can be
    installed with `Homebrew` using `brew install docker-compose`.
* When not using Docker
  * [`Node.js`](https://nodejs.org/) for compilation and linting of the API
    specification. Ideally Node 12 or above.
  * [`Yarn`](https://yarnpkg.com/) is the Node package manager for this project. It can be installed with
    `npm i -g yarn` if Node is installed.

## Download the code

To setup this project, download the source code and prepare the environment.

```sh
git clone git@github.com:box/box-developer-changelog.git box-developer-changelog
cd box-developer-changelog
cp .env.example .env
```

Note that a new copy of the `.env` file is created. This file contains some
environment variables used by various parts of the code to pull in extra
content, as well as configure the content to be imported when testing imports.

## Lint the content

With the dependencies installed, it is possible to lint the content. Linting
validates the markdown is valid, has no spelling mistakes, and that
there are no obvious incorrect links.

```sh
yarn install
yarn lint
```

Additionally, each of the lint steps can be run individually.

<!-- markdownlint-disable line-length -->

```sh
yarn lint:links # makes sure all links are valid, checking it against the guides
yarn lint:markdown # makes sure the markdown is valid markdown
yarn lint:spelling # makes sure there are no obvious spelling mistakes
yarn lint:alex # makes sure we're not using any offensive language in our content
```
<!-- markdownlint-enable line-length -->

## Linting with Docker

To perform continuous linting with Docker, a docker image is provided.

```sh
docker-compose up
```

This will watch for changes and run the linter without the need to install Node.

## Content compilation

The content in this project is sanitized and prettified before it can be used in
our developer documentation. For this purpose, we have some custom code in
`./code` that adds extra spaces around markdown inside HTML, and expands in-line
HTML tags.

### Compiling the content

To compile the content, run the following command.

```sh
yarn build
```

This will push the sanitized and cleaned up content to the `./compiled` folder.

### Test the compiler

To test the compiler, run the following command.

```sh
yarn test
```

---

[**Next:** Notes for Box employees](./boxers.md)
