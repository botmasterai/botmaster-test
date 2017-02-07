# Utilities for testing botmaster

## Quick start example

For an example please see the tests in this repo:
<https://github.com/botmasterai/botmaster-fulfill/blob/master/src/tests/fulfill-e2e.js>

## Usage

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### respond

have bot master response done with a text. Chain it by calling it response(botmaster)(text)

**Parameters**

-   `botmaster` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** botmaster to work with
-   `text` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** bot text to send

### incomingMessage

generate a new telegram incoming message for use with botmaster

**Parameters**

-   `text` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?= 'hi'** optional - the users text

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** a mock telegram incoming message to use with telegramMock.sendMessage

### incomingUpdate

generate an incoming update

**Parameters**

-   `text` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?** the bots text

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** mock botmaster update after update handler

### outgoingMessage

generate an outgoing message

**Parameters**

-   `text` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?** the bots text

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** message to send with bot.sendMessage

### telegramMock

A chainable mock for telegram that can send and expect messages. Construct it by calling it with these params.

**Parameters**

-   `botmaster` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the botmaster object being tested. we use this to get the app for use with supertest.
-   `mock` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)?** a nock scope

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** mock object with methods

### sendUpdate

mock telegram sending botmaster an update

**Parameters**

-   `update` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** telegram update
-   `cb` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** error-first callback with response object from botmaster

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the telegraMock object for chaining

### expect

expect botmaster to send certain responses

**Parameters**

-   `responses` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** a series of botmaster responses to expect in order
-   `cb` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** error-first callback

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the telegraMock object for chaining

### cleanAll

sugar syntax for nock.cleanAll() to remove any existing mocks
