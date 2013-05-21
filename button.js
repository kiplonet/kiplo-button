$(function() {
    // CSS
    var css = ".kiplo-save-button {\
                    background:url(http://cdn.kiplo.net/imgs/save-button/kiplo-btn.png) no-repeat;\
                    height:20px;\
                    width:62px;\
                    display:block;\
                    position:relative;\
                    margin-top:5px;\
                }\
                .kiplo-save-button:hover {\
                    background-position:0 -30px;\
                }\
                .kiplo-save-button:active {\
                    background-position:0 -60px;\
                }\
                .kiplo-save-button span {\
                    display: none;\
                }";
    $("head").append("<style>"+css+"</style>");
    
    $(".kiplo-save-button").each(function(i, elem){
        $(elem).html("<span>Save to kiplo</span>")
    });
    
    $(".kiplo-save-button").on("click", function(e){e.preventDefault();var elem = e.currentTarget;var url = encodeURIComponent($(elem).data("url")),title= encodeURIComponent($(elem).data("title")),source = encodeURIComponent($(elem).data("source")),via = encodeURIComponent($(elem).data("via"));  
        var windowUrl = "http://kiplo.net/button/new?url="+ url +"&title="+ title +"&source="+ source +"&via="+ via;
        window.open(windowUrl, "kiplo-popup", "location=no,menubar=no,status=no,titlebar=no,scrollbars=no,width=420,height=192");
    });
});
