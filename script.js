// Generative art — multiple algorithmic approaches
// Each shape is a different mathematical concept

const algorithms = [
    // === LISSAJOUS CURVES ===
    // x = sin(a*t + delta), y = sin(b*t)
    { type: 'lissajous', a: 3, b: 2, delta: Math.PI / 2 },
    { type: 'lissajous', a: 3, b: 4, delta: Math.PI / 4 },
    { type: 'lissajous', a: 5, b: 4, delta: Math.PI / 2 },
    { type: 'lissajous', a: 5, b: 6, delta: Math.PI / 3 },
    { type: 'lissajous', a: 7, b: 6, delta: Math.PI / 2 },
    { type: 'lissajous', a: 9, b: 8, delta: Math.PI / 4 },
    { type: 'lissajous', a: 5, b: 3, delta: Math.PI / 6 },
    { type: 'lissajous', a: 7, b: 4, delta: Math.PI / 2 },
    { type: 'lissajous', a: 3, b: 5, delta: 0 },
    { type: 'lissajous', a: 4, b: 7, delta: Math.PI / 3 },
    { type: 'lissajous', a: 5, b: 7, delta: Math.PI / 2 },
    { type: 'lissajous', a: 7, b: 5, delta: Math.PI / 4 },
    { type: 'lissajous', a: 9, b: 7, delta: Math.PI / 6 },
    { type: 'lissajous', a: 11, b: 8, delta: Math.PI / 2 },

    // === ROSE CURVES ===
    // r = cos(k*theta), k = n/d determines petal count
    { type: 'rose', k: 2 },
    { type: 'rose', k: 3 },
    { type: 'rose', k: 4 },
    { type: 'rose', k: 5 },
    { type: 'rose', k: 7 },
    { type: 'rose', k: 1.5 },
    { type: 'rose', k: 2.5 },
    { type: 'rose', k: 3.5 },
    { type: 'rose', k: 5/3 },
    { type: 'rose', k: 7/3 },
    { type: 'rose', k: 7/4 },
    { type: 'rose', k: 5/4 },
    { type: 'rose', k: 7/5 },
    { type: 'rose', k: 8/3 },

    // === SPIROGRAPH (HYPOTROCHOIDS) ===
    // x = (R-r)*cos(t) + d*cos((R-r)/r * t)
    // y = (R-r)*sin(t) - d*sin((R-r)/r * t)
    { type: 'spirograph', R: 5, r: 3, d: 3 },
    { type: 'spirograph', R: 5, r: 3, d: 5 },
    { type: 'spirograph', R: 7, r: 3, d: 5 },
    { type: 'spirograph', R: 7, r: 2, d: 4 },
    { type: 'spirograph', R: 8, r: 3, d: 5 },
    { type: 'spirograph', R: 10, r: 3, d: 6 },
    { type: 'spirograph', R: 10, r: 7, d: 5 },
    { type: 'spirograph', R: 12, r: 5, d: 7 },
    { type: 'spirograph', R: 12, r: 7, d: 5 },
    { type: 'spirograph', R: 15, r: 7, d: 8 },
    { type: 'spirograph', R: 9, r: 4, d: 6 },
    { type: 'spirograph', R: 11, r: 4, d: 7 },

    // === HARMONOGRAPH ===
    // Damped pendulum patterns
    { type: 'harmonograph', freqX: 3, freqY: 2, ampX: 1, ampY: 1, phaseX: 0, phaseY: Math.PI/4, decay: 0.002 },
    { type: 'harmonograph', freqX: 2, freqY: 3, ampX: 1, ampY: 1, phaseX: Math.PI/3, phaseY: 0, decay: 0.003 },
    { type: 'harmonograph', freqX: 3, freqY: 4, ampX: 1, ampY: 1, phaseX: 0, phaseY: Math.PI/2, decay: 0.002 },
    { type: 'harmonograph', freqX: 5, freqY: 3, ampX: 1, ampY: 1, phaseX: Math.PI/6, phaseY: 0, decay: 0.003 },
    { type: 'harmonograph', freqX: 4, freqY: 5, ampX: 1, ampY: 1, phaseX: 0, phaseY: Math.PI/3, decay: 0.002 },
    { type: 'harmonograph', freqX: 7, freqY: 5, ampX: 1, ampY: 1, phaseX: Math.PI/4, phaseY: 0, decay: 0.004 },

    // === BÉZIER COMPOSITIONS ===
    // Shapes built from bezier curve control points
    { type: 'bezier', points: [{x:0,y:-0.8},{x:-0.7,y:-0.3},{x:-0.7,y:0.3},{x:0,y:0.8},{x:0.7,y:0.3},{x:0.7,y:-0.3}], closed: true },
    { type: 'bezier', points: [{x:0,y:-0.9},{x:-0.5,y:-0.5},{x:-0.8,y:0},{x:-0.5,y:0.5},{x:0,y:0.9},{x:0.5,y:0.5},{x:0.8,y:0},{x:0.5,y:-0.5}], closed: true },
    { type: 'bezier', points: [{x:0,y:-0.7},{x:-0.3,y:-0.7},{x:-0.8,y:-0.2},{x:-0.5,y:0.5},{x:0,y:0.8},{x:0.5,y:0.5},{x:0.8,y:-0.2},{x:0.3,y:-0.7}], closed: true },
    { type: 'bezier', points: [{x:0,y:-0.9},{x:-0.9,y:-0.3},{x:-0.4,y:0.3},{x:-0.7,y:0.9},{x:0,y:0.5},{x:0.7,y:0.9},{x:0.4,y:0.3},{x:0.9,y:-0.3}], closed: true },

    // === STRANGE ATTRACTOR OUTLINES ===
    // Simplified attractor patterns traced as outlines
    { type: 'attractor', style: 'clifford', a: -1.4, b: 1.6, c: 1.0, d: 0.7 },
    { type: 'attractor', style: 'clifford', a: 1.7, b: 1.7, c: 0.6, d: 1.2 },
    { type: 'attractor', style: 'clifford', a: -1.7, b: 1.3, c: -0.1, d: -1.2 },
    { type: 'attractor', style: 'clifford', a: 1.7, b: 1.7, c: 1.0, d: -0.5 },
    { type: 'attractor', style: 'clifford', a: -1.3, b: -1.3, c: -0.5, d: 1.5 },
];

