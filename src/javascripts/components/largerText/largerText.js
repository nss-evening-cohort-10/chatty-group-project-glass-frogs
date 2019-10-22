import $ from 'jquery';
import './largerText.scss';

const toLarge = () => {
  $('p').toggleClass('enlarge');
};

const enlarge = () => {
  $('body').on('click', '#enlarge-text', () => {
    toLarge();
  });
};

export default { enlarge };
