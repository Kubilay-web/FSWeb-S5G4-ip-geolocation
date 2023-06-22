import axios from 'axios';

//axios import buraya gelecek

var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
		return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/



/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/




/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/



//kodlar buraya gelecek



const url = 'https://apis.ergineer.com/ipgeoapi/88.230.53.12';

axios.get(url)
  .then(response => {
    console.log(response.data);
  })


  .catch(error => {
    console.error(error);
  });


  function updateHTMLBody(data) {
	var cardDiv = document.createElement('div');
	cardDiv.className = 'card';
  
	var flag = document.createElement('img');
	flag.src = data.ülkebayrağı;
	cardDiv.appendChild(flag);
  
	var cardInfoDiv = document.createElement('div');
	cardInfoDiv.className = 'card-info';
	cardDiv.appendChild(cardInfoDiv);
  
	var ipHeading = document.createElement('h3');
	ipHeading.className = 'ip';
	ipHeading.textContent = data.sorgu;
	cardInfoDiv.appendChild(ipHeading);

  
	var ulke = document.createElement('p');
	ulke.className = 'ulke';
	ulke.textContent = data.ülke + data.ülkeKodu;
	cardInfoDiv.appendChild(ulke);
  
	var enlem = document.createElement('p');
	enlem.textContent = 'Enlem: ' + data.enlem;
	cardInfoDiv.appendChild(enlem);
  
	var boylam = document.createElement('p');
	boylam.textContent = 'Boylam: ' + data.boylam;
	cardInfoDiv.appendChild(boylam);
  
	var sehir = document.createElement('p');
	sehir.textContent = 'Şehir: ' + data.şehir;
	cardInfoDiv.appendChild(sehir);
  
	var saat = document.createElement('p');
	saat.textContent = 'Saat dilimi: ' + data.saatdilimi;
	cardInfoDiv.appendChild(saat);
  
	var parabirimi = document.createElement('p');
	parabirimi.textContent = 'Para birimi: ' + data.parabirimi;
	cardInfoDiv.appendChild(parabirimi);
  
	var is = document.createElement('p');
	is.textContent = 'ISP: ' + data.isp;
	cardInfoDiv.appendChild(is);
  
	document.body.appendChild(cardDiv);
  }
  
  
  axios.get('https://apis.ergineer.com/ipgeoapi/88.230.53.12')
	.then(function(response) {
	  var data = response.data;
	  updateHTMLBody(data);
	})
	.catch(function(error) {
	  console.log(error);
	});




	

