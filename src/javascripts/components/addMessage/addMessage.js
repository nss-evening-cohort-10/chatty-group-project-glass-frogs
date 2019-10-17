import utilities from '../../helpers/utilities';
import messagesArr from '../../helpers/data/messages';

const newMessageObject = () => {
// function should grab the input from the textarea field and push it into the messages array in messages.js
// id of input field is: exampleFormControlTextarea1
// ${inputVal}
// name will be user
// message should be whatever is added into the input field
// image will not be available
// time stamp -- you should be able to grab that somehow fancy
// id incrimenting from whatever the last number is -- adding one each time
  const message = messagesArr.getMessages();
  message.push(`{ sender: 'User', image: '', messageContent: 'inputvalue',timeStamp: '', id: '${message.id}', },`);
};

const displayNewMessageCard = () => {
  const messages = messagesArr.getMessages();
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

export default { displayNewMessageCard, newMessageObject };
