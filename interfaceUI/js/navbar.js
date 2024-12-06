function nav() {
    const container = document.getElementById('nav-bar');
    container.innerHTML = 
 `
 <div class="container-fluid" style="align-items: center;">
          <a class="navbar-brand" href="javascript:void(0)" >
            <img src="image/farmsgd.png" class="rounded-pill" alt="" srcset="" width="60" height="60">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav mx-auto mb-3" >
              <li class="nav-item mx-auto  my-1 p-2  align-items-center" style="    background-color: rgb(248, 250, 215);
              width: 100%;
              justify-content: center;  ">
                <a class="nav-link d-flex active" data-bs-toggle="tab" href="#home"  
                style=" border-radius: 20px; justify-content: space-between;">
                  <div>
                    <button class="btn btn-warning" >
                        
                        <img src="icons/home-with-a-tree-at-side-svgrepo-com.svg" width="30" height="30" alt=""
                                srcset="" >
                               
                    </button>
                  </div>
                    <div class="navbar-toggler" data-bs-toggle="collapse">Acceuil</div>
                </a>
                
               
              </li>
              <li class="nav-item mx-auto  my-1 p-2  align-items-center" style="background-color: rgb(248, 250, 215);
              width: 100%;   justify-content: center;  ">
                <a class="nav-link d-flex"  data-bs-toggle="tab" href="#menu2"
                 style=" border-radius: 20px; justify-content: space-between;">
                  <div>
                    <button class="btn btn-warning" >
                        
                        <img src="icons/bar-chart-graph-svgrepo-com.svg" width="30" height="30" alt=""
                                srcset="" >
                               
                    </button>
                  </div>
                    <div class="navbar-toggler" data-bs-toggle="collapse">Control</div>
                </a>
                
               
              </li>
             <li class="nav-item mx-auto my-1 p-2 align-items-center" 
    style="background-color: rgb(248, 250, 215); width: 100%; justify-content: center;">
    <div class="nav-link d-flex" href="javascript:void(0)" 
       style="border-radius: 20px; justify-content: space-between; align-items: center;">
        <!-- Bouton avec notification -->
        <div style="position: relative; display: inline-block;" id="notification">
            
        </div>
        <!-- Texte Notification -->
        <div class="navbar-toggler" data-bs-toggle="collapse">Notification</div>
    </div>
</li>

            </ul>
            <form class="d-flex m-1">
              <input class="form-control me-0" type="text" placeholder="Search" id="searchInput">
              <button type="button" id="search" class="button">
                <img src="icons/icons8-search.svg" width="25" height="25" alt="" srcset="" >
            </button>
            </form>
          </div>
        </div>
           `;
}
nav();