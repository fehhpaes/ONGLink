 //Menu
 {
    var veri = 1;
    var trigger = document.getElementById('menu-trigger').addEventListener("click",function(){
        var menu = document.getElementById('menu-hidde');
        if (veri == 1) {
            menu.style.left = "0px";
            veri = 0;
        }else{
            menu.style.left = "-100%";
            veri = 1;
        }
        
    })
    
     }
     
    // Remove backdrop duplicado ao fechar o menu
    document.getElementById('offcanvasNavbarLight').addEventListener('hidden.bs.offcanvas', () => {
        const backdrops = document.querySelectorAll('.offcanvas-backdrop');
        backdrops.forEach(backdrop => backdrop.remove());
      });
    
    function zoom_img(){
     // Seleciona as imagens e o overlay
     const zoomableImages = document.querySelectorAll('.zoomable');
     const zoomOverlay = document.getElementById('zoomOverlay');
     const zoomedImage = document.getElementById('zoomedImage');
    
     // Exibir a imagem em tela cheia ao clicar
     zoomableImages.forEach(image => {
       image.addEventListener('click', () => {
         zoomedImage.src = image.src; // Define o src da imagem clicada
         zoomOverlay.style.display = 'flex'; // Mostra o overlay
       });
     });
    
     // Fechar o zoom ao clicar fora da imagem
     zoomOverlay.addEventListener('click', () => {
       zoomOverlay.style.display = 'none';
     });
    }
    
    
    
    //Modal da aprovação
    // Referências aos elementos
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const approvalModal = document.getElementById('approvalModal');
    
    // Abrir o modal
    openModalBtn.addEventListener('click', () => {
      approvalModal.style.display = 'flex';
    });
    
    // Fechar o modal
    closeModalBtn.addEventListener('click', () => {
      approvalModal.style.display = 'none';
    });