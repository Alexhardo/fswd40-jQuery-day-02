    for (var i = 0; i < products.length; i++) {
        document.write("<div class='element' id='price"+i+"'>"+
        				"<img src='img/img"+i+".jpg'>"+
        				"<h3 class='nameProduct' id='namePro"+i+"'>"+products[i].name+"</h3>"+
        				"<h1 class='prices' id='price"+i+"' >"+products[i].price+" €</h1></div>");
    } 
        // $('.ob').on('click', function() {
        //     if ($(this).children("img#san").length > 0) //.attr("[srcsanta.png"))
        //     {
        //         $(this).toggleClass("hidea showa")
        //         // hideshow("#santa1");
        //     }

        // })








