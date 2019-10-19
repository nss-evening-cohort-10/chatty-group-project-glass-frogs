import $ from 'jquery';
import message from '../../helpers/data/messages';

const messageLimit = () => {
  $('#send-button').on('click', () => {
    const messages = message.getMessages();
    for (let i = 0; i < messages.length; i += 1) {
      if (messages.length > 20) {
        // messages.shift();
        $('#1').remove();
      }
    }
  });
};

export default { messageLimit };
