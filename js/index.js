var rightKey, leftKey, topKey, bottomKey;

$(document).ready(function () {

	//Set up the triggers for the arrow keys
	$(document).keydown(function(e){
		if(e.keyCode == 38 && typeof topKey === 'function') {
			topKey();
		} else if(e.keyCode == 40 && typeof bottomKey === 'function') {
			bottomKey();
		}
	});
	
	parallax.add($("#slide1"))
			.add($("#slide2"))
			.add($("#slide3"))
			.add($("#slide4"))
			.add($("#slide5"))
			.add($("#slide6"))
			.add($("#slide7"))
			.add($("#slide8"))
			.add($("#slide9"))
			.add($("#slide10"))
			.add($("#slide11"))
			.add($("#slide12"));
			
	parallax.background = $("body");
	
	parallax.preload = function(){
		rightKey = leftKey = topKey = bottomKey = "";
	};
	
	parallax.slide1.onload=function(){
		setTop("slide2", "seed");
	};
	
	parallax.slide2.onload=function(){
		setTop("slide3", "racine");
		setBottom("slide1", "seed");
	};
	
	parallax.slide3.onload=function(){
		setTop("slide4", "slide4");
		setBottom("slide2", "tige");
	};

	parallax.slide4.onload=function(){
		setTop("slide5", "slide5");
		setBottom("slide3", "slide3");
	};
	
	parallax.slide5.onload=function(){
		setTop("slide6", "slide6");
		setBottom("slide4", "slide4");
	};	
	
	parallax.slide6.onload=function(){
		setTop("slide7", "slide7");
		setBottom("slide5", "slide5");
	};
	
	parallax.slide7.onload=function(){
		setTop("slide8", "slide8");
		setBottom("slide6", "slide6");
	};	
	
	parallax.slide8.onload=function(){
		setTop("slide9", "slide8");
		setBottom("slide7", "slide7");
	};
	
	parallax.slide9.onload=function(){
		setTop("slide10", "slide8");
		setBottom("slide8", "slide7");
	};
	
	parallax.slide10.onload=function(){
		setTop("slide11", "slide8");
		setBottom("slide9", "slide7");
	};
	
	parallax.slide11.onload=function(){
		setTop("slide12", "slide8");
		setBottom("slide10", "slide7");
	};
	
	parallax.slide12.onload=function(){
		setBottom("slide11", "slide7");
	};
	
	function setTop(page, text){
		$("#seed").show().unbind('click').click(function(){
			parallax[page].top();
		});
		topKey = function(){
			parallax[page].top();
		};
	}
	
	function setBottom(page, text){
		
		bottomKey = function(){
			parallax[page].bottom();
		};
	}
	
	parallax.slide1.show();
	
});