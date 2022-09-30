
var listdataCategory;
var url =  window.location.href; //get href
var id = url.split('?')[1]; 

$.ajax({
    url: "https://hoangthongtelecom.com/unitedasia/getProductDetail.php",
    data:{"idProduct":id},
    type: 'POST',
    success: function (data) {
        listdataSlide = $.parseJSON(data);
         var _img ="<img src="+listdataSlide[0]['imageProduct']+" height='300px' width='350px'>";
         var _name ="<h3 style='font-weight: bold'>"+listdataSlide[0]['nameProduct']+"</h3>";
           $('#imagedetail').append(_img);
            $('#namedetail').append(_name);
        for (var r in listdataSlide) {
            var qrImage = listdataSlide[r]['imageProduct'];
            var qr1 = listdataSlide[r]['idProductDetail_EN'];
            var qr2 = listdataSlide[r]['valueProductDetail_EN'];
            var type =Number(listdataSlide[r]['type']);
            if(type ==1){
                 var diva = "<tr><td>"+qr1+"</td><td>"+qr2+"</td></tr>";
                 $('#table1').append(diva);
            }else{
                  var diva1 = "<tr><td>"+qr1+"</td><td>"+qr2+"</td></tr>";
                  $('#table2').append(diva1);
            }

          

            
        }

    }
});