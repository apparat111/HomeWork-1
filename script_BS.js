"use strict";

console.log ( 'START TASK BUBLE SORT' );

//var arrBS = [5, 8, 4, 1, 2];

var arrBS = [12 , 3, 5, 22 , 8, 94];

console.log ( ' unsorted array  ' + (arrBS) ); 


function BS(arrBS) {    
                
    
	
    for (var i = 0; i < (arrBS.length -1); i++){ 
        
		for (var j = 0 ; j < (arrBS.length - 1 - 1); j++) {
		 
           if (arrBS[j] > arrBS[j+1])
            { var tmp = arrBS[j+1];
        	  arrBS[j+1] = arrBS[j];
			  arrBS[j] = tmp; }
        }
     }                     
    return arrBS;    // На выходе сортированный по возрастанию массив 
}

var resBS = BS(arrBS);

console.log (' sorted array  ' + resBS); 



console.log ( 'END TASK ' );


