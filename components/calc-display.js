const Tram = require('tram-one');
const html = Tram.html();

const displayStyle = `
  background: #BDBDAA;
  color: #2E4147;
  font-size: 3em;
  text-align: right;
`;

module.exports = (attrs, children) => {
  return html`
    <div style=${attrs.style + displayStyle}>
      ${children}
    </div>
  `;
}