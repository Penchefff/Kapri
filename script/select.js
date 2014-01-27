(function () {

	var body = document.body;	
	var mainview = document.getElementById('mainview');
	var location = document.getElementById('location');
	var apartments = document.getElementById('apartments');	
	var kachestvo = document.getElementById('kachestvo');
	
		var def = document.getElementById('default');
	var location1 = document.getElementById('location1');
	var kachestvo1 = document.getElementById('kachestvo1');
	var apartments1 = document.getElementById('apartments1');
	
	
	var depmap = document.getElementById('depmap');	
	var shopmap = document.getElementById('shopmap');
	var relaxmap = document.getElementById('relaxmap');
	var commap = document.getElementById('commap');
	
	var shoppingmain = document.getElementById('shoppingmain');	
	var departments = document.getElementById('departments');
	var relaxmain = document.getElementById('relaxmain');
	var commain = document.getElementById('commain');
	

	var startimg1 = document.getElementById('startimg1');
	var startimg2 = document.getElementById('startimg2');
	var startimg3 = document.getElementById('startimg3');
	var startimg4 = document.getElementById('startimg4');	
	var slicedimg = document.getElementById('slicedimg');
	
		var view1 = document.getElementById('view1');
		var view2 = document.getElementById('view2');
		var view3 = document.getElementById('view3');
		var view4 = document.getElementById('view4');
	
	
		
	
	
	var current = startimg1;
	var currentnav = def;
	
			commain.addEventListener("click", function(evt){
	evt.preventDefault();	
	current.style.display = "none";
	commap.style.display = "inline";
	current = commap;

	
	}, false);
	
	
	
	
		relaxmain.addEventListener("click", function(evt){
	evt.preventDefault();	
		current.style.display = "none";
	relaxmap.style.display = "inline";

	current = relaxmap;
	}, false);
	
		view1.addEventListener("click", function(evt){
	evt.preventDefault();	
			current.style.display = "none";
	startimg1.style.display = "inline";

	current = startimg1;
	}, false);
	
			view2.addEventListener("click", function(evt){
	evt.preventDefault();	
			current.style.display = "none";
	startimg2.style.display = "inline";
	current = startimg2;
	}, false);
	
				view3.addEventListener("click", function(evt){
	evt.preventDefault();	
			current.style.display = "none";
	startimg3.style.display = "inline";
	current = startimg3;
	}, false);
	
					view4.addEventListener("click", function(evt){
	evt.preventDefault();	
			current.style.display = "none";
	startimg4.style.display = "inline";	
	current = startimg4;
	}, false);
	
	departments.addEventListener("click", function(evt){
	evt.preventDefault();	
			current.style.display = "none";
	depmap.style.display = "inline";
current = depmap;	
	}, false);
	
		shoppingmain.addEventListener("click", function(evt){
	 evt.preventDefault();	 
			current.style.display = "none";
	shopmap.style.display = "inline";
	current = shopmap;
	}, false);
	
	
	
		mainview.addEventListener("click", function(evt){
	 evt.preventDefault();	
	 currentnav.style.display = "none";
	def.style.display = "inline";
	currentnav = def;	
	}, false);
	
	
	
	
	location.addEventListener("click", function(evt){
	 evt.preventDefault();	
	 
currentnav.style.display = "none";
	location1.style.display = "inline";
	currentnav = location1;	
	}, false);
	
	apartments.addEventListener("click", function(evt){
	   evt.preventDefault();	
	currentnav.style.display = "none";
	apartments1.style.display = "inline";
	currentnav = apartments1;	
		
	current.style.display = "none";
	slicedimg.style.display = "inline-block";
	current = slicedimg;
	}, false);
	
	kachestvo.addEventListener("click", function(evt){
	    evt.preventDefault();	
currentnav.style.display = "none";
		kachestvo1.style.display = "inline";			
		currentnav = kachestvo1;
	}, false);	
		//***************
	var floor1 = document.getElementById('1floor1');
var floor2 = document.getElementById('1floor2');
var floor3 = document.getElementById('1floor3');
var floor4 = document.getElementById('1floor4');
var floor5 = document.getElementById('1floor5');
var floor6 = document.getElementById('1floor6');
	//***************
		floor1.onmouseover = function () {
		changeLampState1('light');
		}
		floor1.onmouseout = function () {
		changeLampState1('dark');
		}
		function changeLampState1(state){
		floor1.src="pictures/floors/floor1_"+state+".png"; //images/lamp-"+state+".png";
		}
		
	//***************	

		floor2.onmouseover = function () {
		changeLampState2('light');
		}
		floor2.onmouseout = function () {
		changeLampState2('dark');
		}
		function changeLampState2(state){
		floor2.src="pictures/floors/floor2_"+state+".png"; //images/lamp-"+state+".png";
		}
		
	//***************
		floor3.onmouseover = function () {
		changeLampState3('light');
		}
		floor3.onmouseout = function () {
		changeLampState3('dark');
		}
		function changeLampState3(state){
		floor3.src="pictures/floors/floor3_"+state+".png"; //images/lamp-"+state+".png";
		}
	//***************
		floor4.onmouseover = function () {
		changeLampState4('light');
		}
		floor4.onmouseout = function () {
		changeLampState4('dark');
		}
		function changeLampState4(state){
		floor4.src="pictures/floors/floor4_"+state+".png"; //images/lamp-"+state+".png";
		}

	
		//***************	
		floor5.onmouseover = function () {
		changeLampState5('light');
		}
		floor5.onmouseout = function () {
		changeLampState5('dark');
		}
		function changeLampState5(state){
		floor5.src="pictures/floors/floor5_"+state+".png"; //images/lamp-"+state+".png";
		}
	//***************	
			floor6.onmouseover = function () {
		changeLampState6('light');
		}
		floor6.onmouseout = function () {
		changeLampState6('dark');
		}
		function changeLampState6(state){
		floor6.src="pictures/floors/floor6_"+state+".png"; //images/lamp-"+state+".png";
		}
		//***************	
	
})();
