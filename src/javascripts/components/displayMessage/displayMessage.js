import './displayMessage.scss';
import utilities from '../../helpers/utilities';

const displayMessageCard = (arr) => {
  let k = 0;
  let domString = '';
  // messages.forEach((message)) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].id % 2 === 0) {
      domString += `
    <div class="card-container" id="${k}">
    <h5>${arr[i].userName}</h5>
    <img src="${arr[i].userIcon}" alt="Photo">
    <p>${arr[i].messageContent}</p>
    <span class="time-right">${arr[i].timeStamp}</span>
    </div>
    `;
    } else {
      domString += `
        <div class="card-container-darker" id="${k}">
        <h5 align="right">${arr[i].userName}</h5>
        <img src="${arr[i].userIcon}" alt="Photo" class="right">
        <p align="right">${arr[i].messageContent}</p>
        <span class="time-left">${arr[i].timeStamp}</span>
        </div>
        `;
      k += 1;
    }
  }
  utilities.printToDom('messages-zone', domString);
};

export default { displayMessageCard };
