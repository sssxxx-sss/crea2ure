// Architectural silhouettes - SVG paths
// Each shape is a recognizable architectural element

const shapes = [
    // === ARCHES ===

    // Gothic pointed arch (tall)
    "M -0.35 1 L -0.35 0.1 C -0.35 -0.3 -0.15 -0.7 0 -0.8 C 0.15 -0.7 0.35 -0.3 0.35 0.1 L 0.35 1 Z",

    // Gothic pointed arch (wide)
    "M -0.6 1 L -0.6 0.2 C -0.6 -0.1 -0.3 -0.5 0 -0.55 C 0.3 -0.5 0.6 -0.1 0.6 0.2 L 0.6 1 Z",

    // Romanesque rounded arch
    "M -0.5 1 L -0.5 0 C -0.5 -0.5 0 -0.5 0 -0.5 C 0 -0.5 0.5 -0.5 0.5 0 L 0.5 1 Z",

    // Romanesque arch (wide)
    "M -0.7 1 L -0.7 0.1 C -0.7 -0.4 0 -0.4 0 -0.4 C 0 -0.4 0.7 -0.4 0.7 0.1 L 0.7 1 Z",

    // Ogee arch (S-curve)
    "M -0.4 1 C -0.4 0.4 -0.2 -0.3 0 -0.5 C 0.2 -0.3 0.4 0.4 0.4 1 Z",

    // Horseshoe arch
    "M -0.5 1 C -0.5 0.3 -0.6 -0.3 0 -0.6 C 0.6 -0.3 0.5 0.3 0.5 1 Z",

    // Depressed arch
    "M -0.7 1 L -0.7 0.3 C -0.7 0 -0.35 -0.2 0 -0.25 C 0.35 -0.2 0.7 0 0.7 0.3 L 0.7 1 Z",

    // Tudor arch
    "M -0.5 1 L -0.5 0.2 C -0.5 -0.1 -0.3 -0.2 0 -0.5 C 0.3 -0.2 0.5 -0.1 0.5 0.2 L 0.5 1 Z",

    // Trefoil arch
    "M -0.4 1 L -0.4 0 C -0.4 -0.2 -0.2 -0.3 0 -0.5 C 0.2 -0.3 0.4 -0.2 0.4 0 L 0.4 1 Z",

    // Parabolic arch
    "M -0.6 1 C -0.6 0.2 -0.3 -0.5 0 -0.6 C 0.3 -0.5 0.6 0.2 0.6 1 Z",

    // === COLUMNS ===

    // Doric column
    "M -0.3 1 L -0.3 0.9 L -0.25 0.9 L -0.2 0.15 L -0.3 0.1 L -0.35 0.1 L -0.35 0.05 L 0.35 0.05 L 0.35 0.1 L 0.3 0.1 L 0.2 0.15 L 0.25 0.9 L 0.3 0.9 L 0.3 1 Z",

    // Simple column
    "M -0.3 1 L -0.3 0.9 L -0.2 0.9 L -0.15 0.1 L -0.3 0.05 L 0.3 0.05 L 0.15 0.1 L 0.2 0.9 L 0.3 0.9 L 0.3 1 Z",

    // Ionic column (with volutes suggested)
    "M -0.3 1 L -0.3 0.85 L -0.25 0.85 L -0.15 0.15 L -0.35 0.05 L -0.35 -0.05 L -0.2 -0.1 L 0.2 -0.1 L 0.35 -0.05 L 0.35 0.05 L 0.15 0.15 L 0.25 0.85 L 0.3 0.85 L 0.3 1 Z",

    // Tall thin column
    "M -0.15 1 L -0.15 0.85 L -0.1 0.85 L -0.08 0.1 L -0.15 0.05 L 0.15 0.05 L 0.08 0.1 L 0.1 0.85 L 0.15 0.85 L 0.15 1 Z",

    // Square pillar
    "M -0.35 1 L -0.35 0.05 L 0.35 0.05 L 0.35 1 Z",

    // Column with base
    "M -0.35 1 L -0.35 0.9 L -0.2 0.9 L -0.15 0.1 L -0.25 0.05 L 0.25 0.05 L 0.15 0.1 L 0.2 0.9 L 0.35 0.9 L 0.35 1 Z",

    // Twin columns
    "M -0.45 1 L -0.45 0.85 L -0.35 0.85 L -0.3 0.1 L -0.4 0.05 L -0.15 0.05 L -0.2 0.1 L -0.15 0.85 L -0.05 0.85 L -0.05 1 Z M 0.05 1 L 0.05 0.85 L 0.15 0.85 L 0.2 0.1 L 0.15 0.05 L 0.4 0.05 L 0.3 0.1 L 0.35 0.85 L 0.45 0.85 L 0.45 1 Z",

    // === WINDOWS ===

    // Lancet window (tall narrow)
    "M -0.15 1 L -0.15 0 C -0.15 -0.3 0 -0.6 0 -0.6 C 0 -0.6 0.15 -0.3 0.15 0 L 0.15 1 Z",

    // Rose window
    "M 0 -0.8 C 0.45 -0.8 0.8 -0.45 0.8 0 C 0.8 0.45 0.45 0.8 0 0.8 C -0.45 0.8 -0.8 0.45 -0.8 0 C -0.8 -0.45 -0.45 -0.8 0 -0.8 Z M 0 -0.5 L 0 0.5 M -0.5 0 L 0.5 0 M -0.35 -0.35 L 0.35 0.35 M 0.35 -0.35 L -0.35 0.35",

    // Paired lancet windows
    "M -0.45 1 L -0.45 0.1 C -0.45 -0.1 -0.35 -0.3 -0.25 -0.4 C -0.15 -0.3 -0.05 -0.1 -0.05 0.1 L -0.05 1 Z M 0.05 1 L 0.05 0.1 C 0.05 -0.1 0.15 -0.3 0.25 -0.4 C 0.35 -0.3 0.45 -0.1 0.45 0.1 L 0.45 1 Z",

    // Circular window
    "M 0 -0.6 C 0.33 -0.6 0.6 -0.33 0.6 0 C 0.6 0.33 0.33 0.6 0 0.6 C -0.33 0.6 -0.6 0.33 -0.6 0 C -0.6 -0.33 -0.33 -0.6 0 -0.6 Z",

    // Triple lancet
    "M -0.55 1 L -0.55 0.1 C -0.55 -0.1 -0.48 -0.25 -0.4 -0.35 C -0.32 -0.25 -0.25 -0.1 -0.25 0.1 L -0.25 1 Z M -0.15 1 L -0.15 0 C -0.15 -0.2 0 -0.4 0 -0.4 C 0 -0.4 0.15 -0.2 0.15 0 L 0.15 1 Z M 0.25 1 L 0.25 0.1 C 0.25 -0.1 0.32 -0.25 0.4 -0.35 C 0.48 -0.25 0.55 -0.1 0.55 0.1 L 0.55 1 Z",

    // Diocletian window (semicircular)
    "M -0.6 1 L -0.6 0.2 C -0.6 -0.2 -0.3 -0.5 0 -0.5 C 0.3 -0.5 0.6 -0.2 0.6 0.2 L 0.6 1 Z M -0.5 0.2 L 0.5 0.2",

    // === FLOOR PLANS ===

    // Simple nave
    "M -0.2 -0.8 L -0.2 0.6 L -0.5 0.6 L -0.5 1 L 0.5 1 L 0.5 0.6 L 0.2 0.6 L 0.2 -0.8 Z",

    // Cruciform plan
    "M -0.15 -0.8 L -0.15 -0.2 L -0.6 -0.2 L -0.6 0.2 L -0.15 0.2 L -0.15 0.8 L 0.15 0.8 L 0.15 0.2 L 0.6 0.2 L 0.6 -0.2 L 0.15 -0.2 L 0.15 -0.8 Z",

    // Apse (semicircular)
    "M -0.3 1 L -0.3 0 C -0.3 -0.4 0 -0.6 0 -0.6 C 0 -0.6 0.3 -0.4 0.3 0 L 0.3 1 Z",

    // Octagonal plan
    "M 0 -0.8 L 0.55 -0.55 L 0.8 0 L 0.55 0.55 L 0 0.8 L -0.55 0.55 L -0.8 0 L -0.55 -0.55 Z",

    // Circular plan
    "M 0 -0.7 C 0.39 -0.7 0.7 -0.39 0.7 0 C 0.7 0.39 0.39 0.7 0 0.7 C -0.39 0.7 -0.7 0.39 -0.7 0 C -0.7 -0.39 -0.39 -0.7 0 -0.7 Z",

    // Nave with aisles
    "M -0.5 1 L -0.5 0.8 L -0.2 0.8 L -0.2 -0.6 L 0.2 -0.6 L 0.2 0.8 L 0.5 0.8 L 0.5 1 Z",

    // === VAULTS ===

    // Barrel vault cross-section
    "M -0.6 1 L -0.6 0 C -0.6 -0.5 0 -0.5 0 -0.5 C 0 -0.5 0.6 -0.5 0.6 0 L 0.6 1 Z",

    // Groin vault
    "M -0.6 1 L -0.6 0.2 C -0.6 -0.2 -0.3 -0.4 0 -0.5 C 0.3 -0.4 0.6 -0.2 0.6 0.2 L 0.6 1 Z M -0.6 0.2 L 0.6 0.2",

    // Ribbed vault (simplified)
    "M -0.6 1 L -0.6 0.1 C -0.6 -0.3 -0.3 -0.5 0 -0.55 C 0.3 -0.5 0.6 -0.3 0.6 0.1 L 0.6 1 Z M 0 0.1 L 0 -0.55 M -0.3 0.1 L 0 -0.3 M 0.3 0.1 L 0 -0.3",

    // Dome on drum
    "M -0.5 1 L -0.5 0.3 C -0.5 -0.2 0 -0.6 0 -0.6 C 0 -0.6 0.5 -0.2 0.5 0.3 L 0.5 1 Z",

    // Pointed vault
    "M -0.6 1 L -0.6 0.3 C -0.6 0 -0.3 -0.3 0 -0.6 C 0.3 -0.3 0.6 0 0.6 0.3 L 0.6 1 Z",

    // === BUTTRESSES ===

    // Flying buttress
    "M -0.8 1 L -0.8 0.8 L -0.6 0.8 L -0.2 0.3 L 0.2 0.3 L 0.2 1 Z M -0.8 0.8 L -0.2 0.3",

    // Buttress (diagonal)
    "M 0.1 1 L 0.1 0.2 L 0.5 0.8 L 0.5 1 Z",

    // Stepped buttress
    "M 0.1 1 L 0.1 0.7 L 0.3 0.7 L 0.3 0.5 L 0.5 0.5 L 0.5 0.3 L 0.6 0.3 L 0.6 1 Z",

    // === DOORWAYS ===

    // Arched doorway
    "M -0.4 1 L -0.4 0.2 C -0.4 -0.2 0 -0.5 0 -0.5 C 0 -0.5 0.4 -0.2 0.4 0.2 L 0.4 1 Z",

    // Pointed doorway
    "M -0.35 1 L -0.35 0.1 C -0.35 -0.2 -0.15 -0.4 0 -0.5 C 0.15 -0.4 0.35 -0.2 0.35 0.1 L 0.35 1 Z",

    // Doorway with columns
    "M -0.5 1 L -0.5 0.1 L -0.3 0.1 L -0.3 0 C -0.3 -0.3 0 -0.5 0 -0.5 C 0 -0.5 0.3 -0.3 0.3 0 L 0.3 0.1 L 0.5 0.1 L 0.5 1 Z",

    // === GABLES ===

    // Simple gable
    "M -0.7 1 L -0.7 0.2 L 0 -0.6 L 0.7 0.2 L 0.7 1 Z",

    // Stepped gable
    "M -0.7 1 L -0.7 0.3 L -0.5 0.3 L -0.5 0.1 L -0.3 0.1 L -0.3 -0.1 L 0 -0.4 L 0.3 -0.1 L 0.3 0.1 L 0.5 0.1 L 0.5 0.3 L 0.7 0.3 L 0.7 1 Z",

    // Gable with arch
    "M -0.7 1 L -0.7 0.2 L 0 -0.6 L 0.7 0.2 L 0.7 1 Z M -0.4 1 L -0.4 0.3 C -0.4 0 -0.2 -0.15 0 -0.2 C 0.2 -0.15 0.4 0 0.4 0.3 L 0.4 1 Z",

    // === SPIRES ===

    // Simple spire
    "M -0.15 1 L -0.15 0.2 L 0 -0.8 L 0.15 0.2 L 0.15 1 Z",

    // Octagonal spire
    "M 0 -0.8 L -0.15 0 L -0.15 1 L 0.15 1 L 0.15 0 Z",

    // Spire with base
    "M -0.2 1 L -0.2 0.3 L -0.15 0.3 L 0 -0.7 L 0.15 0.3 L 0.2 0.3 L 0.2 1 Z",

    // === DOMES ===

    // Dome
    "M -0.6 1 L -0.6 0.2 C -0.6 -0.4 0 -0.7 0 -0.7 C 0 -0.7 0.6 -0.4 0.6 0.2 L 0.6 1 Z",

    // Onion dome
    "M -0.4 1 L -0.4 0.2 C -0.4 -0.1 -0.3 -0.3 -0.15 -0.4 C -0.05 -0.5 0 -0.6 0 -0.7 C 0 -0.6 0.05 -0.5 0.15 -0.4 C 0.3 -0.3 0.4 -0.1 0.4 0.2 L 0.4 1 Z",

    // Ribbed dome
    "M -0.6 1 L -0.6 0.2 C -0.6 -0.4 0 -0.7 0 -0.7 C 0 -0.7 0.6 -0.4 0.6 0.2 L 0.6 1 Z M -0.6 0.2 L 0.6 0.2 M 0 0.2 L 0 -0.7",

    // === TRACERY ===

    // Simple tracery
    "M 0 -0.7 C 0.39 -0.7 0.7 -0.39 0.7 0 C 0.7 0.39 0.39 0.7 0 0.7 C -0.39 0.7 -0.7 0.39 -0.7 0 C -0.7 -0.39 -0.39 -0.7 0 -0.7 Z M 0 -0.7 L 0 0.7 M -0.7 0 L 0.7 0",

    // Geometric tracery
    "M 0 -0.7 C 0.39 -0.7 0.7 -0.39 0.7 0 C 0.7 0.39 0.39 0.7 0 0.7 C -0.39 0.7 -0.7 0.39 -0.7 0 C -0.7 -0.39 -0.39 -0.7 0 -0.7 Z M 0 -0.35 L 0 0.35 M -0.35 0 L 0.35 0",

    // === WALLS ===

    // Crenellated wall
    "M -0.8 1 L -0.8 0.3 L -0.6 0.3 L -0.6 0 L -0.4 0 L -0.4 0.3 L -0.2 0.3 L -0.2 0 L 0 0 L 0 0.3 L 0.2 0.3 L 0.2 0 L 0.4 0 L 0.4 0.3 L 0.6 0.3 L 0.6 0 L 0.8 0 L 0.8 1 Z",

    // Wall with window
    "M -0.7 1 L -0.7 -0.2 L -0.2 -0.2 L -0.2 0.2 C -0.2 -0.1 0 -0.3 0 -0.3 C 0 -0.3 0.2 -0.1 0.2 0.2 L 0.2 -0.2 L 0.7 -0.2 L 0.7 1 Z",

    // === STAIRS ===

    // Spiral stair (simplified)
    "M -0.5 0.8 L -0.5 0.6 L -0.3 0.6 L -0.3 0.4 L -0.1 0.4 L -0.1 0.2 L 0.1 0.2 L 0.1 0 L 0.3 0 L 0.3 -0.2 L 0.5 -0.2 L 0.5 -0.4 L 0.3 -0.4 L 0.3 -0.2 L 0.1 -0.2 L 0.1 0 L -0.1 0 L -0.1 0.2 L -0.3 0.2 L -0.3 0.4 L -0.5 0.4 L -0.5 0.6 L -0.7 0.6 L -0.7 0.8 Z",
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

// Set initial shape
shapeElement.setAttribute('d', shuffled[0]);

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

    shapeElement.setAttribute('d', shuffled[currentIndex]);

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
