(function() {

    var vueAttr = {};

    vueAttr.install = function(Vue) {
        Vue.directive('attr', function(el, binding) {
            if(binding.arg) {
                if(el) {
                    el.setAttribute(binding.arg, binding.value || binding.expression);
                }
            } else {
                console.error('[vue-attr] attribute type argument is required.');
            }
        });
    }

    if(typeof exports == 'object') {
        module.exports = vueAttr;
    } else if(typeof define == 'function' && define.amd) {
        define([], function() {
            return vueAttr;
        });
    } else if(window.Vue) {
        window.VueAttr = vueAttr;
        Vue.use(vueAttr);
    }

})();