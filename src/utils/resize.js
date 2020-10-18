import elementResizeDector from 'element-resize-detector';
const erd = elementResizeDector();
const resizeStack = erd;

export default {
    bind(el, binding) {
        el._handleResize = function(el){
            binding.value({
                el: el,
                width: el.offsetWidth,
                height: el.offsetHeight
            });
        };
        erd.listenTo(el, el._handleResize);
    },
    unbind(el) {
        erd.removeListener(el, el._handleResize);
    }
};
export {
    resizeStack
};