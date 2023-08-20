function TamNhinVaSuMenh(){
    var text = document.getElementById("TamNhinVaSuMenh_SubText2_Hidden").innerText;
    document.getElementById("TamNhinVaSuMenh_SubText2").innerText = text;
 } 
window.onload = () => {
    TamNhinVaSuMenh();
}   
$(document).ready(function () {
    $(".LichSu_SubText > div:not(:first-child)").hide();
    $(".LichSu_Text a").click(function(){
       $(".LichSu_Text a").removeClass("active");
       $(this).addClass("active");
     if ($(this).hasClass("LichSu_Text1"))
     {
       $("#LichSu_SubText_Hover1").show();
       $("#LichSu_SubText_Hover2").hide();
     }
     else 
     {
      $("#LichSu_SubText_Hover1").hide();
      $("#LichSu_SubText_Hover2").show();
     }
    })
    

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

    // User
    $(".user").hide();  
    $(".usernameText").text(localStorage.username);
    if($(".usernameText").text() !== "")
    {
      $(".InternetBanking").hide()
      $(".user").show();
    }
    $(".userLogOut").click(function(){
      localStorage.removeItem("username");
      localStorage.removeItem("ID");
      location.href = "btl-trangchu.html"
    })

    //Nav Sticky
    window.addEventListener("scroll",function(){
      $("nav").toggleClass("sticky",window.scrollY > 140);
    })

    //GO TO TOP BUTTON 
    $(".buttonTop").hide();
    window.onscroll = function(){ scrollFunction()};
    function scrollFunction()
    {
       if(document.documentElement.scrollTop > 20) 
       {
        $(".buttonTop").show();
        $(".buttonTop").addClass("buttonTopAnimation")
       }
       else {
        $(".buttonTop").hide();
        $(".buttonTop").removeClass("buttonTopAnimation")
       }
    }
    $(".buttonTop").click(function(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  });
