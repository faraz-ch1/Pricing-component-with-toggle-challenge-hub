function clickit(){
  if($(".first-price-box").html() == "$19.99"){
    $(".first-price-box").html("$199.99");
    $(".second-price-box").html("$249.99");
    $(".third-price-box").html("$399.99");
  } else {
    $(".first-price-box").html("$19.99");
    $(".second-price-box").html("$24.99");
    $(".third-price-box").html("$39.99");
  }
}
