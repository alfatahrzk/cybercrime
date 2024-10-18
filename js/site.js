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

// Fungsi untuk mengecek rekening
function cekRekening() {
	const rekening = document.getElementById('input1').value;
	const hasilCek = document.getElementById('hasilCek');
	let tipu1 = 81818181;
	let tipu2 = 21212121;
	let N = 100;
	let randomInt = Math.floor(Math.random() * (N + 1));

	if (rekening === "") {
		hasilCek.innerHTML = "Nomor rekening tidak boleh kosong!";
		hasilCek.style.color = "red";
	} else if (rekening == tipu1 || rekening == tipu2) {
		hasilCek.innerHTML = "Nomor rekening terindikasi penipuan, dilaporkan " + randomInt + " kali.";
		hasilCek.style.color = "red";
	} else {
		hasilCek.innerHTML = "Nomor rekening belum pernah dilaporkan.";
		hasilCek.style.color = "green";
	}
}

function cekPassword() {
	const password = document.getElementById('input2').value;
	const hasilPassword = document.getElementById('hasilPassword');
	const progressBar = document.getElementById('passwordStrength');
	let strength = 0;

	// Menghitung kekuatan password
	if (password.length >= 6) strength += 1;
	if (/[A-Z]/.test(password)) strength += 1;
	if (/[0-9]/.test(password)) strength += 1;
	if (/[@$!%*?&#]/.test(password)) strength += 1; // Karakter spesial

	// Menentukan kekuatan password dan memperbarui progress bar
	if (password === "") {
		hasilPassword.innerHTML = "Password tidak boleh kosong!";
		hasilPassword.style.color = "red";
		progressBar.style.width = "0%";
		progressBar.style.backgroundColor = "red";
	} else {
		hasilPassword.innerHTML = "";
		switch (strength) {
			case 1:
				hasilPassword.innerHTML = "Password sangat lemah.";
				hasilPassword.style.color = "red";
				progressBar.style.width = "25%";
				progressBar.style.backgroundColor = "red";
				break;
			case 2:
				hasilPassword.innerHTML = "Password lemah.";
				hasilPassword.style.color = "orange";
				progressBar.style.width = "50%";
				progressBar.style.backgroundColor = "orange";
				break;
			case 3:
				hasilPassword.innerHTML = "Password sedang.";
				hasilPassword.style.color = "#D4A017";
				progressBar.style.width = "75%";
				progressBar.style.backgroundColor = "yellow";
				break;
			case 4:
				hasilPassword.innerHTML = "Password kuat.";
				hasilPassword.style.color = "green";
				progressBar.style.width = "100%";
				progressBar.style.backgroundColor = "green";
				break;
		}
	}
}
