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
