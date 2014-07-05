var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

require('./raw-penner-functions.js');

var easers = require('../penner-easing.js');

easingModule = require('../index.js');

describe('Animation Easing module', function (){

  var Easer = easingModule.Easer;

  describe('Penner Function Refactors', function (){

    /*

      These tests are not to test penning's easing functions
      but rather to test that the refactored functions work
      identically to the penner originals when used with
      the normalised input variables b = 0, c = 1 and d = 1.

      This is all of course assuming that Actionscript does not 
      have any unexpected precedence rules that mean the calculations
      are completely screwed up when run in javascript. The only 
      changes I've made to the actionscript code in the
      'raw penner functions' module is to get rid of 
      all uses of the t/=d operator (t = t / d) etc. 

    */

    var b = 0, c = 1, d = 1

    it('can do linear easing', function (){

      var e = easers.linear;

      expect(e(0.5)).to.equal(Math.linearTween(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.linearTween(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.linearTween(0.8, b, c, d));

    });


    it('can do in-quad', function (){

      var e = easers['in-quad'];

      expect(e(0.5)).to.equal(Math.easeInQuad(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeInQuad(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeInQuad(0.8, b, c, d));

    });  

    it('can do out-quad', function (){

      var e = easers['out-quad'];

      expect(e(0.5)).to.equal(Math.easeOutQuad(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeOutQuad(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeOutQuad(0.8, b, c, d));

    });  

    it('can do in-out-quad', function (){

      var e = easers['in-out-quad'];

      expect(e(0.5)).to.equal(Math.easeInOutQuad(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeInOutQuad(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeInOutQuad(0.8, b, c, d));

    }); 

    it('can do in-cubic', function (){

      var e = easers['in-cubic'];

      expect(e(0.5)).to.equal(Math.easeInCubic(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeInCubic(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeInCubic(0.8, b, c, d));

    }); 

    it('can do out-cubic', function (){

      var e = easers['out-cubic'];

      expect(e(0.5)).to.equal(Math.easeOutCubic(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeOutCubic(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeOutCubic(0.8, b, c, d));

    });

    it('can do in-out-cubic', function (){

      var e = easers['in-out-cubic'];

      expect(e(0.5)).to.equal(Math.easeInOutCubic(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeInOutCubic(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeInOutCubic(0.8, b, c, d));

    });

    it('can do in-quart', function (){

      var e = easers['in-quart'];

      expect(e(0.5)).to.equal(Math.easeInQuart(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeInQuart(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeInQuart(0.8, b, c, d));

    }); 

    it('can do out-quart', function (){

      var e = easers['out-quart'];

      expect(e(0.5)).to.equal(Math.easeOutQuart(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeOutQuart(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeOutQuart(0.8, b, c, d));

    });

    it('can do in-out-quart', function (){

      var e = easers['in-out-quart'];

      expect(e(0.5)).to.equal(Math.easeInOutQuart(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeInOutQuart(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeInOutQuart(0.8, b, c, d));

    });

    it('can do in-quint', function (){

      var e = easers['in-quint'];

      expect(e(0.5)).to.equal(Math.easeInQuint(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeInQuint(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeInQuint(0.8, b, c, d));

    }); 

    it('can do out-quint', function (){

      var e = easers['out-quint'];

      expect(e(0.5)).to.equal(Math.easeOutQuint(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeOutQuint(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeOutQuint(0.8, b, c, d));

    });

    it('can do in-out-quint', function (){

      var e = easers['in-out-quint'];

      expect(e(0.5)).to.equal(Math.easeInOutQuint(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeInOutQuint(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeInOutQuint(0.8, b, c, d));

    });

    it('can do in-sine', function (){

      var e = easers['in-sine'];

      expect(e(0.5)).to.equal(Math.easeInSine(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeInSine(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeInSine(0.8, b, c, d));

    }); 

    it('can do out-sine', function (){

      var e = easers['out-sine'];

      expect(e(0.5)).to.equal(Math.easeOutSine(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeOutSine(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeOutSine(0.8, b, c, d));

    });

    it('can do in-out-sine', function (){

      var e = easers['in-out-sine'];

      expect(e(0.5)).to.equal(Math.easeInOutSine(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeInOutSine(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeInOutSine(0.8, b, c, d));

    });
    it('can do in-expo', function (){

      var e = easers['in-expo'];

      expect(e(0.5)).to.equal(Math.easeInExpo(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeInExpo(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeInExpo(0.8, b, c, d));

    }); 

    it('can do out-expo', function (){

      var e = easers['out-expo'];

      expect(e(0.5)).to.equal(Math.easeOutExpo(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeOutExpo(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeOutExpo(0.8, b, c, d));

    });

    it('can do in-out-expo', function (){

      var e = easers['in-out-expo'];

      expect(e(0.5)).to.equal(Math.easeInOutExpo(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeInOutExpo(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeInOutExpo(0.8, b, c, d));

    });

    it('can do in-circ', function (){

      var e = easers['in-circ'];

      expect(e(0.5)).to.equal(Math.easeInCirc(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeInCirc(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeInCirc(0.8, b, c, d));

    }); 

    it('can do out-circ', function (){

      var e = easers['out-circ'];

      expect(e(0.5)).to.equal(Math.easeOutCirc(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeOutCirc(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeOutCirc(0.8, b, c, d));

    });

    it('can do in-out-circ', function (){

      var e = easers['in-out-circ'];

      expect(e(0.5)).to.equal(Math.easeInOutCirc(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeInOutCirc(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeInOutCirc(0.8, b, c, d));

    });

    it('can do in-back', function (){

      var e = easers['in-back'];

      // test with default 'overshoot' value
      expect(e(0.5)).to.equal(Math.easeInBack(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeInBack(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeInBack(0.8, b, c, d));

      // with custom 'overshoot' value
      expect(e(0.5, 2.5)).to.equal(Math.easeInBack(0.5, b, c, d, 2.5));
      expect(e(0.2, 2.5)).to.equal(Math.easeInBack(0.2, b, c, d, 2.5));
      expect(e(0.8, 2.5)).to.equal(Math.easeInBack(0.8, b, c, d, 2.5));

    }); 

    it('can do out-back', function (){

      var e = easers['out-back'];

      expect(e(0.5)).to.equal(Math.easeOutBack(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeOutBack(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeOutBack(0.8, b, c, d));

    });

    it('can do in-out-back', function (){

      var e = easers['in-out-back'];

      expect(e(0.5)).to.equal(Math.easeInOutBack(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeInOutBack(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeInOutBack(0.8, b, c, d));

    });

    it('can do in-bounce', function (){

      var e = easers['in-bounce'];

      expect(e(0.5)).to.equal(Math.easeInBounce(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeInBounce(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeInBounce(0.8, b, c, d));

    }); 

    it('can do out-bounce', function (){

      var e = easers['out-bounce'];

      expect(e(0.5)).to.equal(Math.easeOutBounce(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeOutBounce(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeOutBounce(0.8, b, c, d));

    });

    it('can do in-out-bounce', function (){

      var e = easers['in-out-bounce'];

      expect(e(0.5)).to.equal(Math.easeInOutBounce(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeInOutBounce(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeInOutBounce(0.8, b, c, d));

    });

    it('can do in-elastic', function (){

      var e = easers['in-elastic'];

      expect(e(0.5)).to.equal(Math.easeInElastic(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeInElastic(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeInElastic(0.8, b, c, d));

      expect(e(0.5, 1.5, 0.8)).to.equal(Math.easeInElastic(0.5, b, c, d, 1.5, 0.8));
      expect(e(0.2, 1.5, 0.8)).to.equal(Math.easeInElastic(0.2, b, c, d, 1.5, 0.8));
      expect(e(0.8, 1.5, 0.8)).to.equal(Math.easeInElastic(0.8, b, c, d, 1.5, 0.8));

    }); 

    it('can do out-elastic', function (){

      var e = easers['out-elastic'];

      expect(e(0.5)).to.equal(Math.easeOutElastic(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeOutElastic(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeOutElastic(0.8, b, c, d));

      expect(e(0.5, 1.5, 0.8)).to.equal(Math.easeOutElastic(0.5, b, c, d, 1.5, 0.8));
      expect(e(0.2, 1.5, 0.8)).to.equal(Math.easeOutElastic(0.2, b, c, d, 1.5, 0.8));
      expect(e(0.8, 1.5, 0.8)).to.equal(Math.easeOutElastic(0.8, b, c, d, 1.5, 0.8));

    });

    it('can do in-out-elastic', function (){

      var e = easers['in-out-elastic'];

      expect(e(0.5)).to.equal(Math.easeInOutElastic(0.5, b, c, d));
      expect(e(0.2)).to.equal(Math.easeInOutElastic(0.2, b, c, d));
      expect(e(0.8)).to.equal(Math.easeInOutElastic(0.8, b, c, d));

      expect(e(0.5, 1.5, 0.8)).to.equal(Math.easeInOutElastic(0.5, b, c, d, 1.5, 0.8));
      expect(e(0.2, 1.5, 0.8)).to.equal(Math.easeInOutElastic(0.2, b, c, d, 1.5, 0.8));
      expect(e(0.8, 1.5, 0.8)).to.equal(Math.easeInOutElastic(0.8, b, c, d, 1.5, 0.8));

    });
  });

  describe('Easing module', function (){

    it('passes a basic sanity checking test', function (){

      expect(new Easer()).to.be.an('object');

    });

    it('generates a linear easer which accepts a callback and passes the eased value to it', function(){

      var ease = new Easer().using("linear");

      expect(ease).to.be.a('function');

      var easingFunction = ease(function(t){

        expect(t).to.equal(0.5);

      });

      easingFunction(0.5);

    });

    it('generates a linear easer which returns value of callback returned value', function(){

      var ease = new Easer().using("linear");

      expect(ease).to.be.a('function');

      var easingFunction = ease(function(t){

        return t;

      });

      expect(easingFunction(0)).to.equal(0);
      expect(easingFunction(1)).to.equal(1);
      expect(easingFunction(0.5)).to.equal(0.5);

    });

    it('passes the original time value as well as the eased value', function(){

      var ease = new Easer().using("in-expo");

      var easingFunction = ease(function(eased, original){

        expect(original).to.equal(0.5);

      });

      easingFunction(0.5);

    });

    it('has a using() method that accepts a function', function(){

      var ease = new Easer().using(function (t){ return 1 - t; });

      expect(ease).to.be.a('function');

      var easingFunction = ease(function (t){

        expect(t).to.equal(0.25);

      });

      easingFunction(0.75);

    });

    it('can bind custom parameters to custom/advanced easing functions', function (){

      var ease = new Easer()
                  .using(function (t, factor){

                    return t * factor;

                  })
                  .withParameters(2);

      var easingFunction = ease(function(t){

        expect(t).to.equal(1);

      });

      easingFunction(0.5);


    });

    it('can successfully use easing functions that require additional parameters', function (){

      // this is almost identical to the above test, but it confirms that this API allows 
      // additional parameters to be passed to one of the built in easing functions

      var ease = new Easer()
            .using('in-back')
            .withParameters(2.5);

      var easingFunction = ease(function(t){

        expect(t).to.equal(Math.easeInBack(0.8, 0, 1, 1, 2.5));

      });

      easingFunction(0.8);

      ease = new Easer()
            .using('in-elastic')
            .withParameters(1.5, 0.8);

      var easingFunction = ease(function(t){

        expect(t).to.equal(Math.easeInElastic(0.8, 0, 1, 1, 1.5, 0.8));

      });

      easingFunction(0.8);

    });

  })

 

});
