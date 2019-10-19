const messages = [
  {
    userName: 'John',
    userIcon: 'src/assets/images/john.jpg',
    messageContent: 'Hello World!',
    timeStamp: 'October 16, 2019 8:00pm',
    messageId: 1,
  },
  {
    userName: 'Kenneth',
    userIcon: '',
    messageContent: 'I love my music!',
    timeStamp: 'October 16, 2019 8:01',
    messageId: 2,
  },
  {
    userName: 'Isis',
    userIcon: '',
    messageContent: 'I made the moqups!',
    timeStamp: 'October 16, 2019 8:02',
    messageId: 3,
  },
  {
    userName: 'Maggie',
    userIcon: '',
    messageContent: 'He is so hot!',
    timeStamp: 'October 16, 2019 8:05',
    messageId: 4,
  },
  {
    userName: 'John',
    userIcon: 'src/assets/images/johnjohnson.jpg',
    messageContent: 'I feel unusual.',
    timeStamp: 'October 16, 2019 8:10pm',
    messageId: 5,
  },
];

const getMessages = () => messages;

export default { getMessages };
