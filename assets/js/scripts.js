$('a[href^="#"]').click(function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
		top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 500);
});

$(function(){
	$.mask.definitions['~']='[123456789]';
	$("input[type=amount]").mask("~?9999",{placeholder:""});
	$.mask.definitions['9'] = '';
	$.mask.definitions['d'] = '[0-9]';
	$("input[type=phone]").mask("+d(ddd) ddd-dd-dd");
});

$(function goBack() {
  window.history.back();
});
$(window).scroll(function(){
	var nav = $('.navbar');
	var s = $('.link-sticky');
	var s2 = $('.link-sticky2');
	var sticky = $('.sticky'),
		scroll = $(window).scrollTop();

	if (scroll >= 50) {
		sticky.addClass('fixed');
		nav.addClass('navbar-sticky');
		s.addClass('nav-link-sticky-1');
		s2.addClass('nav-link-sticky-2');
	}
	else {
		sticky.removeClass('fixed');
		nav.removeClass('navbar-sticky');
		s.removeClass('nav-link-sticky-1');
		s2.removeClass('nav-link-sticky-2');
	}
});

$("#submit-massege-form").click(function() { 
 var name = $('input[name=user_name]').val();
 var tel = $('input[name=user_phone]').val();
 var massege = $('input[name=user_massege]').val();
 var otpravka = true;
 if(name==""){
 otpravka = false;
 }
 if(tel ==""){
 otpravka = false;
 }
 if(massege ==""){
 otpravka = false;
 }
 dannie = {'polz_name':name, 'polz_tel':tel, 'polz_massege':massege};
 if(otpravka)
 {
 $.post('senda.php', dannie, function(otvet){ rezultat = '<div>'+otvet.text+'</div>'; }, 'json');
 }
 });
 
 $("#submit-auto-massege-form").click(function() { 
 var name = $('input[name=auto_user_name]').val();
 var tel = $('input[name=auto_user_phone]').val();
 var massege = $('input[name=auto_user_massege]').val();
 var otpravka = true;
 if(name==""){
 otpravka = false;
 }
 if(tel ==""){
 otpravka = false;
 }
 if(massege ==""){
 otpravka = false;
 }
 dannie = {'polz_name':name, 'polz_tel':tel, 'polz_massege':massege};
 if(otpravka)
 {
 $.post('senda.php', dannie, function(otvet){ rezultat = '<div>'+otvet.text+'</div>'; }, 'json');
 }
 });
 
 $("#submit-table-form").click(function() { 
 var from = $('input[name=user_from]').val();
 var to = $('input[name=user_to]').val();
 var num = $('input[name=user_number]').val();
 var phone = $('input[name=user_phone]').val();
 var otpravka = true;
 if(from==""){
 otpravka = false;
 }
 if(to ==""){
 otpravka = false;
 }
 if(num ==""){
 otpravka = false;
 }
 if(phone ==""){
 otpravka = false;
 }
 dannie = {'polz_from':from, 'polz_to':to, 'polz_num':num, 'polz_phone':phone};
 if(otpravka)
 {
 $.post('senda-cost.php', dannie, function(otvet){ rezultat = '<div>'+otvet.text+'</div>'; }, 'json');
 }
 });
 
  $("#submit-form").click(function() { 
 var from = $('input[name=form-user_from]').val();
 var to = $('input[name=form-user_to]').val();
 var num = $('input[name=form-user_number]').val();
 var phone = $('input[name=form-user_phone]').val();
 var otpravka = true;
 if(from==""){
 otpravka = false;
 }
 if(to ==""){
 otpravka = false;
 }
 if(num ==""){
 otpravka = false;
 }
 if(phone ==""){
 otpravka = false;
 }
 dannie = {'polz_from':from, 'polz_to':to, 'polz_num':num, 'polz_phone':phone};
 if(otpravka)
 {
 $.post('senda-cost.php', dannie, function(otvet){ rezultat = '<div>'+otvet.text+'</div>'; }, 'json');
 }
 });
 
