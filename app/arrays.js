exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
     var index = -1,
         i = 0;
     for (; i < arr.length; ++i) {
         if (arr[i] === item) {
             index = i;
             break;
         }
     }
     return index;    
  },

  sum : function(arr) {
      var sum = 0,
          i = 0;
      for (; i < arr.length; ++i) {
          sum += arr[i];
      }
      return sum;
  },

  remove : function(arr, item) {
      var a = [],
          i = 0;
      for (; i < arr.length; ++i) { 
          if (arr[i] !== item) {
              a.push(arr[i]);
          }
      }
      return a;
  },

  removeWithoutCopy : function(arr, item) {
      var i = arr.length;
      while (i--) {
          if (arr[i] === item) {
              arr.splice(i, 1);
          }
      }
      return arr;
  },

  append : function(arr, item) {
      arr.push(item);
      return arr;
  },

  truncate : function(arr) {
     arr.pop();
     return arr; 
  },

  prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
  },

  curtail : function(arr) {
      arr.shift();
      return arr;
  },

  concat : function(arr1, arr2) {
      for (var i = 0; i < arr2.length; i++) {
          arr1.push(arr2[i]);
      }
      return arr1;
  },

  insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
  },

  count : function(arr, item) {
     var c = 0,
        i = 0;
     for (; i < arr.length; ++i) {
         if (arr[i] === item) {
             c += 1;
         }
     } 
     return c;
  },

  duplicates : function(arr) {
      var dups = [],
      i = 0,
      item,
      t; //temp array
      for (; i < arr.length; ++i) {
          item = arr[i];
          //copy arr to temp
          t = arr.join().split(',').map(x => parseInt(x));
          //remove item from temp
          t.splice(i, 1);
          //if item occurs in spliced temp and it's not yet in dups
          if (t.indexOf(item) >= 0 && dups.indexOf(item) === -1) {
              dups.push(item);
          }
      }
      return dups;
  },

  square : function(arr) {
      
      return arr.map(function(i) {
          return i*i;
          });
  },

  findAllOccurrences : function(arr, target) {
     var allocc = [];
     for (var i = 0; i < arr.length; ++i) {
         if (arr[i] === target) {
             allocc.push(i);
         } 
     }
     return allocc;
  }
};
