/*
  __  __  ___  ____    _    _     ____        _ ____  
 |  \/  |/ _ \|  _ \  / \  | |   / ___|      | / ___| 
 | |\/| | | | | | | |/ _ \ | |   \___ \   _  | \___ \ 
 | |  | | |_| | |_| / ___ \| |___ ___) | | |_| |___) |
 |_|  |_|\___/|____/_/   \_\_____|____/   \___/|____/ 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
*/


$("[data-modal-open]").on("click", function(){
  $(".mask").addClass("active-modal");
});


function closeModal() {
  $(".mask").removeClass("active-modal");
}

$("[data-modal-close], .mask").on("click", function(){
  closeModal();
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    closeModal();
  }
});

