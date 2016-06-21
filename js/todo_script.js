$(document).ready(function(){

		$("#add-button").click(function(){

			var addText = $("#add-text").val();

			if (addText.length > 0) {
	            $("#firstUl").append("<li class = 'all-li'>" + addText + "<button  class ='all-buttons'>Delete</button>" + "</li>");
				var btn = $(".all-buttons");
				
				btn.on('click', function(e) {
					$(this).parent().remove();
					
				});
			} else {
	            $("#hidden-div").css("display","block");
	          	$("#add-button").prop('disabled', true);
	            $("#reset-button").prop('disabled', true);
	            $('#add-text').prop('disabled', true);
	            $("#add-text").css("background-color","red");
	        }
			
	});
		$("#ok-click").click(function(){
	            $("#hidden-div").css("display","none");
				$("#add-button").prop('disabled', false);
	            $("#reset-button").prop('disabled', false);
	            $('#add-text').prop('disabled', false);
	            $("#add-text").css("background-color","white");
	});
		


	$('.all-buttons').click(function() {
		$(this).parent().remove();

	});

		

});



