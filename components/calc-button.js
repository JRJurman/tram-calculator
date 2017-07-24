const Tram = require('tram-one');
const html = Tram.html();

const buttonStyle = `
  height: 4rem;
  font-size: 1.25em;
`
module.exports = (attrs) => {
  return html`
    <button 
      style=${attrs.style + buttonStyle}
      onclick=${attrs.onselectbutton(attrs.value)}
    >
      ${attrs.value}
    </button>
  `;
}