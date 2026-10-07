import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { business, kvkk, kvkkReady } from "../site-data";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni — Donatello Pizza",
  description: "Donatello Pizza Selimpaşa sipariş sürecinde kişisel verilerin işlenmesine ilişkin aydınlatma metni.",
  alternates: { canonical: "/aydinlatma-metni" },
  // Not indexed until the business's details are filled in (see kvkk in site-data.ts).
  robots: { index: kvkkReady, follow: true },
};

// Missing business details render as a visible marker so the draft can be reviewed before it goes live.
const fill = (value: string | null, label: string): ReactNode =>
  value ?? <mark className="legal-todo">[{label} — işletmeden alınacak]</mark>;

export default function AydinlatmaMetni() {
  const controller = fill(kvkk.controller, "Ticari unvan / ad soyad");
  return (
    <main className="legal">
      <Link className="logo" href="/"><img src="/brand/logo.webp" alt="Donatello Pizza" width={398} height={420} /></Link>
      <span className="eyebrow">KVKK</span>
      <h1>Kişisel Verilerin Korunması <em>Aydınlatma Metni</em></h1>
      <p className="legal-lead">
        Donatello Pizza olarak sipariş verirken bizimle paylaştığınız kişisel verileri 6698 sayılı Kişisel Verilerin
        Korunması Kanunu (&quot;KVKK&quot;) ve ilgili mevzuata uygun şekilde işliyoruz. Bu metin, KVKK&apos;nın 10. maddesi
        uyarınca sizi hangi verilerinizi, hangi amaçla ve nasıl işlediğimiz konusunda bilgilendirmek için hazırlanmıştır.
      </p>

      <section>
        <h2>1. Veri sorumlusu</h2>
        <ul>
          <li><b>Veri sorumlusu:</b> {controller} (&quot;Donatello Pizza&quot;)</li>
          <li><b>Adres:</b> {fill(kvkk.address, "Resmî adres")}</li>
          <li><b>Telefon:</b> {business.phone}</li>
          <li><b>E-posta:</b> {kvkk.email ? <a href={`mailto:${kvkk.email}`}>{kvkk.email}</a> : fill(null, "E-posta adresi")}</li>
        </ul>
      </section>

      <section>
        <h2>2. İşlenen kişisel verileriniz</h2>
        <ul>
          <li><b>Kimlik ve iletişim:</b> ad soyad, telefon numarası.</li>
          <li><b>Teslimat:</b> paket servis seçtiğinizde teslimat adresiniz.</li>
          <li><b>Sipariş:</b> sipariş içeriği ve tutarı, teslimat şekli (paket servis / gel-al), ödeme tercihi (kapıda nakit / kapıda kredi kartı) ve varsa sipariş notunuz.</li>
          <li><b>Mesajlaşma:</b> siparişi WhatsApp üzerinden gönderdiğinizde WhatsApp numaranız ve profil adınız.</li>
        </ul>
        <p>
          Web sitemiz kart bilgisi almaz; ödeme teslimat sırasında kapıda yapılır. Sipariş notu alanına sağlık bilgisi gibi
          özel nitelikli veri yazmamanızı rica ederiz.
        </p>
      </section>

      <section>
        <h2>3. İşleme amaçları</h2>
        <ul>
          <li>Siparişinizin alınması, hazırlanması ve size teslim edilmesi,</li>
          <li>Sipariş, teslimat ve ödeme konularında sizinle iletişim kurulması,</li>
          <li>Talep, öneri ve şikâyetlerinizin yanıtlanması,</li>
          <li>Fatura/fiş düzenlenmesi ve vergi mevzuatından doğan yükümlülüklerin yerine getirilmesi,</li>
          <li>Yetkili kamu kurum ve kuruluşlarının yasal taleplerinin karşılanması.</li>
        </ul>
      </section>

      <section>
        <h2>4. Hukuki sebepler</h2>
        <p>Kişisel verileriniz KVKK&apos;nın 5. maddesinin 2. fıkrasındaki şu hukuki sebeplere dayanılarak işlenir:</p>
        <ul>
          <li>(c) bendi: bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması (siparişinizin alınması ve teslimi),</li>
          <li>(ç) bendi: veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi (vergi ve muhasebe kayıtları),</li>
          <li>(f) bendi: temel hak ve özgürlüklerinize zarar vermemek kaydıyla meşru menfaatimiz (şikâyetlerin çözümü, hizmet kalitesinin korunması).</li>
        </ul>
      </section>

      <section>
        <h2>5. Toplama yöntemi</h2>
        <p>
          Verileriniz; web sitemizdeki sipariş formunu doldurup &quot;WhatsApp ile sipariş ver&quot; düğmesine bastığınızda
          oluşan WhatsApp mesajı, WhatsApp üzerinden yaptığımız yazışmalar ve telefon görüşmeleri aracılığıyla, kısmen
          otomatik yollarla toplanır. Form bilgileri web sitemizin sunucularına gönderilmez; doğrudan sizin cihazınızda
          hazırlanan WhatsApp mesajıyla bize ulaşır.
        </p>
      </section>

      <section>
        <h2>6. Kişisel verilerin aktarılması</h2>
        <ul>
          <li><b>Teslimat:</b> siparişleriniz {fill(kvkk.courier, "Kendi kurye personelimiz / kurye firmasının adı")} tarafından teslim edilir; ad, telefon ve adres bilgileriniz yalnızca siparişinizi getiren kuryeyle paylaşılır.</li>
          <li><b>Kamu kurumları:</b> kanunen yetkili kamu kurum ve kuruluşlarına, talep halinde ve mevzuatın gerektirdiği ölçüde aktarılabilir.</li>
          <li>
            <b>Yurt dışı:</b> siparişler WhatsApp üzerinden iletildiğinden mesajlarınız, bu hizmeti sağlayan WhatsApp
            (Meta Platforms) tarafından yurt dışındaki sunucularda işlenir. Web sitemizi barındıran hizmet sağlayıcı da
            güvenlik amacıyla IP adresi ve tarayıcı bilgisi gibi teknik kayıtları yurt dışındaki sunucularda tutabilir. Bu
            aktarımlar KVKK&apos;nın 9. maddesinde öngörülen şartlara uygun olarak gerçekleştirilir.
          </li>
        </ul>
      </section>

      <section>
        <h2>7. Cihazınızda tutulan bilgiler ve çerezler</h2>
        <p>
          Web sitemiz çerez, reklam veya analiz aracı kullanmaz. Sepetiniz, bir sonraki siparişte formu yeniden
          doldurmamanız için iletişim bilgileriniz ve &quot;Siparişlerim&quot; bölümündeki son siparişleriniz yalnızca
          kendi cihazınızın tarayıcı hafızasında (yerel depolama) saklanır; bize gönderilmez. Bu bilgileri tarayıcınızın
          site verilerini temizleyerek dilediğiniz zaman silebilirsiniz.
        </p>
      </section>

      <section>
        <h2>8. Saklama süresi</h2>
        <p>
          Sipariş mesajları ve iletişim bilgileriniz siparişin tamamlanmasından itibaren {fill(kvkk.retention, "Saklama süresi")} süreyle
          saklanır. Mali mevzuat gereği tutulması zorunlu fatura ve muhasebe kayıtları kanunda öngörülen süre boyunca
          saklanır. Süre dolduğunda verileriniz silinir, yok edilir veya anonim hale getirilir.
        </p>
      </section>

      <section>
        <h2>9. KVKK kapsamındaki haklarınız</h2>
        <p>KVKK&apos;nın 11. maddesi uyarınca veri sorumlusuna başvurarak;</p>
        <ul>
          <li>kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
          <li>işlenmişse buna ilişkin bilgi talep etme,</li>
          <li>işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
          <li>yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
          <li>eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
          <li>KVKK&apos;nın 7. maddesindeki şartlar çerçevesinde silinmesini veya yok edilmesini isteme,</li>
          <li>düzeltme, silme ve yok etme işlemlerinin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
          <li>münhasıran otomatik sistemlerle analiz edilmesi sonucunda aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
          <li>kanuna aykırı işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
        </ul>
        <p>haklarına sahipsiniz.</p>
      </section>

      <section>
        <h2>10. Başvuru</h2>
        <p>
          Taleplerinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ&apos;e uygun olarak kimliğinizi
          doğrulayan bilgilerle birlikte yazılı olarak 1. bölümde yer alan adresimize veya e-posta adresimize
          iletebilirsiniz. Başvurunuz en geç 30 gün içinde ücretsiz
          olarak sonuçlandırılır; işlemin ayrıca bir maliyet gerektirmesi halinde Kurul tarafından belirlenen tarife
          uygulanabilir.
        </p>
      </section>

      <p className="legal-updated">Son güncelleme: {kvkk.updated}</p>
      <Link className="not-found-cta" href="/#menu">MENÜYE DÖN ↗</Link>
    </main>
  );
}
