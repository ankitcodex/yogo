!function(e){"use strict";e(window).on("load",(function(){e(".codex-loader").hide("slow")})),e(window).scroll((function(){e(this).scrollTop()>50?(e("header").addClass("sticky"),e("header.land-header").removeClass("fixed")):(e("header").removeClass("sticky"),e("header.land-header").addClass("fixed"))})),e(document).on("click",".menu-action",(function(){e(".menu-list").toggleClass("open"),e(".cdx-layer").toggleClass("open"),e(this).toggleClass("toggle-active")})),e(window).width()<1200&&(e(".submenu-list,.secodnmenu-list").slideUp(""),e(".menu-list li.menu-item > a").on("click",(function(){e(this).parents(".menu-list").find(".submenu-list").slideUp(""),e(this).parents(".menu-list").find(".secodnmenu-list").slideUp(""),e(this).next(".submenu-list").is(":hidden")&&e(this).next(".submenu-list").slideToggle("")})),e(".menu-list li.sub-menu-item > a").on("click",(function(){e(this).parents(".menu-list").find(".secodnmenu-list").slideUp(""),e(this).next(".secodnmenu-list").is(":hidden")&&e(this).next(".secodnmenu-list").slideToggle("")})),e(".land-header .menu-list li").on("click",(function(){e(".menu-list").removeClass("open"),e(".cdx-layer").removeClass("open"),e(".menu-action").removeClass("toggle-active")})),e(document).on("click",".cdx-layer",(function(){e(".menu-list").removeClass("open"),e(this).removeClass("open"),e(".menu-action").removeClass("toggle-active")}))),e(".cdx-tabs li").on("click",(function(){e(this).siblings("li.active").removeClass("active"),e(this).addClass("active")})),e(window).scroll((function(){e(window).scrollTop()>450?e(".scroll-top").addClass("show"):e(".scroll-top").removeClass("show")})),e(document).ready((function(){e(document).on("click",".scroll-top",(function(){e("html, body").animate({scrollTop:0},"450")}))})),e(".counter").each((function(){e(this).prop("Counter",0).animate({Counter:e(this).text()},{duration:4e3,easing:"swing",step:function(t){e(this).text(Math.ceil(t))}})})),e(".toggle-show").click((function(){var t=e(".showhide-password");"password"==t.attr("type")?setTimeout((function(){t.attr("type","text"),e(".toggle-show").addClass("fa-eye-slash")}),250):setTimeout((function(){t.attr("type","password"),e(".toggle-show").removeClass("fa-eye-slash")}),250)}));const t=document.querySelector(".action-dark");t?.addEventListener("click",(function(){"dark"==document.querySelector("body").getAttribute("data-bs-theme")?(document.querySelector("body").setAttribute("data-bs-theme","light"),t.innerHTML="<i class='bi bi-moon'></i>"):(document.querySelector("body").setAttribute("data-bs-theme","dark"),t.innerHTML="<i class='bi bi-sun'></i>")})),dark_mode&&(document.body.setAttribute("data-bs-theme","dark"),t.innerHTML="<i class='bi bi-sun'></i>")}(jQuery),sal({threshold:.01,once:!1});