function generateLissajous(params) {
    const { a, b, delta } = params;
    const points = 500;
    const pathPoints = [];
    let maxR = 0;

    for (let i = 0; i <= points; i++) {
        const t = (2 * Math.PI * i) / points;
        const x = Math.sin(a * t + delta);
        const y = Math.sin(b * t);
        maxR = Math.max(maxR, Math.abs(x), Math.abs(y));
        pathPoints.push({ x, y });
    }

    const scale = maxR > 0 ? 1 / maxR : 1;
    return pathPoints.map(p => ({ x: p.x * scale, y: p.y * scale }));
}

function generateRose(params) {
    const { k } = params;
    const points = 500;
    const pathPoints = [];
    let maxR = 0;

    // Determine how many loops we need
    const loops = k % 1 === 0 ? (k % 2 === 0 ? 1 : 1) : 2;
    const maxTheta = 2 * Math.PI * loops;

    for (let i = 0; i <= points; i++) {
        const theta = (maxTheta * i) / points;
        const r = Math.cos(k * theta);
        maxR = Math.max(maxR, Math.abs(r));
        pathPoints.push({ x: r * Math.cos(theta), y: r * Math.sin(theta) });
    }

    const scale = maxR > 0 ? 1 / maxR : 1;
    return pathPoints.map(p => ({ x: p.x * scale, y: p.y * scale }));
}

function generateSpirograph(params) {
    const { R, r, d } = params;
    const points = 800;
    const pathPoints = [];
    let maxR = 0;

    // Calculate the period (lcm of R and r)
    function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
    const period = (R * r) / gcd(R, r);
    const maxT = 2 * Math.PI * (period / R);

    for (let i = 0; i <= points; i++) {
        const t = (maxT * i) / points;
        const x = (R - r) * Math.cos(t) + d * Math.cos(((R - r) / r) * t);
        const y = (R - r) * Math.sin(t) - d * Math.sin(((R - r) / r) * t);
        maxR = Math.max(maxR, Math.abs(x), Math.abs(y));
        pathPoints.push({ x, y });
    }

    const scale = maxR > 0 ? 1 / maxR : 1;
    return pathPoints.map(p => ({ x: p.x * scale, y: p.y * scale }));
}

function generateHarmonograph(params) {
    const { freqX, freqY, ampX, ampY, phaseX, phaseY, decay } = params;
    const points = 600;
    const pathPoints = [];
    let maxR = 0;

    for (let i = 0; i <= points; i++) {
        const t = (i / points) * 20;
        const x = ampX * Math.sin(freqX * t + phaseX) * Math.exp(-decay * t);
        const y = ampY * Math.sin(freqY * t + phaseY) * Math.exp(-decay * t);
        maxR = Math.max(maxR, Math.abs(x), Math.abs(y));
        pathPoints.push({ x, y });
    }

    const scale = maxR > 0 ? 1 / maxR : 1;
    return pathPoints.map(p => ({ x: p.x * scale, y: p.y * scale }));
}

