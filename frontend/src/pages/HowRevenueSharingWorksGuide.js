
import React from 'react';

const HowRevenueSharingWorksGuide = () => {
  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
      <article className="max-w-4xl mx-auto prose lg:prose-xl dark:prose-invert prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-accent-primary hover:prose-a:text-accent-primary-dark prose-strong:text-text-primary prose-ul:text-text-secondary prose-ol:text-text-secondary">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-4">
            Ekobol'de Gelir Paylaşımı Nasıl Çalışır?
          </h1>
          <p className="text-lg text-text-secondary">
            <time dateTime="2025-07-20">20 Temmuz 2025</time> tarafından <span className="font-semibold text-text-primary">Ekobol Finans Ekibi</span>
          </p>
        </header>

        <figure className="mb-8">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920&auto=format&fit=crop" alt="İşbirliği ve büyüme grafikli insanlar" className="w-full rounded-lg shadow-md" />
          <figcaption className="text-center text-sm text-text-secondary mt-2">
            Ekobol ile birlikte büyüyün.
          </figcaption>
        </figure>

        <p>
          Ekobol, özellikle Temel Plan ve Partner Planı gibi bazı planlarında geleneksel abonelik ücretleri yerine bir gelir paylaşımı modelini benimsemiştir. Bu model, başarınızın doğrudan bizim başarımıza bağlı olduğu anlamına gelir ve işbirliğine dayalı, şeffaf bir ilişki sağlar. İşte gelir paylaşımının Ekobol'de nasıl çalıştığı:
        </p>

        <h2>Gelir Paylaşımı Temelleri</h2>
        <p>
          Gelir paylaşımı modelimizde, sizden sabit bir aylık ücret almak yerine, belirli planlar için elde ettiğiniz satışlardan bir yüzde alırız. Bu, yalnızca başarılı olduğunuzda bize ödeme yaptığınız anlamına gelir.
        </p>

        <h3>1. Temel Plan Gelir Paylaşımı (%10)</h3>
        <ul>
          <li><strong>Model:</strong> Bu plan, YZ araçlarımıza ve tüm platform özelliklerine tam erişim sağlar. Kontrolü elinizde tutarsınız ve operasyonlarınızın çoğunu kendiniz yönetirsiniz.</li>
          <li><strong>Hesaplama:</strong> Her başarılı satıştan elde ettiğiniz kârdan %10 alırız. Bu kâr, ürün maliyeti ve pazar yeri komisyonları düşüldükten sonra hesaplanır.</li>
          <li><strong>Ödeme:</strong> Genellikle aylık olarak hesaplanır ve gelirinizden otomatik olarak düşülür veya belirlediğiniz bir ödeme yönteminden tahsil edilir.</li>
        </ul>

        <h3>2. Partner Planı Gelir Paylaşımı (%50)</h3>
        <ul>
          <li><strong>Model:</strong> Bu, Ekobol'ün sizin adınıza dijital imparatorluğunuzu inşa ettiği ve yönettiği tam hizmetli bir plandır. Ürün yaratmaya ve göndermeye odaklanırsınız, biz ise pazarlamadan operasyonlara kadar her şeyi ele alırız.</li>
          <li><strong>Hesaplama:</strong> Her başarılı satıştan elde ettiğiniz kârdan %50 alırız. Daha yüksek yüzde, sizin dijital operasyonel yükünüzü tamamen üstlenmemizin karşılığıdır.</li>
          <li><strong>Ödeme:</strong> Gelirinizden otomatik olarak düşülür veya belirlenen ödeme yönteminiz üzerinden aylık olarak faturalandırılır.</li>
        </ul>

        <h3>3. Dinamik Plan (Özel Paylaşım)</h3>
        <ul>
          <li><strong>Model:</strong> Bu plan, iş yükünün sizinle platformumuz arasında nasıl paylaşıldığına bağlı olarak ayarlanan özel bir gelir paylaşımı sunar. Ne kadar çok görevi kendiniz üstlenirseniz, gelir payınız o kadar artar.</li>
          <li><strong>Hesaplama:</strong> Yüzde, Ekobol ekibinin üstlendiği hizmetlerin ve operasyonların kapsamına göre özel olarak belirlenir. Bu, kişiselleştirilmiş bir anlaşmadır.</li>
          <li><strong>Ödeme:</strong> Anlaşmaya göre aylık olarak hesaplanır ve faturalandırılır.</li>
        </ul>

        <h2>Kâr Nasıl Tanımlanır?</h2>
        <p>
          "Kâr" tanımı, planınıza bağlı olarak değişebilir, ancak genellikle şunları içerir:
        </p>
        <ul>
          <li><strong>Brüt Satış Geliri:</strong> Ürünün satış fiyatı.</li>
          <li><strong>Eksi Ürün Maliyetleri:</strong> Ürünü üretme veya tedarik etme maliyetleri.</li>
          <li><strong>Eksi Pazar Yeri Ücretleri/Komisyonları:</strong> Trendyol, Etsy, Amazon vb. gibi pazar yerlerinin aldığı ücretler.</li>
          <li><strong>Eksi Nakliye Maliyetleri:</strong> Ürünün müşteriye ulaştırılmasıyla ilgili maliyetler (varsa ve anlaşmaya dahilse).</li>
        </ul>
        <p>
          Net kâr, bu düşüşler yapıldıktan sonra kalan miktardır. Ekobol bu net kârın belirlenen yüzdesini alır.
        </p>

        <h2>Faturalandırma ve Şeffaflık</h2>
        <ul>
          <li><strong>Aylık Beyanlar:</strong> Her faturalandırma döneminin sonunda size ayrıntılı bir beyan sunulur. Bu beyan, tüm satışlarınızı, düşüşleri ve Ekobol'ün payını açıkça gösterir.</li>
          <li><strong>Kontrol Paneli Takibi:</strong> Finans kontrol panelinizden gelir, gider ve net kârınıza ilişkin gerçek zamanlı verileri takip edebilirsiniz.</li>
        </ul>
        <p>
          Gelir paylaşımı modelimiz, işinizin büyümesine olan bağlılığımızı pekiştirir. Ne kadar çok kazanırsanız, biz de o kadar kazanırız; böylece ortak hedeflere doğru birlikte çalışırız.
        </p>

        <div className="mt-12 pt-8 border-t border-void-secondary dark:border-white/10 text-center">
          <p className="text-lg text-text-secondary mb-4">Yardıma mı ihtiyacınız var? Yardım Merkezimizde daha fazla kılavuz ve yanıt bulun.</p>
          <a href="/help-center" className="inline-flex min-w-[160px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-accent-primary text-void-primary text-base font-bold leading-normal tracking-wide shadow-lg hover:bg-accent-primary-dark transition-shadow duration-300">
            <span className="truncate">Yardım Merkezine Git</span>
          </a>
        </div>
      </article>
    </main>
  );
};

export default HowRevenueSharingWorksGuide;
