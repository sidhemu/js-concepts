function longestRepeatingSubString(s) {
  let max = 0;
  for (let i = 0; i < s.length - 1; i++) {
    for (var j = i + 1; j < s.length; j++) {
      let k = 0;
      while (s[i + k] === s[j + k]) {
        k += 1;
        max = Math.max(k, max);
      }
    }
  }

  return max;
}
function longestRepeatingSubStringDP(s) {
  const result = Array(s.length)
    .fill(0)
    .map((_) => Array(s.length));
  let max = 0;

  for (let i = 0; i < s.length - 1; i++) {
    for (var j = i + 1; j < s.length; j++) {
      if (i === 0) {
        result[i][j] = s[i] === s[j] ? 1 : 0;
      } else {
        result[i][j] = s[i] === s[j] ? result[i - 1][j - 1] + 1 : 0;
      }
      max = Math.max(max, result[i][j]);
    }
  }
  return max;
}
function longestRepeatingSubStringBI(s) {
  let max = 0;
  for (let i = 0; i < s.length - max - 1; i++) {
    let nextTarget = s.slice(i, i + max + 1);
    for (let j = i + 1; j < s.length - max; j++) {
      const subStr = s.slice(j, j + max + 1);
      if (subStr === nextTarget) {
        nextTarget += s[i + max + 1];
        max += 1;
        j -= 1;
      }
    }
  }
  return max;
}

console.log(longestRepeatingSubString("aabcaabdaab"));
console.log(longestRepeatingSubStringDP("aabcaabdaab"));
console.log(longestRepeatingSubStringBI("aabcaabdaab"));
