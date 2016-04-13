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

  },

  removeWithoutCopy : function(arr, item) {

  },

  append : function(arr, item) {

  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
