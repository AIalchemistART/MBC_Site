// Dynamically generate a mystical SVG background with layered circles, gradients, and star-like effects, plus a rose/mandala overlay in the central circle
(function() {
  const svg = document.getElementById('mystical-svg');
  if (!svg) return;
  svg.innerHTML = '';
  svg.setAttribute('viewBox', '0 0 1920 1080');
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  svg.style.width = '140vw';
  svg.style.height = '140vh';
  svg.style.position = '';
  svg.style.left = '';
  svg.style.top = '';
  svg.style.transform = '';
  svg.style.display = 'block';
  const W = 1920, H = 1080;

  // Helper: random color from palette
  const palette = [
    '#ffe066', '#bfae66', '#7e5cff', '#a259ff', '#3D0066', '#fffbe6', '#2A004B'
  ];
  function randColor() {
    return palette[Math.floor(Math.random() * palette.length)];
  }
  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }
  // Layered glowing circles
  for (let i = 0; i < 4; i++) {
    const cx = rand(W*0.2, W*0.8);
    const cy = rand(H*0.2, H*0.8);
    const r = rand(280, 520);
    const color = randColor();
    const opacity = rand(0.08, 0.17);
    svg.innerHTML += `<circle cx='${cx}' cy='${cy}' r='${r}' fill='${color}' opacity='${opacity}' filter='url(#blur${i})'/>`;
    svg.innerHTML += `<filter id='blur${i}'><feGaussianBlur stdDeviation='${rand(40,90)}'/></filter>`;
  }
  // Star-like sparkles
  for (let i = 0; i < 18; i++) {
    const cx = rand(0, W);
    const cy = rand(0, H);
    const len = rand(14, 38);
    const color = randColor();
    const opacity = rand(0.09, 0.22);
    const rotate = rand(0,360);
    svg.innerHTML += `<g transform='rotate(${rotate} ${cx} ${cy})'>
      <rect x='${cx-len/2}' y='${cy-1}' width='${len}' height='2' fill='${color}' opacity='${opacity}' rx='1'/>
      <rect x='${cx-1}' y='${cy-len/2}' width='2' height='${len}' fill='${color}' opacity='${opacity}' rx='1'/>
    </g>`;
  }
  // Central mystical circle with radiating lines
  const ccx = W/2, ccy = H/2, cr = rand(220, 300);
  svg.innerHTML += `<circle cx='${ccx}' cy='${ccy}' r='${cr}' fill='none' stroke='${randColor()}' stroke-width='5' opacity='0.18'/>`;
  for (let i = 0; i < 12; i++) {
    const angle = (i/12) * 2 * Math.PI;
    const x1 = ccx + Math.cos(angle) * (cr - 10);
    const y1 = ccy + Math.sin(angle) * (cr - 10);
    const x2 = ccx + Math.cos(angle) * (cr + 60);
    const y2 = ccy + Math.sin(angle) * (cr + 60);
    svg.innerHTML += `<line x1='${x1}' y1='${y1}' x2='${x2}' y2='${y2}' stroke='${randColor()}' stroke-width='3' opacity='0.13'/>`;
  }
  // Rose/mandala overlay
  const petals = 16;
  const petalR = cr * 0.82;
  const petalColor = randColor();
  const petalOpacity = 0.21;
  for (let i = 0; i < petals; i++) {
    const angle = (i/petals) * 2 * Math.PI;
    const x1 = ccx + Math.cos(angle) * (petalR * 0.2);
    const y1 = ccy + Math.sin(angle) * (petalR * 0.2);
    const x2 = ccx + Math.cos(angle + Math.PI/petals) * (petalR * 1.05);
    const y2 = ccy + Math.sin(angle + Math.PI/petals) * (petalR * 1.05);
    const x3 = ccx + Math.cos(angle + (2*Math.PI/petals)) * (petalR * 0.2);
    const y3 = ccy + Math.sin(angle + (2*Math.PI/petals)) * (petalR * 0.2);
    svg.innerHTML += `<path d='M${ccx},${ccy} Q${x1},${y1} ${x2},${y2} Q${x3},${y3} ${ccx},${ccy}' fill='none' stroke='${petalColor}' stroke-width='2.5' opacity='${petalOpacity}'/>`;
  }
  // Mandala inner circles
  for (let i = 1; i <= 4; i++) {
    svg.innerHTML += `<circle cx='${ccx}' cy='${ccy}' r='${cr * (0.2 + 0.17*i)}' fill='none' stroke='${randColor()}' stroke-width='1.7' opacity='0.11'/>`;
  }

  // Additional smaller rose/mandalas around the background
  const numSmallMandala = Math.floor(rand(4,7));
  const minDistFromCenter = cr + 180;
  const maxSmallR = 90;
  for (let i = 0; i < numSmallMandala; i++) {
    let scx, scy, tries = 0;
    // Find a spot not overlapping the central mandala
    do {
      scx = rand(maxSmallR, W-maxSmallR);
      scy = rand(maxSmallR, H-maxSmallR);
      tries++;
    } while (Math.hypot(scx-ccx, scy-ccy) < minDistFromCenter && tries < 20);
    const scr = rand(50, maxSmallR);
    const petals = Math.floor(rand(8,16));
    const petalR = scr * 0.82;
    const petalColor = randColor();
    const petalOpacity = 0.16;
    const rotate = rand(0,360);
    // Mandala outline
    svg.innerHTML += `<g transform='rotate(${rotate} ${scx} ${scy})'>`;
    svg.innerHTML += `<circle cx='${scx}' cy='${scy}' r='${scr}' fill='none' stroke='${petalColor}' stroke-width='2.2' opacity='0.13'/>`;
    for (let j = 0; j < petals; j++) {
      const angle = (j/petals) * 2 * Math.PI;
      const x1 = scx + Math.cos(angle) * (petalR * 0.2);
      const y1 = scy + Math.sin(angle) * (petalR * 0.2);
      const x2 = scx + Math.cos(angle + Math.PI/petals) * (petalR * 1.05);
      const y2 = scy + Math.sin(angle + Math.PI/petals) * (petalR * 1.05);
      const x3 = scx + Math.cos(angle + (2*Math.PI/petals)) * (petalR * 0.2);
      const y3 = scy + Math.sin(angle + (2*Math.PI/petals)) * (petalR * 0.2);
      svg.innerHTML += `<path d='M${scx},${scy} Q${x1},${y1} ${x2},${y2} Q${x3},${y3} ${scx},${scy}' fill='none' stroke='${petalColor}' stroke-width='1.7' opacity='${petalOpacity}'/>`;
    }
    // Mandala inner circles
    for (let k = 1; k <= 2; k++) {
      svg.innerHTML += `<circle cx='${scx}' cy='${scy}' r='${scr * (0.3 + 0.28*k)}' fill='none' stroke='${petalColor}' stroke-width='1.1' opacity='0.09'/>`;
    }
    svg.innerHTML += `</g>`;
  }
})();
