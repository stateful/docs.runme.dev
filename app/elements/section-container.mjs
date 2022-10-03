export default function SectionContainer({ html, state = {} }) {
  const { attrs = {} } = state;
  const { title = "Title", description = "Description" } = attrs;
  // row and row-reverse for the flex directions
  return html`
    <style>
      
    </style>
    <div class="section flex flex-col justifycenter items-center">
      <h1 class="text3">${title}</h1>
      <p class="text section-description">${description}</p>
    </div>
  `;
}
