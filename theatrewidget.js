document.addEventListener('DOMContentLoaded', function () {
  const widgetContainer = document.querySelector('.productions-theatre');

  if (widgetContainer) {
    widgetContainer.innerHTML = `
      <style>
        html,
        body {
          padding: 0;
          margin: 0;
        }

        html {
          height: 100vh;
        }

        body {
          height: 100vh;
        }

        .carousel {
          width: 100%;
          height: 100%;
          align-items: center;
          font-family: Arial;
        }

        .carousel__list {
          display: flex;
          list-style: none;
          position: relative;
          width: 100%;
          height: 300px;
          justify-content: center;
          perspective: 300px;
        }

        .carousel__item {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          font-size: 0px; /* Choisir une taille de police appropriée */
          width: 570px;
          height: 780px;
          border-radius: 12px;
          box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.5);
          position: absolute;
          transition: all 0.3s ease-in;
        }

        .carousel__item a {
          text-decoration: none;
          color: inherit;
        }

        .carousel__item.pointer {
          cursor: pointer;
        }

        .carousel__item:nth-child(1) {
           background: url("https://images2.imgbox.com/5b/48/xnDrqz4X_o.png") no-repeat 50% / cover;
        }

        .carousel__item:nth-child(2) {
            background: url("https://images2.imgbox.com/17/c3/JLm6Icvq_o.png") no-repeat 50% / cover;
        }

        .carousel__item:nth-child(3) {
           background: url("https://images2.imgbox.com/59/e6/Ur1uDFUi_o.png") no-repeat 50% / cover;
        }

        .carousel__item[data-pos='0'] {
          z-index: 5;
        }

        .carousel__item[data-pos='-1'],
        .carousel__item[data-pos='1'] {
          opacity: 0.7;
          filter: blur(1px) grayscale(10%);
        }

        .carousel__item[data-pos='-1'] {
          transform: translateX(-40%) scale(0.9);
          z-index: 4;
        }

        .carousel__item[data-pos='1'] {
          transform: translateX(40%) scale(0.9);
          z-index: 4;
        }

        .carousel__item[data-pos='-2'],
        .carousel__item[data-pos='2'] {
          opacity: 0.4;
          filter: blur(3px) grayscale(20%);
        }

        .carousel__item[data-pos='-2'] {
          transform: translateX(-70%) scale(0.8);
          z-index: 3;
        }

        .carousel__item[data-pos='2'] {
          transform: translateX(70%) scale(0.8);
          z-index: 3;
        }

        .carousel__item[data-pos='0'] .carousel__text {
          display: block;
        }
      </style>
      <div class="carousel">
        <ul class="carousel__list">
          <li class="carousel__item" data-pos="-1">
            <a href="https://www.boitamomes.fr/productions/pi%C3%A8ces-de-th%C3%A9%C3%A2tre/le-prince-noir/"><span class="carousel__text">Le Prince Noir</span></a>
          </li>
          <li class="carousel__item" data-pos="0">
            <a href="https://www.boitamomes.fr/productions/pi%C3%A8ces-de-th%C3%A9%C3%A2tre/le-monde-%C3%A0-l-envers/"><span class="carousel__text">Le Monde à l'envers</span></a>
          </li>
          <li class="carousel__item" data-pos="1">
             <a href="https://www.boitamomes.fr/productions/pi%C3%A8ces-de-th%C3%A9%C3%A2tre/fifi/"><span class="carousel__text">Fifi</span></a>
          </li>
        </ul>
      </div>
    `;

    const carouselList = document.querySelector('.carousel__list');
    const carouselItems = document.querySelectorAll('.carousel__item');
    const elems = Array.from(carouselItems);

    const updatePointerCursor = () => {
      elems.forEach(item => {
        if (item.dataset.pos == '0') {
          item.classList.add('pointer');
        } else {
          item.classList.remove('pointer');
        }
      });
    };

    if (carouselList) {
      carouselList.addEventListener('click', function (event) {
        var newActive = event.target.closest('.carousel__item');

        if (!newActive || newActive.classList.contains('carousel__item_active')) {
          return;
        }

        const newActivePos = newActive.dataset.pos;

        if (newActivePos === '0') {
          const link = newActive.querySelector('a');
          if (link) {
            window.location.href = link.href;
          }
        }

        update(newActive);
        updatePointerCursor();
      });
    }

    const update = function (newActive) {
      const newActivePos = parseInt(newActive.dataset.pos);

      const current = elems.find((elem) => elem.dataset.pos == '0');
      const prev = elems.find((elem) => elem.dataset.pos == '-1');
      const next = elems.find((elem) => elem.dataset.pos == '1');

      current.classList.remove('carousel__item_active');

      [current, prev, next].forEach(item => {
        var itemPos = parseInt(item.dataset.pos);
        item.dataset.pos = getPos(itemPos, newActivePos);
      });
    };

    const getPos = function (current, active) {
      const positions = [-1, 0, 1];
      let newPos = positions.indexOf(current) - positions.indexOf(active);

      if (newPos < -1) {
        newPos = 1;
      } else if (newPos > 1) {
        newPos = -1;
      }

      return newPos;
    };

    updatePointerCursor();
  }
});
