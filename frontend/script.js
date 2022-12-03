// Your task:
//   Please validate the input value and display a feedback to the user. Feel free to implement it with a plain vanilla javascript.

//   1. The username constraints are following:
//     - it should have at least 4 characters and 20 at maximum
//     - it can only contains letters, digits and hyphens
//   2. The validation should occur when a user leaves the input
//   3. It should not be possible to submit a form until the input has a valid value

const formName = document.getElementById('name');
const submitBtn = document.getElementById('btnForm');
const restrictions = /^[-a-zA-Z0-9]+$/;

function formValidator(e) {
  if (formName.value.length <= 3 || formName.value.length >= 21) {
    e.preventDefault();
    alert(
      'Your input is invalid. Usernames must contain at least 4 characters and 20 at maximum and can only contains letters, digits and hyphens'
    );
    return;
  }

  if (!formName.value.match(restrictions)) {
    e.preventDefault();
    alert('You tried submitting although the input is still invalid');
    return;
  }
}

formName.addEventListener('blur', (e) => {
  formValidator(e);
});

submitBtn.addEventListener('click', (e) => {
  formValidator(e);
});
