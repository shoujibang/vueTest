var CookieUtil  = {
    setCookie:function(name, value, expires, domain, path, secure){
        var cookieTxt = "";
        cookieTxt = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        if(expires instanceof Date){
            cookieTxt += "; expires=" + expires.toGMTString();
        }
        if(path){
            cookieTxt += "; path=" + path;
        }
        if(domain){
            cookieTxt += "; domain=" + domain;
        }
        if(secure){
            cookieTxt == "; secure=" + secure;
        }
        document.cookie = cookieTxt;
    },
    getCookie:function(name){
        var str = document.cookie;
        var arr = str.split(";"); 
        var cookieObj = {};       
        if(arguments.length > 0){
            for(var i = 0,len = arr.length,i < len;i++){
                var newArr = arr[i].split("=");
                if(newArr[0] == name){
                    return newArr[1];
                }
            }
        }else{
            for(var i = 0,len = arr.length,i < len;i++){
                var newArr = arr[i].split("=");
                cookieObj[newArr[0]] = newArr[1];
            }
            return cookieObj;
        }


    },
    delCookie:function(name, domain, path, secure){
        this.setCookie(name,"",Date(0),domain, path, secure);
    }
}