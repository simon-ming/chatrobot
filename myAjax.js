//一个ajax对象
var ajax = {
    get:function (url,successCallBack,failCallBack) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET",url,true);
        xhr.onreadystatechange = function () {
            //xhr.readyState 的值有0 1 2 3 4
            if(xhr.readyState == 4){
                //判断xhr.status的响应码
                if(xhr.status == 200 || xhr.status == 304){
                    //判断successCallBack 是否传递了一个函数
                    if(typeof successCallBack == "function"){
                        //将xhr.responseText的信息交给用户回调函数处理
                        successCallBack(xhr.responseText,xhr);
                    }else if(typeof failCallBack == "function"){
                        //将xhr.responseText的信息交给用户回调函数处理
                        failCallBack(xhr.responseText,xhr);
                    }
                }
 
            }};
        xhr.send(null);
    },
    post:function (url,data,successCallBack,failCallBack) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST",url,true);
        xhr.onreadystatechange = function () {
            //xhr.readyState 的值有0 1 2 3 4
            if(xhr.readyState == 4){
                //判断xhr.status的响应码
                if(xhr.status == 200 || xhr.status == 304){
                    //判断successCallBack 是否传递了一个函数
                    if(typeof successCallBack == "function"){
                        //将xhr.responseText的信息交给用户回调函数处理
                        successCallBack(xhr.responseText,xhr);
                    }else if(typeof failCallBack == "function"){
                        //将xhr.responseText的信息交给用户回调函数处理
                        failCallBack(xhr.responseText,xhr);
                    }
                }
 
            }};
        //设置请求头,这行代码,一定要在open之后, send之前调用.
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(data);
    }
};
