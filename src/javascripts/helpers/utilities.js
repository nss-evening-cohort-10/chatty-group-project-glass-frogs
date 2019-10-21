import $ from 'jquery';

const printToDom = (divId, toPrint) => {
  $(`#${divId}`).html(toPrint);
};

const toggleClearAllButton = () => {
  if ($('#messages-zone').val() === '') {
    $('#clearAll').prop('disabled', 'disabled');
  } else {
    $('#clearAll').prop('disabled', false);
  }
};

export default { printToDom, toggleClearAllButton };
