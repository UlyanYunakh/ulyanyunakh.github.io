$("#navbarNav").on("click","a", function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
		top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 500);
});

$(function(){
	$("input[type=phone]").mask("+9(999) 999-99-99");
	$.mask.definitions['~']='[123456789]';
	$("input[type=amount]").mask("~999999",{placeholder:""});
});

$(window).scroll(function(){
	var nav = $('.navbar');
	var sticky = $('.sticky'),
		scroll = $(window).scrollTop();

	if (scroll >= 50) {
		sticky.addClass('fixed');
		nav.addClass('navbar-sticky');
	}
	else {
		sticky.removeClass('fixed');
		nav.removeClass('navbar-sticky');
	} 

	check()
});

var data = [
	{ "from":"Сан-Пауло", "to":"Барселона", "four":"Да", "eight":"Нет" },
	{ "from":"Барселона", "to":"Сан-Пауло", "four":"Нет", "eight":"Да" },
	{ "from":"Сан-Пауло", "to":"Барселона", "four":"Да", "eight":"Нет" },
	{ "from":"Барселона", "to":"Сан-Пауло", "four":"Нет", "eight":"Да" }
];
var table = document.getElementById('table-content');

data.forEach(function(object) {
	var tr = document.createElement('tr');
	tr.setAttribute('data-toggle', 'modal');
	tr.setAttribute('data-target', '#Modal');
	tr.setAttribute('class', 'table-hover-style');
	tr.innerHTML ='<td>' + object.from + '</td>' +
		'<td>' + object.to + '</td>' +
		'<td>' + object.four + '</td>' +
		'<td>' + object.eight + '</td>';;
	table.appendChild(tr);
});



