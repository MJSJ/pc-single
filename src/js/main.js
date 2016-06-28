

 function test(){
    var singleData = papers[0];
    var html = template('detailTPL', singleData);
    $(".templates").html(html);
}

test();

	