function getCity(cityId) {
    var city="";
    $.ajax({
        type: "POST",
        url:  remoteURL+"/Area/selectById",
        data: {cityId:cityId},
        async: false,
        success: function(data){
            cityId=data;
        }
    });
    return city;
}
function getParameter(href,key) {
    var parameterString=href.split("?")[1];
    if(parameterString==null)
        return "";
    var parameters=parameterString.split("&");
    for(var i=parameters.length-1;i>=0;i--) {
        if(parameters[i].split("=")[0]==key)
            return parameters[i].split("=")[1];
    }
    return "";
}
function getOrderState(state) {
    switch(state) {
        case 1:return "待付款";
        case 2:return "待发货";
        case 3:return "待收货";
        case 5:return "失效";
        case 7:return "完结"
    }
}