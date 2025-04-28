"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
function default_1(options) {
    return new Promise((resolve) => {
        onMounted(() => {
            const file = document.querySelector(options.el);
            // console.log(file)
            file.onload = () => {
                resolve({
                    Baseurl: Base64(file)
                });
            };
        });
        const Base64 = (el) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = el.width;
            canvas.height = el.height;
            ctx.drawImage(el, 0, 0, canvas.width, canvas.height);
            console.log(el.width);
            return canvas.toDataURL('image/png');
        };
    });
}
