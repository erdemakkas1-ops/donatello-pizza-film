// Public address of the site; change here when a custom domain is connected (canonical, sitemap, robots, llms.txt).
export const siteUrl = "https://donatello-pizza-film.vercel.app";

export const business = {address:"Selimpaşa Mah. Halaskargazi Cad. No:50/A",hours:"10.30 – 02.00" as string|null,phone:"0530 236 38 86" as string|null,phone2:"0212 383 38 86",instagram:"donatellopizzaselimpasa" as string|null,whatsapp:"905302363886",serviceAreas:["Selimpaşa","Ortaköy","Kavaklı","Celaliye","Kamiloba"]};

// KVKK aydınlatma metni (app/aydinlatma-metni). null fields come from the business; once every field is filled the page
// is indexed, listed in the sitemap and linked from the order form and the footer.
export const kvkk = {
  controller: "Mehmet Emir Çolak (şahıs işletmesi)" as string|null, // ticari unvan, şahıs işletmesiyse sahibinin adı soyadı
  address: "Selimpaşa Mah. Halaskargazi Cad. No:50/A, Silivri/İstanbul" as string|null, // resmî (tebligat) adresi
  email: "info@donatellopizza.com.tr" as string|null, // KVKK başvuruları için e-posta
  courier: "kendi kurye personelimiz" as string|null, // "kendi kurye personelimiz" ya da kurye firmasının adı
  retention: null as string|null,  // sipariş mesajlarının saklama süresi, ör. "1 yıl"
  updated: "7 Ekim 2026",
};
export const kvkkReady = Object.values(kvkk).every(Boolean);

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

// Every pizza starts with pizza sauce and mozzarella; list rows show them first.
export const toppingsText = (p:Pizza) => ["Pizza sosu","Mozzarella peyniri",...p.toppings].join(" / ");

// Side menu, shown under two headings (section). size: the bottle size shared by a drinks group; it is appended to
// the item name in the cart and the order message. art: show the product cut-out next to each item.
export const sideSections = ["Ekstralar","İçecekler"] as const;
export const sides:{section:(typeof sideSections)[number];art?:boolean;title:string;size?:string;items:{name:string;price?:number}[]}[] = [
  {section:"Ekstralar",title:"Nugget & Fleto",items:[{name:"4'lü Nugget",price:100},{name:"8'li Nugget",price:170},{name:"2'li Fleto",price:150},{name:"4'lü Fleto",price:270}]},
  {section:"Ekstralar",title:"Ekmek & Kenarlar",items:[{name:"Mozzarella Peynirli Ekmek",price:200},{name:"Cheddarlı Ekmek",price:250},{name:"Peynir Kenar",price:150},{name:"Sosis Kenar",price:150}]},
  {section:"Ekstralar",title:"Patatesler",items:[{name:"Parmak Patates Büyük",price:220},{name:"Parmak Patates Orta",price:150},{name:"Elma Dilim Patates",price:170}]},
  {section:"Ekstralar",title:"Soslar",items:[{name:"Ketçap",price:10},{name:"Mayonez",price:10},{name:"Ranch Sos",price:25},{name:"Acı Sos",price:25},{name:"Barbekü Sos",price:25},{name:"Sarımsaklı Sos",price:25}]},
  {section:"Ekstralar",title:"Tatlılar",items:[{name:"Sufle",price:250},{name:"Profiterol",price:300},{name:"Soğuk Baklava 250 gr (4 dilim)",price:250},{name:"Soğuk Baklava 500 gr (8 dilim)",price:450},{name:"Soğuk Baklava 1000 gr (16 dilim)",price:800}]},
  {section:"Ekstralar",art:true,title:"Dondurmalar",items:[{name:"Kesme Dilim Dondurma",price:80},{name:"Maraş Cup Dondurma",price:80},{name:"Carte d'Or Çikolata Rüyası",price:90},{name:"Carte d'Or Meyve Rüyası",price:90}]},
  {section:"İçecekler",art:true,title:"Kutu İçecekler 330 ml",size:"330 ml",items:[{name:"Coca-Cola",price:90},{name:"Coca-Cola Zero",price:90},{name:"Fanta",price:90},{name:"Sprite",price:90},{name:"Fuse Tea Şeftali",price:90},{name:"Fuse Tea Limon",price:90},{name:"Fuse Tea Mango",price:90}]},
  {section:"İçecekler",art:true,title:"İçecekler 1 Litre",size:"1 lt",items:[{name:"Coca-Cola",price:110},{name:"Coca-Cola Zero",price:110},{name:"Fanta",price:110},{name:"Sprite",price:110},{name:"Fuse Tea Şeftali",price:110},{name:"Fuse Tea Limon",price:110},{name:"Fuse Tea Mango",price:110}]},
  {section:"İçecekler",art:true,title:"Ayran & Su",items:[{name:"Ayran 300 ml",price:50},{name:"Ayran 1 lt",price:100},{name:"Su 500 ml",price:20}]},
  {section:"İçecekler",art:true,title:"İçecekler 2,5 Litre",size:"2,5 lt",items:[{name:"Coca-Cola",price:180},{name:"Fanta",price:180}]},
];

