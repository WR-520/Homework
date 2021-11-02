function animate(obj,target,callback){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var step=(target-obj.offsetTop)/10; 
               step=step>0?Math.ceil(step):Math.floor(step);
               if(obj.offsetTop==target){
               clearInterval(obj.timer); 
               if(callback){
                callback();//调用回调函数
            }
        }
        obj.style.top=obj.offsetTop+step+'px';
    },30);
}

function startmove(obj,iTarget){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var speed=(iTarget-obj.alpha)/6;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        console.log(speed);
        if(obj.alpha==iTarget)
          {
             clearInterval(obj.timer);
          }
          else{
              obj.alpha=obj.alpha+speed;
             
              obj.style.filter='alpha(opacity:'+obj.alpha+')';
              obj.style.opacity=obj.alpha/100;
          }
    },30);
  }