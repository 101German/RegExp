function format(obj) {
    if (obj instanceof String || typeof obj === 'string') {
        return "application/text;base64," + btoa(obj).toString();
    }

if(typeof obj ==="number")
{
    
    if(Number.isInteger(obj))
 {
    return obj.toString()
    }
    else
    {
        return obj.toFixed(2).toString();
    }
  }

     if (obj instanceof Array) 
    {
     let str = "[";
     for(let i =0;i<obj.length-1;i++)
     {
         if(i== obj.length-2){
         str+=obj[i] + "," + obj[i+1] + "]";
           continue;  
        }

        str+=obj[i] + ",";
     } 
     return str;
    }

    if(obj instanceof Date)
    {
        let data = new  Date(obj);
        return data.toLocaleDateString().replace(/\./ig,"-") + " " + data.toLocaleTimeString();
    }
    if (obj instanceof Object)
     {
        let pairs = Object.entries(obj);
        let res = [];
        for (let [key, value] of pairs) {
            res.push(format([key, value]));
        }
        return format(res);
    }
    
        return obj.toString();
    
    
}