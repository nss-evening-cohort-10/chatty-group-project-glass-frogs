import utilities from '../../helpers/utilities';
import messages from '../../helpers/data/messages';

const displayMessageCard = () => {
    const messages = messages.getMessages();
    const domString = '';
    messages.forEach((message)) => {
        domString += `<div class="container">`;
        domString += `<img src="${messages.image}" alt="Photo"`;
        domString += `<p>${messages.message}</p>`;
        domString += `<span class="time-right">${message.time}</span>`;
        domString += `</div>`;
    };
    utilities.printToDom('messages-zone', domString);
};

export default { displayMessageCard };
