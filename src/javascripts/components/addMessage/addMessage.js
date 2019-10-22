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
      userIcon: 'https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg',
      messageContent: inputVal,
      id: `${i}`,
    });
    i += 1;
    displayMessage.displayMessageCard(message);
    deleteMessage.deleteMessage();
  });
};


export default { addEvent };
