document.onscroll=()=>document.getElementById("pagel").style.width=(window.pageYOffset/(document.body.scrollHeight-window.innerHeight))*100+"%"
window.onload=()=>{
  function geturl(urlid){
    var reg=new RegExp("(^|&)"+urlid+"=([^&]*)(&|$)","i");
    var r=window.location.search.substr(1).match(reg);
    return unescape(r[2]);
  }
  rmk=geturl("rmk");
  game=geturl("game");
  type=geturl("type");
  lines=geturl("lines");
  title=unescape(geturl("title").replace(/\\/g,"%").replace(/\//g,"%"));
  if(rmk==2){mt="dialogue"}else{mt=type}
  fetch("header.html").then(f=>{f.text().then(m=>{
    document.getElementById("menu").innerHTML=m;
    document.getElementById([mt]+[game]).setAttribute("class","mainitm")
  })});
  var xr=new window.XMLHttpRequest();
  if(rmk==2){
    document.title="黑暗之魂"+[game]+"对话";
    document.getElementsByClassName("icon")[0].firstChild.setAttribute("src","icons/dialogue"+game+"/"+type+".webp");
    document.getElementsByClassName("title")[0].firstChild.innerHTML=title;
    xr.open("get","text/chn"+[game]+"/dialogue/"+[type]+".xml",false);xr.send();
    xmlc=xr.responseXML;
    xr.open("get","text/jap"+[game]+"/dialogue/"+[type]+".xml",false);xr.send();
    xmlj=xr.responseXML;
    xr.open("get","text/eng"+[game]+"/dialogue/"+[type]+".xml",false);xr.send();
    xmle=xr.responseXML;
    var nline=document.createElement("p");
    for(var i=0;i<[lines];i++){
      var bmsgc=xmlc.getElementsByTagName("text")[i].childNodes[0].nodeValue;
      var descc=bmsgc.replace(/(\n|#1|#2|#3|##|#0)/g,($0, $1)=>{return{"\n":"<br>","#1":'<span class="cgb">',"#2":'<span class="cgd">',"#3":"</span>","##":"","#0":""}[$1]});
      var printc=document.getElementsByClassName("chn")[0].childNodes[1].appendChild(nline.cloneNode(true));
      if(bmsgc.indexOf("##")!==-1){printc.setAttribute("class","uud")};
      if(bmsgc.indexOf("#0")!==-1){printc.setAttribute("class","dtt")};
      printc.innerHTML=descc;
      var bmsgj=xmlj.getElementsByTagName("text")[i].childNodes[0].nodeValue;
      var descj=bmsgj.replace(/\n/g,"<br>").replace(/(##|#0)/g,"");
      var printj=document.getElementsByClassName("jap")[0].childNodes[1].appendChild(nline.cloneNode(true));
      if(bmsgj.indexOf("##")!==-1){printj.setAttribute("class","uud")};
      if(bmsgj.indexOf("#0")!==-1){printj.setAttribute("class","dtt")};
      printj.innerHTML=descj;
      var bmsge=xmle.getElementsByTagName("text")[i].childNodes[0].nodeValue;
      var desce=bmsge.replace(/\n/g,"<br>").replace(/(##|#0)/g,"");
      var printe=document.getElementsByClassName("eng")[0].childNodes[1].appendChild(nline.cloneNode(true));
      if(bmsge.indexOf("##")!==-1){printe.setAttribute("class","uud")};
      if(bmsge.indexOf("#0")!==-1){printe.setAttribute("class","dtt")};
      printe.innerHTML=desce;
    }
  }else{
    document.title="黑暗之魂"+[game]+[title];
    xr.open("get","text/chn"+[game]+"/"+[type]+"_name.xml",false);xr.send();
    xmlDoc=xr.responseXML;
    var namec=xmlDoc.getElementsByTagName("text");
    xr.open("get","text/jap"+[game]+"/"+[type]+"_name.xml",false);xr.send();
    xmlDoc=xr.responseXML;
    var namej=xmlDoc.getElementsByTagName("text");
    xr.open("get","text/eng"+[game]+"/"+[type]+"_name.xml",false);xr.send();
    xmlDoc=xr.responseXML;
    var namee=xmlDoc.getElementsByTagName("text");
    xr.open("get","text/chn"+[game]+"/"+[type]+"_desc.xml",false);xr.send();
    xmlDoc=xr.responseXML;
    var descc=xmlDoc.getElementsByTagName("text");
    xr.open("get","text/jap"+[game]+"/"+[type]+"_desc.xml",false);xr.send();
    xmlDoc=xr.responseXML;
    var descj=xmlDoc.getElementsByTagName("text");
    xr.open("get","text/eng"+[game]+"/"+[type]+"_desc.xml",false);xr.send();
    xmlDoc=xr.responseXML;
    var desce=xmlDoc.getElementsByTagName("text");
    if(rmk==0){
      document.getElementsByClassName("chn")[0].removeChild(document.getElementsByClassName("remk")[0]);
      document.getElementsByClassName("jap")[0].removeChild(document.getElementsByClassName("remk")[0]);
      document.getElementsByClassName("eng")[0].removeChild(document.getElementsByClassName("remk")[0]);
    }else{
      xr.open("get","text/chn"+[game]+"/"+[type]+"_remk.xml",false);xr.send();
      xmlDoc=xr.responseXML;
      var remkc=xmlDoc.getElementsByTagName("text");
      xr.open("get","text/jap"+[game]+"/"+[type]+"_remk.xml",false);xr.send();
      xmlDoc=xr.responseXML;
      var remkj=xmlDoc.getElementsByTagName("text");
      xr.open("get","text/eng"+[game]+"/"+[type]+"_remk.xml",false);xr.send();
      xmlDoc=xr.responseXML;
      var remke=xmlDoc.getElementsByTagName("text");
    }  
    frm=document.getElementsByClassName("frame")[0];
    for(var i=0;i<[lines];i++){
      document.getElementById("content").appendChild(frm.cloneNode(true));
      document.getElementsByClassName("icon")[i].firstChild.src="icons/"+[type]+[game]+"/"+[i]+".webp";
      document.getElementsByClassName("chn")[i].childNodes[1].innerHTML=namec[i].childNodes[0].nodeValue.replace(/(#1|#2|#3|##)/g,($0, $1)=>{return{"#1":'<span class="cgb">',"#2":'<span class="cgd">',"#3":"</span>","##":"<i>未使用</i>"}[$1]});
      document.getElementsByClassName("jap")[i].childNodes[1].innerHTML=namej[i].childNodes[0].nodeValue.replace(/##/,"<i>未使用</i>");
      document.getElementsByClassName("eng")[i].childNodes[1].innerHTML=namee[i].childNodes[0].nodeValue.replace(/##/,"<i>UNUSED</i>");
      document.getElementsByClassName("chn")[i].childNodes[2].firstChild.innerHTML="<p>"+descc[i].childNodes[0].nodeValue.replace(/(\n|#1|#2|#3)/g,($0, $1)=>{return{"\n":"</p><p>","#1":'<span class="cgb">',"#2":'<span class="cgd">',"#3":"</span>"}[$1]})+"</p>";
      document.getElementsByClassName("jap")[i].childNodes[2].firstChild.innerHTML="<p>"+descj[i].childNodes[0].nodeValue.replace(/\n/g,"</p><p>")+"</p>";
      document.getElementsByClassName("eng")[i].childNodes[2].firstChild.innerHTML="<p>"+desce[i].childNodes[0].nodeValue.replace(/\n/g,"</p><p>")+"</p>";
      if(rmk==1){
        document.getElementsByClassName("chn")[i].childNodes[3].innerHTML="<p>"+remkc[i].childNodes[0].nodeValue.replace(/(#1|#2|#3)/g,($0, $1)=>{return{"#1":'<span class="cgb">',"#2":'<span class="cgd">',"#3":"</span>"}[$1]})+"</p>";
        document.getElementsByClassName("jap")[i].childNodes[3].innerHTML="<p>"+remkj[i].childNodes[0].nodeValue+"</p>";
        document.getElementsByClassName("eng")[i].childNodes[3].innerHTML="<p>"+remke[i].childNodes[0].nodeValue+"</p>";
      }
    }
    document.getElementById("content").removeChild(document.getElementsByClassName("frame")[i]);
    document.getElementById("content").setAttribute("class","content"+" game"+[game])
  }
  document.getElementById("content").onclick=event=>{
    if(event.target.className=='top'){document.getElementById("content").insertBefore(event.target.parentNode,event.target.parentNode.parentNode.firstChild)};
    if(event.target.className=='tab'){event.target.parentNode.parentNode.className="frame "+[event.target.parentNode.className.charAt(0)]}}
}