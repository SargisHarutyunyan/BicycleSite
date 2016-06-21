/*var adminLogin = "1234";
     var adminPassword = "pass";
    
    function up(){
     
      
      
      var login = document.getElementById("login").value;
      var password = document.getElementById("password").value;
      
      
      if(login.length != 0 && password.length !=0){
        document.getElementById("but").removeAttribute("disabled");
      }else{
        
      document.getElementById("but").setAttribute("disabled", "disabled");
      }
      
    }
    function check(){
       
      var login = document.getElementById("login").value;
      var password = document.getElementById("password").value;
      
      if(login != adminLogin && password != adminPassword){
        var form = document.getElementById("form1");
        form.setAttribute("action","notValid.html");

      }
     
    }*/

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
    