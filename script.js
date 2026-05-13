// Architectural superformula shapes
// Arches, vaults, columns, buttresses, tracery, rose windows

const shapes = [
    // Pointed arches (Gothic)
    { m: 2, n1: 1.0, n2: 0.5, n3: 0.5, a: 1, b: 1 },
    { m: 2, n1: 1.5, n2: 0.3, n3: 0.3, a: 1, b: 1 },
    { m: 2, n1: 2.0, n2: 0.5, n3: 0.5, a: 1, b: 1 },
    { m: 2, n1: 1.0, n2: 0.3, n3: 0.3, a: 1, b: 1 },
    { m: 2, n1: 1.2, n2: 0.4, n3: 0.4, a: 1, b: 1 },
    { m: 2, n1: 0.8, n2: 0.3, n3: 0.3, a: 1, b: 1 },

    // Rounded arches (Romanesque)
    { m: 2, n1: 2.0, n2: 2.0, n3: 2.0, a: 1, b: 1 },
    { m: 2, n1: 3.0, n2: 3.0, n3: 3.0, a: 1, b: 1 },
    { m: 2, n1: 4.0, n2: 4.0, n3: 4.0, a: 1, b: 1 },
    { m: 2, n1: 5.0, n2: 5.0, n3: 5.0, a: 1, b: 1 },
    { m: 2, n1: 3.0, n2: 2.0, n3: 2.0, a: 1, b: 1 },
    { m: 2, n1: 4.0, n2: 3.0, n3: 3.0, a: 1, b: 1 },

    // Elongated arches (nave sections)
    { m: 2, n1: 1.0, n2: 0.5, n3: 0.5, a: 0.6, b: 1.4 },
    { m: 2, n1: 2.0, n2: 2.0, n3: 2.0, a: 0.5, b: 1.5 },
    { m: 2, n1: 1.5, n2: 0.5, n3: 0.5, a: 0.7, b: 1.3 },
    { m: 2, n1: 1.0, n2: 0.5, n3: 0.5, a: 0.5, b: 1.5 },
    { m: 2, n1: 3.0, n2: 3.0, n3: 3.0, a: 0.6, b: 1.4 },

    // Vault cross-sections
    { m: 4, n1: 1.0, n2: 0.5, n3: 0.5, a: 1, b: 1 },
    { m: 4, n1: 1.5, n2: 0.5, n3: 0.5, a: 1, b: 1 },
    { m: 4, n1: 2.0, n2: 1.0, n3: 1.0, a: 1, b: 1 },
    { m: 4, n1: 1.0, n2: 1.0, n3: 1.0, a: 1, b: 1 },
    { m: 4, n1: 0.8, n2: 0.5, n3: 0.5, a: 1, b: 1 },

    // Ribbed vaults
    { m: 6, n1: 1.0, n2: 0.5, n3: 0.5, a: 1, b: 1 },
    { m: 6, n1: 1.5, n2: 0.5, n3: 0.5, a: 1, b: 1 },
    { m: 6, n1: 2.0, n2: 1.0, n3: 1.0, a: 1, b: 1 },
    { m: 8, n1: 1.0, n2: 0.5, n3: 0.5, a: 1, b: 1 },
    { m: 8, n1: 1.5, n2: 0.5, n3: 0.5, a: 1, b: 1 },

    // Column profiles
    { m: 4, n1: 3.0, n2: 3.0, n3: 3.0, a: 0.6, b: 1.4 },
    { m: 4, n1: 4.0, n2: 4.0, n3: 4.0, a: 0.5, b: 1.5 },
    { m: 6, n1: 3.0, n2: 3.0, n3: 3.0, a: 0.7, b: 1.3 },
    { m: 4, n1: 2.0, n2: 2.0, n3: 2.0, a: 0.6, b: 1.4 },

    // Apse shapes
    { m: 3, n1: 1.0, n2: 0.5, n3: 0.5, a: 1, b: 1 },
    { m: 3, n1: 2.0, n2: 1.0, n3: 1.0, a: 1, b: 1 },
    { m: 3, n1: 1.5, n2: 0.5, n3: 0.5, a: 0.8, b: 1.2 },
    { m: 3, n1: 1.0, n2: 0.5, n3: 0.5, a: 0.6, b: 1.4 },

    // Buttress profiles
    { m: 4, n1: 0.5, n2: 0.5, n3: 0.5, a: 0.5, b: 1.5 },
    { m: 4, n1: 0.7, n2: 0.3, n3: 0.3, a: 0.6, b: 1.4 },
    { m: 4, n1: 0.6, n2: 0.4, n3: 0.4, a: 0.5, b: 1.5 },

    // Dome sections
    { m: 2, n1: 3.0, n2: 2.0, n3: 2.0, a: 1, b: 1 },
    { m: 2, n1: 4.0, n2: 3.0, n3: 3.0, a: 0.8, b: 1.2 },
    { m: 2, n1: 5.0, n2: 4.0, n3: 4.0, a: 0.7, b: 1.3 },
    { m: 2, n1: 3.0, n2: 2.0, n3: 2.0, a: 0.6, b: 1.4 },

    // Tracery patterns
    { m: 6, n1: 0.8, n2: 0.5, n3: 0.5, a: 1, b: 1 },
    { m: 8, n1: 0.8, n2: 0.5, n3: 0.5, a: 1, b: 1 },
    { m: 10, n1: 0.8, n2: 0.5, n3: 0.5, a: 1, b: 1 },
    { m: 12, n1: 0.8, n2: 0.5, n3: 0.5, a: 1, b: 1 },

    // Rose window approximations
    { m: 8, n1: 2.0, n2: 2.0, n3: 2.0, a: 1, b: 1 },
    { m: 10, n1: 2.0, n2: 2.0, n3: 2.0, a: 1, b: 1 },
    { m: 12, n1: 2.0, n2: 2.0, n3: 2.0, a: 1, b: 1 },
    { m: 6, n1: 1.5, n2: 1.5, n3: 1.5, a: 1, b: 1 },

    // Mixed architectural
    { m: 5, n1: 1.0, n2: 0.5, n3: 0.5, a: 1, b: 1 },
    { m: 5, n1: 2.0, n2: 1.0, n3: 1.0, a: 1, b: 1 },
    { m: 7, n1: 1.0, n2: 0.5, n3: 0.5, a: 1, b: 1 },
    { m: 7, n1: 2.0, n2: 1.0, n3: 1.0, a: 1, b: 1 },
    { m: 5, n1: 1.5, n2: 0.5, n3: 0.5, a: 0.7, b: 1.3 },
    { m: 7, n1: 1.5, n2: 0.5, n3: 0.5, a: 0.8, b: 1.2 },

    // More elongated forms
    { m: 2, n1: 1.0, n2: 0.5, n3: 0.5, a: 0.5, b: 1.5 },
    { m: 2, n1: 2.0, n2: 2.0, n3: 2.0, a: 0.4, b: 1.6 },
    { m: 3, n1: 1.0, n2: 0.5, n3: 0.5, a: 0.6, b: 1.4 },
    { m: 4, n1: 1.5, n2: 0.5, n3: 0.5, a: 0.5, b: 1.5 },
];

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const shuffled = shuffle(shapes);
let currentIndex = 0;
const shapeElement = document.getElementById('shape');

