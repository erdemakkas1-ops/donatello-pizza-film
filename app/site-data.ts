export const business = {address:"Halaskargazi Cd. 50/A, İstanbul",hours:"10.30 – 02.00" as string|null,phone:"0 530 236 38 86" as string|null,instagram:"donatellopizzaselimpasa" as string|null,whatsapp:"905302363886"};

// Prices in TL from the printed menu; s/m/l for pizzas, price for side items.
export type Sizes = {s?:number;m?:number;l?:number};
export type Pizza = {id:string;name:string;group:PizzaGroup;toppings:string[];prices?:Sizes};
export type PizzaGroup = "CAZİP"|"FAVORİ"|"ELİT"|"SPECIAL";

export const pizzaGroups:{id:PizzaGroup;title:string}[] = [
  {id:"CAZİP",title:"Cazip Pizzalar"},
  {id:"FAVORİ",title:"Favori Pizzalar"},
  {id:"ELİT",title:"Elit Pizzalar"},
  {id:"SPECIAL",title:"Special Pizzalar"},
];

// Every pizza starts with pizza sauce and mozzarella; toppings list only what comes on top.
export const products:Pizza[] = [
  {id:"mexican",name:"MEXİCAN",group:"CAZİP",toppings:["Sucuk","Köz biber","Jalapeño"],prices:{s:280,m:380,l:480}},
  {id:"margarita",name:"MARGARİTA",group:"CAZİP",toppings:[],prices:{s:280,m:380,l:480}},
  {id:"marina",name:"MARİNA",group:"CAZİP",toppings:["Domates","Beyaz peynir","Kekik"],prices:{s:280,m:380,l:480}},
  {id:"vejetaryen",name:"VEJETARYEN",group:"CAZİP",toppings:["Mantar","Biber","Mısır","Zeytin","Domates","Soğan"],prices:{s:280,m:380,l:480}},
  {id:"karisik",name:"KARIŞIK",group:"FAVORİ",toppings:["Sucuk","Salam","Mantar","Zeytin","Mısır","Biber"],prices:{s:300,m:420,l:520}},
  {id:"acili-karisik",name:"ACILI KARIŞIK",group:"FAVORİ",toppings:["Sucuk","Salam","Jalapeño","Mantar","Mısır","Biber"],prices:{s:300,m:420,l:520}},
  {id:"sucuklu",name:"SUCUKLU",group:"FAVORİ",toppings:["Sucuk"],prices:{s:300,m:420,l:520}},
  {id:"sosisli",name:"SOSİSLİ",group:"FAVORİ",toppings:["Sosis","Mantar","Mısır"],prices:{s:300,m:420,l:520}},
  {id:"mantar-sever",name:"MANTAR SEVER",group:"FAVORİ",toppings:["Mantar"],prices:{s:300,m:420,l:520}},
  {id:"bonkor",name:"BONKÖR",group:"ELİT",toppings:["Sucuk","Salam","Sosis","Mantar","Mısır","Zeytin","Soğan","Biber"],prices:{s:350,m:480,l:590}},
  {id:"ton-balikli",name:"TON BALIKLI",group:"ELİT",toppings:["Ton balığı","Soğan","Mısır"],prices:{s:350,m:480,l:590}},
  {id:"dort-peynirli",name:"4 PEYNİRLİ",group:"ELİT",toppings:["Beyaz peynir","Cheddar","Parmesan","Fesleğen"],prices:{s:350,m:480,l:590}},
  {id:"tavuklu",name:"TAVUKLU",group:"ELİT",toppings:["Tavuk parçacıkları","Mantar","Köz biber"],prices:{s:350,m:480,l:590}},
  {id:"et-donerli",name:"ET DÖNERLİ",group:"ELİT",toppings:["Et döner","Biber","Soğan","Domates","Kekik"],prices:{s:350,m:480,l:590}},
  {id:"donatello",name:"DONATELLO",group:"SPECIAL",toppings:["Dana jambon","Biber","Mantar","Kırmızı soğan","Kekik"],prices:{s:390,m:530,l:690}},
  {id:"kavurmali",name:"KAVURMALI",group:"SPECIAL",toppings:["Kavurma","Soğan","Biber","Mantar"],prices:{s:390,m:530,l:690}},
  {id:"pastirmali",name:"PASTIRMALI",group:"SPECIAL",toppings:["Pastırma","Biber","Sucuk"],prices:{s:390,m:530,l:690}},
  {id:"dana-sucuklu",name:"%100 DANA SUCUKLU",group:"SPECIAL",toppings:["%100 dana sucuk"],prices:{s:390,m:530,l:690}},
  {id:"cheddar-sosisli",name:"CHEDDAR SOSİSLİ",group:"SPECIAL",toppings:["Cheddar","Sosis","Mantar","Mısır"],prices:{s:390,m:530,l:690}},
];