var data = [{ "from":"Коста-Брава", "to":"Ла Рока Виладж", "four":"80", "eight":"100" },
			{ "from":"Коста-Брава", "to":"Аэропорт Жироны", "four":"110", "eight":"130" },
			{ "from":"Коста-Брава", "to":"Калелья", "four":"80", "eight":"100" },
			{ "from":"Коста-Брава", "to":"Пинеда де Ма", "four":"90", "eight":"110" },
			{ "from":"Коста-Брава", "to":"Санта-Сусанна", "four":"100", "eight":"120" },
			{ "from":"Коста-Брава", "to":"Бланес", "four":"100", "eight":"120" },
			{ "from":"Коста-Брава", "to":"Малграт де Мар", "four":"110", "eight":"130" },
			{ "from":"Коста-Брава", "to":"Лорет де Мар", "four":"120", "eight":"140" },
			{ "from":"Коста-Брава", "to":"Тосса де Мар", "four":"130", "eight":"150" },
			{ "from":"Коста-Брава", "to":"Сант Фелиу де Гишольс", "four":"130", "eight":"150" },
			{ "from":"Коста-Брава", "to":"Сагаро", "four":"140", "eight":"160" },
			{ "from":"Коста-Брава", "to":"Плая де Аро", "four":"140", "eight":"160" },
			{ "from":"Коста-Брава", "to":"Паламос", "four":"140", "eight":"160" },
			{ "from":"Коста-Брава", "to":"Палафружель", "four":"155", "eight":"180" },
			{ "from":"Коста-Брава", "to":"Бегур", "four":"155", "eight":"180" },
			{ "from":"Коста-Брава", "to":"Ла Эскала", "four":"160", "eight":"190" },
			{ "from":"Коста-Брава", "to":"Розес/Эмпуриябрава", "four":"200", "eight":"220" },
			{ "from":"Коста-Дорада", "to":"Кастельфельс", "four":"40", "eight":"60" },
			{ "from":"Коста-Дорада", "to":"Ситжес", "four":"70", "eight":"90" },
			{ "from":"Коста-Дорада", "to":"Виланова и Ла Желтру", "four":"80", "eight":"100" },
			{ "from":"Коста-Дорада", "to":"Калафель", "four":"90", "eight":"110" },
			{ "from":"Коста-Дорада", "to":"Бендрель", "four":"100", "eight":"120" },
			{ "from":"Коста-Дорада", "to":"Кома Руга", "four":"110", "eight":"130" },
			{ "from":"Коста-Дорада", "to":"Торредембарра", "four":"120", "eight":"140" },
			{ "from":"Коста-Дорада", "to":"Таррагона", "four":"130", "eight":"150" },
			{ "from":"Коста-Дорада", "to":"Реус", "four":"140", "eight":"160" },
			{ "from":"Коста-Дорада", "to":"Салоу-Порт Авентура", "four":"140", "eight":"160" },
			{ "from":"Коста-Дорада", "to":"Камбрилс", "four":"150", "eight":"170" },
			{ "from":"Коста-Дорада", "to":"Миами Плая", "four":"150", "eight":"170" },
			{ "from":"Коста-Дорада", "to":"Оспиталет де Инфарт", "four":"180", "eight":"200" },
			{ "from":"Коста-Дорада", "to":"Ла Амполья", "four":"200", "eight":"230" },
			{ "from":"Коста-Дорада", "to":"Валенсия", "four":"420", "eight":"480" },
			{ "from":"Коста-Маресме", "to":"Бадалона", "four":"50", "eight":"70" },
			{ "from":"Коста-Маресме", "to":"Эль Масноу", "four":"60", "eight":"80" },
			{ "from":"Коста-Маресме", "to":"Премия де Мар", "four":"65", "eight":"85" },
			{ "from":"Коста-Маресме", "to":"Виласар де Мар", "four":"70", "eight":"90" },
			{ "from":"Коста-Маресме", "to":"Матаро", "four":"80", "eight":"100" },
			{ "from":"Коста-Маресме", "to":"Аренис де Мар", "four":"90", "eight":"120" },
			{ "from":"Коста-Маресме", "to":"Канет де Мар", "four":"90", "eight":"120" },
			{ "from":"Коста-Маресме", "to":"Капелья", "four":"90", "eight":"120" },
			{ "from":"Коста-Маресме", "to":"Пинеда де Мар", "four":"90", "eight":"120" }];
var table = document.getElementById('table-content');

data.forEach(function(object) {
	var tr = document.createElement('tr');
	tr.setAttribute('class', 'table-hover-style');
	tr.innerHTML ='<td>' + object.from + '</td>' +
		'<td>' + object.to + '</td>' +
		'<td>' + object.four + '</td>' +
		'<td>' + object.eight + '</td>';;
	table.appendChild(tr);
});