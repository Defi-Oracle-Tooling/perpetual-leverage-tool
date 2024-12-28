module.exports = {
  plugins: [
    'autoprefixer',
    process.env.NODE_ENV === 'production' && [
      'cssnano',
      {
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true,
            },
            minifyFontValues: {
              removeQuotes: false,
            },
          },
        ],
      },
    ],
  ].filter(Boolean),
}; 