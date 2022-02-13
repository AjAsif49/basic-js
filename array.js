var friendsAge = [18,15,16,18,17];
var arifAge = friendsAge[2];
friendsAge[1] = 22;

var position = friendsAge.indexOf(18);
console.log(friendsAge)


friendsAge.push(10);
friendsAge.push(18);
console.log(friendsAge)
friendsAge.pop()
console.log(friendsAge)
friendsAge.unshift(13)
console.log(friendsAge)


var teaLine = ['kalam', 'salam', 'balam', 'talam', 'galam'];
console.log(teaLine);
teaLine.push('jalam');
console.log(teaLine);
teaLine.pop();
console.log(teaLine);
teaLine.unshift('nalam');
console.log(teaLine);
var part = teaLine.slice(2);
console.log(part);
console.log(teaLine)