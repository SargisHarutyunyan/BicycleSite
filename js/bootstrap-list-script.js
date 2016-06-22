function upTable(){
     
      var product = document.getElementById("productInput").value;
      var price = document.getElementById("priceInput").value;
      
      
      if(product.length != 0 && price.length !=0){
        document.getElementById("addButton").removeAttribute("disabled");
      }
      else{
        
      document.getElementById("addButton").setAttribute("disabled", "disabled");
      }
      
}



$(document).ready(function(){

  

  function retDate() {
    var date = new Date();
      var yyyy = date.getFullYear().toString();
      var mm = (date.getMonth()+1).toString(); 
      var dd  = date.getDate().toString();
      var hh = date.getHours().toString();
      var min = date.getMinutes().toString();
      var ss = date.getSeconds().toString();
      return (dd[1]?dd:"0"+dd[0]) + "/" + (mm[1]?mm:"0"+mm[0]) + "/" + yyyy + "  " + (hh[1]?hh:"0"+hh[0]) +":"+ (min[1]?min:"0"+min[0]) +":"+ (ss[1]?ss:"0"+ss[0]); 
  }

  
  var idProduct = 1;
  $("#addButton").click(function(){
    var product = $("#productInput").val();
    var price = $("#priceInput").val();
    var date = retDate();
    $("#myTable").append("<tr> <td>" + idProduct + "</td> <td>" + product + "</td> <td>" + price + "</td> <td>" + date + "</td> </tr>");
    idProduct++;
    $("#productInput").val("");
    $("#priceInput").val("");
    upTable();
    
    


  });






});
    