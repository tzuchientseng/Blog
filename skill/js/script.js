$(document).ready(function(){
		$('input').change(function(){
			var  p1=$('input[id="f-product1"]:checked').val()
				,p2=$('input[id="f-product2"]:checked').val()
				,p3=$('input[id="f-product3"]:checked').val()
				
			if (p1){
				$('span.sk1').html("Python");
				$('span.sk2').html("Java");
				$('span.sk3').html("C++");
				$('span.sk4').html("C");
				$('span.sk5').html("Heroku Deployment");
				$('span.sk6').html("DataBase SQL");}
			//else
				//$('#car').removeClass('selected')

			if (p2){
				$('span.sk1').html("TypeScript(JS)");
				$('span.sk2').html("Vue3");
				$('span.sk3').html("Vue2");
				$('span.sk4').html("React");
				$('span.sk5').html("CSS, Bootstrap");
				$('span.sk6').html("Flutter(Dart)");}
			//else
				//$('#bus').removeClass('selected')

			if (p3){
				$('span.sk1').html("魔術表演");
				$('span.sk2').html("木吉他");
				$('span.sk3').html("鋼琴");
				$('span.sk4').html("小提琴");
				$('span.sk5').html("電吉他");
				$('span.sk6').html("滑板");}
			//else
				//submit.attr('disabled','disabled')
		}).eq(1).trigger('change');
	});
	