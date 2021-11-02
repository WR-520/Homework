var oInput=document.querySelector('.inputer');
var oNav_choices=document.querySelectorAll(".search2");
var oEnter=document.querySelector('.enter');//获取按钮


//立即执行函数
//创建一个页面背景库

var oImg_container=document.querySelector('.img-container');
(function () {
    for (let i = 5; i <= 10; i++) {
        let imgs = document.createElement('img');
        imgs.src = '图片/壁纸' + i + '.jpg';
       
        oImg_container.appendChild(imgs);//加入到背景库
    }
})()


 for(var i=0;i<oNav_choices.length;i++){
  oNav_choices[i].setAttribute('data_index', i);
} 

//创造键盘事件
function web_open(number){
  switch(number){
  
  case 0: window.location.href= 'https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=1&tn=baidu&wd=' + oInput.value + '&oq=%25E6%25B7%2598%25E5%25AE%259D&rsv_pq=87ff3d2f00056620&rsv_t=0d97FhyH7EdZqko%2BjhsD5TTOgYc9LTh%2BOvXcKoN%2BEEhlayenoksswgvZDxM&rqlang=cn&rsv_enter=1&rsv_dl=ts_0&inputT=3309&rsv_sug3=13&rsv_sug1=7&rsv_sug7=101&rsv_sug2=0&prefixsug=hyrz&rsp=0&rsv_sug4=3309';break;
  case 1: window.location.href = 'https://www.zhihu.com/search?type=content&q=' + oInput.value;break;
  case 2: window.location.href = 'https://s.taobao.com/search?q=' + oInput.value + '&imgfile=&commend=all&ssid=s5-e&search_type=item&sourceId=tb.index&spm=a21bo.2017.201856-taobao-item.1&ie=utf8&initiative_id=tbindexz_20170306';break;
  case 3: window.location.href = 'https://search.bilibili.com/all?keyword=' + oInput.value + '&from_source=nav_search_new';break;
  }
}
//移动到选项 选项的样式改变
for(let i=0;i<oNav_choices.length;i++)
{ 
   oNav_choices[i].addEventListener('mouseenter',function(){
   this.className=('btn_color');//移动到该选项 则变色
 })

   oNav_choices[i].addEventListener('mouseleave',function(){
     this.className='';//鼠标出来则回到原色   
  })
  var index=5;
  oNav_choices[i].onclick=function(){//选项点击事件
      var arr=['百度一下','知乎一下','淘宝一下','Bli一下'];
       index= parseInt(this.getAttribute('data_index'));
      oEnter.value=arr[index];//点击选项 则搜索按钮改变为对应value  出错：undefine
  };

   oInput.addEventListener('keyup', function (e) {
            if (e.keyCode == 13) {
                 if(index==5){
                   web_open(0);
                 }
                 web_open(index);
            }
          })
      oEnter.addEventListener('click',function(){ 
        if(index==5){
          web_open(0);
        }
        web_open(index); //选完选项点击搜索按钮 跳转指定网页
      })
}

//随机数函数
function getRandomNumber(min,max){
   min=Math.ceil(min);
   max=Math.floor(max);
   return Math.floor(Math.random()*(max-min+1))+min;
}
//随机换肤
var oChange=document.querySelector('.change_skin');
var oBody=document.body;
oChange.onclick=function(){
  var random=getRandomNumber(5,10);
  oBody.style.backgroundImage='url(图片/壁纸' + random + '.jpg'; 
}

//运动框架
function startMove(obj,iTarget,back)
{  clearInterval(obj.timer); 
   obj.timer=setInterval(function(){
    var k=iTarget-obj.offsetLeft;
    var speed=iTarget>=0?Math.ceil(k/10):Math.floor(k/10);
    obj.style.left=obj.offsetLeft+speed+'px';
    console.log(iTarget);//iTarget传参有效
    if(obj.style.left===iTarget){
      clearInterval(obj.timer);
      if(back){
        back();
      }
    }
  }
  ); 
}

//手动换肤
var flag=0;
var oChange_yourself=document.querySelector('.change_yourself');
console.log(oChange_yourself);
oChange_yourself.onclick=function(){
  if(flag==0){
  console.log(oImg_container);
  oChange_yourself.innerHTML='关闭换肤<i class="fa fa-heart-o"></i>';
  startMove(oImg_container,-1500);
  flag=1;
  }

  else if(flag==1) {
  startMove(oImg_container,+1500);
  flag=0;
  oChange_yourself.innerHTML='手动换肤<i class="fa fa-heart-o"></i>';
  console.log(oImg_container);
  }
}
//点击换肤
var img = document.querySelectorAll('img');
for (var i = 0; i < img.length; i++) {
    img[i].onclick = function () {
        oBody.style.backgroundImage = 'url('+this.src+')';
    }
}

document.addEventListener('keyup',function(e){
  if(e.keyCode===83){
    oInput.focus();
  }
})


  