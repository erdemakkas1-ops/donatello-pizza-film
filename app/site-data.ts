// Public address of the site; change here when a custom domain is connected (canonical, sitemap, robots, llms.txt).
export const siteUrl = "https://donatello-pizza-film.vercel.app";

export const business = {address:"Halaskargazi Cd. 50/A, İstanbul",hours:"10.30 – 02.00" as string|null,phone:"0530 236 38 86" as string|null,instagram:"donatellopizzaselimpasa" as string|null,whatsapp:"905302363886"};

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

// size: the bottle size shared by a drinks group; it is appended to the item name in the cart and the order message.
export const sides:{title:string;size?:string;items:{name:string;price?:number}[]}[] = [
  {title:"Nugget & Fleto",items:[{name:"4'lü Nugget",price:100},{name:"8'li Nugget",price:170},{name:"2'li Fleto",price:150},{name:"4'lü Fleto",price:270}]},
  {title:"Ekmek & Kenarlar",items:[{name:"Mozzarella Peynirli Ekmek",price:200},{name:"Cheddarlı Ekmek",price:250},{name:"Peynir Kenar",price:150},{name:"Sosis Kenar",price:150}]},
  {title:"Ekstra",items:[{name:"Parmak Patates Büyük",price:220},{name:"Parmak Patates Orta",price:150},{name:"Elma Dilim Patates",price:170},{name:"Ketçap",price:10},{name:"Mayonez",price:10},{name:"Ranch Sos",price:25},{name:"Acı Sos",price:25},{name:"Barbekü Sos",price:25},{name:"Sarımsaklı Sos",price:25}]},
  {title:"Tatlılar",items:[{name:"Sufle",price:250},{name:"Profiterol",price:300},{name:"Soğuk Baklava 250 gr (4 dilim)",price:250},{name:"Soğuk Baklava 500 gr (8 dilim)",price:450},{name:"Soğuk Baklava 1000 gr (16 dilim)",price:800}]},
  {title:"Kutu İçecekler 330 ml",size:"330 ml",items:[{name:"Coca-Cola",price:90},{name:"Coca-Cola Zero",price:90},{name:"Fanta",price:90},{name:"Sprite",price:90},{name:"Fuse Tea Şeftali",price:90},{name:"Fuse Tea Limon",price:90},{name:"Fuse Tea Mango",price:90}]},
  {title:"İçecekler",items:[{name:"Ayran 300 ml",price:50},{name:"Ayran 1 lt",price:100},{name:"Su 500 ml",price:20}]},
  {title:"İçecekler 1 Litre",size:"1 lt",items:[{name:"Coca-Cola",price:110},{name:"Coca-Cola Zero",price:110},{name:"Fanta",price:110},{name:"Sprite",price:110},{name:"Fuse Tea Şeftali",price:110},{name:"Fuse Tea Limon",price:110},{name:"Fuse Tea Mango",price:110}]},
  {title:"İçecekler 2,5 Litre",size:"2,5 lt",items:[{name:"Coca-Cola",price:180},{name:"Fanta",price:180}]},
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

// Campaigns from the printed flyer. pickupOnly deals force "Gel-al" in the cart.
export type Campaign = { id: string; name: string; contents: string; price: number; pickupOnly?: boolean };
export const campaigns = {
  pickup: {
    title: "Gel-Al'a Özel Fırsatlar",
    until: "15.12.2026",
    items: [
      { id: "gelal-karisik-ikili", name: "2 Karışık + 1 L İçecek", contents: "2 adet orta boy karışık pizza + 1 L içecek", price: 699, pickupOnly: true },
      { id: "ogrenci-ikilisi", name: "Öğrenci İkilisi", contents: "1 adet küçük boy karışık pizza + 1 adet ayran", price: 250, pickupOnly: true },
    ] as Campaign[],
  },
  menus: {
    title: "Menüler",
    items: [
      { id: "donatello-menu", name: "Donatello Menü", contents: "Donatello pizza büyük boy + 1 L içecek", price: 699 },
      { id: "aile-menu", name: "Aile Menü", contents: "2 orta boy karışık pizza + 4 adet nugget + parmak patates orta boy + 1 L içecek", price: 999 },
      { id: "buyuk-keyif-menu", name: "Büyük Keyif Menü", contents: "2 büyük boy karışık pizza + 1 L içecek", price: 1099 },
      { id: "kanka-menu", name: "Kanka Menü", contents: "3 orta boy karışık pizza + 1 L içecek", price: 1199 },
      { id: "super-ikili-menu", name: "Süper İkili Menü", contents: "2 orta boy karışık pizza + 2 adet sufle + 1 L içecek", price: 1299 },
      { id: "parti-menu", name: "Parti Menü", contents: "3 büyük boy karışık pizza + parmak patates büyük boy + 6 adet nugget + 2,5 L içecek", price: 1799 },
      { id: "citir-kova-menu", name: "Çıtır Kova Menü", contents: "Parmak patates orta boy + 4 adet nugget + 2 adet fleto", price: 299 },
    ] as Campaign[],
  },
};
