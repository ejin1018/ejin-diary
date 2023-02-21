// const fetched = fetch('https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=1U68dCesqZDzYQQxIj7dEzXXdToH3ND46dJ9R3dNQOpnFVLji7MSwMISOK6D13cKvk7q6hJxd55dsCbu852WaA%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20230209&base_time=0600&nx=61&ny=126');

var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'1U68dCesqZDzYQQxIj7dEzXXdToH3ND46dJ9R3dNQOpnFVLji7MSwMISOK6D13cKvk7q6hJxd55dsCbu852WaA%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000'); /**/
queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /**/
queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent(Today); /**/
queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent('0600'); /**/
queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('61'); /**/
queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('126'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        document.write('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');