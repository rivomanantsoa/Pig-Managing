function contenue1() {
    const container = document.getElementById('home');
    container.innerHTML = 
 `
 <div class="row flex-wrap mx-auto  p-2 align-content-center align-items-center justify-content-center w-100"
        id="liste" 
        >
        <div class="col-auto d-flex ">
            <h2 class="m-auto" id="titre" style="width: 495px;">
                Etat et Control de chaque individu!
            </h2>
            
                <button type="button" class="button" id="tooltip-button" onclick="inscription();">
                    <img src="icons/add.svg" width="45px" height="45px" alt="" srcset="">
                </button>
           
        </div>
        <div class="col-auto ">
            <div id="totol">
              
                <div id="pigStats" class="stats">
    
                </div>
            </div>
        </div>
    </div>
   
    
    <div id="no-results" style="display: none;">Aucun résultat trouvé.</div>


    <!--- Contenue de notre menu -->
    <div class="row mx-0 p-0 w-100 ">
        <div class="col mt-4 " id="contenu">
            <div class="row" id="pig-container">
                <!--- les chose dans le javascript -->


            </div>
        </div>
        <div class="col-xl-4 col-md-auto col-sm-auto " id="inscription" style="display: none; height: 440px; box-shadow: rgb(0 0 0 / 54%) 0px 4px 4px 0px; padding: 15px; background-color: rgb(233 229 227); margin: 2px;">
           
        </div>
        
        <div style="position: fixed; overflow-y: auto;
        top: 0; z-index: 1;
        background-color: rgb(12 12 12 / 91%); height: 100%; display: none; padding: 10px;" class="p-0 m-0" id="notification">
            <div class="w-100">
                <button onclick="closeDiv()" class="btn bg-light" id=""
                    style="right: 10px; position: absolute; top: 10px; z-index: 1;">
                    <img src="icons/close.svg" width="20" height="30" srcset="" id="effetimg" style="color: red;">
                </button>
           
            </div>
            <div class="col-xl-4 mx-auto p-3 m-3" id="show" style="display: none;
         height: 400px; box-shadow:0px 4px 4px 0px rgba(0, 0, 0, 0.1); 
          background-color: rgb(23 181 50);
           box-shadow:rgb(5 255 13 / 35%) 0px 4px 8px; 
           border-radius: 20px;  position: relative; overflow-y: auto;">

                <p class="py-0 my-0 ">
                    <img id="afficheImg" src="" alt="" srcset=""
                        style="width: 100%;  height: 250px;  object-fit: cover; ">
                <div class="text-oval mx-auto">
                    <div style="width: fit-content;">
                        <p id="agee" ></p>
                        <p id="poidse"></p>
                        <p id="genree"></p>
                    </div>
                    <div style="width: fit-content;">
                        <p id="objectifee"></p>
                        <p id="racee"></p>
                       
                        <p id="specificitee"></p>
                        
                    </div>
                    <div style="width: fit-content;">
                        <p id="idee"></p>
                        <a href="Graph.html">Detail</a>
                    </div>
                    

                </div>
                </p>
            </div>
        
        <div class="row justify-content-center w-100" style="display: ruby-text-container; align-items: center;" >
          <div style="width: fit-content;">  <button id="scrollLeft" class="btn btn-success">◀</button> </div>
            <div class="content" id="pigs" 
            style="display:flex ; height: 99px;
            width: 589px;
            overflow-x: hidden;
            overflow-y: hidden; padding: 10px; padding-left: 0;
            box-shadow: 0 4px 8px rgba(255, 255, 255, 0.979);
             padding-right: 0; border: solid 1px rgb(8, 8, 8);
             border-radius: 20px;
            
            ">


            </div>
            <!--- les chose dans le javascript -->
        <div style="width: fit-content;">    <button id="scrollRight" class="btn btn-success">▶</button></div>

       

        </div>
        </div>
    </div>
           `;
}
contenue1();