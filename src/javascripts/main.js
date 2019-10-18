import '../styles/main.scss';
import moment from 'moment';
import $ from 'jquery';

const init = () => {
  $('#exampleFormControlTextarea1').append(moment().format('LLL'));
};
init();
