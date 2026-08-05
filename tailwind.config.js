// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-24px) rotate(6deg)" },
        },
      },
      animation: {
        float: "floatY 10s ease-in-out infinite",
      },
    },
  },
};
