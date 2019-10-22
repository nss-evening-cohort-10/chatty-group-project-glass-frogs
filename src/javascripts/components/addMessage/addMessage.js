import $ from 'jquery';
import messagesArr from '../../helpers/data/messages';
import displayMessage from '../displayMessage/displayMessage';
import deleteMessage from '../deleteMessages/deleteMessages';

let i = 6;

const addEvent = () => {
  $('#send-button').on('click', (event) => {
    event.preventDefault();
    const message = messagesArr.getMessages();
    const inputVal = $('textarea').val();
    message.push({
      userName: 'User',
      userIcon: '',
      messageContent: inputVal,
      id: `${i}`,
    });
    i += 1;
    displayMessage.displayMessageCard(message);
    deleteMessage.deleteMessage();
  });
};


export default { addEvent };