function generateBezier(params) {
    const { points: controlPoints, closed } = params;
    const pathPoints = [];
    const steps = 100;
    const n = controlPoints.length;

    for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        let x = 0, y = 0;
        for (let j = 0; j < n; j++) {
            const bernstein = bernsteinTerm(n - 1, j, t);
            x += controlPoints[j].x * bernstein;
            y += controlPoints[j].y * bernstein;
        }
        pathPoints.push({ x, y });
    }

    return pathPoints;
}

function bernsteinTerm(n, k, t) {
    return binomial(n, k) * Math.pow(t, k) * Math.pow(1 - t, n - k);
}

function binomial(n, k) {
    if (k === 0 || k === n) return 1;
    let result = 1;
    for (let i = 0; i < k; i++) {
        result = result * (n - i) / (i + 1);
    }
    return result;
}

function generateAttractor(params) {
    const { style, a, b, c, d } = params;
    const points = 2000;
    const pathPoints = [];
    let x = 0.1, y = 0.1;
    let maxR = 0;

    // Skip first 100 points (transient)
    for (let i = 0; i < 100; i++) {
        if (style === 'clifford') {
            const newX = Math.sin(a * y) + c * Math.cos(a * x);
            const newY = Math.sin(b * x) + d * Math.cos(b * y);
            x = newX;
            y = newY;
        }
    }

    for (let i = 0; i <= points; i++) {
        if (style === 'clifford') {
            const newX = Math.sin(a * y) + c * Math.cos(a * x);
            const newY = Math.sin(b * x) + d * Math.cos(b * y);
            x = newX;
            y = newY;
        }
        maxR = Math.max(maxR, Math.abs(x), Math.abs(y));
        pathPoints.push({ x, y });
    }

    const scale = maxR > 0 ? 0.8 / maxR : 1;
    return pathPoints.map(p => ({ x: p.x * scale, y: p.y * scale }));
}

function generatePath(algo) {
    let pathPoints;

    switch (algo.type) {
        case 'lissajous':
            pathPoints = generateLissajous(algo);
            break;
        case 'rose':
            pathPoints = generateRose(algo);
            break;
        case 'spirograph':
            pathPoints = generateSpirograph(algo);
            break;
        case 'harmonograph':
            pathPoints = generateHarmonograph(algo);
            break;
        case 'bezier':
            pathPoints = generateBezier(algo);
            break;
        case 'attractor':
            pathPoints = generateAttractor(algo);
            break;
        default:
            // Fallback circle
            pathPoints = [];
            for (let i = 0; i <= 100; i++) {
                const theta = (2 * Math.PI * i) / 100;
                pathPoints.push({ x: Math.cos(theta), y: Math.sin(theta) });
            }
    }

    if (!pathPoints || pathPoints.length < 3) {
        // Fallback circle
        pathPoints = [];
        for (let i = 0; i <= 100; i++) {
            const theta = (2 * Math.PI * i) / 100;
            pathPoints.push({ x: Math.cos(theta), y: Math.sin(theta) });
        }
    }

    let d = `M ${pathPoints[0].x.toFixed(4)} ${pathPoints[0].y.toFixed(4)}`;
    for (let i = 1; i < pathPoints.length; i++) {
        d += ` L ${pathPoints[i].x.toFixed(4)} ${pathPoints[i].y.toFixed(4)}`;
    }
    d += ' Z';
    return d;
}

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const shuffled = shuffle(algorithms);
let currentIndex = 0;
const shapeElement = document.getElementById('shape');

// Set initial shape
shapeElement.setAttribute('d', generatePath(shuffled[0]));

let tapLocked = false;
let lastTouchTime = 0;

function handleTap() {
    if (tapLocked) return;
    tapLocked = true;

    currentIndex = (currentIndex + 1) % shuffled.length;

    if (currentIndex === 0) {
        const newOrder = shuffle(algorithms);
        shuffled.length = 0;
        newOrder.forEach(s => shuffled.push(s));
    }

    shapeElement.setAttribute('d', generatePath(shuffled[currentIndex]));

    setTimeout(() => { tapLocked = false; }, 100);
}

document.addEventListener('touchend', (e) => {
    e.preventDefault();
    e.stopPropagation();
    lastTouchTime = Date.now();
    handleTap();
}, { passive: false, capture: true });

document.addEventListener('click', () => {
    if (Date.now() - lastTouchTime < 500) return;
    handleTap();
});
