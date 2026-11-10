# T-R-E-X 🦖

A responsive browser dinosaur runner based on the original p5.play project. This independently maintained edition fixes score initialization, adds persistent personal bests, keyboard restart and touch controls, and improves the layout.

## Play
Open \`index.html\` in your browser (or serve with \`python -m http.server 8000\`).
- **Space / ↑**: jump
- **R / Space**: restart after a collision
- **Tap**: jump or restart on touch devices

The best score is stored locally in the browser; no backend or account is needed.

## Development
The original JavaScript and sprite assets have been preserved. Run \`node --check sketch.js\` to syntax-check the updated game.
