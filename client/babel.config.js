// config for babel

const plugins = ['@babel/plugin-proposal-optional-chaining'];

// in serve mode add the react refresh plugin
if (process.env.SERVE) {
  plugins.push('react-refresh/babel');
}

// webpack contents get exported out
module.exports = {
  // adding the babel preset
  presets: [
    // Runtime automatic with React 17+ allows not importing React
    // in files only using JSX (no state or React methods)
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-env',
  ],
  plugins,
};
