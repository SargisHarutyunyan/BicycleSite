var img_right = new Array("2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg");
		
var i = 0 ;
function f() {
        document.getElementById("big-photo").src="img/" + img_right[i];
        i++;
        setTimeout("f()", 3000);
    if (i == 6){
        i = 0;
    }
}



function mouseover(el) {
		var tempId = parseInt(el.id);	     
        document.getElementById("big-photo").src="img/" + img_right[tempId];
		
}
			
	

	