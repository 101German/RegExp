var regexp = /^(((\+375|80|0)(44|29|33|25|\(44\)|\(29\)|\(33\)|\(25\)))|(8?\(0(44|29|33|25)\)))?((\d{7})|(\d{3}(-\d{2}){2})|((\d{2}-){2}\d{3})|(\d{7}))$/;
var str = "+375295127716"
regexp.test(str)

if(regexp){
   var res = format(str);
}

function format(str)
{
  var arr  = String(str).split("");

  if(arr[0]==="+" && arr.length===13)
  {
    arr.splice(4,""," ");  
    arr.splice(5,"","(");
    arr.splice(8,"",")");
    arr.splice(9,""," ");
    arr.splice(13,"","-");
    arr.splice(16,"","-");
  }

  if(arr[0]==="+" && arr.length===15)
  {
    arr.splice(4,""," ");  
    arr.splice(9,""," ");
    arr.splice(13,"","-");
    arr.splice(16,"","-");
  }
  if(arr[0]==="+" && arr.length===17)
  {
    arr.splice(4,""," ");  
    arr.splice(9,""," ");
    
  }

  if(arr[0]==="(")
  {
    arr.splice(4,""," ");  
    
  }
  if(arr.length===7)
  {
      arr.splice(3,"","-");
      arr.splice(6,"","-")
  }
   return arr.join("");

}