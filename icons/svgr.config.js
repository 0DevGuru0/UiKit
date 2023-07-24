module.exports = {
  svgoConfig: {
    plugins: [
      {
        name: 'convertColors',
        params: {
          currentColor: /(#000000)|(#000)|(#14113E)|(black)|(#21242A)/,
        },
      },
      {
        name: 'removeViewBox',
        active: false,
      },
      {
        name: 'removeDimensions',
        active: true,
      },
      {
        name: 'prefixIds',
        active: true,
      },
      {
        name: 'removeTitle',
        active: true,
      },
    ],
  },
};
