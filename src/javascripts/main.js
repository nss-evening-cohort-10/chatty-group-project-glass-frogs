import '../styles/main.scss';
import moment from 'moment';
import $ from 'jquery';
import displayMessage from './components/displayMessage/displayMessage';

const init = () => {
  $('').append(moment().format('LLL'));
  displayMessage.displayMessageCard();
};

init();
