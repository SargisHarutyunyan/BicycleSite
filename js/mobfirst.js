var names = ["Անվադող","Յուղ","Լուսարձակ","Մարտկոց"];
var prices = [20000,15000,25000,18000];
var tempPrice = 0;
var countf = 0;
var totalPrice = 0;
var name = "";

function divClick(){
	document.getElementById("small-zambyux").style.display = "none";
	/*document.getElementById("big-zambyux").style.width = 16%;*/
	document.getElementById("zambyuxDiv").style.display = "block";
	setTimeout("close()", 6000);



}
function count(el) {
	var tempId = parseInt(el.id);
	var inputId = "inp" + tempId;
	var name = names[tempId];

	var countf = document.getElementById(inputId).value;
	

if(countf > 0){	
	
	tempPrice = prices[tempId] * countf;
	totalPrice = totalPrice + tempPrice;
}
else{

	countf = 0;
}


	var message = document.getElementById("zambyux");


	message.innerHTML = "Ընտրված ապրանքը՝ " + name + "։" + "<br>" + "Քանակությունը՝ " + countf + "։" + "<br>" + "Արժեքը՝ " + tempPrice + "դր։" + "<br>" + "Ընդհանուր գնումների արժեքը՝ " + totalPrice + "դր։";
	var messageDiv = document.getElementById("zambyuxDiv");
	messageDiv.style.display = "block";

	setTimeout("close()", 6000);


}
function close(){

	var messageDiv = document.getElementById("zambyuxDiv");
	messageDiv.style.display = "none";
	document.getElementById("small-zambyux").style.display = "block";

}


var img_right = new Array("2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg");

			
			var i = 0 ;
			function f() {
			
			document.getElementById("big-photo").src="img/" + img_right[i];
			i++;
			setTimeout("f()", 4000);
			if (i == 6) i = 0;
			}
		
			
			var i = 0 ;
		
			
			function mouseover1() {
			
			document.getElementById("big-photo").src="img/" + img_right[0];
			
			}
			
			function mouseover2() {
			
			document.getElementById("big-photo").src="img/" + img_right[1];
			
			}
			function mouseover3() {
			
			document.getElementById("big-photo").src="img/" + img_right[2];
			
			}
			function mouseover4() {
			
			document.getElementById("big-photo").src="img/" + img_right[3];
			
			}
			function mouseover5() {
			
			document.getElementById("big-photo").src="img/" + img_right[4];
			
			}
			function mouseover6() {
			
			document.getElementById("big-photo").src="img/" + img_right[5];
			
			}
	

	