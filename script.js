let ervas={
'ansiedade':{cha:'Chá de Melissa',img:'https://upload.wikimedia.org/wikipedia/commons/5/5d/Melissa_officinalis.jpg'},
'insonia':{cha:'Chá de Camomila',img:'https://upload.wikimedia.org/wikipedia/commons/4/40/Chamomile.jpg'},
'nausea':{cha:'Chá de Gengibre',img:'https://upload.wikimedia.org/wikipedia/commons/5/5c/Ginger.jpg'},
'enjoo':{cha:'Chá de Gengibre',img:'https://upload.wikimedia.org/wikipedia/commons/5/5c/Ginger.jpg'},
'dor de cabeça':{cha:'Chá de Hortelã',img:'https://upload.wikimedia.org/wikipedia/commons/0/08/Mentha_spicata.jpg'}
};
function buscarSintoma(){
let t=document.getElementById('pesquisa').value.toLowerCase().trim();
let r=document.getElementById('resultado');
if(ervas[t]){
r.innerHTML='<h2>'+t+'</h2><p>'+ervas[t].cha+'</p>';
document.getElementById('imagemErva').src=ervas[t].img;
}else{r.innerHTML='Não encontrado.';}
}
if(typeof QRCode!=='undefined'){new QRCode(document.getElementById('qrcode'),window.location.href);}
function salvarNovaErva(){alert('Exemplo salvo');}
function responderPergunta(){document.getElementById('chatResposta').innerHTML='Consulta educativa sobre ervas.';}
document.getElementById('temaBtn').onclick=function(){document.body.classList.toggle('dark');};
