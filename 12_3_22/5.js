// text-6
// Write a JavaScript function to hide email addresses to protect from unauthorized user.
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

function protect_email(email) {
  var email_split, part1, part2;
  email_split = email.split('@');
  part1 = email_split[0];
  part1 = part1.substring(0, 5);
  part2 = email_split[1];
  return part1 + '...@' + part2;
}

console.log(protect_email('robin_singh@example.com'));

// COMMENT --------------
// good job, another task done :)
// future reference: similar comments like in task no. 4
// pro tip: in for loop you can skip conditions - you just have to remember to separate them by semicolons
const protect_email2 = (email) => {
  let i = 0;
  for (; i < 5; i++) {
    if (email[i] === '@') break;
  }
  return `${email.slice(0, i)}...${email.slice(email.indexOf('@'))}`;
};
console.log(protect_email2('robin_singh@example.com'));
