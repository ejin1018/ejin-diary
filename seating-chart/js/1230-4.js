let total = Number(prompt('총 인원을 입력하세요','')); //memNum
let line = Number(prompt('열당 객석 수를 입력하세요','')); //colNum
let row = total/line;

document.write('<table>');
if(total%line === 0){
  //빈 자리가 없을 경우

  //줄 만들기
  for(let i=1; i<=row; i++){
    document.write('<tr>');
    
    for(let j=1; j<=line; j++){
      document.write('<td>');
      document.write('좌석번호 '+(j+((i-1)*line)));
      document.write('</td>');
    }
    
    document.write('</tr>');
  }

}else{
  //빈 자리가 있을 경우 
  //ex total=25/line=7  =>  row 3 rest 4
  row = parseInt(total/line) + 1;
  let rest = parseInt(total%line);
  
  for(let i=1; i<=row; i++){
    document.write('<tr>');
    
    for(let j=1; j<=line; j++){
      if(i !== row){
        document.write('<td>');
        document.write('좌석번호 '+(j+((i-1)*line))+'<br>');
        document.write('</td>');
      }else{
        if(j<=rest){
          document.write('<td>');
          document.write('좌석번호 '+(j+((i-1)*line))+'<br>');
          document.write('</td>');
        }
      }
    }
    
    document.write('</tr>');
  }
}
document.write('</table>');