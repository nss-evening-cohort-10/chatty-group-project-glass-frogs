import utilities from '../../helpers/utilities';
import m from '../../helpers/data/messages';

const getInput = () => {
// function should grab the input from the textarea field and push it into the messages array in messages.js
};

const displayNewMessageCard = () => {
  const messages = m.getMessages();
  let domString = '';
  messages.forEach((message) => {
    domString += '<div class="container">';
    domString += `<img src="${messages.image}" alt="Photo"`;
    domString += `<p>${messages.message}</p>`;
    domString += `<span class="time-right">${message.time}</span>`;
    domString += '</div>';
    utilities.printToDom('messages-zone', domString);
  });
};

export default { displayNewMessageCard, getInput };
