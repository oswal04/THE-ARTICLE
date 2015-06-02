// JavaScript source code
$(function () {
    var category = ['business', 'style', 'arts', 'sports', 'science', 'world', 'travel'];
    for (i in category) {
        myFunction(category[i]);
    }
});

function myFunction(category) {
    var values = [];
    var items = [];
    var temp = [];

    $.ajax({
        type: "GET",
        url: "http://api.nytimes.com/svc/news/v3/content/all/" + category + "/24.jsonp?&limit=4&api-key=76c097255faf2cd19819bfcdc872b7b3:0:71785183&callback=JSON_CALLBACK",
        data: JSON.stringify(),
        dataType: "jsonp",
        success: function (data) {
            values = data.results;
            for (v in values) {
                var tit = values[v].title;
                var abst = values[v].abstract;
                var imag = values[v].multimedia;
                if (imag === "") {
                    var img = category + ".jpg";
                }
                else 
                    img = imag[0].url;
                items.push("<li style='margin-top:25px'>" +
                            "<img src=" + img + " />" +
                            "<h3>" + tit + "</h3>" +
                            "<p>" + abst + "</p>" +
                            "</li>");
                }
            // append list to page
            $ul = $('<ul />').appendTo('.' + category + 'class');
            //append list items to list
            $ul.append(items);
        }
    });
};


$('.forUpScroll').bind('click', function () {
    $('html, body').animate({
        scrollTop: $(".navi").offset().top
    }, 2500);
});


$('.forDwnScroll').bind('click', function () {
    $('html, body').animate({
        scrollTop: $("#footer").offset().top
    }, 2500);
});