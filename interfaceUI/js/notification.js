function notification() {
    const container = document.getElementById('notification');
    container.innerHTML = 
 `
<button class="btn btn-warning" type="button" style="" data-bs-toggle="dropdown">
                <!-- Icône -->
                <img src="icons/bell.svg" width="30" height="30" alt="bell-icon">
                <!-- Badge -->
                <span class="badge bg-danger"
                      style="
                          position: absolute;
                          top: -5px;
                          right: -5px;
                          font-size: 12px;
                          padding: 5px 7px;
                          border-radius: 50%;
                          line-height: 1;
                      ">4</span>
            </button>
    <ul class="dropdown-menu" id="dropdown-menu" style="max-width:450px; min-width:fit-content;">
      <li><a class="dropdown-item" href="#">Vous devez faire une vaccin du cochon n: CM-56</a></li>
      <li><a class="dropdown-item" style="max-width:400px;" href="#">
      Vous devez faire un traitement du cochon: CM-56, 
      </a></li>
      <li><a class="dropdown-item" href="#">Link 3</a></li>
    </ul>

 `;

}

notification();