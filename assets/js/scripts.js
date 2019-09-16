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

$(function(){
	$("#inputPhone").mask("+9(999) 999-99-99");
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

var linkNav = document.querySelectorAll('[href^="#"]'),
    V = 1;
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) {
        e.preventDefault();
        var w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash
            }
        }
    }, false);
}