$('document').ready(function(){
    $('.send').click(function(d){
        var e = $('#name').val();
        var f = $('#email').val();
        var g = $('#subject').val();
        if (e.length == 0){
           d.preventDefault();
           alert('Please add a name');
        }
    if(f.length == 0){
        d.preventDefault();
        alert('Please add a email');
    }
    if(g.length == 0){
        d.preventDefault();
        alert('Please add a message');
    }
    if (e.length && f.length && g.length  > 0){
        alert('Thank You ' + e);
    }
    })
});