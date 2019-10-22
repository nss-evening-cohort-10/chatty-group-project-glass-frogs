import $ from 'jquery';
import '../../../styles/themeMaps.scss';


const darkMode = () => {
  const root = $('#app-root');
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
