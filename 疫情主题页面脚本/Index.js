var btn = document.getElementsByClassName("play")[0]//按钮
var myMusic = document.getElementById("myMusic")//音乐
var mark = true

//当点击按钮
btn.onclick = function(){
    if(mark){//如果没有放歌
        this.className += " rotate"//添加一个rotate的类名  
        myMusic.play()//音乐播放
        mark = false//在放歌了
    }else{
        this.className = "play"
        myMusic.pause()//暂停播放
        mark = true
    }
   console.log(111);
};

var heart=document.querySelector('.boxx');
var body=document.body;
document.addEventListener('mousemove',function(e){
    var x=e.pageX;
    var y=e.pageY;
    heart.style.left=x+10+'px';
    heart.style.top=y-10+'px';
    body.addEventListener('click',function(){
        heart.style.display='block';
        setTimeout(function(){
           heart.style.display='none';
        },2000);
    })
   
})