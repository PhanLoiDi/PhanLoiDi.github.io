function transfer(event) {
    event.preventDefault();
    var receiver = document.getElementById("receiver").value;
    var amount = document.getElementById("amount").value;
    var balance = document.getElementById("balance");
    if (amount > balance.value) {
        alert("Số dư không đủ!");
        return; 
    }
    balance.innerHTML -= amount ;
    var history = document.getElementById("history");
    var row = history.insertRow(-1);
    var dateCell = row.insertCell(0);
    var receiverCell = row.insertCell(1);
    var amountCell = row.insertCell(2);
    var today = new Date();
    dateCell.innerHTML = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
    receiverCell.innerHTML = receiver;
    amountCell.innerHTML = amount + " VND";
    localStorage.amount = $("#balance").text();
}
$(document).ready(function(){
     $("#balance").text(localStorage.amount);
     $(".userID").text(localStorage.ID)
     $(".subcontent").hide();
     $(".sub").mouseover(function(){
      $(".subcontent").show();
      $(".subcontent").addClass("shownav");
     })
     $(".sub").mouseleave(function(){
      $(".subcontent").removeClass("shownav");
      const hideNav = setTimeout(hideTheNav,200);
      function hideTheNav(){
        $(".subcontent").hide();
      }
     })

     //TabUser
     $(".Tab_UserShow").hide();
     $(".Tab_Button").click(function(){
      $(".Tab_UserShow").show();
      $(".Tab_UserShow").toggleClass("tabshow")
     }) 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
       $(document).click(function(event) { 
      var $target = $(event.target);
      if($target.closest(".Tab_UserShow").length && 
      $(".Tab_UserShow").is(":visible")) {
        $(".Tab_UserShow").removeClass("tabshow")
        const hideNav = setTimeout(hideTheTab,200);
        function hideTheTab(){
          $(".Tab_UserShow").hide();
        }
      }
      $(".userInfo_Link").click(function(){
        location.href = "btl-user.html"
     })
    })  

    // Use
    $(".user").hide();  
    $(".usernameText").text(localStorage.username);
    if($(".usernameText").text() !== "")
    {
      $(".InternetBanking").hide()
      $(".user").show();
    }
    $(".userLogOut").click(function(){
      localStorage.removeItem("username");
      location.href = "btl-trangchu.html"
    })

    //Nav Sticky
    window.addEventListener("scroll",function(){
      $("nav").toggleClass("sticky",window.scrollY > 140);
    })
});