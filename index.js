window.onload=function(){
    var back=document.getElementsByClassName("back");
    var clientHeight=getClientHeight();  //可视区域的高度
    back[0].onclick=function(){
         var timer=setInterval(function(){
             var scrollTop=getScrollTop();  //浏览器滚动条滚动的高度
             var speed=Math.ceil(scrollTop / 6);
             setScrollTop(scrollTop-speed);
             if(scrollTop==0){
                 clearInterval(timer);
             }
        },5);
    }

    function backTo(){
        var timer=setInterval(function(){
             var scrollTop=getScrollTop();  //浏览器滚动条滚动的高度
             var speed=Math.ceil(scrollTop / 6);
             setScrollTop(scrollTop-speed);
             if(scrollTop==0){
                 clearInterval(timer);
             }
        },5);
    }

    window.onscroll=function(){
         var scrollTop=getScrollTop();  //浏览器滚动条滚动的高度
         back[0].style.display = scrollTop > clientHeight ? "inline-block" : "none";
    }

    //取窗口可视范围的高度 
    function getClientHeight(){    
        var clientHeight=0;    
        if(document.body.clientHeight&&document.documentElement.clientHeight){    
            var clientHeight=(document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;            
        }else{    
            var clientHeight=(document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;        
        }    
        return clientHeight;    
    } 
    /**得到浏览器滚动条 滚动的高度 */
    function getScrollTop(){
        var scrollTop=0;
         if(document.documentElement&&document.documentElement.scrollTop){
             scrollTop=document.documentElement.scrollTop;
         }
         else{
             scrollTop=document.body.scrollTop;
        }
        return scrollTop;
    }
     /**设置浏览器滚动条 滚动的高度 */
    function setScrollTop(height){
         if(document.documentElement&&document.documentElement.scrollTop){
             document.documentElement.scrollTop=height;
         }
         else{
            document.body.scrollTop=height;
        }
    }
}