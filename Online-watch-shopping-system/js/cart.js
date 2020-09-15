
function loading() {
  var ttl = 0;
  var Ip = $("input");
  var prc = $(".product-price")
  if (Ip.length <= 0) {
    $("table").remove();
    $(".table-responsive").html(`<h1>Empty Cart</h1><br>`);
    document.getElementsByClassName("tot")[0].innerHTML = 0
    document.getElementsByClassName("deli")[0].innerHTML = 0
    document.getElementsByClassName("gt")[0].innerHTML = 0
    document.getElementsByClassName("tax")[0].innerHTML = 0
  }
  else {
    for (var i = 0; i < prc.length; i++) {
      ttl += parseInt(Ip[i].value) * parseInt(prc[i].innerHTML)
    }

    // $('p').
    document.getElementsByClassName("tot")[0].innerHTML = ttl
    var gt = document.getElementsByClassName('gt')[0]
    gt.innerHTML = ttl + 10.00 + 1.50
    // document.getElementsByClassName("deli")[0].innerHTML
    // + document.getElementsByClassName("tax")[0].innerHTML
  //  $('h5').
  }
}


$(document).ready(function () {
    // input change
   
    var qtyIp = $("input");
    for (var i = 0; i < qtyIp.length; i++) {
      var ip = qtyIp[i]
      ip.addEventListener("change", qtychange)
    }
    // delete buttoms
    var removeCartItemButtons = $('.bbb .fa')
  
    for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
      button.addEventListener("click", removeCartItems)
    }
    if (removeCartItemButtons.length <= 0) {
      $("table").remove();
      $(".table-responsive").html(`<h1>Empty Cart</h1><br>`);
      
    document.getElementsByClassName("tot")[0].innerHTML = 0
    document.getElementsByClassName("deli")[0].innerHTML = 0
    document.getElementsByClassName("gt")[0].innerHTML = 0
    document.getElementsByClassName("tax")[0].innerHTML = 0
    }
    loading();
    // if (removeCartItemButtons.length <= 0) {
  
    //   $("#container2").html(`<h1>Empty Cart</h1><br><img src="pic/empty-cart.png" class="img-fluid">`);
    // }
  });
  
  function qtychange(event) {
    var ip = event.target
    if (isNaN(ip.value) || ip.value <= 0) {
      ip.value = 1
    }
  
    updateCartTotal()
  }

  function removeCartItems(event) {
    var buttonClicked = event.target
    var parent = buttonClicked.parentNode.parentNode.parentNode;
    console.log(parent);
    parent.style.transition = "all 400ms";
    parent.style.opacity = '0';
    setTimeout(function(){
    parent.remove();
    if ($('.bbb .fa').length <=0)
      {
        $("table").remove();
        $(".table-responsive").html(`<h1>Empty Cart</h1><br>`);
        
    document.getElementsByClassName("tot")[0].innerHTML = 0
    document.getElementsByClassName("deli")[0].innerHTML = 0
    document.getElementsByClassName("gt")[0].innerHTML = 0
    document.getElementsByClassName("tax")[0].innerHTML = 0
      }
      else{
        updateCartTotal();
      }
    },400);
  }

  function updateCartTotal() {
    var ttl = 0;
    var Ip = $("input");
    var prc = $(".product-price")
  
    for (var i = 0; i < prc.length; i++) {
      ttl += parseInt(Ip[i].value) * parseInt(prc[i].innerHTML)
    }
    document.getElementsByClassName("tot")[0].innerHTML = ttl;
    var gt = document.getElementsByClassName('gt')[0]
    gt.innerHTML = ttl + 10.00 + 1.50
  }