import $ from 'jquery';

const deleteMessage = () => {
  $('.close').on('click', (event) => {
    $(event.target).parent('.delete').remove();
  });
};


export default { deleteMessage };
