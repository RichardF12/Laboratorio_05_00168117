function bubble(array) {
    var flag = false;
    while (!flag) {
      flag = true;
      for (var i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
          flag = false;
          var aux = array[i - 1];
          array[i - 1] = array[i];
          array[i] = aux;
        }
      }
    }
  
    return array;
  }
  
  var test = [34, 5, 78, 21, 7, 1, 100, 12];
  bubbleSort(test);
  console.log(test)