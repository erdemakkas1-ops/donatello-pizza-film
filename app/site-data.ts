export const business = {address:"Halaskargazi Cd. 50/A, İstanbul",hours:"10.30 – 02.00" as string|null,phone:"0 530 236 38 86" as string|null,instagram:"donatellopizzaselimpasa" as string|null};

// Prices are intentionally empty until the owner confirms them; fill s/m/l (pizzas) or price (sides) in TL.
export type Sizes = {s?:number;m?:number;l?:number};
export type Pizza = {id:string;name:string;group:PizzaGroup;toppings:string[];prices?:Sizes};
export type PizzaGroup = "CAZİP"|"FAVORİ"|"ELİT"|"SPECIAL";

export const pizzaGroups:{id:PizzaGroup;title:string}[] = [
  {id:"CAZİP",title:"Cazip Pizzalar"},
  {id:"FAVORİ",title:"Favori Pizzalar"},
  {id:"ELİT",title:"Elit Pizzalar"},
  {id:"SPECIAL",title:"Special"},
];

// Every pizza starts with pizza sauce and mozzarella; toppings list only what comes on top.
export const products:Pizza[] = [
  {id:"mexican",name:"MEXİCAN",group:"CAZİP",toppings:["Sucuk","Köz biber","Jalapeño"]},
  {id:"margarita",name:"MARGARİTA",group:"CAZİP",toppings:[]},
  {id:"marina",name:"MARİNA",group:"CAZİP",toppings:["Domates","Beyaz peynir","Kekik"]},
  {id:"vejetaryen",name:"VEJETARYEN",group:"CAZİP",toppings:["Mantar","Biber","Mısır","Zeytin","Domates","Soğan"]},
  {id:"karisik",name:"KARIŞIK",group:"FAVORİ",toppings:["Sucuk","Salam","Mantar","Zeytin","Mısır","Biber"]},
  {id:"acili-karisik",name:"ACILI KARIŞIK",group:"FAVORİ",toppings:["Sucuk","Salam","Jalapeño","Mantar","Mısır","Biber"]},
  {id:"sucuklu",name:"SUCUKLU",group:"FAVORİ",toppings:["Sucuk"]},
  {id:"sosisli",name:"SOSİSLİ",group:"FAVORİ",toppings:["Sosis","Mantar","Mısır"]},
  {id:"mantar-sever",name:"MANTAR SEVER",group:"FAVORİ",toppings:["Mantar"]},
  {id:"bonkor",name:"BONKÖR",group:"ELİT",toppings:["Sucuk","Salam","Sosis","Mantar","Mısır","Zeytin","Soğan","Biber"]},
  {id:"ton-balikli",name:"TON BALIKLI",group:"ELİT",toppings:["Ton balığı","Soğan","Mısır"]},
  {id:"dort-peynirli",name:"4 PEYNİRLİ",group:"ELİT",toppings:["Beyaz peynir","Cheddar","Parmesan","Fesleğen"]},
  {id:"tavuklu",name:"TAVUKLU",group:"ELİT",toppings:["Tavuk parçacıkları","Mantar","Köz biber"]},
  {id:"et-donerli",name:"ET DÖNERLİ",group:"ELİT",toppings:["Et döner","Biber","Soğan","Domates","Kekik"]},
  {id:"donatello",name:"DONATELLO",group:"SPECIAL",toppings:["Dana jambon","Biber","Mantar","Kırmızı soğan","Kekik"]},
  {id:"kavurmali",name:"KAVURMALI",group:"SPECIAL",toppings:["Kavurma","Soğan","Biber","Mantar"]},
  {id:"pastirmali",name:"PASTIRMALI",group:"SPECIAL",toppings:["Pastırma","Biber","Sucuk"]},
  {id:"dana-sucuklu",name:"%100 DANA SUCUKLU",group:"SPECIAL",toppings:["%100 dana sucuk"]},
  {id:"cheddar-sosisli",name:"CHEDDAR SOSİSLİ",group:"SPECIAL",toppings:["Cheddar","Sosis","Mantar","Mısır"]},
];

// Representative images generated per pizza; 640px for the showcase, 240px thumbs for list rows.
export const pizzaImage = (p:Pizza) => `/assets/menu/pizzas/${p.id}.webp`;
export const pizzaThumb = (p:Pizza) => `/assets/menu/pizzas/${p.id}-thumb.webp`;

export const toppingsText = (p:Pizza) => (p.toppings.length ? p.toppings : ["Pizza sosu","Mozzarella"]).join(" / ");

export const sides:{title:string;items:{name:string;price?:number}[]}[] = [
  {title:"Nugget & Fleto",items:[{name:"4'lü Nugget"},{name:"8'li Nugget"},{name:"2'li Fleto"},{name:"4'lü Fleto"}]},
  {title:"Ekmek & Kenarlar",items:[{name:"Mozzarella Peynirli Ekmek"},{name:"Cheddarlı Ekmek"},{name:"Peynir Kenar"},{name:"Sosis Kenar"}]},
  {title:"Ekstra",items:[{name:"Parmak Patates Büyük"},{name:"Parmak Patates Orta"},{name:"Elma Dilim Patates"},{name:"Ketçap, Mayonez"},{name:"Ranch Sos, Acı Sos"},{name:"Barbekü Sos, Sarımsaklı Sos"}]},
  {title:"Tatlılar",items:[{name:"Sufle"},{name:"Profiterol"},{name:"Soğuk Baklava 250 gr (4 dilim)"},{name:"Soğuk Baklava 500 gr (8 dilim)"},{name:"Soğuk Baklava 1000 gr (16 dilim)"}]},
  {title:"İçecekler",items:[{name:"Kutu İçecek 330 ml"},{name:"İçecek 1 lt"},{name:"İçecek 2,5 lt"},{name:"Ayran 300 ml"},{name:"Ayran 1 lt"},{name:"Su 500 ml"}]},
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
