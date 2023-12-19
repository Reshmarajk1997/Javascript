var isAnagram = function (s, t) {
  if (
    !(
      1 <= s.length &&
      s.length <= 5 * 10 ** 4 &&
      1 <= t.length &&
      t.length <= 5 * 10 ** 4 &&
      s.length === t.length
    )
  ) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    let charIndex = t.indexOf(s[i]);
    if (charIndex !== -1) {
      t = t.slice(0, charIndex) + t.slice(charIndex + 1);
      console.log(t);
    } else {
      return false;
    }
  }
  return true;
};

let s = "bba",
  t = "aab";
console.log(isAnagram(s, t));
