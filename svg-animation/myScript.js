
function drawPanel(panel_id) {

  let panel = document.getElementById(panel_id);

  if (panel == null) {
    return;
  }

  let img_html = `
    <svg width="420" height="420" version="1.1">
      <defs>
        <linearGradient id="myGrey" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:rgb(0,0,0);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(80,80,80);stop-opacity:1" />
        </linearGradient>      
        <radialGradient
          id="myLight"
          spreadMethod="pad">
          <stop offset="0%" stop-color=rgb(255,255,255) />
          <stop offset="25%" stop-color=rgb(255,191,72) />        
          <stop offset="50%" stop-color=rgb(99,67,29) />
          <stop offset="100%" stop-color=rgb(230,215,154) />
          <animate
            attributeName="cx"
            values="0; 0; 0.23; 1; 1; 0.77;0;"
            dur="10s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="1; 0.23; 0; 0; 0.77; 1;1;"
            dur="10s"
            repeatCount="indefinite"
          />
        </radialGradient>
        <pattern id="img1" patternContentUnits="objectBoundingBox" width="100%" height="100%">
          <image href="lion.jpg" x="0" y="0" height="1" width="1" preserveAspectRatio="none" />
        </pattern>
        <filter id="shadow" x="0" y="0">
          <feGaussianBlur stdDeviation="5" />
          <feOffset dx="5" dy="5" />
        </filter>
      </defs>
      <g>
        <path 
          id="left_black" 
          d="M5,86 L49,42 89,42 5,123 Z"
          fill="url(#myGrey)"
          >
        </path>
        <path 
          id="top_black" 
          d="M129,46 L174,0 324,0 C324,0 330,0 330,6, L330,6, 330,46 Z"
          fill="url(#myGrey)"
          >
        </path>
        <path 
          id="lineAB" 
          d="M5,125 L90,45 360,45 360,315 280,395 10,395 Z"
          stroke="grey"
          stroke-width="10"
          filter="url(#shadow)"
          >
        </path>
        <text 
          x="0" 
          y="0" 
          dx="350" 
          dy="120" 
          transform="rotate(90 350,120)"
          style="font-size:4.7em;
              fill:#000000;
              font-weight: bold;
              font-family:'Arial';
              "
        >
          HIANTA
        </text>
        <path 
          id="lineAB" 
          d="M5,125 L90,45 360,45 360,315 280,395 10,395 Z"
          stroke=url(#myLight)
          stroke-width="10"
          fill="url(#img1)"
          >
        </path>
      </g>
    </svg>`;
  panel.innerHTML = img_html;
}

function myDraw() {
  drawPanel("panel_1");

  drawPanel("panel_2");
}