function canvote(age) {
  if (age > 18) return true;
  else {
    return false;
  }
}

let ans = canvote(19);
let ans1 = canvote(15);

console.log(ans);
