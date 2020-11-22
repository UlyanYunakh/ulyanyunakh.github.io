let darkTheme

$('#left').click(function () {
	
})

$('#right').click(function () {
	
})

$(window).on('load', function () {
	$('.page_dark-theme').hide()
	$('body').css({'background':'#B2A796', 'color':'#2f343e'})
	darkTheme = false
})

$(".theme-button, .item__theme-button").click(function () {
	if(!darkTheme){
		$('.page_dark-theme').show()
		$('.page_light-theme').hide()
		$('body').css({'background':'#2f343e','color':'#B2A796'})
		darkTheme = true
	}
	else {
		$('.page_dark-theme').hide()
		$('.page_light-theme').show()
		$('body').css({'background':'#B2A796', 'color':'#2f343e'})
		darkTheme = false
	}
})