let darkTheme

$('#left').click(function () {
	alert('right')
})

$('#right').click(function () {
	alert('right')
})

$(window).on('load', function () {
	$('.left__theme-button_dark-theme').hide()
	$('.left__wheel_dark-theme').hide()
	$('.right_dark-theme').hide()
	$('.top_dark-theme').hide()
	darkTheme = false
})

$(".theme-button, .top__theme-button").click(function () {
	if(!darkTheme){
		$('.left__theme-button_light-theme').hide()
		$('.left__wheel_light-theme').hide()
		$('.right_light-theme').hide()
		$('.top_light-theme').hide()

		$('.left__theme-button_dark-theme').show()
		$('.left__wheel_dark-theme').show()
		$('.right_dark-theme').show()
		$('.top_dark-theme').show()

		$('body').css({'background':'#2f343e','color':'#B2A796'})
		darkTheme = true
	}
	else {
		$('.left__theme-button_light-theme').show()
		$('.left__wheel_light-theme').show()
		$('.right_light-theme').show()
		$('.top_light-theme').show()

		$('.left__theme-button_dark-theme').hide()
		$('.left__wheel_dark-theme').hide()
		$('.right_dark-theme').hide()
		$('.top_dark-theme').hide()

		$('body').css({'background':'#B2A796', 'color':'#2f343e'})
		darkTheme = false
	}
})