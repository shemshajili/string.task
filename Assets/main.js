
//TASk 1
function stringArr(str) {
    var words=str.split(" ");
    return words;
}
console.log(stringArr("Robbin Singh"));
//TASK 2
function truncate_string(str, count) {
    if (str.length <= count) {  
      return str;
    } else{
        return str.substring(0,count)
    }
  }
console.log(truncate_string("Robin Singh",5));

//TASK 3
 protect_email=function(email) {
    let avg, splitted, part_one, part_two;
    splitted = email.split("@");
    part_one = splitted[0];
    avg = part_one.length / 2;
    part_one = part_one.substring(0, (part_one.length - avg));
    part_two = splitted[1];
    return part_one + "..." + "@" + part_two;
  }
console.log(protect_email("robin_singh@example.com"));  
//TASK 4
function repeat_string(txt, count) 
  {
    if ((txt == null) || (count < 0) || (count == null))
      {
        return("Invalid value");
      }
    return new Array(count+1).join(txt);
  }
  console.log(repeat_string('a', 4));
  console.log(repeat_string('a'));
//TASK 5
function search_word(str,word) {
  const words=str.split(' ')
  let count=0;
  for (let index = 0; index < words.length; index++) {
   if (words[index] === word) {
    count++;
   }
  }
  return `'${word}' was found ${count} times.`;
}
console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
