module.exports = {
  '*.{js,jsx,ts,tsx}': ['prettier --config .prettierrc --write', 'eslint --fix', 'git add'],
  '*.{pcss,scss,css,html}': ['prettier --config .prettierrc --write', 'git add'],
};
