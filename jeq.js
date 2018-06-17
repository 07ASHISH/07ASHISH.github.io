var i=0;
$('#Upload').click(function show_prompt()
 {
    // var mg="https://placeimg.com/500/333/any";
    // var bgmg="https://placeimg.com/128/128/people";
    var name=prompt("Please enter your name ");
    var captin=prompt("Please enter caption");
     var mg=prompt("enter image address","https://placeimg.com/500/333/any");
    var bgmg=prompt("background image address enter","https://placeimg.com/128/128/people");
    console.log(name);
   var abc= $("#newcard").clone();
   newid="rock"+i;
    abc.attr("id",newid);
    abc.appendTo("#addccard");

    // $("#newid").text(function(){
    //     $("#nam").append(name);
    // })
    // if(name.val().trim().length == 0)
    // {
    //     name="ano";
    // }
    //  if(mg === null)
    // {
    // mg="https://placeimg.com/500/333/any";
    // }
    //  if(bgmg === null)
    // {
    // bgmg="https://placeimg.com/128/128/people";
    // // }
    $("#"+newid+ " #namee").text(name);
    $("#"+newid+ " #cap").text(captin);

    $("#"+newid+ " #bg-img").attr("src",mg);
    $("#"+newid+ " #back-img").css('background-image','url('+bgmg)+')';
    i++;
});