function superformula(theta, params) {
    const { m, n1, n2, n3, a, b } = params;
    const cosVal = Math.cos(m * theta / 4) / a;
    const sinVal = Math.sin(m * theta / 4) / b;
    const t1 = Math.pow(Math.abs(cosVal), n2);
    const t2 = Math.pow(Math.abs(sinVal), n3);
    const sum = t1 + t2;
    if (sum === 0) return 1;
    const r = Math.pow(sum, -1 / n1);
    if (!isFinite(r) || isNaN(r)) return 1;
    return r;
}

function generatePath(params) {
    const points = 360;
    const pathPoints = [];
    let maxR = 0;

    for (let i = 0; i <= points; i++) {
        const theta = (2 * Math.PI * i) / points;
        const r = superformula(theta, params);
        maxR = Math.max(maxR, r);
        pathPoints.push({ x: r * Math.cos(theta), y: r * Math.sin(theta) });
    }

    const scale = maxR > 0 ? 1 / maxR : 1;
    const normalized = pathPoints.map(p => ({
        x: p.x * scale,
        y: p.y * scale
    }));

    let d = `M ${normalized[0].x.toFixed(4)} ${normalized[0].y.toFixed(4)}`;
    for (let i = 1; i < normalized.length; i++) {
        d += ` L ${normalized[i].x.toFixed(4)} ${normalized[i].y.toFixed(4)}`;
    }
    d += ' Z';
    return d;
}

shapeElement.setAttribute('d', generatePath(shuffled[0]));

let tapLocked = false;
let lastTouchTime = 0;

function handleTap() {
    if (tapLocked) return;
    tapLocked = true;

    currentIndex = (currentIndex + 1) % shuffled.length;

    if (currentIndex === 0) {
        const newOrder = shuffle(shapes);
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
