<?php
   ini_set('log_errors','Off');
   $utm_medium = $_GET["utm_medium"];
   $utm_source = $_GET["utm_source"];
   $utm_campaign = $_GET["utm_campaign"];
   $utm_term = $_GET["utm_term"];
   $utm_content = $_GET["utm_content"];
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="initial-scale=1, width=device-width">
		<title>BarCar</title>
		<link href="vendor/bootstrap/bootstrap.min.css" rel="stylesheet">
		<link rel="stylesheet" href="assets/styles/stylesheet.css">
		<link rel="stylesheet" href="assets/styles/style.css">
		<link rel="stylesheet" href="assets/styles/media.css">
	</head>
	<body>
		<header class="sticky">
			<nav class="navbar navbar-expand-lg navbar-light navbar-width">
				<a class="navbar-brand navbar-brand-text-style" href="#main">
					<img src="assets/img/logo.svg" alt="">
					<strong>BarCar</strong>
				</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
					<ul class="navbar-nav align-items-center justify-content-end navbar-text-style">
						<li class="nav-item">
							<a class="nav-link nav-link-color nav-link-padding" href="#cost">Расчитать стоимость</a>
						</li>
						<li class="nav-item">
							<a class="nav-link nav-link-color nav-link-padding" href="#feedback">Бесплатная консультация</a>
						</li>
						<li class="nav-item text-right">
							<a class="nav-link nav-link-color nav-link-padding link-sticky" href="tel:+34656463908"><strong>+346 56 463 908</strong></a>
							<a class="nav-link nav-link-padding  disabled link-sticky2" href="#" tabindex="-1" aria-disabled="true">пн-сб 8:00 - 0:00</a>
						</li>
					</ul>
				</div>
			</nav>	
		</header>
		<section id="main">
			<div class="container-fluid overflow-hidden main-background">
				<div class="container position-relative mt-5">
					<article class="main-text">
						<h1 class="text-left">Комфортный трансфер</h1>
						<h1 class="text-left">В Барселоне</h1>
						<p class="main-p">Доставим вас с комфортом из аэропорта<br>до места назначения и обратно</p>
						<ul class="list-group list-group-horizontal advantage-list ">
							<li class="list-group-item list-border">Русскоговорящие<br> водители</li>
							<li class="list-group-item list-border">Большой<br> выбор авто</li>
							<li class="list-group-item list-border list-border-none">Встретим<br> с табличкой</li>
						</ul>
						<div class="btn-position">
							<button class="btn btn-primary btn-style" data-toggle="modal" data-target="#Modal-price">Расчитать стоимость</button>
						</div>
					</article>
					<div class="main-img">
						<div class="main-img-border">
							<div class="main-img-rotate">
								<img src="assets/img/photo.jpg" height="100%" alt="">
							</div>
						</div>
					</div>
					<div class="modal fade" id="Modal-price" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title modal-title-style" id="exampleModalLabel">Расчет стоимости</h5>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<form autocomplete="off" onsubmit="return false" id="form">
										<div class="form align-items-end">
											<div class="form-group autocomplete">
												<label class="label-style" for="inputFromModal">Укажите место отправления*</label>
												<input type="from" class="form-control form-control-style" id="inputFromModal" placeholder="Например: Сан-Пауло">
											</div>
											<div class="form-group autocomplete">
												<label class="label-style" for="inputToModal">Укажите место прибытия*</label>
												<input type="to" class="form-control form-control-style" id="inputToModal" placeholder="Например: Сан-Пауло">
											</div>
											<div class="form-group">
												<label class="label-style" for="inputNumberModal">Укажите количество человек*</label>
												<input type="number" class="form-control form-control-style" id="inputNumberModal" placeholder="Например: Сан-Пауло" onkeypress="return event.charCode > 48 && event.charCode < 57" min="1" max="8">
											</div>
											<div class="form-group">
												<button type="submit" data-dismiss="modal" class="btn btn-primary btn-style btn-block" id="submit-form">Узнать</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="auto">
			<div class="container">
				<h1>Наш автопарк</h1>
				<article class="container">
					<div class="row justify-content-between">
						<div class="d-flex flex-column align-items-center auto-background">
							<div class="auto">
								<h2>Volkswagen Caravelle</h2>
								<p>8 мест и 1 водитель. Детские кресла в наличии.</p>
							</div>
							<img src="assets/img/auto1.png" alt="">
						</div>
						<div class="d-flex flex-column align-items-center auto-background">
							<div class="auto">
								<h2>Citroen Jumpy </h2>
								<p>7 мест и 1 водитель. Детские кресла в наличии.</p>
							</div>
							<img src="assets/img/auto2.png" alt="">
						</div>
					</div>
				</article>
				<article class="row">
					<p class="auto-request">Так же вы можете заказать авто по вашим предпочтениям.<br>Cтоимость поездки не изменится</p>
					<button class="btn btn-primary btn-style mx-auto" id="btn-request" data-toggle="modal" data-target="#Modal-auto">Заказать авто премиум-класса</button>
				</article>	
				<div class="modal fade" id="Modal-auto" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title modal-title-style" id="exampleModalLabel">Заказ авто премиум-класса</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form id="auto-massege-form">
									<input name="request[TITLE]" value="Форма отправки сообщений" type="hidden">
									<div class="form-group mb-3">
										<label class="label-style" for="inputName">Введите своё имя*</label>
										<input type="name" class="form-control form-control-style" name="request[NAME]" id="inputName" placeholder="Например: Сергей">
									</div>
									<div class="form-group mb-3">
										<label class="label-style" for="inputPhoneAuto">Введите контактный номер телефона*</label>
										<input type="phone" class="form-control form-control-style" name="request[PHONE]" id="inputPhoneAuto" placeholder="+8(029) 620-20-23">
									</div>
									<div class="form-group mb-3">
										<label class="label-style" for="inputMassege">Ваше сообщение*</label>
										<textarea class="form-control form-control-style" name="request[MASSEGE]" id="inputMassege" rows="5"
										placeholder="Например: Подскажите, хочу оправится из Сан-Пауло в центр, сколько будет стоить и можно ли ехать на черном авто?"></textarea>
									</div>
									<div class="form-group mb-3">
										<button type="submit" class="btn btn-primary btn-style btn-block" id="submit-auto-massege-form">Отправить сообщение</button>
									</div>
									<input name="request[utm_medium]" value="<?=$utm_medium;?>" type="hidden">
									<input name="request[utm_source]" value="<?=$utm_source;?>" type="hidden">
									<input name="request[utm_campaign]" value="<?=$utm_campaign;?>" type="hidden">
									<input name="request[utm_term]" value="<?=$utm_term;?>" type="hidden">
									<input name="request[utm_content]" value="<?=$utm_content;?>" type="hidden">
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>	
		<section id="cost">
			<div class="container">
				<h1>Стоимость поездки</h1>
				<form autocomplete="off" onsubmit="return false" id="table-form">
					<div class="form-row align-items-end">
						<div class="form-group col-md-3 px-1 autocomplete"">
							<label class="label-style" for="inputFrom">Укажите место отправления*</label>
							<input type="from" class="form-control form-control-style" id="inputFrom" placeholder="Например: Сан-Пауло">
						</div>
						<div class="form-group col-md-4 px-1 autocomplete">
							<label class="label-style" for="inputTo">Укажите место прибытия*</label>
							<input type="to" class="form-control form-control-style" id="inputTo" placeholder="Например: Сан-Пауло">
						</div>
						<div class="form-group col-md-3 px-1">
							<label class="label-style" for="inputNumber">Укажите количество человек*</label>
							<input type="number" class="form-control form-control-style" id="inputNumber" placeholder="Например: 1" onkeypress="return event.charCode > 48 && event.charCode < 57" min="1" max="8">
						</div>
						<div class="form-group col-md-2 px-1">
							<button class="btn btn-primary btn-style btn-block" id="butn">Узнать</button>
						</div>
					</div>
				</form>
				<div class="container-table">
					<table class="table table-hover table-border">
					  <thead>
						<tr>
						  <th scope="col">Место отправления</th>
						  <th scope="col">Место прибытия</th>
						  <th scope="col">До 4-х человек</th>
						  <th scope="col">До 8-х человек</th>
						</tr>
					  </thead>
					  <tbody id="table-content">
					  </tbody>
					</table>
				</div>
			</div>
			<div class="modal fade" id="valid-info" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-body">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
							<h2 class="feedback-h2 m-0">Стоимость поездки:</h2>
							<h2 class="feedback-h2 m-2 ml-4 mb-3" id="valid-info-Cost"></h2>
							<h2 class="feedback-h2 m-0 mb-3">Оставьте номер телефона, и мы скоро свяжемся с Вами:</h2>
							<form>
								<div class="form align-items-end">
									<input name="request[TITLE]" value="Маршрут" type="hidden">
									<fieldset class="d-none">
										<div class="form-group autocomplete">
											<input type="from" class="form-control form-control-style" name="request[FROM]" id="valid-info-From" placeholder="Например: Сан-Пауло">
										</div>
										<div class="form-group autocomplete">
											<input type="to" class="form-control form-control-style" name="request[TO]" id="valid-info-To" placeholder="Например: Сан-Пауло">
										</div>
										<div class="form-group">
											<input type="number" class="form-control form-control-style" name="request[NUMBER]" id="valid-info-Number" placeholder="Например: Сан-Пауло" onkeypress="return event.charCode > 48 && event.charCode < 57" min="1" max="8">
										</div>
									</fieldset>
									<div class="form-group">
										<input type="phone" class="form-control form-control-style" name="request[PHONE]" id="valid-info-Phone" placeholder="+8(029) 620-20-23">
									</div>
									<div class="form-group">
										<button type="submit" class="btn btn-primary btn-style btn-block" id="submit-form">Отправить</button>
									</div>
									<input name="request[utm_medium]" value="<?=$utm_medium;?>" type="hidden">
									<input name="request[utm_source]" value="<?=$utm_source;?>" type="hidden">
									<input name="request[utm_campaign]" value="<?=$utm_campaign;?>" type="hidden">
									<input name="request[utm_term]" value="<?=$utm_term;?>" type="hidden">
									<input name="request[utm_content]" value="<?=$utm_content;?>" type="hidden">
								</div>
							</form>
							<h2 class="feedback-h2 m-0 mt-4">Или напишите нам в удобный мессенджер</h2>
							<div class="container-fluid d-flex align-items-start flex-column mt-2">
								<a href="tg://resolve?domain=BarCar" class="row text-decoration-none align-items-center mt-3 ml-2">
									<img src="assets/img/telegram.svg" alt="">
									<p class="feedback-p">@BarCar</p>
								</a>
								<a href="https://vk.com/" class="row text-decoration-none align-items-center mt-3 ml-2">
									<img src="assets/img/vk.svg" alt="">
									<p class="feedback-p">/vk</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="modal fade" id="invalid-info" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-body">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
							<h2 class="feedback-h2 m-0 mb-3">Маршрут не найдет. Мы можем проконсультировать Вас, укажите свой номер:</h2>
							<form>
								<input name="request[TITLE]" value="Маршрут, которого нет в наличии" type="hidden">
								<fieldset class="d-none">
									<div class="form-group autocomplete">
										<input type="from" class="form-control form-control-style" name="request[FROM]" id="invalid-info-From" placeholder="Например: Сан-Пауло">
									</div>
									<div class="form-group autocomplete">
										<input type="to" class="form-control form-control-style" name="request[TO]" id="invalid-info-To" placeholder="Например: Сан-Пауло">
									</div>
									<div class="form-group">
										<input type="number" class="form-control form-control-style" name="request[NUMBER]" id="invalid-info-Number" placeholder="Например: Сан-Пауло" onkeypress="return event.charCode > 48 && event.charCode < 57" min="1" max="8">
									</div>
								</fieldset>
								<div class="form-group">
									<input type="phone" class="form-control form-control-style" name="request[PHONE]" id="valid-info-Phone" placeholder="+8(029) 620-20-23">
								</div>
								<div class="form-group">
									<button type="submit" class="btn btn-primary btn-style btn-block" id="submit-form">Отправить</button>
								</div>
								<input name="request[utm_medium]" value="<?=$utm_medium;?>" type="hidden">
								<input name="request[utm_source]" value="<?=$utm_source;?>" type="hidden">
								<input name="request[utm_campaign]" value="<?=$utm_campaign;?>" type="hidden">
								<input name="request[utm_term]" value="<?=$utm_term;?>" type="hidden">
								<input name="request[utm_content]" value="<?=$utm_content;?>" type="hidden">
							</form>
							<h2 class="feedback-h2 m-0 mt-4">Или напишите пишите нам в удобный мессенджер</h2>
							<div class="container-fluid d-flex align-items-start flex-column mt-2">
								<a href="tg://resolve?domain=BarCar" class="row text-decoration-none align-items-center mt-3 ml-2">
									<img src="assets/img/telegram.svg" alt="">
									<p class="feedback-p">@BarCar</p>
								</a>
								<a href="https://vk.com/" class="row text-decoration-none align-items-center mt-3 ml-2">
									<img src="assets/img/vk.svg" alt="">
									<p class="feedback-p">/vk</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="why-us">
			<div class="container">
				<article>
					<h1>Почему трансфер лучше такси</h1>
					<p class="why-us-p">
						Вы не просто получаете место в машине, а поезду с комфортом.<br>
						Водители нашего сервиса не только доставляют вас из одной точки в другую,<br>
						но и выполняют ряд дополнительных функций:
					</p>
				</article>
				<article class="container pb-3">
					<div class="row justify-content-between why-us">
						<article class="mw-75 d-flex flex-column why-us-margin">
							<div class="d-flex align-items-center why-us-list-item">
								<img src="assets/img/w1.svg" alt="" width="60px">
								<p>Выбор <span>безопасного</span> маршрута</p>
							</div>
							<div class="d-flex align-items-center why-us-list-item">
								<img src="assets/img/w2.svg" alt="" width="60px">
								<p><span>Встреча</span> водителем с табличкой</p>
							</div>
							<div class="d-flex align-items-center why-us-list-item">
								<img src="assets/img/w3.svg" alt="" width="60px">
								<p>Помощь <span>с заселением</span></p>
							</div>
							<div class="d-flex align-items-center why-us-list-item">
								<img src="assets/img/w4.svg" alt="" width="60px">
								<p>Помощь <span>с багажем</span></p>
							</div>
							<div class="d-flex align-items-center why-us-list-item">
								<img src="assets/img/w5.svg" alt="" width="60px">
								<p>Полезные <span>рекомендации</span> по нахождению в Барселоне</p>
							</div>
						</article>
						<div class="why-us-img">
							<div class="why-us-img-border">
								<div class="why-us-img-rotate">
									<img src="assets/img/door.jpg" height="100%"  alt="">
								</div>
							</div>
						</div>
					</div>
				</article>
			</div>
		</section>
		<section id="how-works">
			<div class="container"> 
				<div class="how-works">
					<h1 id="how-works-h1">Как это работает</h1>
					<article class="row">
						<div class="col-md-4 col-padding position-relative">
							<p>1</p>
							<div class="line"></div>
							<div class="cicle"></div>
							<p>Вы выбираете маршрут<br> в Барселоне</p>
						</div>
						<div class="col-md-4 col-padding position-relative">
							<p>2</p>
							<div class="line"></div>
							<div class="cicle"></div>
							<p>Оставляете заявку<br> на сайте</p>
						</div>
						<div class="col-md-4 col-padding position-relative">
							<p>3</p>
							<div class="cicle"></div>
							<p>Наш водитель встречает<br> вас и довозит до нужного<br> места</p>
						</div>
					</article>
				</div>
			</div>
		</section>
		<section id="feedback">
			<div class="container">
				<h1 id="questions-title">Остались вопросы?<br>Бесплатная консультация</h1>
				<article class="row">
					<article class="col-md-6 offset-md-1 mt-2 order-2">
						<div class="container-fluid d-flex align-items-center my-3">
							<img src="assets/img/phone.svg" alt="">
							<div class="d-flex flex-column ml-3">
								<p class="feedback-label">Телефон</p>
								<a href="tel:+34656463908" id="phone">+346 56 463 908</a>
							</div>
						</div>
						<div class="container-fluid d-flex align-items-center my-3">
							<img src="assets/img/watch.svg" alt="">
							<div class="d-flex flex-column ml-3">
								<p class="feedback-label">Режим работы</p>
								<p class="feedback-p-work-time">пн-сб 8:00-0:00</p>
							</div>
						</div>
						<h2 class="feedback-h2">Или пишите нам в удобный мессенджер</h2>
						<div class="container-fluid d-flex align-items-start flex-column mt-2">
							<a href="tg://resolve?domain=BarCar" class="row text-decoration-none align-items-center mt-3 ml-2">
								<img src="assets/img/telegram.svg" alt="">
								<p class="feedback-p">@BarCar</p>
							</a>
							<a href="https://vk.com/" class="row text-decoration-none align-items-center mt-3 ml-2">
								<img src="assets/img/vk.svg" alt="">
								<p class="feedback-p">/vk</p>
							</a>
						</div>
					</article>
					<article class="col-md-5 order-1">
						<form id="massege-form">
							<input name="request[TITLE]" value="Форма отправки сообщений" type="hidden">
							<div class="form-group mb-3">
								<label class="label-style" for="inputName">Введите своё имя*</label>
								<input type="name" class="form-control form-control-style" name="request[NAME]" id="inputName" placeholder="Например: Сергей">
							</div>
							<div class="form-group mb-3">
								<label class="label-style" for="inputPhone">Введите контактный номер телефона*</label>
								<input type="phone" class="form-control form-control-style" name="request[PHONE]" id="inputPhone" placeholder="+346 56 463 908" size="25">
								<input class="d-none" type="checkbox" id="phone_mask" checked>
								<label class="d-none" id="descr" for="phone_mask">Маска ввода</label>
							</div>
							<div class="form-group mb-3">
								<label class="label-style" for="inputMassege">Ваше сообщение*</label>
								<textarea class="form-control form-control-style" name="request[MASSEGE]" id="inputMassege" rows="5"
								placeholder="Например: Подскажите, хочу оправится из Сан-Пауло в центр, сколько будет стоить и можно ли ехать на черном авто?"></textarea>
							</div>
							<div class="form-group mb-3">
								<button type="submit" class="btn btn-primary btn-style btn-block" id="submit-massege-form">Отправить сообщение</button>
							</div>
							<input name="request[utm_medium]" value="<?=$utm_medium;?>" type="hidden">
							<input name="request[utm_source]" value="<?=$utm_source;?>" type="hidden">
							<input name="request[utm_campaign]" value="<?=$utm_campaign;?>" type="hidden">
							<input name="request[utm_term]" value="<?=$utm_term;?>" type="hidden">
							<input name="request[utm_content]" value="<?=$utm_content;?>" type="hidden">
						</form>
					</article>
				</article>
			</div>
		</section>
		<footer>
			<div class="container">
				<div class="row align-items-center">
					<div class="col-md-4 left-footer-block">
						ООО "Юрстатус"<br>УНП:193120088
					</div>
					<div class="col-md-4 d-flex align-items-center flex-column center-footer-block">
						<img src="assets/img/logo.svg" width="100px" alt="">
						<h2 class="text-center">BarCar - трансфер</h2>
						<p>(с)2018-2019 Все права защищены</p>
					</div>
					<div class="col-md-4 right-footer-block">
						<p>Сделано в</p>
						<a href="http://dynamicov.ru/" class="container right-footer-block-content">
							<img src="assets/img/logo2.svg" alt="">
							<p>Dynamicov.</p>
						</a>
					</div>
				</div>
			</div>
		</footer>
		<script src="vendor/jQuery/jquery-3.4.1.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
		<script src="vendor/bootstrap/bootstrap.min.js"></script>
		<script src="https://cdn.rawgit.com/RobinHerbots/Inputmask/3.2.7/dist/min/jquery.inputmask.bundle.min.js" type="text/javascript"></script>
        <script src="https://cdn.rawgit.com/andr-04/inputmask-multi/1.2.0/js/jquery.inputmask-multi.min.js" type="text/javascript"></script>
		<script src="assets/js/scripts.js"></script>
	</body>
</html>