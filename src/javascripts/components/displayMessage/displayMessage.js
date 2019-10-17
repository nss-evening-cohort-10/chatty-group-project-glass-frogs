import utilities from '../../helpers/utilities';
import mes from '../../helpers/data/messages';

const displayMessageCard = () => {
  const messages = mes.getMessages();
  let domString = '';
  // messages.forEach((message)) => {
  for (let i = 0; i < messages.length; i += 1) {
    domString += `
    <div class="card-container">
    <img src="${messages.image}" alt="Photo">
    <p>${messages.messageContent}</p>
    <span class="time-right">${messages.timeStamp}</span>
    </div>
    `;
  }
  utilities.printToDom('messages-zone', domString);
};

export default { displayMessageCard };
