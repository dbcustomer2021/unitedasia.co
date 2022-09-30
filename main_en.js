
var listdataCategory;
var url =  window.location.href; //get href
var id = url.split('?')[1]; 

$.ajax({
    url: "https://hoangthongtelecom.com/unitedasia/getProduct.php",
    data:{"idCategory":id},
    type: 'POST',
    success: function (data) {
        listdataSlide = $.parseJSON(data);
        for (var r in listdataSlide) {
            var id = listdataSlide[r]['id'];
            var qrImage = listdataSlide[r]['imageProduct'];
            var qrname = listdataSlide[r]['nameProduct'];
           var diva = "<div class='col-md-3'><a href='productdetail_en.html?"+id+"'><img src="+qrImage+" height='200px' width='250px'></a><div style='height: 20px'></div><h5>"+qrname+"</h5><div style='height: 20px'></div></div>";
            $('#TaffetaDetail').append(diva);
        }

    }
});