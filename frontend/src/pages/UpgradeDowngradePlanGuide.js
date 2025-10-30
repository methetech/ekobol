
import React from 'react';

const UpgradeDowngradePlanGuide = () => {
  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
      <article className="max-w-4xl mx-auto prose lg:prose-xl dark:prose-invert prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-accent-primary hover:prose-a:text-accent-primary-dark prose-strong:text-text-primary prose-ul:text-text-secondary prose-ol:text-text-secondary">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-4">
            Ekobol Planınızı Yükseltme veya Düşürme
          </h1>
          <p className="text-lg text-text-secondary">
            <time dateTime="2025-07-20">20 Temmuz 2025</time> tarafından <span className="font-semibold text-text-primary">Ekobol Finans Ekibi</span>
          </p>
        </header>

        <figure className="mb-8">
          <img src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1920&auto=format&fit=crop" alt="Büyüyen veya küçülen grafikler" className="w-full rounded-lg shadow-md" />
          <figcaption className="text-center text-sm text-text-secondary mt-2">
            İşletmenizin ihtiyaçlarına göre planınızı esnek bir şekilde ayarlayın.
          </figcaption>
        </figure>

        <p>
          Ekobol, işletmenizin değişen ihtiyaçlarını karşılamak için esnek planlar sunar. İster hızlı bir büyüme yaşıyor olun, ister maliyetleri optimize etmek isteyin, planınızı istediğiniz zaman kolayca yükseltebilir veya düşürebilirsiniz.
        </p>

        <h2>1. Plan Yönetimi Bölümüne Erişme</h2>
        <ul>
          <li>Ekobol kontrol panelinize giriş yapın.</li>
          <li>Sol kenar çubuğundaki navigasyonda <strong>"Finans"</strong> bölümüne gidin.</li>
          <li>Sayfada <strong>"Abonelik & Faturalandırma"</strong> başlığı altında mevcut planınızın detaylarını bulacaksınız.</li>
          <li>Planınızı değiştirmek için <strong>"Planı Değiştir →"</strong> bağlantısına tıklayın.</li>
        </ul>

        <h2>2. Yeni Bir Plan Seçme</h2>
        <p>
          "Planı Değiştir" sayfasına yönlendirileceksiniz. Burada Ekobol'ün tüm mevcut planlarını (Temel Plan, Partner Planı, Aylık Abonelik ve Dinamik Plan) göreceksiniz.
        </p>
        <ul>
          <li><strong>Planları Karşılaştırın:</strong> Her planın özelliklerini ve fiyatlandırma modelini (sabit ücret veya gelir paylaşımı yüzdesi) dikkatlice inceleyin.</li>
          <li><strong>Yükseltme:</strong> Daha fazla özellik, daha düşük gelir paylaşımı yüzdesi (aylık abonelikler için) veya daha kapsamlı bir hizmet (Partner Planı) istiyorsanız, mevcut planınızdan daha yüksek bir plan seçin.</li>
          <li><strong>Düşürme:</strong> Maliyetleri düşürmek veya daha az özelliğe ihtiyacınız varsa, mevcut planınızdan daha düşük bir plan seçin.</li>
        </ul>

        <h2>3. Plan Değişikliğini Onaylama</h2>
        <p>
          Seçtiğiniz plana tıkladıktan sonra, plan değişikliğinin bir özetini ve nasıl faturalandırılacağını gösteren bir onay ekranı göreceksiniz.
        </p>
        <ul>
          <li><strong>Yükseltmeler için:</strong> Genellikle yeni plan hemen etkinleşir ve önceki planınızdan kalan bakiye yeni plana orantılı olarak uygulanır.</li>
          <li><strong>Düşürmeler için:</strong> Düşürülen plan genellikle mevcut faturalandırma döngünüzün sonunda etkinleşir. Bu, mevcut planınız için zaten ödeme yapmış olduğunuz özellikleri kaybetmeden döngünüzü tamamlayabileceğiniz anlamına gelir.</li>
        </ul>
        <p>
          Değişiklikleri onaylamak ve yeni planınıza geçmek için <strong>"Planı Onayla"</strong> veya benzeri bir düğmeye tıklayın.
        </p>

        <h2>Önemli Hususlar:</h2>
        <ul>
          <li><strong>Faturalandırma Döngüsü:</strong> Tüm plan değişiklikleri mevcut faturalandırma döngünüzün sonuna kadar işlenebilir. Düşürmeler genellikle bir sonraki faturalandırma döngüsünde etkinleşirken, yükseltmeler genellikle hemen başlar.</li>
          <li><strong>Veri Erişimi:</strong> Planınızı düşürmek, önceki planınızda mevcut olan bazı özelliklere veya verilere erişiminizi kısıtlayabilir. Herhangi bir düşürme yapmadan önce bunun farkında olun.</li>
          <li><strong>İptal:</strong> Aboneliğinizi tamamen iptal etmek isterseniz, genellikle "Abonelik ve Faturalandırma" ayarları altında bir seçenek bulunur.</li>
        </ul>

        <p>
          Ekobol'ün esnek planları, işletmenizin yaşam döngüsündeki her aşamada size uyum sağlamak için tasarlanmıştır. İhtiyaçlarınız değiştiğinde planınızı kolayca ayarlayarak her zaman doğru araçlara sahip olduğunuzdan emin olun.
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

export default UpgradeDowngradePlanGuide;
