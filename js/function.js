function getCityIdFromUrl(href) {
    var parameterString=href.split("?")[1];
    if(parameterString==null)
        return "";
    var parameters=parameterString.split("&");
    for(var i=parameters.length-1;i>=0;i--) {
        if(parameters[i].split("=")[0]=="cityId")
            return parameters[i].split("=")[1];
    }
    return "";
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