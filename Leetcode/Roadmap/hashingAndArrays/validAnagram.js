function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  } else {
    const sSorted = s.split('').sort().join('');
    const tSorted = t.split('').sort().join(''); //Easiest way to sort is to start by turning them into an array of characters. Join returns them back into an array.
    return sSorted === tSorted;
  }
}

isAnagram('anagram', 'nagaram');
