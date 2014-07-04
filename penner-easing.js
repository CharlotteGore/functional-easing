// Penner easing functions refactored to take a single normalised
// linear time value of between 0 and 1, returning a normalised eased time value.

// This is to abstract the easing functions away from actually tweening
// numerical values so that they can be more easily and efficently used
// as the time component in existing lerp/slerp functions.

// t = t, b = 0, c = 1, d =

var outBounce, inBounce;

var fns = {
  'linear' : function (t){
    return t;
  },
  'in-quad' : function (t){
    return t * t;
  },
  'out-quad' : function (t){
    return -1 * t * (t -2);
  },
  'in-out-quad' : function (t){
    t = t / 2;
    return (t * t) / 2;
  },
  'in-cubic' : function (t){
    return t * t * t;
  },
  'out-cubic' : function (t){
    t = t - 1;
    return t * t * t + 1;
  },
  'in-out-cubic' : function (t){
    t = t / 2;
    return (t * t * t) / 2;
  },
  'in-quart' : function (t){
    return t * t * t * t;
  },
  'out-quart' : function (t){
    t = t - 1;
    return -1 * (t * t * t * t - 1);
  },
  'in-out-quart' : function (t){
    t = t / 2;
    return (t * t * t * t) / 2;
  },
  'in-quint' : function (t){
    return t * t * t * t * t;
  },
  'out-quint' : function (t){
    t = t - 1;
    return (t * t * t * t * t + 1);
  },
  'in-out-quint' : function (t){
    t = t / 2;
    return (t * t * t * t * t) / 2;
  },
  'in-sine' : function (t){
    return -1 * Math.cos(t * (Math.PI / 2)) + 1;
  },
  'out-sine' : function (t){
    return Math.sin(t * (Math.PI / 2));
  },
  'in-out-sine' : function (t){
    return (Math.cos(Math.PI * t) - 1) / -2;
  },
  'in-expo' : function (t){
    return Math.pow(2, 10 * (t - 1));
  },
  'out-expo' : function (t){
    return -Math.pow(2, -10 * t) + 1;
  },
  'in-out-expo' : function (t){
    t = t / 2;
    return (Math.pow(2, 10 * (t - 1))) / 2;
  },
  'in-circ' : function (t){
    return -1 * (Math.sqrt(1 - t * t) - 1);
  },
  'out-circ' : function (t){
    t = t - 1;
    return Math.sqrt(1 - t * t);
  },
  'in-out-circ' : function (t){
    t = t / 2;
    return (Math.sqrt(1 - t * t) - 1) / -2;
  },
  'in-back' : function (t, overshoot){
    if (!overshoot && overshoot !== 0){
      overshoot = 1.70158;
    }
    return 1 * t * t * ( (overshoot + 1) * t - overshoot );
  },
  'out-back' : function (t, overshoot){
    if(!overshoot && overshoot !== 0){
      overshoot = 1.70158;
    }
    t = t - 1;
    return t * t * ((overshoot + 1) * t + overshoot) + 1;
  },
  'in-out-back' : function (t, overshoot){
    if(!overshoot && overshoot !== 0){
      overshoot = 1.70158;
    }
    t = t / 2;
    overshoot = overshoot * 1.525;
    return (t * t * ((overshoot + 1) * t - overshoot)) / 2;
  },
  'in-bounce' : function (t){
    return 1 - outBounce(1 - t);
  },
  'out-bounce' : function (t){
    if (t < 0.36363636363636365) {
      return 7.5625 * t * t;
    } else if (t < 0.7272727272727273) {
      t = t - 0.5454545454545454;
      return 7.5625 * t * t + 0.75;
    } else if (t < 0.9090909090909091) {
      t = t - 0.8181818181818182;
      return 7.5625 * t * t + 0.9375;
    } else {
      t = t - 0.9545454545454546;
      return 7.5625 * t * t + 0.984375;
    }
  },
  'in-out-bounce' : function (t){
    if (t < 0.5){
      return inBounce (t*2) * 0.5;
    }
    return outBounce ( t*2-1 ) * 0.5 + 1 * 0.5;
  },
  'in-elastic' : function (t, amplitude, period){
    var offset;
    // escape early for 0 and 1
    if (t === 0 || t === 1) {
      return t;
    }
    if (!period){
      period = 0.3;
    }
    if (!amplitude){
      amplitude = 1;
      offset = period / 4;
    } else {
      offset = period / (Math.PI * 2.0) * Math.asin(1 / amplitude);
    }
    t = t - 1;
    return -(amplitude * Math.pow(2,10 * t) * Math.sin(((t - offset) * (Math.PI * 2)) / period ));
  },
  'out-elastic' : function (t, amplitude, period){
    var offset;
    // escape early for 0 and 1
    if (t === 0 || t === 1) {
      return t;
    }
    if (!period){
      period = 0.3;
    }
    if (!amplitude){
      amplitude = 1;
      offset = period / 4;
    } else {
      offset = period / (Math.PI * 2.0) * Math.asin(1 / amplitude);
    }
    return amplitude * Math.pow(2,-10 * t) * Math.sin( (t - offset) * ( Math.PI * 2 ) / period ) + 1;
  },
  'in-out-elastic' : function (t, amplitude, period){
    var offset;
    t = (t / 2) - 1;
    // escape early for 0 and 1
    if (t === 0 || t === 1) {
      return t;
    }
    if (!period){
      period = 0.44999999999999996;
    }
    if (!amplitude){
      amplitude = 1;
      offset = period / 4;
    } else {
      offset = period / (Math.PI * 2.0) * Math.asin(1 / amplitude);
    }
    return (amplitude * Math.pow(2, 10 * t) * Math.sin((t - offset) * (Math.PI * 2) / period )) / -2;
  }
};

outBounce = fns['out-bounce'];
inBounce = fns['in-bounce'];

module.exports = fns;