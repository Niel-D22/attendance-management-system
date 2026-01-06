import React from "react";

export const Animation = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <svg
        id="freepik_stories-online-tech-talks"
        className="animated w-full h-auto max-w-[500px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
      >
        <style>
          {`
          svg#freepik_stories-online-tech-talks:not(.animated) .animable {
            opacity: 0;
          }

          svg.animated #freepik--Shadows--inject-79 {
            animation: 1.5s infinite linear floating;
          }

          svg.animated #freepik--Globe--inject-79 {
            animation: 6s infinite linear heartbeat;
          }

          svg.animated #freepik--Gears--inject-79 {
            animation:
              1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideUp,
              1.5s infinite linear floating;
            animation-delay: 0s, 1s;
          }

          svg.animated #freepik--character-1--inject-79,
          svg.animated #freepik--character-2--inject-79,
          svg.animated #freepik--Idea--inject-79 {
            animation: 2s infinite linear floating;
          }

          @keyframes floating {
            0%, 100% {
              transform: translateY(0);
              opacity: 1;
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes heartbeat {
            0%, 30%, 40%, 60%, 100% {
              transform: scale(1);
            }
            10%, 50% {
              transform: scale(1.1);
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
        </style>

        {/* Floor */}
        <g className="animable">
          <ellipse cx="250" cy="350" rx="180" ry="90" fill="#f5f5f5" />
        </g>

        {/* Shadows */}
        <g
          id="freepik--Shadows--inject-79"
          className="animable"
          style={{ transformOrigin: "250px 350px" }}
        >
          <ellipse cx="250" cy="360" rx="120" ry="40" fill="#e0e0e0" />
        </g>

        {/* Globe */}
        <g
          id="freepik--Globe--inject-79"
          className="animable"
          style={{ transformOrigin: "250px 120px" }}
        >
          <circle cx="250" cy="120" r="70" fill="#e0e0e0" />
        </g>

        {/* Gears */}
        <g
          id="freepik--Gears--inject-79"
          className="animable"
          style={{ transformOrigin: "380px 400px" }}
        >
          <circle cx="380" cy="400" r="20" fill="#407BFF" />
        </g>

        {/* Character 1 */}
        <g
          id="freepik--character-1--inject-79"
          className="animable"
          style={{ transformOrigin: "160px 300px" }}
        >
          <polygon points="150,260 170,320 130,320" fill="#407BFF" />
        </g>

        {/* Character 2 */}
        <g
          id="freepik--character-2--inject-79"
          className="animable"
          style={{ transformOrigin: "340px 280px" }}
        >
          <polygon points="330,240 350,300 310,300" fill="#407BFF" />
        </g>

        {/* Idea */}
        <g
          id="freepik--Idea--inject-79"
          className="animable"
          style={{ transformOrigin: "70px 380px" }}
        >
          <rect x="50" y="340" width="40" height="80" rx="8" fill="#407BFF" />
        </g>
      </svg>
    </div>
  );
};
