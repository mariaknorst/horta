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
document.getElementById('temaBtn').onclick=function(){document.body.classList.toggle('dark');
"diabetes":{cha:"Chá de Canela"},
"pressao alta":{cha:"Chá de Hibisco"},
"pressao baixa":{cha:"Chá de Alecrim"},
"colesterol alto":{cha:"Chá Verde"},
"triglicerideos altos":{cha:"Chá Verde"},
"dor de estomago":{cha:"Chá de Boldo"},
"ma digestao":{cha:"Chá de Boldo"},
"azia":{cha:"Chá de Espinheira-Santa"},
"refluxo":{cha:"Chá de Espinheira-Santa"},
"gases":{cha:"Chá de Erva-Doce"},
"prisao de ventre":{cha:"Chá de Sene"},
"diarreia":{cha:"Chá de Goiabeira"},
"vomito":{cha:"Chá de Gengibre"},
"nausea":{cha:"Chá de Gengibre"},
"enjoo":{cha:"Chá de Gengibre"},
"dor de cabeca":{cha:"Chá de Hortelã"},
"enxaqueca":{cha:"Chá de Hortelã"},
"ansiedade":{cha:"Chá de Melissa"},
"depressao leve":{cha:"Chá de Erva-de-São-João"},
"estresse":{cha:"Chá de Capim-Cidreira"},
"insonia":{cha:"Chá de Camomila"},
"nervosismo":{cha:"Chá de Passiflora"},
"agitacao":{cha:"Chá de Passiflora"},
"cansaco":{cha:"Chá de Alecrim"},
"fadiga":{cha:"Chá de Alecrim"},
"falta de energia":{cha:"Chá de Ginseng"},
"gripe":{cha:"Chá de Gengibre"},
"resfriado":{cha:"Chá de Eucalipto"},
"tosse":{cha:"Chá de Guaco"},
"catarro":{cha:"Chá de Guaco"},
"bronquite":{cha:"Chá de Guaco"},
"asma leve":{cha:"Chá de Eucalipto"},
"sinusite":{cha:"Chá de Eucalipto"},
"nariz entupido":{cha:"Chá de Eucalipto"},
"dor de garganta":{cha:"Chá de Sálvia"},
"febre leve":{cha:"Chá de Sabugueiro"},
"baixa imunidade":{cha:"Chá de Equinácea"},
"dor muscular":{cha:"Chá de Arnica"},
"dor nas articulacoes":{cha:"Chá de Unha-de-Gato"},
"inflamacao":{cha:"Chá de Cúrcuma"},
"dor lombar":{cha:"Chá de Arnica"},
"colica menstrual":{cha:"Chá de Camomila"},
"menstruacao irregular":{cha:"Chá de Canela"},
"menopausa":{cha:"Chá de Amora"},
"retencao de liquido":{cha:"Chá de Cavalinha"},
"inchaco":{cha:"Chá de Cavalinha"},
"pedra nos rins":{cha:"Chá de Quebra-Pedra"},
"infeccao urinaria leve":{cha:"Chá de Quebra-Pedra"},
"coca"},
"excesso de suor":{cha:"Chá de Sálvia"},
"falta de apetite":{cha:"Chá de Gengibre"},
"desidratacao leve":{cha:"Chá de Hortelã"},
"dor de ouvido":{cha:"Chá de Alho"},
"dor de dente":{cha:"Chá de Cravo"},
"aftas":{cha:"Chá de Sálvia"},
"gastrite":{cha:"Chá de Espinheira-Santa"}; }
