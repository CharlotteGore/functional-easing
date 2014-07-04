# Functional Easing

[![Build Status](https://travis-ci.org/charlottegore/functional-easing.png?branch=master)](https://travis-ci.org/charlottegore/functional-easing)

A functional, highly generic easing provider. Works especially well with [Animation Timer](https://github.com/charlottegore/animation-timer) which already provides the normalised 0 to 1 time elapsed input value used by this module (in addition to providing easy looping, bouncing, rewinding and pausing of animations. Check it out! It's cool!)

## Features

- Refactored, optimised Penner Easing Equations (they now only mutate the time value)
- Supports custom easing functions.
- Can be used functionally or procedurally
- Takes linear time progressed value of 0 to 1 as input and outputs only the eased time value.
- Designed to providing easing for any interpolation/tween functions that take a normalised time value as input. 
- Covered by tests.

## Built in Easing functions

All easing functions support in, out and in-out.

- `cubic` 
- `quad`
- `quart`
- `quint`
- `expo`
- `sine`
- `circ`
- `back` (configurable)
- `elastic` (configable)
- `bounce`

## Installing

```sh
$ npm install --save functional-easing
```

## Example

```js
// some imports...
var AnimationTimer = require('animation-timer').AnimationTimer;
var Easer = require('functional-easing').Easer;

// make a new easer
var easer = new Easer()
  .using('ease-in-sine');

var origin = new Vector2D(0,0);
var destination = new Vector2D(200,100);

// make a new easer. Wrap our tick handler with easer..
var animation = new AnimationTimer()
  .duration('5s')
  .on('tick', easer(function(time){
    // every tick, this function will be called and 'time' will be already 'eased'
    var tweenedVector = Vector2D.lerp(origin, destination, time);
    // do something with the vector...
  }))
  .play();

```

## API

### Easer()

Create a new instance of Easer. Easers on their own don't do very much.

```js
var Easer = require('functional-easing').Easer;
var easer = new Easer();
```

### Easer.using(preset)

Generates an easing function from one of the presets. The options are...

- `in-cubic`, `out-cubic`, `in-out-cubic`
- `in-quad`, `out-quad`, `in-out-quad`
- `in-quart`, `out-quart`, `in-out-quart`
- `in-quint`, `out-quint`, `in-out-quint`
- `in-expo`, `out-expo`, `in-out-expo`
- `in-sine`, `out-sine`, `in-out-sine`
- `in-circ`, `out-circ`, `in-out-circ`
- `in-back`, `out-back`, `in-out-back` - configurable
- `in-elastic`, `out-elasic`, `in-out-elastic` - configurable
- `in-bounce`, `out-bounce`, `in-out-bounce`

```js
var easer = new Easer().using('in-out-sine');
```

### Easer.using(function)

Wraps external, custom easing functions.

Returns an `easingFunction`.

```js
var easer = 
  new Easer()
    .using(function(time){ return doSomethingWithTime(time); });
```

## easingFunction API

### easingFunction(time)

Easing functions can be used procedurally by passing a time value, in which case it simply returns the eased value.

```js
var easer = new Easer().using('in-expo');

easer(0.5); // returns 0.03125
easer(0); // returns 0
easer(1); // returns 1
``` 

### easingFunction(function)

Easing functions can be used functionally. When passed a function `func`, it returns another function which when called will pass
the output of the easing function as the first parameter to `func`.

```js
var easer = new Easer().using('in-expo');

var easingFunction = easer(function(easedTime){
  // easedTime is the output of the easing function.
  console.log(easedTime);
});

easingFunction(0.5); // 0.03125
easingFunction(0.8); // 0.25000 (etc)
```

### easingFunction.withParameters( ... )

Whether used functionally or procedurally, you can bind additional parameters to be *appended* to the parameters passed to easing functions. Time is always the first
parameter to be passed. 

The primary use for this is for configuring the `back` and `elastic` easing functions, but it also helps support custom functions.

```js
// configuring some presets
var easer = new Easer()
  .using('in-back')
  .withParameters(0.8); // in-back, out-back and in-out-back accept an additional 'overshoot' parameter

var easer = new Easer()
  .using('out-elastic')
  .withParameters(0.5, 0.8); // in-elastic, out-elastic and in-out-elastic accept additional 'amplitude' and 'period' parameters.
```

```js
// some custom thing
var easer = new Easer()
  .using(function(time, scale){
    return time * scale;  
  })
  .withParameters(2);

// procedurally..
easer(0.5); // 1

// functionally...
var easingFunction = easer(function(t){  
  console.log(t);
});

easingFunction(0.5); // 1
```


## Development and Tests

Pretty standard npm/grunt/browserify development stack here. 

Clone the repo, `npm install -g grunt-cli` if you haven't already, then installed the dependencies once:
```sh
$ npm install
```

To run the tests:
```sh
$ grunt test
```

Or you can 
```
$ grunt watch
```

## License

  MIT
