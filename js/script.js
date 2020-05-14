//respon ketika di klik
$(".page-scroll").on("click", function (e) {
  var tujuan = $(this).attr("href");
  //get element
  var elemenTujuan = $(tujuan);
  //pindahkan scroll
  $("html , body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 50,
    },
    1250,
    "swing"
  );

  e.preventDefault();
});

//parallax

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  console.log(wScroll);

  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });
});
