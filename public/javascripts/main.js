$(document).ready(function (){
    var artistas = "";
    var url = "fazenda.json";  

    $.ajax({
        url: url,
        dataType: "json",
        success: function (response) {
            if(response.erro) {
                $("h2").html(response.erro);
            }else {
                for(var i = 0; i < response.data.length; i++) {
                    artistas += "<ul class='ranking'>";                   
                    artistas += "<li class='list'><img class='picture' src=" + response.data[i].picture + "></li>";
                    artistas += "<li class='list'><p class='name'>" + response.data[i].name + "</p></li>";                    
                    artistas += "<li class='list'><p class='description'>" + response.data[i].description + "</p></li>";
                    artistas += "</ul>";               
                }

                $('.box-info').html(artistas);
            }
        }
    });
});