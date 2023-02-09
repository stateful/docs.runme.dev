module.exports = {
  async redirects() {
    return [
      {
        source: '/open-project/:repository/:file',
        destination: 'vscode://stateful.runme?command=setup&repository=:repository&fileToOpen=:file',
        permanent: true,
      },
    ]
  },
}