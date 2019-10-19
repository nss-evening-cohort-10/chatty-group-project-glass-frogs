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

// document.body.addEventListener('click', (event) => {
//   if (event.target.id === 'deleteButton') {
//       const buttonValue = event.target.value;
//       const cardId = `card-${buttonValue}`;
//       const card = document.getElementById(cardId);
//       card.parentNode.removeChild(card);
//   }
//   if (event.target.id === 'newButton') {
//       randomHouse(houses);
//   }
// });
