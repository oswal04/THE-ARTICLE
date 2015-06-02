// JavaScript source code

$('#click').bind('click', function () {
    $(".grid div").remove();
    var items = [];
    var results = [];
    var resourceType = document.getElementById("most").value;
    var section = document.getElementById("section").value;
    var time = document.getElementById("time").value;

    console.log(resourceType);
    console.log(section);
    console.log(time);
    $.ajax({
        type: "GET",
        url: "http://api.nytimes.com/svc/mostpopular/v2/" + resourceType + "/" + section + "/" + time + ".jsonp?api-key=9d77e93fca992512d88027ea499a8a11:6:71785183",
        data: JSON.stringify(),
        dataType: "jsonp",
        success: function (data) {
            results = data.results;
            results = data.results;
            for (r in results) {
                var section = results[r].section;
                var title = results[r].title;
                var abstract = results[r].abstract;

                items.push("<a class='grid__item'>" +
                            "<h2 class='title title--preview'>" + title + "</h2>" +
                            "<span class='category'>" + abstract + "</span>" +
                            "<br />" +
                            "<span class='category'><b>" + section + "</b></span></a>");
            }
            // append list to page
            $div = $('<div/>').appendTo('.grid');
            //append list items to list
            $div.append(items);
        }
    });
});

    $('.forUpScroll').bind('click', function () {
        $('html, body').animate({
            scrollTop: $(".forUl").offset().top
        }, 1500);
    });

$('.forDwnScroll').bind('click', function () {
    $('html, body').animate({
        scrollTop: $("#footer").offset().top
    }, 1500);
});