// Google reviews from the business's Google Maps listing (snapshot 2026-10-07, newest first): wording kept, punctuation
// and spelling tidied, emoji and trailing asides dropped. Update rating/count and reviews here by hand; names are first
// name + initial.
export const googleReviews = {
  rating:"4,9",
  count:60,
  url:"https://maps.google.com/?cid=5758286451241750040",
  items:[
    {name:"Barış S.",text:"Pizzalar aşırı güzeldi, işletmeciler de çok samimi ve nazik insanlar. Dört farklı orta boy pizza söyledik, hepsi birbirinden güzeldi. İlk defa yemiştik, çok memnun kaldık."},
    {name:"Alperen E.",text:"Pizzalar sıcak sıcak geliyor, boyutlar düşündüğünüzden büyük. Doymayacağız korkusu olmadan gelip karnınızı doyurabilirsiniz."},
    {name:"Kenan Y.",text:"Kesinlikle tavsiye ederim. İnşallah ilerleyen zamanlarda hak ettiği ilgiyi görüp daha büyük bir mekana da geçerler. Elinize sağlık."},
    {name:"Gökhan M.",text:"Hüseyin abi çok ilgiliydi ve dönerli pizzası harikaydı, mutlaka denemelisiniz."},
    {name:"Fatih Y.",text:"Geçerken uğradık, hamurlarını kendileri yoğuruyorlar. Lezzetli, güzel bir pizza yedik. Şiddetle tavsiye ederim."},
    {name:"Hakan D.",text:"Kaliteli, hızlı ve sıcak pizza. Herkese tavsiye ederim."},
    {name:"Burcu B.",text:"Tek kelime ile mükemmel bir lezzet, ailecek tercih ettiğimiz tek adres. Malzemesi bol bol ve tap taze, şiddetle tavsiye ediyoruz. İşletme sahiplerinin ilgisi muhteşem."},
    {name:"Satiye C.",text:"Lezzetlerine ve işletme sahibinin ilgisine hayran kaldığım bir mekan. Google yorumları üzerinden denemek istedim ve yazılan her şeyin doğru olduğu kanısına vardım. 4 Peynirli pizzaya bayıldım."},
    {name:"Fatma Y.",text:"Pizzalar muhteşem, lezzet harika. İşletmeciler güler yüzlü, fiyatları makul. Tavsiyemdir."},
    {name:"Atalay M.",text:"Şefin tavsiyesi üzerine hayatımda ilk defa et dönerli pizza denedim ve pişman olmadım. Ustamın ellerine sağlık, lezzet ve servis on numara. Dükkan da çok temiz."},
    {name:"Reyhan",text:"Gerçekten uzun zamandır yediğim en lezzetli pizzalardan biriydi. Hamuru çok başarılı, malzemesi bol ve kaliteli. Her diliminde emeği hissediliyor. Güler yüzlü hizmet de cabası."},
    {name:"Metehan S.",text:"Yediğim en iyi pizzalardan biriydi. Ortam doğal ve samimi, ilgilenen herkes çok güler yüzlü. Yeni pizza adresim."},
    {name:"Emrah İ.",text:"Mekanın temizliği ve hijyeni dört dörtlük ayrıca pizzanın lezzeti gerçekten sıradan markaları arkasında bırakır. Çalışanları güler yüzlü ve samimiler kesinlikle tavsiye ederim."},
    {name:"Lucido",text:"Selimpaşa'ya gelip lezzet arıyorsanız kesinlikle tavsiyedir, hem doyurucu hem lezzetli. Çok memnun kalarak tüketiyoruz, üstelik çok temiz bir mekan."},
  ],
};

