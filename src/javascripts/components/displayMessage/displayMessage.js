import utilities from '../../helpers/utilities';
import mes from '../../helpers/data/messages';

const displayMessageCard = () => {
  const messages = mes.getMessages();
  let domString = '';
  // messages.forEach((message)) => {
  for (let i = 0; i < messages.length; i += 1) {
    domString += `
    <div class="card-container">
    <h5>From:${messages[i].sender}</h5>
    <img src="${messages[i].image}" alt="Photo">
    <p>${messages[i].messageContent}</p>
    <span class="time-right">${messages[i].timeStamp}</span>
    </div>
    `;
  }
  utilities.printToDom('messages-zone', domString);
};

export default { displayMessageCard };
