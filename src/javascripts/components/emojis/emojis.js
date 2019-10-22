import $ from 'jquery';

const emojis = [
  {
    name: 'smiley face',
    unicode: 'U+1F970',
    emoji: '🥰',
    userInput: ':smile:',
  },
  {
    name: 'frowny face',
    unicode: 'U+1F97A',
    emoji: '🥺',
    userInput: ':sad:',
  },
];

const emojiInput = () => {
  $('#send-button').on('click', () => {
    $("p:contains('smile')").replaceWith(emojis[0].emoji);
    $("p:contains('sad')").replaceWith(emojis[1].emoji);
  });
};

export default { emojiInput };
