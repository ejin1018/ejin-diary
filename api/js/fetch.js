// const fetched = fetch('https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=1U68dCesqZDzYQQxIj7dEzXXdToH3ND46dJ9R3dNQOpnFVLji7MSwMISOK6D13cKvk7q6hJxd55dsCbu852WaA%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20230209&base_time=0600&nx=61&ny=126');

var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst';
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'1U68dCesqZDzYQQxIj7dEzXXdToH3ND46dJ9R3dNQOpnFVLji7MSwMISOK6D13cKvk7q6hJxd55dsCbu852WaA%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000');
queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON');
queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent(Today);
queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent('0600');
queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('61');
queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('126');

async function getPosts(){
  const res = await fetch(`${url}${queryParams}`);
  const data = await res.json();
  // console.log(data)
  return data;
}
async function setPosts(){
  const posts = await getPosts();
  const datas = posts.response.body.items.item;
  // console.log(posts.response.body);
  // console.log(datas);
  // console.log(posts.response.body.dataType);
  datas.forEach((data)=>{
    const postEl = document.createElement('div');
    postEl.classList.add('post');
    postEl.innerHTML = `
      <div class="number">측정시간: ${data.baseTime}</div>
      <h2 class="post-title">카테고리: ${data.category}</h2>
      <div class="post-body">측정값: ${data.obsrValue}</div>
    `;
    document.body.appendChild(postEl);
  })
}
setPosts();