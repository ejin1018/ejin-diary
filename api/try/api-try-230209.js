$(function(){
  /* Javascript Sample*/
  var xhr = new XMLHttpRequest();
  var url = 'http://api.kcisa.kr/API_CNV_053/request?serviceKey=5c802dca-d17c-4a63-ae9e-c27eec41910e&numOfRows=10&pageNo=1&dataType=JSON'; /*URL*/
  
  xhr.open('GET', url);
  xhr.onreadystatechange = function () {
  if (this.readyState == 4) {
    console.log(this)
    // console.log('status: ' + this.status);
    // console.log('resultCode: ' + $(this.responseText).find('resultCode').text());
    // console.log('resultMsg: ' + $(this.responseText).find('resultMsg').text());
  
    // console.log(this.responseText)  
    var item = $(this.responseText).find('item');
    $(item).each(function(){
    
      // console.log("title" + $(this).find("title").text());
      // console.log("description" + $(this).find("description").text());
      // console.log("viewCount" + $(this).find("viewCount").text());
      // console.log("url" + $(this).find("url").text());
      // console.log("imageObject" + $(this).find("imageObject").text());
      // console.log("localId" + $(this).find("localId").text());
      // console.log("sourceTitle" + $(this).find("sourceTitle").text());
      // console.log("eventSite" + $(this).find("eventSite").text());
      // console.log("type" + $(this).find("type").text());
      // console.log("contactPoint" + $(this).find("contactPoint").text());
      // console.log("charge" + $(this).find("charge").text());
      // console.log("audience" + $(this).find("audience").text());
      // console.log("period" + $(this).find("period").text());
  
      let wrap = document.querySelector('.wrap');
      let divs = document.createElement('div');
      let imgs = document.createElement('img');
      wrap.appendChild(divs);
      divs.appendChild(document.createTextNode($(this).find("title").text()));
      divs.appendChild(imgs);
      imgs.setAttribute('src',$(this).find("imageObject").text());
    });

  
  };
  
  }
  xhr.send('');

})