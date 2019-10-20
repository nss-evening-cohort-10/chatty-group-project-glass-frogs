import moment from 'moment';
import './displayMessage.scss';
import utilities from '../../helpers/utilities';

const displayMessageCard = (arr) => {
  let domString = '';
  // messages.forEach((message)) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].id % 2 === 0) {
      domString += `

    <div class="card-container" id="${arr[i].id}">
    <button id="even" class="close d-flex justify-content-end">x</button>
    <h5>${arr[i].userName}</h5>
    <img src="${arr[i].userIcon}" alt="Photo">
    <p class="message">${arr[i].messageContent}</p>
    <span class="time-right">${moment().format('LLL')}</span>
    
    </div>
    `;
    } else {
      domString += `
        <div class="card-container-darker" id="${arr[i].id}">
        <button id="odd" class="close d-flex justify-content-start">x</button>
        <h5 align="right">${arr[i].userName}</h5>
        <img src="${arr[i].userIcon}" alt="Photo" class="right">
        <p class="message "align="right">${arr[i].messageContent}</p>
        <span class="time-left">${moment().format('LLL')}</span>
        
        </div>
        `;
    }
  }
  utilities.printToDom('messages-zone', domString);
};

export default { displayMessageCard };
