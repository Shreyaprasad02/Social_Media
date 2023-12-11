/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,jsx}",
];
export const theme = {
  extend: {
    colors: {
      'blueColor': '#2a68ff',
      'greyish': '#f1f4f8',
      'cardShadow': '#f7f8f9',
      'textcolor': '#252b36',
    }
  },
};
export const plugins = [];

