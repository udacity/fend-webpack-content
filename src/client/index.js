import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

console.log(checkForName);

alert('I EXIST');
console.log('CHANGE!!');

function onBlur() {
  console.log('Input lost focus');
}

// Make the onBlur and handleSubmit functions accessible globally
window.onBlur = onBlur;
window.handleSubmit = handleSubmit;

export {
  checkForName,
  handleSubmit,
};
