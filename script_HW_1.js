"use strict";

console.log ( 'START TASK QUCK SORT' );

//var arr = [5, 8, 4, 1, 2];
var arr = [12 , 3, 5, 22 , 8, 94];

console.log ( ' unsorted array => ' + (arr) ); 
console.log (arr);


function qS(arr, startPos , endPos) {
  
	var index; // как у всех :-)))
    
    if (arr.length > 1) {
        index = parting (arr, startPos, endPos);
        if ( startPos < index - 1) {
			qS(arr, startPos, index -1);
        }
        if (index < endPos) {
            qS(arr, index, endPos);
        }
    }
    return arr;
}

function parting(arr , startPos , endPos) {
	
	var supElement = arr[ parseInt ((startPos + endPos) / 2)];
	var leftElement = startPos;//i
	var rightElement = endPos; //j
    
	while (leftElement <= rightElement) {
		 
		  while (arr[leftElement] < supElement) {
		  leftElement = leftElement + 1;
		  }
	      while (arr[rightElement] > supElement) {
		  rightElement = rightElement - 1;
	      }
	 	  
	  if(leftElement <= rightElement){           
                var temp = arr[leftElement];
                arr[leftElement] = arr[rightElement];
                arr[rightElement] = temp;
                leftElement =leftElement + 1; 
				rightElement = rightElement - 1;
	            }
	  }

return leftElement; // point of separation

 	  }


var res  = qS(arr, 0, arr.length -1);

console.log ( ' sorted array => ' + (res) );

console.log (res);

 
console.log ( 'END TASK ' );	
