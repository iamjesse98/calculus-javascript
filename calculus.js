const h = 1/10000000
const derivate = (f, x = 0) => (f(x + h) - f(x))/h

const π = Math.PI,
e = Math.E,
sin = Math.sin,
cos = Math.cos,
tan = Math.tan

console.log(derivate(cos, π/2))