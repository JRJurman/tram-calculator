const Tram = require('tram-one');
const html = Tram.html({
  'calc-display': require('./components/calc-display'),
  'calc-button-area': require('./components/calc-button-area')
});

const pageStyle = `text-align: center;`;
const displayStyle = `
  width: 60%;
  margin: auto;
`;
const buttonsStyle = `
  width: 60%;
  margin: auto;
`;

const home = (state) => {
  const selectButton = (button) => () => {
    state.dispatch({ type: `SELECT_${button}` })
  }
  return html`
    <div style=${pageStyle}>
      <h1>Tram One Calculator</h1>
      <calc-display style=${displayStyle}>
        ${state.calc.current || state.calc.history}
      </calc-display>
      <calc-button-area 
        onselectbutton=${selectButton}
        style=${buttonsStyle}>
      </calc-button-area>
    </div>
  `;
}

const app = new Tram();
app.addRoute('/', home);
app.addReducer(
  'calc', 
  require('./reducers/calculator-reducer'), 
  {
    history: 0,
    current: '',
    operator: ''
  })
app.start('.main');