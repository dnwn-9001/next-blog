/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    borderWidth: {
      1.5: "1.5px",
    },
    extend: {
      keyframes: {
        //CSS 애니메이션의 키프레임을 정의(css 애니메이션 과정의 중간 절차를 제어할 수 있게함)
        twinkle: {
          // 애니메이션 이름
          "0%, 100%": {
            // 애니메이션 시작과 끝에서 opacity를 0.7로 설정
            opacity: 0.7,
            boxShadow: " 0 0 10px 3px rgb(255, 255, 255, 0.6)",
          },
          "50%": {
            opacity: 1,
          }, // 애니메이션 중간에서 opacity를 1로 설정
        },
      },
      animation: {
        //정의된 키프레임 애니메이션을 사용할 수 있도록 설정
        twinkle1: "twinkle 1.5s infinite alternate",
        // 'twinkle' 애니메이션을 1.5초 동안 무한 반복
        // ( alternate : 애니메이션이 끝에서 다시 시작할 때, 역방향으로 재생되도록 설정)
        twinkle2: "twinkle 1s infinite alternate",
        twinkle3: "twinkle 2s infinite alternate",
        twinkle4: "twinkle 0.5s infinite alternate",
      },
      width: {
        1: "1px",
        2: "2px",
        3: "3px",
      },
      height: {
        1: "1px",
        2: "2px",
        3: "3px",
      },
      opacity: {
        0.1: "0.1",
        0.5: "0.5",
        0.7: "0.7",
        1: "1",
      },
    },
  },
  plugins: [daisyui],
};
