function sendAjax(url, options) {
    var _default = {
        method: 'GET',
        data: null,
        success: null
    }
    // 修改默认值
    for(var i in options) {
        _default[i] = options[i];
    }
    if(_default.method.toUpperCase() === 'GET') {
        // get请求有缓存问题，所以先解决缓存
        // 原理： 保证请求的url地址不一样，不会使用缓存
        var f = url.indexOf('?') > -1 ? '&' : '?';
        url += f + '_=' + Date.now();
        // url拼接
        for(var j in  _default.data) {
            url += '&' + j + '=' + _default.data[j];
        }
        _default.data = null;
    }


    var xhr = new XMLHttpRequest();
    xhr.open(_default.method, url, true);
    // get请求， send默认传入null
    // if(_default.method.toLowerCase() === 'post') {
    //     // 如果是post请求， 把对象转为json字符串，进行传输 
    //     _default.data = JSON.stringify(_default.data);
    // }
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    // xhr.setRequestHeader("Content-Type", "text/html;charset=utf-8");
    xhr.send(_default.data);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            // 获取相应数据
            var data = xhr.responseText;
            data = JSON.parse(data);
            if(typeof _default.success === 'function') {
                _default.success(data);
            }

            // callback(data);
        }
    }
}
