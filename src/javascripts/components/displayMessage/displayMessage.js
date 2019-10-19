import './displayMessage.scss';
import utilities from '../../helpers/utilities';
import mes from '../../helpers/data/messages';

const displayMessageCard = () => {
  const messages = mes.getMessages();
  let domString = '';
  // messages.forEach((message)) => {
  for (let i = 0; i < messages.length; i += 1) {
    if (messages[i].id % 2 === 0) {
      domString += `
    <div class="card-container">
    <h5>${messages[i].userName}</h5>
    <img src="${messages[i].userIcon}" alt="Photo">
    <p>${messages[i].messageContent}</p>
    <span class="time-right">${messages[i].timeStamp}</span>
    </div>
    `;
    } else {
      domString += `
        <div class="card-container-darker">
        <h5 align="right">${messages[i].userName}</h5>
        <img src="${messages[i].userIcon}" class="right" alt="Photo">
        <p align="right">${messages[i].messageContent}</p>
        <span class="time-left">${messages[i].timeStamp}</span>
        </div>
        `;
    }
  }
  utilities.printToDom('messages-zone', domString);
};

export default { displayMessageCard };
