function inputmsg(){
    var us=prompt('请输入你的账号','');
    var ps=prompt('请输入你的密码','');
    var username=document.getElementById('LoginName');
    var Password=document.getElementById('Password');
    username.value=us;
    Password.value=ps;
}

function findmsg(){
    //找到名字，退出那些位置所在的标签
    //var theflag;
    b=$('a.left')
    console.log(b)
    for (var i in b){
        var c=b[i].href
        if(c.match(/MySpace/i)){
            var tip=prompt('这是你登陆课程中心的具体链接',b[i].href);
            console.log(b[i].href);
            //console.log(i);//找到了需要点击的元素
            //theflag=i;
            break;
        }
    }//已经找到了需要加载的文字所在标签
    /*
    var myname=b[theflag];
    myname.addEventListener('click',function(){
        window.location.href=myname.href;
    });

    var logout=b[theflag+1];
    logout.addEventListener('click',function(){
        window.location.href=logout.href;
    });
    */
}

function modicss(){
    //已经发现是顶部导航栏CSS格式设置导致名字和退出部分被遮挡
    var men=document.getElementsByClassName('menubg');
    men[0].style.zIndex="0";
    console.log("导航栏的zIndex已经被改为0.");
}
var firstlog=document.getElementById('ctl00_btnlogin');
firstlog.addEventListener("click",function(){
    //如果进入到这里则说明已经相应了第一步
    try{
        var secondlog=document.getElementById('btnLogin');
        inputmsg();
        secondlog.addEventListener('click',function(){
            secondlog.click();
        });
    }
    catch(err)
    {
        console.log(err);
    }
});


findmsg()
modicss()