// Set menus. Prices: printed menu, or the owner's list for the newest ones. Images: the restaurant's Trendyol Yemek
// photos, Gemini re-renders of them (whole table in frame, Coca-Cola drinks), or composites of our product shots.
export type Campaign = { id: string; name: string; contents: string; price: number; image: string };
const menuImg = (f: string) => `/assets/menus/${f}.webp`;
export const campaigns: Campaign[] = [
  { id: "favori-menu", name: "Favori Menü", contents: "1 orta boy karışık pizza + 1 kutu içecek", price: 499, image: menuImg("favori-menu") },
  { id: "mini-menu", name: "Mini Menü", contents: "1 küçük boy karışık pizza + 1 orta boy parmak patates + 1 kutu içecek", price: 499, image: menuImg("mini-menu") },
  { id: "pizzadan-marasa", name: "Pizzadan Maraşa", contents: "1 orta boy karışık pizza + 1 Maraş cup dondurma", price: 450, image: menuImg("pizzadan-marasa") },
  { id: "keyif-paketi", name: "Keyif Paketi", contents: "1 orta boy karışık pizza + 1 Carte d'Or + 1 kutu içecek", price: 550, image: menuImg("keyif-paketi") },
  { id: "donatello-menu", name: "Donatello Menü", contents: "Donatello pizza büyük boy + 1 L içecek", price: 699, image: menuImg("donatello-menu") },
  { id: "firsat-uclusu", name: "Fırsat Üçlüsü", contents: "2 orta boy karışık pizza + 1 L içecek", price: 899, image: menuImg("firsat-uclusu") },
  { id: "aile-menu", name: "Aile Menü", contents: "2 orta boy karışık pizza + 4 adet nugget + parmak patates orta boy + 1 L içecek", price: 999, image: menuImg("aile-menu") },
  { id: "buyuk-keyif-menu", name: "Büyük Keyif Menü", contents: "2 büyük boy karışık pizza + 1 L içecek", price: 1099, image: menuImg("buyuk-keyif-menu") },
  { id: "double-keyif-paketi", name: "Double Keyif Paketi", contents: "2 orta boy karışık pizza + 2 Carte d'Or + 1 L içecek", price: 999, image: menuImg("double-keyif-paketi") },
  { id: "kanka-menu", name: "Kanka Menü", contents: "3 orta boy karışık pizza + 1 L içecek", price: 1199, image: menuImg("kanka-menu") },
  { id: "super-ikili-menu", name: "Süper İkili Menü", contents: "2 orta boy karışık pizza + 2 adet sufle + 1 L içecek", price: 1299, image: menuImg("super-ikili-menu") },
  { id: "parti-menu", name: "Parti Menü", contents: "3 büyük boy karışık pizza + parmak patates büyük boy + 6 adet nugget + 2,5 L içecek", price: 1799, image: menuImg("parti-menu") },
  { id: "citir-kova-menu", name: "Çıtır Kova Menü", contents: "Parmak patates orta boy + 4 adet nugget + 2 adet fleto", price: 299, image: menuImg("citir-kova-menu") },
  { id: "tatli-dueti", name: "Tatlı Düeti", contents: "1 sufle + 1 kesme dilim dondurma", price: 300, image: menuImg("tatli-dueti") },
  { id: "double-tatli-dueti", name: "Double Tatlı Düeti", contents: "2 sufle + 2 kesme dilim dondurma", price: 550, image: menuImg("double-tatli-dueti") },
];
