export default function handler(req, res) {
    const { repository, file } = req.query
    if (!repository) return res.status(500).send('Expecting a repository to open')
    res.redirect(308, `vscode://stateful.runme?command=setup&repository=${decodeURIComponent(repository)}&fileToOpen=${file || 'README.md'}`)
  }