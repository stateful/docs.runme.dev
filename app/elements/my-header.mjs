export default function MyHeader({ html }) {
  return html`
    <nav class="flex justify-between items-center py-4">
      <h1 class="text3 header-main">runme</h1>
      <div class="space-x-3">
        <!-- <a href="/"">Docs</a> -->
        <a href="https://github.com/stateful/vscode-runme">Github</a>
      </div>
    </nav>
  `;
}
