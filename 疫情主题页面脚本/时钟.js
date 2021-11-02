window.onload=function(){

 function toDouble(n){//两位数
    if(n<10)
    {
        return '0'+n;
    }
    else{
        return ''+n;
    }
};
  var aClock=document.getElementsByTagName('h1');
  function tick(){
    var oDate1=new this.Date();
    var oDate=new Date();//获取当前时间 创建一个日期对象
    aClock[0].innerText=toDouble(oDate1.getFullYear())+'/';
    aClock[1].innerText=toDouble(oDate1.getMonth()+1)+'/';
    aClock[2].innerText=toDouble(oDate1.getDate());
    aClock[3].innerText=toDouble(oDate.getHours())+'时';
    aClock[4].innerText=toDouble(oDate.getMinutes())+'分';
    aClock[5].innerText=toDouble(oDate.getSeconds())+'秒';
    
  };
  tick();
  this.setInterval(tick,1000);

};
