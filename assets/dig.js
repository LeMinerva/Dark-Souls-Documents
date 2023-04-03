document.onscroll=function(){
  document.getElementById("pagel").style.width=(window.pageYOffset/(document.body.scrollHeight-window.innerHeight))*100+"%";
}
window.onload=function(){
  function geturl(urlid){
    var reg=new RegExp("(^|&)"+urlid+"=([^&]*)(&|$)","i");
    var r=window.location.search.substr(1).match(reg);
    return unescape(r[2]);
  }
  game=geturl("game");
  npc=geturl("npc");
  lines=geturl("lines");
  title=unescape(geturl("title").replace(/\\/g,"%").replace(/\//g,"%"));
  document.title="黑暗之魂"+[game]+"对话";
  document.getElementsByClassName("icon")[0].firstChild.setAttribute("src","icons/dialogue"+game+"/"+npc+".jpg");
  document.getElementsByClassName("title")[0].firstChild.innerHTML=title;
  var xmlhttp=new window.XMLHttpRequest();
  xmlhttp.open("get","text/chn"+[game]+"/dialogue/"+[npc]+".xml",false);
  xmlhttp.send(null);
  xmlc=xmlhttp.responseXML;
  xmlhttp.open("get","text/jap"+[game]+"/dialogue/"+[npc]+".xml",false);
  xmlhttp.send(null);
  xmlj=xmlhttp.responseXML;
  xmlhttp.open("get","text/eng"+[game]+"/dialogue/"+[npc]+".xml",false);
  xmlhttp.send(null);
  xmle=xmlhttp.responseXML;
  var nline=document.createElement("p");
  for(var i=0;i<[lines];i++){
    var bmsgc=xmlc.getElementsByTagName("text")[i].childNodes[0].nodeValue;
    var descc=bmsgc.replace(/\n/g,"<br>").replace(/\n/g,"</p><p>").replace(/(#1|#2|#3|##|#0)/g,function($0, $1){return{"#1":'<span class="cgb">',"#2":'<span class="cgd">',"#3":"</span>","##":"","#0":""}[$1]});
    var printc=document.getElementsByClassName("chn")[0].childNodes[1].appendChild(nline.cloneNode(true));
    if(bmsgc.indexOf("##")!==-1){printc.setAttribute("class","uud")}
    if(bmsgc.indexOf("#0")!==-1){printc.setAttribute("class","dtt")}
    printc.innerHTML=descc;
    var bmsgj=xmlj.getElementsByTagName("text")[i].childNodes[0].nodeValue;
    var descj=bmsgj.replace(/\n/g,"<br>").replace(/(##|#0)/g,"");
    var printj=document.getElementsByClassName("jap")[0].childNodes[1].appendChild(nline.cloneNode(true));
    if(bmsgj.indexOf("##")!==-1){printj.setAttribute("class","uud")}
    if(bmsgj.indexOf("#0")!==-1){printj.setAttribute("class","dtt")}
    printj.innerHTML=descj;
    var bmsge=xmle.getElementsByTagName("text")[i].childNodes[0].nodeValue;
    var desce=bmsge.replace(/\n/g,"<br>").replace(/(##|#0)/g,"");
    var printe=document.getElementsByClassName("eng")[0].childNodes[1].appendChild(nline.cloneNode(true));
    if(bmsge.indexOf("##")!==-1){printe.setAttribute("class","uud")}
    if(bmsge.indexOf("#0")!==-1){printe.setAttribute("class","dtt")}
    printe.innerHTML=desce;
  }
  document.getElementById("dialogue"+[game]).setAttribute("class","mainitm");
}