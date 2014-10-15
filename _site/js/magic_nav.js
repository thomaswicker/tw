/*
  __  __    _    ____ ___ ____   _   _    ___     __      _ ____  
 |  \/  |  / \  / ___|_ _/ ___| | \ | |  / \ \   / /     | / ___| 
 | |\/| | / _ \| |  _ | | |     |  \| | / _ \ \ / /   _  | \___ \ 
 | |  | |/ ___ \ |_| || | |___  | |\  |/ ___ \ V /   | |_| |___) |
 |_|  |_/_/   \_\____|___\____| |_| \_/_/   \_\_/     \___/|____/ 
                                                                                                                                                                                                                                                                                                                                                                                                                                                          
*/


$( "#menu-icon" ).click(function() {
  $( "#magic-nav ul" ).slideToggle("fast","linear", function() {
    $( "#menu-icon" ).toggleClass("toggled");
    $( "#menu-icon span" ).toggleClass("toggled_spans");
  });
});
  

  