module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript'
  ],
  plugins: [
    [require('@babel/plugin-proposal-decorators'), {legacy: true}],
    '@babel/plugin-syntax-dynamic-import'
  ]
}
