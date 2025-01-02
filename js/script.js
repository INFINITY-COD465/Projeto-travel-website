// ===== Swiper Card Slide ==== //

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide:'true',
    fade:'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
  
      520: {
        slidesPerView: 2,
      },
  
      950: {
        slidesPerView: 3,
      },
    },
  });
  
// ===== Muda a cor navbar quando estiver sobre a div "booking" ===== //
window.addEventListener('scroll', alterarCorNavbar);

function alterarCorNavbar() {
    const navbar = document.querySelector('nav');
    const booking = document.querySelector('.booking');
    const bookingRect = booking.getBoundingClientRect();

    if (bookingRect.top < 50) {
        navbar.classList.add('navbar-solida');

    } else {
        navbar.classList.remove('navbar-solida');
    }
}


        // ===== Carrossel ===== //
        const clientes = document.querySelectorAll('.cliente');
        let clienteAtual = 0;

        function mostrarSlide(index) {
            clientes.forEach((cliente, i) => {
                if (i === index) {
                    cliente.style.display = 'block';
                } else {
                    cliente.style.display = 'none';
                }
            });
        }


        function proximo() {
            clienteAtual = (clienteAtual +1) % clientes.length;
            mostrarSlide (clienteAtual);
        }


        function anterior() {
            clienteAtual = (clienteAtual -1 + clientes.length) % clientes.length;
            mostrarSlide(clienteAtual);
        }

        document.querySelector('.anterior').addEventListener('click', anterior);
        document.querySelector('.proximo').addEventListener('click', proximo);

        // Mostrar o primeiro cliente ao carregar a página
        mostrarSlide(clienteAtual);