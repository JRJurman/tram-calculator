const xtend = require('xtend');

const evaluate = (state) => {
  const value = state.current || state.history;
  switch(state.operator) {
    case '+':
      return parseInt(state.history, 10) + parseInt(value, 10);
    case '-':
      return parseInt(state.history, 10) - parseInt(value, 10);    
    case '/':
      return parseInt(state.history, 10) / parseInt(value, 10);
    case 'x':
      return parseInt(state.history, 10) * parseInt(value, 10);
    default:
      return parseInt(value, 10);
  }
}

module.exports = (state, action) => {
  const newCurrent = evaluate(state)
  switch(action.type) {
    case 'SELECT_CLR':
    case 'SELECT_NEG':
    case 'SELECT_PER':
    case 'SELECT_/':
      return xtend(state, {
        operator: '/',
        history: newCurrent,
        current: ''
      })
    case 'SELECT_X':
      return xtend(state, {
        operator: 'x',
        history: newCurrent,
        current: ''
      })
    case 'SELECT_-':
      return xtend(state, {
        operator: '-',
        history: newCurrent,
        current: ''
      })
    case 'SELECT_+':
      return xtend(state, {
        operator: '+',
        history: newCurrent,
        current: ''
      })
    case 'SELECT_=':
      return xtend(state, {
        operator: '',
        history: newCurrent,
        current: ''
      })
    case 'SELECT_.':
    case 'SELECT_0':
      return xtend(state, {
        current: state.current === '' ? '' : state.current + '0'
      })
    case 'SELECT_1':
      return xtend(state, {
        current: state.current + '1'
      })
    case 'SELECT_2':
      return xtend(state, {
        current: state.current + '2'
      })
    case 'SELECT_3':
      return xtend(state, {
        current: state.current + '3'
      })
    case 'SELECT_4':
      return xtend(state, {
        current: state.current + '4'
      })
    case 'SELECT_5':
      return xtend(state, {
        current: state.current + '5'
      })
    case 'SELECT_6':
      return xtend(state, {
        current: state.current + '6'
      })
    case 'SELECT_7':
      return xtend(state, {
        current: state.current + '7'
      })
    case 'SELECT_8':
      return xtend(state, {
        current: state.current + '8'
      })
    case 'SELECT_9':
      return xtend(state, {
        current: state.current + '9'
      })
    default:
      return state;
  }
}