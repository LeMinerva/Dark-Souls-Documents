document.onscroll=function(){
  document.getElementById("pagel").style.width=(window.pageYOffset/(document.body.scrollHeight-window.innerHeight))*100+"%";
}
function parseXML(){
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
  var xmlhttp=new window.XMLHttpRequest();
  document.write("<div class=\"frame\"><div class=\"icon\"><img src=\"icons/dialogue"+[game]+"/"+[npc]+".jpg\"></div><div class=\"title\"><div class=\"name\">"+[title]+"</div></div><div class=\"chn\"><div class=\"desfrm\">");
  for(var i=0;i<[lines];i++){
    xmlhttp.open("get","text/chn"+[game]+"/dialogue/"+[npc]+".xml",false);
    xmlhttp.send(null);
    xmlDoc=xmlhttp.responseXML;
    var bmsgc=xmlDoc.getElementsByTagName("text")[i].childNodes[0].nodeValue;
    var descc=bmsgc.replace(/\n/g,"<br>");
    document.write("<p>"+descc+"</p>");
  }
  document.write("</div></div><div class=\"jap\"><div class=\"desfrm\">");
  for(var i=0;i<[lines];i++){
    xmlhttp.open("get","text/jap"+[game]+"/dialogue/"+[npc]+".xml",false);
    xmlhttp.send(null);
    xmlDoc=xmlhttp.responseXML;
    var bmsgj=xmlDoc.getElementsByTagName("text")[i].childNodes[0].nodeValue;
    var descj=bmsgj.replace(/\n/g,"<br>");
    document.write("<p>"+descj+"</p>");
  }
  document.write("</div></div><div class=\"eng\"><div class=\"desfrm\">");
  for(var i=0;i<[lines];i++){
    xmlhttp.open("get","text/eng"+[game]+"/dialogue/"+[npc]+".xml",false);
    xmlhttp.send(null);
    xmlDoc=xmlhttp.responseXML;
    var bmsge=xmlDoc.getElementsByTagName("text")[i].childNodes[0].nodeValue;
    var desce=bmsge.replace(/\n/g,"<br>");
    document.write("<p>"+desce+"</p>");
  }
  document.write("</div></div></div>");
  document.getElementById("dialogue"+[game]).setAttribute("class","mainitm");
}