var trueAnswers = [{"trueAnswer":"проверка"}];

$('#questions1').submit(function(event) {
	event.preventDefault();
	if (document.getElementById("trueRadios1").checked == true){
		$('#true').modal();
		setTimeout(hideTrue, 2000);
		document.getElementById("check").value++;
	}
	else {
		$('#false').modal();
		setTimeout(hideFalse, 2000);
	}
	temp = $('#questions1');
	temp.addClass('d-none');
	temp = $('#questions2');
	temp.addClass('d-block');
});
$('#questions2').submit(function(event) {
	event.preventDefault();
	if (document.getElementById("trueRadios2").checked == true){
		$('#true').modal();
		setTimeout(hideTrue, 2000);
		document.getElementById("check").value++;
	}
	else {
		$('#false').modal();
		setTimeout(hideFalse, 2000);
	}
	temp = $('#questions2');
	temp.removeClass('d-block');
	temp = $('#questions3');
	temp.addClass('d-block');
});
$('#questions3').submit(function(event) {
	event.preventDefault();
	if (document.getElementById("trueRadios3").checked == true){
		$('#true').modal();
		setTimeout(hideTrue, 2000);
		document.getElementById("check").value++;
	}
	else {
		$('#false').modal();
		setTimeout(hideFalse, 2000);
	}
	temp = $('#questions3');
	temp.removeClass('d-block');
	temp = $('#questions4');
	temp.addClass('d-block');
});
$('#questions4').submit(function(event) {
	event.preventDefault();
	var temp = document.getElementById("inputAnswer4").value;
	var answer = temp.toLowerCase();
	answer = answer.replace(/\s+/g, '');
	if ("1957" == answer){
		$('#true').modal();
		setTimeout(hideTrue, 2000);
		document.getElementById("check").value++;
	}
	else {
		$('#false').modal();
		setTimeout(hideFalse, 2000);
	}
	temp = $('#questions4');
	temp.removeClass('d-block');
	temp = $('#questions5');
	temp.addClass('d-block');
});
$('#questions5').submit(function(event) {
	event.preventDefault();
	var temp = document.getElementById("inputAnswer5").value;
	var answer = temp.toLowerCase();
	answer = answer.replace(/\s+/g, '');
	if ("инцидент" == answer){
		$('#true').modal();
		setTimeout(hideTrue, 2000);
		document.getElementById("check").value++;
	}
	else {
		$('#false').modal();
		setTimeout(hideFalse, 2000);
	}
	temp = $('#questions5');
	temp.removeClass('d-block');
	if ( document.getElementById("check").value == 5){
		document.getElementById("resoult1").innerHTML = document.getElementById("check").value + "/" + "5";
		temp = $('.resoult1');
		temp.addClass('d-flex');
		temp.addClass('flex-column');
		temp.addClass('align-items-center');
	}
	else if ( document.getElementById("check").value >= 3){
		document.getElementById("resoult2").innerHTML = document.getElementById("check").value + "/" + "5";
		temp = $('.resoult2');
		temp.addClass('d-flex');
		temp.addClass('flex-column');
		temp.addClass('align-items-center');
	}
	else if ( document.getElementById("check").value >= 1){
		document.getElementById("resoult3").innerHTML = document.getElementById("check").value + "/" + "5";
		temp = $('.resoult3');
		temp.addClass('d-flex');
		temp.addClass('flex-column');
		temp.addClass('align-items-center');
	}
	else if ( document.getElementById("check").value >= 0){
		document.getElementById("resoult4").innerHTML = document.getElementById("check").value + "/" + "5";
		temp = $('.resoult4');
		temp.addClass('d-flex');
		temp.addClass('flex-column');
		temp.addClass('align-items-center');
	}
});

function hideTrue(){
	$('#true').modal('hide');
}
function hideFalse(){
	$('#false').modal('hide');
}

$('#start').click(function () {
	var box = $('.box');
	box.addClass('box-transform');
	setTimeout(showBox, 700);
	setTimeout(showForm, 700);
});
function showBox(){
	var box = $('.box');
	box.addClass('box-transform-second');
}
function showForm(){
	var main = $('#main');
	main.addClass('d-block');
	var start = $('#start');
	start.addClass('d-none');
}