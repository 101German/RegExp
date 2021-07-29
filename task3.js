String.prototype.format = function (args) {
    let res = this;
    
    let pairs = Object.entries(args);
    
    for (const [key, value] of pairs) 
    {
        let regexp = new RegExp('\\{'+key+'\\}');
        res = res.replace(regexp, value);
    }
    return res;
}