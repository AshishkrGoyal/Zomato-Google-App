/**
 * Created by Ashish Goyal on 7/6/2017.
 */

/*function main() {
    my_func(function (data) {
        console.log(data);
    });
}*/
/*console.log(y);*/


function my_func(callback) {
    var x;
    $.ajax({
        url: "https://developers.zomato.com/api/v2.1/categories",
        headers: { 'user-key': '***************************' },
        success: function (result) {
            /*$('.output').html(JSON.stringify(result));*/
           /* x = result;
            callback(x);*/
            /*console.log(x);*/
            /*console.log(typeof(result));
             console.log(result.categories[0].categories.name);*/
            console.log(result)
        }
    });
}
main();
