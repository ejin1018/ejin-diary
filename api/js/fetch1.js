const castBox = document.querySelector('#container');
let statusText,rainIcon;
rainIcon=[
  '<i class="bi bi-brightness-high-fill"></i>',
  '<i class="bi bi-cloud-drizzle-fill"></i>',
  '<i class="bi bi-cloud-sleet-fill"></i>',
  '<i class="bi bi-cloud-snow-fill"></i>',
];
let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/';
let params = {
  type:['getUltraSrtNcst','getVilageFcst'],
  key:'1U68dCesqZDzYQQxIj7dEzXXdToH3ND46dJ9R3dNQOpnFVLji7MSwMISOK6D13cKvk7q6hJxd55dsCbu852WaA%3D%3D',
  pageNo: '1',
  numOfRows:'1000',
  dataType:'JSON',
  baseDate: Today,
  baseTime: '0600',
  nx:'61',
  ny:'127'
}
url=`${url}${params.type[0]}?serviceKey=${params.key}&pageNo=${params.pageNo}&numOfRows=${params.numOfRows}&dataType=${params.dataType}&base_date=${params.baseDate}&base_time=${params.baseTime}&nx=${params.nx}&ny=${params.ny}`
// console.log(url);

async function getPosts(){
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data)
  return data;
}
async function setPosts(){
  const posts = await getPosts();
  const datas = posts.response.body.items.item;
  const castEl = document.createElement('table');
  const tr = document.createElement('tr');
  castEl.classList.add('table');
  castBox.appendChild(castEl);
  castEl.appendChild(tr);
  // console.log(posts.response.body);
  console.log(datas);
  let cast={
    baseDate: datas[0].baseDate,
    rain: datas[0].obsrValue,
    rainInfo: function(){
      let info = this.rain;
      // console.log(info);
      if(info == 0){
        statusText = '맑음';
        rainIcon = rainIcon[0]
      }else if(info == 1){
        statusText = '비';
        rainIcon = rainIcon[1];
      }else if(info == 2){
        statusText = '눈/비';
        rainIcon = rainIcon[2];
      }else if(info == 3){
        statusText = '눈';
        rainIcon = rainIcon[3];
      }
    },
    temperature: datas[3].obsrValue,
    wind: datas[7].obsrValue,
  }
  cast.rainInfo();

  tr.innerHTML=`
    <td>${cast.baseDate}</td>
    <td>지역: 서울/강남</td>
    <td>강수형태: ${statusText}${rainIcon}</td>
    <td>기온: ${cast.temperature}˚</td>
    <td>바람: ${cast.wind}/ms</td>
  `;
}
setPosts();