module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
<<<<<<< Updated upstream
=======
  webpack: {
    configure: (webpackConfig) => {
      // Build to standard build directory for GitHub Pages
      webpackConfig.output.path = path.resolve(__dirname, 'build');
      return webpackConfig;
    },
  },
>>>>>>> Stashed changes
};
