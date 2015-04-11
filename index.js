/*

*/

var is = require('gm-is');

var pennerFunctions = require('./penner-easing.js');

function AnimationEaser (){
  
  this._easer = pennerFunctions.linear;
  return this;

}

AnimationEaser.prototype = {
  using : function (preset){

    var fn = null, params = false, easer = false;

    if (is.string(preset)){
      usePreset.call(this, preset);
    }
    if (is['function'](preset)){
      fn = preset;
      useFunction.call(this, fn);
    }

    easer = this._easer;

    var easingFunctionProvider = function (fn){

      var t;

      if (is['function'](fn)){
        return function easingFunction (t){
          if (params){
            var args = [t].concat(params);
            return fn(easer.apply(fn, args), t);
          }
          return fn(easer(t), t);
        };
      } else if (is.number(fn)){
        t = fn;
        if (params){
          var args = [t].concat(params);
          return easer.apply(easer, args);
        }
        return easer(t);
      }
    };

    easingFunctionProvider.withParameters = function (){
      params = Array.prototype.slice.call(arguments, 0);
      return this;
    };

    return easingFunctionProvider;
  }
};

module.exports.Easer = AnimationEaser;
module.exports.createTween = function tweenCreator (start, end){
  var changeInValue = end - start;
  return function (currentTime){
    return changeInValue * currentTime + start;
  };
};

function useFunction (fn){
  this._easer = fn;
}

function usePreset (preset){
  if (pennerFunctions[preset]){
    this._easer = pennerFunctions[preset];
  }
}
