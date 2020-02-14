import { showAlert } from './message';
import $ from 'jquery';
import './style.css';

document.getElementById('btn-alert')
    .addEventListener('click', showAlert);

    $('#btn-jq').click( () => {
        alert('click con JQ')
    });