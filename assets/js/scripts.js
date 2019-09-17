$('a[href^="#"]').click(function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
		top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 500);
});

$(function(){
	$.mask.definitions['~']='[123456789]';
	$("input[type=amount]").mask("~999999",{placeholder:""});
	$.mask.definitions['9'] = '';
	$.mask.definitions['d'] = '[0-9]';
	$("input[type=phone]").mask("+8(029) ddd-dd-dd");
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
});
function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}
var data = [{ "from":"Барселона", "to":"Ла Рока Виладж", "four":"80", "eight":"100" },
			{ "from":"Барселона", "to":"Аэропорт Жироны", "four":"110", "eight":"130" },
			{ "from":"Барселона", "to":"Калелья", "four":"80", "eight":"100" },
			{ "from":"Барселона", "to":"Пинеда де Ма", "four":"90", "eight":"110" },
			{ "from":"Барселона", "to":"Санта-Сусанна", "four":"100", "eight":"120" },
			{ "from":"Барселона", "to":"Бланес", "four":"100", "eight":"120" },
			{ "from":"Барселона", "to":"Малграт де Мар", "four":"110", "eight":"130" },
			{ "from":"Барселона", "to":"Лорет де Мар", "four":"120", "eight":"140" },
			{ "from":"Барселона", "to":"Тосса де Мар", "four":"130", "eight":"150" },
			{ "from":"Барселона", "to":"Сант Фелиу де Гишольс", "four":"130", "eight":"150" },
			{ "from":"Барселона", "to":"Сагаро", "four":"140", "eight":"160" },
			{ "from":"Барселона", "to":"Плая де Аро", "four":"140", "eight":"160" },
			{ "from":"Барселона", "to":"Паламос", "four":"140", "eight":"160" },
			{ "from":"Барселона", "to":"Палафружель", "four":"155", "eight":"180" },
			{ "from":"Барселона", "to":"Бегур", "four":"155", "eight":"180" },
			{ "from":"Барселона", "to":"Ла Эскала", "four":"160", "eight":"190" },
			{ "from":"Барселона", "to":"Розес/Эмпуриябрава", "four":"200", "eight":"220" },
			{ "from":"Барселона", "to":"Кастельфельс", "four":"40", "eight":"60" },
			{ "from":"Барселона", "to":"Ситжес", "four":"70", "eight":"90" },
			{ "from":"Барселона", "to":"Виланова и Ла Желтру", "four":"80", "eight":"100" },
			{ "from":"Барселона", "to":"Калафель", "four":"90", "eight":"110" },
			{ "from":"Барселона", "to":"Бендрель", "four":"100", "eight":"120" },
			{ "from":"Барселона", "to":"Кома Руга", "four":"110", "eight":"130" },
			{ "from":"Барселона", "to":"Торредембарра", "four":"120", "eight":"140" },
			{ "from":"Барселона", "to":"Таррагона", "four":"130", "eight":"150" },
			{ "from":"Барселона", "to":"Реус", "four":"140", "eight":"160" },
			{ "from":"Барселона", "to":"Салоу-Порт Авентура", "four":"140", "eight":"160" },
			{ "from":"Барселона", "to":"Камбрилс", "four":"150", "eight":"170" },
			{ "from":"Барселона", "to":"Миами Плая", "four":"150", "eight":"170" },
			{ "from":"Барселона", "to":"Оспиталет де Инфарт", "four":"180", "eight":"200" },
			{ "from":"Барселона", "to":"Ла Амполья", "four":"200", "eight":"230" },
			{ "from":"Барселона", "to":"Валенсия", "four":"420", "eight":"480" },
			{ "from":"Барселона", "to":"Бадалона", "four":"50", "eight":"70" },
			{ "from":"Барселона", "to":"Эль Масноу", "four":"60", "eight":"80" },
			{ "from":"Барселона", "to":"Премия де Мар", "four":"65", "eight":"85" },
			{ "from":"Барселона", "to":"Виласар де Мар", "four":"70", "eight":"90" },
			{ "from":"Барселона", "to":"Матаро", "four":"80", "eight":"100" },
			{ "from":"Барселона", "to":"Аренис де Мар", "four":"90", "eight":"120" },
			{ "from":"Барселона", "to":"Канет де Мар", "four":"90", "eight":"120" },
			{ "from":"Барселона", "to":"Капелья", "four":"90", "eight":"120" },
			{ "from":"Барселона", "to":"Пинеда де Мар", "four":"90", "eight":"120" }];
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