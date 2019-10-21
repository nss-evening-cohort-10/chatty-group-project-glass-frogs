import $ from 'jquery';
import displayMessage from '../displayMessage/displayMessage';
import message from '../../helpers/data/messages';
import utilities from '../../helpers/utilities';


const clearMessages = (e) => {
  if (e.target.id === 'clearAll') {
    const newArray = message.getMessages();
    newArray.splice(0, newArray.length);
    utilities.toggleClearAllButton(newArray);
    displayMessage.displayMessages(newArray);
  }
};

const addClearMessageEvent = () => {
  $('body').on('click', '#clearAll', clearMessages);
};


export default { addClearMessageEvent };
