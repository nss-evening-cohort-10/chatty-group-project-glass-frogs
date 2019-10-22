import $ from 'jquery';

const darkMode = () => {
  const root = $('body');
  root.toggleClass('theme-light');
  root.toggleClass('theme-dark');
  // $('#app-root').toggleClass('theme-dark');
};

const makeDark = () => {
  // $('#darkThemeCheck').on('change', darkMode);
  $('body').on('click', '#dark-mode', () => {
    darkMode();
  });
};

export default { makeDark };
