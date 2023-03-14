

function fetchRandomImage(){
/*
    --------METHOD 1--------
     var xhrRequest =new XMLHttpRequest();
    xhrRequest.onload=function(){
        var responseJSON=JSON.parse(xhrRequest.response);

        var imageUrl=responseJSON.message;
        $('#dog-img').attr('src', imageUrl);
    };


    xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true);
    xhrRequest.send();
    */
   /*
   ------METHOD 2----- BY USING JQUERY AJAX
    $.ajax({
        url:'https://dog.ceo/api/breeds/image/random',
        method:'get',
        success:function(data){
            var imageUrl=data.message;
            $('#dog-img').attr('src', imageUrl);
        }
    
    });
    */


    $.get('https://dog.ceo/api/breeds/image/random', function(data){
                var imageUrl=data.message;
                $('#dog-img').attr('src', imageUrl);
    });
}

$('#dog-img-fetch-button').click(fetchRandomImage);