// Representative images generated per pizza; 640px for the showcase, 240px thumbs for list rows.
export const pizzaImage = (p:Pizza) => `/assets/menu/pizzas/${p.id}.webp`;
export const pizzaThumb = (p:Pizza) => `/assets/menu/pizzas/${p.id}-thumb.webp`;

export const toppingsText = (p:Pizza) => (p.toppings.length ? p.toppings : ["Pizza sosu","Mozzarella"]).join(" / ");

export const sides:{title:string;items:{name:string;price?:number}[]}[] = [
  {title:"Nugget & Fleto",items:[{name:"4'lü Nugget",price:100},{name:"8'li Nugget",price:170},{name:"2'li Fleto",price:150},{name:"4'lü Fleto",price:270}]},
  {title:"Ekmek & Kenarlar",items:[{name:"Mozzarella Peynirli Ekmek",price:200},{name:"Cheddarlı Ekmek",price:250},{name:"Peynir Kenar",price:150},{name:"Sosis Kenar",price:150}]},
  {title:"Ekstra",items:[{name:"Parmak Patates Büyük",price:220},{name:"Parmak Patates Orta",price:150},{name:"Elma Dilim Patates",price:170},{name:"Ketçap, Mayonez",price:10},{name:"Ranch Sos, Acı Sos",price:25},{name:"Barbekü Sos, Sarımsaklı Sos",price:25}]},
  {title:"Tatlılar",items:[{name:"Sufle",price:250},{name:"Profiterol",price:300},{name:"Soğuk Baklava 250 gr (4 dilim)",price:250},{name:"Soğuk Baklava 500 gr (8 dilim)",price:450},{name:"Soğuk Baklava 1000 gr (16 dilim)",price:800}]},
  {title:"İçecekler",items:[{name:"Kutu İçecek 330 ml",price:90},{name:"İçecek 1 lt",price:110},{name:"İçecek 2,5 lt",price:180},{name:"Ayran 300 ml",price:50},{name:"Ayran 1 lt",price:100},{name:"Su 500 ml",price:20}]},
];

// Google reviews from the business's Google Maps listing (snapshot 2026-09-27): wording kept, punctuation tidied,
// emoji and trailing asides dropped. Update rating/count and reviews here by hand; names are first name + initial.
export const googleReviews = {
  rating:"4,9",
  count:58,
  url:"https://maps.google.com/?cid=5758286451241750040",
  items:[
    {name:"Atalay M.",text:"Şefin tavsiyesi üzerine hayatımda ilk defa et dönerli pizza denedim ve pişman olmadım. Ustamın ellerine sağlık, lezzet ve servis on numara. Dükkan da çok temiz."},
    {name:"Emrah İ.",text:"Mekanın temizliği ve hijyeni dört dörtlük ayrıca pizzanın lezzeti gerçekten sıradan markaları arkasında bırakır. Çalışanları güler yüzlü ve samimiler kesinlikle tavsiye ederim."},
    {name:"Burcu B.",text:"Tek kelime ile mükemmel bir lezzet, ailecek tercih ettiğimiz tek adres. Malzemesi bol bol ve tap taze, şiddetle tavsiye ediyoruz. İşletme sahiplerinin ilgisi muhteşem."},
    {name:"Reyhan",text:"Gerçekten uzun zamandır yediğim en lezzetli pizzalardan biriydi. Hamuru çok başarılı, malzemesi bol ve kaliteli. Her diliminde emeği hissediliyor. Güler yüzlü hizmet de cabası."},
    {name:"Satiye C.",text:"Lezzetlerine ve işletme sahibinin ilgisine hayran kaldığım bir mekan. Google yorumları üzerinden denemek istedim ve yazılan her şeyin doğru olduğu kanısına vardım."},
    {name:"Gamze D.",text:"Pizza sevmememe rağmen harika bir lezzetti, aradığım lezzeti Donatello Pizza ile buldum. Herkese şiddetle tavsiye ediyorum, bence herkesin denemesi gereken bir lezzet."},
    {name:"Figen A.",text:"Tek kelimeyle mükemmel. Pizzanın lezzeti, mekanın atmosferi, çalışanların güler yüzü sizi buraya bağlıyor."},
    {name:"Şener Ş.",text:"Sait beyin tavsiyesi ile denedik, gerçekten muhteşem pizza, üstelik sıcacık geldi."},
    {name:"Lucido",text:"Selimpaşa'ya gelip lezzet arıyorsanız kesinlikle tavsiyedir, hem doyurucu hem lezzetli. Çok memnun kalarak tüketiyoruz, üstelik çok temiz bir mekan."},
    {name:"Burcu Ç.",text:"Efsane lezzetlerle dolu bir işletme. Her dilimde mutluluk veren 4 peynirli pizzayı mutlaka denemelisiniz. Çalışanlar ve işletme sahibi çok ilgili."},
  ],
};
