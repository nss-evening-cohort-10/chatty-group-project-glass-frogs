import '../styles/main.scss';
import moment from 'moment';
import $ from 'jquery';
import newMessage from './components/addMessage/addMessage';
import displayMessage from './components/displayMessage/displayMessage';
import message from './helpers/data/messages';

const init = () => {
  const messages = message.getMessages();
  $('').append(moment().format('LLL'));
  displayMessage.displayMessageCard();
  newMessage.addEvent();
};

init();
