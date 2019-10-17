import '../styles/main.scss';
import displayMessage from './components/displayMessage/displayMessage';
import messages from './helpers/data/messages';

const init = () => {
  displayMessage.displayMessageCard(messages);
};

init();
