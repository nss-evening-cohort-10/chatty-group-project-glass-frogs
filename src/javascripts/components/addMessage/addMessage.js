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
  message.push(`{ sender: 'User', image: '', messageContent: 'inputvalue', timeStamp: '', id: '${message.id}', },`);
};

export default { newMessageObject };
