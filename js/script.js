'use strict';


function getIterator(startIndex, lastIndex = Infinity, move) {
  let nextIndex = startIndex;

  return {
    next() {
      let result = {};

      if (nextIndex <= lastIndex) {
        result = {value: nextIndex, done: false};
        nextIndex = nextIndex + move;

        return result;
      }

      return {value: undefined, done: true}
    }
  }
}
const itr = getIterator(1, 8, 1);
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
