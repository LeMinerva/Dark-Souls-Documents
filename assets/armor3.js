function parseXML(){
  try{
    xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async="false";
  }catch(e){
    try{
      var xmlhttp=new window.XMLHttpRequest();
    }catch(e){
      xmlDoc=document.implementation.createDocument("","",null);
      xmlDoc.async="false";
    }
  }
  for(var i=0;i<387;i++){
    document.write("<div class=\"frame\">");
    document.write("<div class=\"icon\"><img src=\"icons\/armor3\/"+[i]+".png\"><\/div>");
    document.write("<div class=\"chn\">");
    if(navigator.userAgent.indexOf("Chrome")==-1){
      xmlDoc.load("text/chn3/armor_name.xml");
    }else{
      xmlhttp.open("get","text/chn3/armor_name.xml",false);
      xmlhttp.send(null);
      xmlDoc=xmlhttp.responseXML.documentElement;
    }
    var namec=xmlDoc.getElementsByTagName("text")[i].childNodes[0].nodeValue;
    document.write("<div class=\"name\">"+namec+"<\/div>");
    if(navigator.userAgent.indexOf("Chrome")==-1){
      xmlDoc.load("text/chn3/armor_desc.xml"); 
    }else{
      xmlhttp.open("get","text/chn3/armor_desc.xml",false);
      xmlhttp.send(null);
      xmlDoc=xmlhttp.responseXML.documentElement;
    }
    var bmsgc=xmlDoc.getElementsByTagName("text")[i].childNodes[0].nodeValue;
    var descc=bmsgc.replace(/\n/g,"<\/p><p>");
    document.write("<div class=\"desc\"><div class=\"desfrm\"><p>"+descc+"<\/p><\/div><\/div>");
    document.write("<\/div>");
    document.write("<div class=\"jap\">");
    if(navigator.userAgent.indexOf("Chrome")==-1){
      xmlDoc.load("text/jap3/armor_name.xml");
    }else{
      xmlhttp.open("get","text/jap3/armor_name.xml",false);
      xmlhttp.send(null);
      xmlDoc=xmlhttp.responseXML.documentElement;
    }
    var namej=xmlDoc.getElementsByTagName("text")[i].childNodes[0].nodeValue;
    document.write("<div class=\"name\">"+namej+"<\/div>");
    if(navigator.userAgent.indexOf("Chrome")==-1){
      xmlDoc.load("text/jap3/armor_desc.xml"); 
    }else{
      xmlhttp.open("get","text/jap3/armor_desc.xml",false);
      xmlhttp.send(null);
      xmlDoc=xmlhttp.responseXML.documentElement;
    }
    var bmsgj=xmlDoc.getElementsByTagName("text")[i].childNodes[0].nodeValue;
    var descj=bmsgj.replace(/\n/g,"<\/p><p>");
    document.write("<div class=\"desc\"><div class=\"desfrm\"><p>"+descj+"<\/p><\/div><\/div>");
    document.write("<\/div>");
    document.write("<div class=\"eng\">");
    if(navigator.userAgent.indexOf("Chrome")==-1){
      xmlDoc.load("text/eng3/armor_name.xml");
    }else{
      xmlhttp.open("get","text/eng3/armor_name.xml",false);
      xmlhttp.send(null);
      xmlDoc=xmlhttp.responseXML.documentElement;
    }
    var namee=xmlDoc.getElementsByTagName("text")[i].childNodes[0].nodeValue;
    document.write("<div class=\"name\">"+namee+"<\/div>");
    if(navigator.userAgent.indexOf("Chrome")==-1){
      xmlDoc.load("text/eng3/armor_desc.xml"); 
    }else{
      xmlhttp.open("get","text/eng3/armor_desc.xml",false);
      xmlhttp.send(null);
      xmlDoc=xmlhttp.responseXML.documentElement;
    }
    var bmsge=xmlDoc.getElementsByTagName("text")[i].childNodes[0].nodeValue;
    var desce=bmsge.replace(/\n/g,"<\/p><p>");
    document.write("<div class=\"desc\"><div class=\"desfrm\"><p>"+desce+"<\/p><\/div><\/div>");
    document.write("<\/div>");
    document.write("<\/div>");
  }
}