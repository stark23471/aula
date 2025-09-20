var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var banneratual = 0;
function trocaBanner() {banneratual = (banneratual + 1) % 2 ;
    document.querySelector('.banner-destaque img').src = banners [banneratual];

}
setInterval(trocaBanner,4000)
