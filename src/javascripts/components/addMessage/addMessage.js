import $ from 'jquery';
import messagesArr from '../../helpers/data/messages';
import displayMessage from '../displayMessage/displayMessage';

const addEvent = () => {
  $('#send-button').on('click', (event) => {
    event.preventDefault();
    const message = messagesArr.getMessages();
    const inputVal = $('textarea').val();
    message.push({
      userName: 'User', userIcon: '', messageContent: inputVal, timeStamp: '', id: '7',
    });
    displayMessage.displayMessageCard(message);
  });
};

export default { addEvent };
