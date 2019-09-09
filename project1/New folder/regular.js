$('document').ready(function () {
var vid = {
   api: function(){
 $('.inputBox').on('input',function () {
    var key = 'AIzaSyAhkv4p2M1uuayzECx16rouPVGxl2S1DGo';
    var write = ($('.inputBox').val());
    $.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=relevance&q=' + write + '&key=' + key, function (data) {
        function output() {
            var e = data.items;
            var list = e.length
            for (i = 0; i < list; i++) {
                var title =   e[i].snippet.title;
                var Id = e[i].id.videoId;
                var displayVid = '<iframe width="260" height="165" src="https://www.youtube.com/embed/' + Id + '" frameborder="0" allowfullscreen></iframe>';
                var description = e[i].snippet.description;
                $('.display').append('<li class = "video' + [i] +'">' + '<h3>' + title  +'</h3>' + '<br>' + displayVid + '<br>' + '<p>' + description + '</p>' + '</li>');
                if($('.display li').length > 5){
                    $('.display').empty();   
                }
                if($('.display li').length == 0){
                $('.display').append('<li  class = "video' + [i] +'">' + '<h3>' + title  +'</h3>' + '<br>'+ displayVid + '<br>' + '<p>' + description + '</p>' + '</li>');
                }
            };
        };
        output();   
    });
    });
}
};
vid.api();
});
