var send=document.querySelector('.submit');
var textarea=document.querySelector('textarea');
var hot=document.querySelector('.hot');


send.addEventListener('click',function(){//发表留言时
    
    if(textarea.value==''){
        alert('您没有输入内容');
        return false;
    }else{
        var Now=new Date();
        var li=document.createElement('li');//创建一条留言记录
        var time=document.createElement('p');//时间记录
        var leave=document.createElement('p');//留言
        leave.style.fontSize='18px';
        time.style.fontSize='14px';
        console.log(leave);//
        time.innerHTML=Now.toLocaleString();
        leave.innerText=textarea.value;
        li.appendChild(leave);
        li.appendChild(time);
        
        hot.insertBefore(li,hot.children[0]);
        
    }
})

var title=document.querySelector('#header');
var detail=document.querySelector('.detail-box');
//拖曳框
title.addEventListener('mousedown',function(e){
   var x=e.pageX-detail.offsetLeft;
   var y=e.pageY-detail.offsetTop;
   document.addEventListener('mousemove',move);

   function move(e){
       detail.style.left=e.pageX-x+'px';
       detail.style.top=e.pageY-y+'px';
   }
   document.addEventListener('mouseup',function(){
       document.removeEventListener('mousemove',move);
   })
})

var mask=document.querySelector('.masker');
var heros=document.querySelectorAll('.heros');
var close_btn=document.querySelector('.close');

for( let i=0;i<heros.length;i++)
{     
      heros[i].addEventListener('click',function(){
          change(i);
          detail.style.display='block';
          mask.style.display='block';
      })
}
var Name=['钟南山','李文亮','刘智明'];
var Names=document.querySelector('.Names');
var infor=document.querySelector('.infor');
var img=document.querySelector('.cool');


function change(index){
      
      switch(index){
          case 0:Names.innerHTML=Name[0];
          img.src='图片/钟南山院士.jpg';
          infor.innerText='钟南山，男，汉族，福建厦门人，1936年10月出生于南京，中共党员，中国工程院院士，著名呼吸病学专家，中国抗击非典型肺炎的领军人物，曾任广州医学院院长、党委书记，广州市呼吸疾病研究所所长、广州呼吸疾病国家重点实验室主任、中华医学会会长。钟南山长期从事呼吸内科的医疗、教学、科研工作。';
          break;
          case 1:Names.innerHTML=Name[1];
          img.src='图片/李文亮医生.png';
          infor.innerText='李文亮（1985年10月-2020年2月7日），男，满族，籍贯辽宁省锦州市北镇市，武汉大学临床医学七年制专业毕业，中共党员。曾任武汉市中心医院眼科医生。2020年3月6日，国家卫生健康委员会、人力资源和社会保障部、国家中医药管理局追授李文亮“全国卫生健康系统新冠肺炎疫情防控工作先进个人”称号。2020年4月2日，李文亮被评定为烈士。4月20日，追授第24届“中国青年五四奖章”抗疫个人。';
          break;
          case 2:Names.innerHTML=Name[2];
          img.src='图片/刘智明医生.jpg';
          infor.innerText='1991年，刘智明毕业于武汉大学医学院。刘智明曾任武汉市第三医院副院长，武汉市武昌医院院长。擅长颅脑外伤、颅内肿瘤、脑血管病及椎管内病的诊断和治疗，特别擅长神经外科疾病手术治疗。兼任湖北中医药大学和江汉大学硕士研究生导师。新冠肺炎疫情发生以来，刘智明同志始终坚守在疫情防控一线，全力救治新冠肺炎患者，在工作中不幸感染新冠肺炎。'
      }

}

close_btn.addEventListener('click',function(){
    mask.style.display='none';
    detail.style.display='none';
})

var step;
function animate(obj,target,callback){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
         step=(target-window.pageYOffset)/10;
        step=step>0?Math.ceil(step):Math.floor(step);
        if(window.pageYOffset==target){
            clearInterval(obj.timer);
           callback&&callback();
        }
        window.scroll(0,window.pageYOffset+step);
    },30);
} 

var goback=document.querySelector('.tangle');
var gobackTop=600-300;//侧边栏的上边距-要滑动的距离
document.addEventListener('scroll',function(){
   if(window.pageYOffset>=300){
       goback.style.top=gobackTop+'px';
       goback.style.position='fixed';
       
   }else{
       goback.style.position='absolute';
       goback.style.top='600px';
   }

})
  goback.addEventListener('click',function(){
      animate(window,0);
  })