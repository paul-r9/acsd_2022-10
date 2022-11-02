# Spaceport Departures Board

Rocket 9 needs your team to finish up the code for our Spaceport Departures Board. Like a departures board at an airport the Spaceport Departures Board lists launch times of all spacecraft venturing to outer space. Our former team of contract Elbonian programmers left some code that you can build on (or scrap in favor of something more maintainable).

When the Departures Board first starts it queries all partner Spacelines via a Spaceline Launch Info Provider to receive the current launch list. That list contains Launch Info objects (detailed below).

The list of launches displayed on the board should be sorted by Destination. When multiple craft are flying to the same Destination then sort by departure Time.

**TODO:** Create a Test Double that acts as a Launch Info Provider interface. Use dependency injection to have your Departures Board behavior interact with the Test Double and verify the sorted order of the launches.

## Getting started

Install dependencies

```sh
npm install
```

## Running tests

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```

To generate test coverage report

```sh
npm run test:coverage
```