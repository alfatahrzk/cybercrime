"use strict";

$(document).ready(function () {
	/* Video Lightbox */
	if (!!$.prototype.simpleLightboxVideo) {
		$('.video').simpleLightboxVideo();
	}

	/*ScrollUp*/
	if (!!$.prototype.scrollUp) {
		$.scrollUp();
	}

	/*Responsive Navigation*/
	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$(this).removeClass("open");
		} else {
			$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
			$(this).addClass("open");
		}
	});

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-mobile ul a").on("click",function() {
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
		}
		else {
			$('#header').removeClass('nav-solid fadeInDown');
		}
	});

});


/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow-y': 'visible'});

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
    // Ambil nilai dari input rekening
    const rekening = document.getElementById('input1').value;

    // logika
    if (rekening === '1234567890') {
        isPenipuan = true;
    } else {
        isPenipuan = false;
    }

    if (isPenipuan) {
    hasilCek.textContent = "Nomor rekening terindikasi sebagai penipuan!";
  } else {
    hasilCek.textContent = "Nomor rekening aman.";
  }
}

/* Cek Password */
function cekPassword() {
    // Ambil nilai dari input password
    const password = document.getElementById('input2').value;

	// logika
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

    // Konfigurasi chart
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

    // Membuat chart
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
});
