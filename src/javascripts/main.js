import '../styles/main.scss';
import newMessage from './components/addMessage/addMessage';
import displayMessage from './components/displayMessage/displayMessage';
import message from './helpers/data/messages';
import limit from './components/messageLimit/messageLimit';
import deleteMessage from './components/deleteMessages/deleteMessages';

const messages = message.getMessages();

const init = () => {
  displayMessage.displayMessageCard(messages);
  newMessage.addEvent();
  limit.messageLimit();
  deleteMessage.deleteMessage();
  displayMessage.messageEventListeners();
};

init();
