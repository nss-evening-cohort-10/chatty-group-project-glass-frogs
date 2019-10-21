import $ from 'jquery';

const deleteMessage = () => {
  $('body').on('click', '.close', () => {
    $('.card-container').remove('');
  });
};


export default { deleteMessage };
