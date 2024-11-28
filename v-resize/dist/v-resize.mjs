function n(t, s) {
  let e;
  e = new ResizeObserver((r) => {
    for (let i of r) {
      const o = i.contentRect;
      s(o, e);
    }
  }), e.observe(t);
}
const l = (t) => {
  t.directive("resize", {
    mounted(s, e) {
      n(s, e.value);
    }
  });
};
n.install = l;
export {
  n as default
};
