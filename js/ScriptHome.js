
$('#click').bind('click', function () {
    $(".cd-container ul").remove();
    var values = [];
    var docs = [];
    var items = [];
    var err = "Sorry no content.";
    var err2 = "Please provide correct inputs.";
    var search = document.getElementById("art_name").value;

    console.log(search);

    var s_date = document.getElementById("s_date").value;
    var e_date = document.getElementById("e_date").value;

    var st = new Date(s_date);
    var yyyy = st.getFullYear();
    var mm = st.getMonth() + 1; // getMonth() is zero-based
    var dd = st.getDate();
    var start = String(10000 * yyyy + 100 * mm + dd); // Leading zeros for mm and dd
    console.log(start);

    var ed = new Date(e_date);
    var eyyyy = ed.getFullYear();
    var emm = ed.getMonth() + 1; // getMonth() is zero-based
    var edd = ed.getDate();
    var end = String(10000 * eyyyy + 100 * emm + edd); // Leading zeros for mm and dd
    console.log(end);

    $.ajax({
        type: "GET",
        url: "http://api.nytimes.com/svc/search/v2/articlesearch.json?&q=" + search + "&facet_field=source&facet_filter=true&begin_date=" + start + "&end_date=" + end + "&sort=oldest&page=2&api-key=b1a8219bf67b2e6e0adc35ca86ccd149%3A9%3A71785183",
        data: JSON.stringify(),
        dataType: "json",
        error:  function() {
            items.push("<ul class='cd-timeline-block'" +
                    "style='padding-left: 0px;'>" +
                    "<li class='cd-timeline-content' style='list-style:none'>" +
                    "<h3 style='text-align:center'>" + err + "</h3>" +
                    "</li>" +
                    "<li class='cd-timeline-content' style='list-style:none'>" +
                    "<h3 style='text-align:center'>" + err2 + "</h3>" +
                    "</li>" +
                    "</ul>");
            // append list to page
            $ul = $('<ul />').appendTo('.cd-container');
            //append list items to list
            $ul.append(items);
        },
        success: function (data) {
            values = data.response;
            console.log(values);
            docs = values.docs;
            var number = 0;
            for (d in docs) {
                var para = docs[d].lead_paragraph;
                var snippet = docs[d].snippet;
                var headline = docs[d].headline.main;
                var date = new Date(docs[d].pub_date);
                var time = date.toDateString();
                number = number + 1;
                //                      console.log(number);
                //                      console.log(time);
                items.push("<ul class='cd-timeline-block'" +
                    "style='padding-left: 0px;'>" +
                    "<div class='cd-timeline-img cd-picture'>" +
                    "<img src='images/cd-icon-picture.svg' alt='Picture'>" +
                    "</div> <!-- cd-timeline-img -->" +
                    "<li class='cd-timeline-content' style='list-style:none'>" +
                    "<h3>" + headline + "</h3>" +
                    "<p>" + para + "</p>" +
                    "<span class='cd-date'> " + time + "</span>" +
                    "</li>" + "</ul>");
            }
            // append list to page
            $ul = $('<ul />').appendTo('.cd-container');
            //append list items to list
            $ul.append(items);
        }
    });
});

    $('#click').bind('click', function () {
        $('html, body').animate({
            scrollTop: $("#cd-timeline").offset().top
        }, 3000);
    });

    $('.forUpScroll').bind('click', function () {
        $('html, body').animate({
            scrollTop: $(".forUl").offset().top
        }, 2500);
    });

$('.forDwnScroll').bind('click', function () {
    $('html, body').animate({
        scrollTop: $("#footer").offset().top
    }, 2500);
});

$("#modalLabel").on("mouseenter", function () {
        document.getElementById("art_name").value = '';
        document.getElementById("s_date").value = '';
        document.getElementById("e_date").value = '';
    });