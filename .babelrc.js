module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react'
        }
      }
    ]
  ],
  plugins: [
    '@emotion/babel-plugin',
    'babel-plugin-macros',
    [
      '@emotion/babel-plugin-jsx-pragmatic',
      {
        export: 'jsx',
        import: '__cssprop',
        module: '@emotion/react'
      }
    ],
    ['@babel/plugin-transform-react-jsx', { pragma: '__cssprop' }, 'twin.macro']
  ]
}
