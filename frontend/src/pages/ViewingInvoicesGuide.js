
import React from 'react';

const ViewingInvoicesGuide = () => {
  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
      <article className="max-w-4xl mx-auto prose lg:prose-xl dark:prose-invert prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-accent-primary hover:prose-a:text-accent-primary-dark prose-strong:text-text-primary prose-ul:text-text-secondary prose-ol:text-text-secondary">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-4">
            Ekobol Faturalarınızı Görüntüleme
          </h1>
          <p className="text-lg text-text-secondary">
            <time dateTime="2025-07-21">21 Temmuz 2025</time> tarafından <span className="font-semibold text-text-primary">Ekobol Finans Ekibi</span>
          </p>
        </header>

        <figure className="mb-8">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920&auto=format&fit=crop" alt="Fatura dokümanı veya rapor" className="w-full rounded-lg shadow-md" />
          <figcaption className="text-center text-sm text-text-secondary mt-2">
            Tüm faturalarınıza ve ödeme geçmişinize erişin.
          </figcaption>
        </figure>

        <p>
          Ekobol'ün faturalandırma sistemi şeffaf ve kolay erişilebilir olacak şekilde tasarlanmıştır. Tüm geçmiş faturalarınızı ve ödeme beyanlarınızı doğrudan kontrol panelinizden görüntüleyebilirsiniz. İşte nasıl yapacağınız:
        </p>

        <h2>1. Finans Bölümüne Erişme</h2>
        <ul>
          <li>Ekobol kontrol panelinize giriş yapın.</li>
          <li>Sol kenar çubuğundaki navigasyonda <strong>"Finans"</strong> bölümüne tıklayın.</li>
        </ul>

        <h2>2. Faturalandırma Geçmişini Bulma</h2>
        <p>
          Finans sayfasına geldiğinizde, birden fazla bölüme ayrıldığını göreceksiniz. Fatura geçmişinize erişmek için:
        </p>
        <ul>
          <li><strong>"Abonelik & Faturalandırma"</strong> veya <strong>"Geçmiş İşlemler"</strong> başlıklarını arayın.</li>
          <li>Genellikle faturalandırma geçmişinizin tamamını görüntülemenizi sağlayan <strong>"Tam Beyanı Görüntüle →"</strong> veya benzeri bir bağlantı bulacaksınız. Bu bağlantıya tıklayın.</li>
        </ul>

        <h2>3. Faturaları Görüntüleme ve Filtreleme</h2>
        <p>
          Tam beyan sayfasında, tüm geçmiş işlemlerinizin ve faturalarınızın ayrıntılı bir listesini bulacaksınız.
        </p>
        <ul>
          <li><strong>Tarih Aralığı Filtresi:</strong> Belirli bir ay, çeyrek veya yılın faturalarını görüntülemek için sayfanın üstündeki tarih aralığı filtrelerini kullanın.</li>
          <li><strong>İşlem Türü:</strong> Sadece gelirleri, giderleri veya belirli türdeki işlemleri görmek için filtreleri kullanabilirsiniz.</li>
          <li><strong>Bireysel Faturalar:</strong> Her bir faturaya tıklayarak sipariş detayları, hizmet dökümleri ve ilgili ücretler gibi ayrıntılı fatura bilgilerini görüntüleyebilirsiniz.</li>
        </ul>

        <h2>4. Faturaları İndirme</h2>
        <p>
          Kaydınız için herhangi bir faturayı veya beyanı PDF formatında kolayca indirebilirsiniz.
        </p>
        <ul>
          <li>Genel beyan sayfasında, tüm beyanı indirmek için <strong>"Raporu İndir"</strong> düğmesini kullanın.</li>
          <li>Tek bir fatura görünümünde, o belirli faturayı indirmek için ayrı bir indirme düğmesi bulacaksınız.</li>
        </ul>
        <p>
          Bu indirilen faturalar, muhasebe kayıtlarınız veya vergi amaçlı olarak kullanılabilir.
        </p>

        <h2>Yardım ve Destek</h2>
        <p>
          Fatura bilgilerinizle ilgili herhangi bir tutarsızlık fark ederseniz veya belirli bir faturayı bulmakta zorlanırsanız, lütfen hemen destek ekibimizle iletişime geçmekten çekinmeyin. Size yardımcı olmak için buradayız ve faturalarınızın doğru ve anlaşılır olduğundan emin olmanızı sağlayacağız.
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

export default ViewingInvoicesGuide;
