const generics = {
  containerRadius: '13px',
  boxShadow: '0px 0px 30px #00000029',
  green: '#00cf92',
  blue: '#009cde',
  greenBlueGradient: `linear-gradient(0deg,#00cf92,#009cde)`,
  inputRadius: '7px',
  inputPadding: '20px 26px',
  inputPrimaryBg: 'linear-gradient(90deg,#2196F3,#00BCD4)',
  inputColor: '#FFF',
  inputError: '#e7c0c0',
  small: '0.8rem',
  red: '#f75858',
  yellow: '#fed32b',
  info: '#fed32b',
};

const dark = {
  ...generics,
  background: '#FFF',
};

const light = {
  ...generics,
  background: '#FFF',
  inputBackground: '#c6c6c6',
};

const theme = {
  dark,
  light,
};

export default theme;
