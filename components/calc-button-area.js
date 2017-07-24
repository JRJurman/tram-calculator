const Tram = require('tram-one');
const html = Tram.html({
  'calc-button': require('./calc-button')
});

const buttonAreaStyle = `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;

const zeroSpan = `
  grid-column-start: 1;
  grid-column-end: 3;
`

module.exports = (attrs) => {
  return html`
    <div style=${attrs.style + buttonAreaStyle}>
      <calc-button onselectbutton=${attrs.onselectbutton} value="CLR"></calc-button><calc-button onselectbutton=${attrs.onselectbutton} value="NEG"></calc-button><calc-button onselectbutton=${attrs.onselectbutton} value="PER"></calc-button><calc-button onselectbutton=${attrs.onselectbutton} value="/"></calc-button>
      <calc-button onselectbutton=${attrs.onselectbutton} value="7"></calc-button><calc-button onselectbutton=${attrs.onselectbutton} value="8"></calc-button><calc-button onselectbutton=${attrs.onselectbutton} value="9"></calc-button><calc-button onselectbutton=${attrs.onselectbutton} value="X"></calc-button>
      <calc-button onselectbutton=${attrs.onselectbutton} value="4"></calc-button><calc-button onselectbutton=${attrs.onselectbutton} value="5"></calc-button><calc-button onselectbutton=${attrs.onselectbutton} value="6"></calc-button><calc-button onselectbutton=${attrs.onselectbutton} value="-"></calc-button>
      <calc-button onselectbutton=${attrs.onselectbutton} value="1"></calc-button><calc-button onselectbutton=${attrs.onselectbutton} value="2"></calc-button><calc-button onselectbutton=${attrs.onselectbutton} value="3"></calc-button><calc-button onselectbutton=${attrs.onselectbutton} value="+"></calc-button>
      <calc-button onselectbutton=${attrs.onselectbutton} style=${zeroSpan} value="0"></calc-button><calc-button onselectbutton=${attrs.onselectbutton} value="."></calc-button><calc-button onselectbutton=${attrs.onselectbutton} value="="></calc-button>      
    </div>
  `;
}