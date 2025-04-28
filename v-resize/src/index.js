"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function useResize(el, callback) {
    let resize;
    resize = new ResizeObserver((entries) => {
        for (let entry of entries) {
            const cr = entry.contentRect;
            callback(cr, resize);
        }
    });
    resize.observe(el);
}
const install = (app) => {
    app.directive('resize', {
        mounted(el, binding) {
            useResize(el, binding.value);
        }
    });
};
useResize.install = install;
exports.default = useResize;
