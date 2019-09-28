$('a[href^="#"]').click(function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
		top = $(id).offset().top - 10;
	$('body,html').animate({scrollTop: top}, 500);
});

var max_chars = 1;

$('input[type=number]').keydown( function(e){
    if ($(this).val().length >= max_chars) { 
        $(this).val($(this).val().substr(0, max_chars));
    }
});

$('input[type=number]').keyup( function(e){
    if ($(this).val().length >= max_chars) { 
        $(this).val($(this).val().substr(0, max_chars));
    }
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

var from = ["Коста-Брава","Коста-Дорада","Коста-Маресме"];
var to = ["Ла Рока Виладж","Аэропорт Жироны","Калелья","Пинеда де Ма","Санта-Сусанна",
		"Бланес","Малграт де Мар","Лорет де Мар","Тосса де Мар","Сант Фелиу де Гишольс",
		"Сагаро","Плая де Аро","Паламос","Палафружель","Бегур","Ла Эскала","Розес/Эмпуриябрава",
		"Кастельфельс","Ситжес","Виланова и Ла Желтру","Калафель","Бендрель","Кома Руга",
		"Торредембарра","Таррагона","Реус","Салоу-Порт Авентура","Камбрилс","Миами Плая",
		"Оспиталет де Инфарт","Ла Амполья","Валенсия","Бадалона","Эль Масноу","Премия де Мар",
		"Виласар де Мар","Матаро","Аренис де Мар","Канет де Мар","Капелья","Пинеда де Мар"];
function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}
autocomplete(document.getElementById("inputFrom"), from);
autocomplete(document.getElementById("inputTo"), to);
autocomplete(document.getElementById("inputFromModal"), from);
autocomplete(document.getElementById("inputToModal"), to);

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

function someFunc(){
	var first = document.getElementById("inputFrom").value;
	var second = document.getElementById("inputTo").value;
	var num = document.getElementById("inputNumber").value;
	var y = 0, valid = 0;
	data.forEach(function(object) {
		y++;
	});
	for (var i = 0; i < y; i++) {
		if (first==data[i].from){
			if (second==data[i].to){ 
				if (num <= 4) {
					document.getElementById("valid-info-From").value = first;
					document.getElementById("valid-info-To").value = second;
					document.getElementById("valid-info-Number").value = num;
					var temp = document.getElementById("valid-info-Cost");
					temp.innerHTML = data[i].four;
					$('#valid-info').modal();
					valid = 1;
					break;
				}
				if (num > 4) {
					document.getElementById("valid-info-From").value = first;
					document.getElementById("valid-info-To").value = second;
					document.getElementById("valid-info-Number").value = num;
					var temp = document.getElementById("valid-info-Cost");
					temp.innerHTML = data[i].eight;
					$('#valid-info').modal();
					valid = 1;
					break;
				}
			}
		}
    }
	if (valid == 0) $('#invalid-info').modal();
}
function someFunc2(){
	var first = document.getElementById("inputFromModal").value;
	var second = document.getElementById("inputToModal").value;
	var num = document.getElementById("inputNumberModal").value;
	var y = 0, valid = 0;
	data.forEach(function(object) {
		y++;
	});
	for (var i = 0; i < y; i++) {
		if (first==data[i].from){
			if (second==data[i].to){ 
				if (num <= 4) {
					document.getElementById("valid-info-From").value = first;
					document.getElementById("valid-info-To").value = second;
					document.getElementById("valid-info-Number").value = num;
					var temp = document.getElementById("valid-info-Cost");
					temp.innerHTML = data[i].four;
					$('#valid-info').modal();
					valid = 1;
					break;
				}
				if (num > 4 && num <= 8) {
					document.getElementById("valid-info-From").value = first;
					document.getElementById("valid-info-To").value = second;
					document.getElementById("valid-info-Number").value = num;
					var temp = document.getElementById("valid-info-Cost");
					temp.innerHTML = data[i].eight;
					$('#valid-info').modal();
					valid = 1;
					break;
				}
			}
		}
    }
	if (valid == 0) $('#invalid-info').modal();
}
function someFuncFirst(){
	setTimeout(someFunc2, 400);
}
document.getElementById("butn").onclick = someFunc;
document.getElementById("submit-form").onclick = someFuncFirst;

var maskList = $.masksSort($.masksLoad("phone-codes.json"), ['#'], /[0-9]|#/, "mask");
var maskOpts = {
	inputmask: {
		definitions: {
			'#': {
				validator: "[0-9]",
				cardinality: 1
			}
		},
		//clearIncomplete: true,
		showMaskOnHover: false,
		autoUnmask: true
	},
	match: /[0-9]/,
	replace: '#',
	list: maskList,
	listKey: "mask",
	onMaskChange: function(maskObj, completed) {
		if (completed) {
			var hint = maskObj.name_ru;
			if (maskObj.desc_ru && maskObj.desc_ru != "") {
				hint += " (" + maskObj.desc_ru + ")";
			}
			$("#descr").html(hint);
		} else {
			$("#descr").html("Маска ввода");
		}
	}
};	

$('#phone_mask').change(function() {
	if ($('#phone_mask').is(':checked')) {
		$('input[type=phone]').inputmasks(maskOpts);
	} else {
		$('input[type=phone]').inputmask("+[####################]", maskOpts.inputmask);
		$("#descr").html("Маска ввода");
	}
});
$('#phone_mask').change();