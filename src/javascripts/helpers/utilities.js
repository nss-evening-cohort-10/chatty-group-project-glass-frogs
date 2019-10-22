import $ from 'jquery';

const printToDom = (divId, toPrint) => {
  $(`#${divId}`).html(toPrint);
};

const toggleClearAllButton = () => {
  if ($('#messages-zone').val() !== '') {
    $('#clearAll').prop('disabled', false);
  } else {
    $('#clearAll').prop('disabled', true);
  }
};

export default { printToDom, toggleClearAllButton };
