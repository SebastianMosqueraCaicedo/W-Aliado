class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>
          /* Estilos del footer */

      #dropdown-footer,
      #dropdown-footer2,
      #dropdown-footer3,
      #dropdown-footer4 {
        display: none;
      }

      #dropdown-footer.vision,
      #dropdown-footer2.vision,
      #dropdown-footer3.vision,
      #dropdown-footer4.vision {
        display: block;
      }

      footer {
        width: 100%;
        height: 100%;
        background-color: #efefef;
        overflow-x: hidden;
      }

      .footer-container {
        padding: 15px 21px 15px 15px;
        display: flex;
        flex-direction: column;
      }

      .footer-button {
        font-family: "Geomanist";
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 11px;
        margin-bottom: 20px;
        border-bottom: 1px solid orange;
        color: #ff8833;
        font-size: 16px;
      }

      .footer-button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 11px;
        margin-bottom: 20px;
        border-bottom: 1px solid #ffc499;
        padding: 0;
      }

      ul {
        padding: 0;
      }

      .social-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .footer-list,
      .footer-list2 {
        font-family: "Bariol Regular";
        padding: 0px 21px 0px 0px;
        color: #676767;
        font-size: 14px;
      }

      .footer-list li,
      .footer-list2 li {
        list-style: none;
        margin-bottom: 19px;
      }

      .footer-list ul li:nth-child(4) {
        margin-bottom: 27px;
      }

      .footer-list2 ul li:nth-child(5) {
        margin-bottom: 27px;
      }

      .last-footer {
        width: 100%;
        height: 100%;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 21px;
        color: #676767;
        font-size: 10px;
        font-family: "Bariol Regular";
        overflow-x: auto;
      }

      .bancow {
        margin-right: 7%;
      }

          /*/ //////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
          @media screen and (min-width: 1200px) {

          /* Estilos del responsive footer */

      .footer-container {
        padding: 42px 75px 15px 75px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .footer-button {
        width: 262px;
      }

      .footer-button img {
        display: none;
      }

      #dropdown-footer,
      #dropdown-footer2,
      #dropdown-footer3,
      #dropdown-footer4 {
        display: block;
      }

      #dropdown-footer.vision,
      #dropdown-footer2.vision,
      #dropdown-footer3.vision,
      #dropdown-footer4.vision {
        display: block;
      }

      .last-footer {
        width: 100%;
        height: 100%;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow-x: auto;
      }

      .bancow {
        margin-right: 2%;
      }
          }
        </style>
        <footer>
          <div class="footer-container">
            
            <div id="we">
              <div class="footer-button" id="dropdown-button-footer">
                <p>Nosotros</p>
                <img src="../icons/fi_chevron-down.svg" alt="">
              </div>
              <div class="footer-list" id="dropdown-footer">
                <ul>
                  <li>Quienes somos</li>
                  <li>Proveedores</li>
                  <li>Eduación financiera</li>
                  <li>Trabaja con nosotros</li>
                </ul>
              </div>
            </div>
            
            <div id="atention">
              <div class="footer-button" id="dropdown-button-footer2">
                <p>Canales de atención</p>
                <img src="../icons/fi_chevron-down.svg" alt="">
              </div>
              <div class="footer-list" id="dropdown-footer2">
                <ul>
                  <li>Oficinas </li>
                  <li>App móvil</li>
                  <li>Línea nacional gratuita</li>
                  <li>Corresponsales bancarios</li>
                </ul>
              </div>
            </div>

            <div id="help">
              <div class="footer-button" id="dropdown-button-footer3">
                <p>Ayuda</p>
                <img src="../icons/fi_chevron-down.svg" alt="">
              </div>
              <div class="footer-list2" id="dropdown-footer3">
                <ul>
                  <li>Preguntas frecuentes </li>
                  <li>Tasas y tarifas</li>
                  <li>Información legal</li>
                  <li>Comunicados de prensa</li>
                  <li>PQRS</li>
                </ul>
              </div>
            </div>

            <div id="follow">
              <div class="footer-button" id="dropdown-button-footer4">
                <p>Síguenos</p>
                <img src="../icons/fi_chevron-down.svg" alt="">
              </div>
              <div class="footer-list3" id="dropdown-footer4">
                <div class="social-list">
                  <a href=""><img src="../icons/Facebook.svg" alt=""></a>

                  <a href=""><img src="../icons/Instagram.svg" alt=""></a>

                  <a href=""><img src="../icons/Twitter.svg" alt=""></a>

                  <a href=""><img src="../icons/TikTok.svg" alt=""></a>

                  <a href=""><img src="../icons/Youtube.svg" alt=""></a>
                </div>
              </div>
            </div>
          </div>
          <div class="last-footer">
          <img src="../icons/logoFull.webp" alt="">
          <p class="bancow">Copyright © 2023 Banco W</p>
        </div>
        </footer>
      `;

      //Footer

    var dropdownButtonFooter = this.shadowRoot.getElementById('dropdown-button-footer');
    var dropdownFooter = this.shadowRoot.getElementById('dropdown-footer');

    dropdownButtonFooter.addEventListener('click', function() {
      dropdownFooter.classList.toggle('vision');
    });

    var dropdownButtonFooter2 = this.shadowRoot.getElementById('dropdown-button-footer2');
    var dropdownFooter2 = this.shadowRoot.getElementById('dropdown-footer2');

    dropdownButtonFooter2.addEventListener('click', function() {
      dropdownFooter2.classList.toggle('vision');
    });

    var dropdownButtonFooter3 = this.shadowRoot.getElementById('dropdown-button-footer3');
    var dropdownFooter3 = this.shadowRoot.getElementById('dropdown-footer3');

    dropdownButtonFooter3.addEventListener('click', function() {
      dropdownFooter3.classList.toggle('vision');
    });

    var dropdownButtonFooter4 = this.shadowRoot.getElementById('dropdown-button-footer4');
    var dropdownFooter4 = this.shadowRoot.getElementById('dropdown-footer4');

    dropdownButtonFooter4.addEventListener('click', function() {
      dropdownFooter4.classList.toggle('vision');
    });


  }
}

customElements.define("custom-footer", Footer);

