"use strict";

$(document).ready(function () {
	/* Video Lightbox */
	if (!!$.prototype.simpleLightboxVideo) {
		$('.video').simpleLightboxVideo();
	}

	/* ScrollUp */
	if (!!$.prototype.scrollUp) {
		$.scrollUp();
	}

	/* Responsive Navigation */
	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").on("click", function () {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(500);
			$(this).removeClass("open");
		} else {
			$("nav#nav-mobile ul").addClass("expanded").slideDown(500);
			$(this).addClass("open");
		}
	});

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-mobile ul a").on("click", function () {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$("#nav-trigger span").removeClass("open");
		}
	});

	/* Sticky Navigation */
	if (!!$.prototype.stickyNavbar) {
		$('#header').stickyNavbar();
	}

	$('#content').waypoint(function (direction) {
		if (direction === 'down') {
			$('#header').addClass('nav-solid fadeInDown');
		} else {
			$('#header').removeClass('nav-solid fadeInDown');
		}
	});

	/* Smooth Scroll */
	$('a[href*="#"]').on('click', function (e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 700, 'swing'); // Durasi animasi 500ms dengan efek 'swing'
	});
});

/* Preloader and animations */
$(window).load(function () {
	$('#status').fadeOut();
	$('#preloader').delay(350).fadeOut('slow');
	$('body').delay(350).css({ 'overflow-y': 'visible' });

	/* WOW Elements */
	if (typeof WOW == 'function') {
		new WOW().init();
	}

	/* Parallax Effects */
	if (!!$.prototype.enllax) {
		$(window).enllax();
	}

	/* Cek Rekening */
	function cekRekening() {
		const rekening = document.getElementById('input1').value;
		let isPenipuan = rekening === '1234567890';
		const hasilCek = document.getElementById('hasilCek');
		hasilCek.textContent = isPenipuan ? "Nomor rekening terindikasi sebagai penipuan!" : "Nomor rekening aman.";
	}

	/* Cek Password */
	function cekPassword() {
		const password = document.getElementById('input2').value;
		if (password.length < 8) {
			alert('Password terlalu pendek. Minimal 8 karakter.');
		} else if (!/[A-Z]/.test(password)) {
			alert('Password harus mengandung minimal 1 huruf kapital.');
		} else if (!/[a-z]/.test(password)) {
			alert('Password harus mengandung minimal 1 huruf kecil.');
		} else if (!/\d/.test(password)) {
			alert('Password harus mengandung minimal 1 angka.');
		} else {
			alert('Password cukup kuat.');
		}
	}

	/* Data Grafik */
	const labels = ['Penipuan Online', 'Ancaman Kekerasan', 'Pencemaran Nama Baik', 'Ancaman Pencemaran'];
	const data = {
		labels: labels,
		datasets: [{
			label: 'Jumlah Kejahatan yang telah Dilaporkan',
			data: [14495, 8614, 6556, 3675],
			backgroundColor: 'rgb(126, 96, 191)',
			borderColor: 'rgba(255, 99, 132, 1)',
			borderWidth: 1
		}]
	};

	const config = {
		type: 'bar',
		data: data,
		options: {
			scales: {
				y: {
					beginAtZero: true
				}
			},
			indexAxis: 'y'
		}
	};

	const myChart = new Chart(
		document.getElementById('myChart'),
		config
	);
});
