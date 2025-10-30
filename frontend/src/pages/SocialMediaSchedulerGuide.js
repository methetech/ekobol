
import React from 'react';

const SocialMediaSchedulerGuide = () => {
  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
      <article className="max-w-4xl mx-auto prose lg:prose-xl dark:prose-invert prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-accent-primary hover:prose-a:text-accent-primary-dark prose-strong:text-text-primary prose-ul:text-text-secondary prose-ol:text-text-secondary">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-4">
            Ekobol'ün Sosyal Medya Zamanlayıcısını Kullanma
          </h1>
          <p className="text-lg text-text-secondary">
            <time dateTime="2025-07-23">23 Temmuz 2025</time> tarafından <span className="font-semibold text-text-primary">Ekobol Pazarlama Ekibi</span>
          </p>
        </header>

        <figure className="mb-8">
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1920&auto=format&fit=crop" alt="Sosyal medya zamanlama arayüzü" className="w-full rounded-lg shadow-md" />
          <figcaption className="text-center text-sm text-text-secondary mt-2">
            Sosyal medya gönderilerinizi planlayın ve otomatikleştirin.
          </figcaption>
        </figure>

        <p>
          Sosyal medya, e-ticaret işletmeleri için bir pazarlama aracı olarak vazgeçilmezdir, ancak birden fazla platformda tutarlı bir şekilde gönderi paylaşmak zaman alıcı olabilir. Ekobol'ün Sosyal Medya Zamanlayıcısı, sosyal medya gönderilerinizi tek bir yerden kolayca oluşturmanıza ve planlamanıza olanak tanır, hatta YZ desteğiyle içeriği otomatik olarak oluşturur. İşte bu aracı nasıl kullanacağınız:
        </p>

        <h2>1. Sosyal Medya Zamanlayıcıya Erişme</h2>
        <ul>
          <li>Ekobol kontrol panelinize giriş yapın.</li>
          <li>Sol kenar çubuğundaki navigasyonda <strong>"Pazarlama Araçları"</strong> bölümüne gidin.</li>
          <li>Sayfanın alt kısmında <strong>"Sosyal Medya Zamanlayıcısı"</strong> bölümünü bulacaksınız.</li>
        </ul>

        <h2>2. Gönderi İçeriği Oluşturma</h2>
        <p>
          Sosyal medya gönderinizi oluşturmak için:
        </p>
        <ul>
          <li><strong>"Gönderi İçeriği"</strong> metin alanına göndermek istediğiniz mesajı yazın.</li>
          <li><strong>(İsteğe bağlı) YZ ile İçerik Oluştur:</strong> YZ'nin gönderi taslağı oluşturmasına veya mevcut metni iyileştirmesine yardımcı olması için bir ürün adı veya tema gibi bazı anahtar kelimeler sağlayın. Metin alanının altındaki <strong>"YZ ile Oluştur"</strong> düğmesine tıklayın.</li>
          <li>İlgili ürün görsellerini veya diğer medyaları yüklemek için bir seçenek arayın (statik olarak gösterilen HTML'de henüz işlevsel değil, ancak bir uygulamada bulunacaktır).</li>
        </ul>

        <h2>3. Gönderiyi Planlama</h2>
        <p>
          Gönderi içeriğiniz hazır olduğunda, yayınlanacağı tarihi ve saati belirleyin:
        </p>
        <ul>
          <li><strong>"Planlama Tarihi ve Saati"</strong> alanına tıklayın.</li>
          <li>Açılan tarih ve saat seçiciden istediğiniz zamanı seçin. YZ, hedef kitlenizin en aktif olduğu zamanları bile önerebilir (ileri düzey özellik).</li>
        </ul>

        <h2>4. Yayınlanacak Platformları Seçme</h2>
        <p>
          Gönderinizi hangi sosyal medya platformlarında yayınlamak istediğinizi seçin:
        </p>
        <ul>
          <li>Instagram, Facebook ve Twitter gibi desteklenen platformlar için onay kutularını işaretleyin.</li>
          <li>Ekobol, seçilen tüm platformlarda gönderinizi otomatik olarak yayınlayacaktır.</li>
        </ul>

        <h2>5. Gönderiyi Planlama</h2>
        <p>
          Tüm detayları yapılandırdıktan sonra:
        </p>
        <ul>
          <li><strong>"Gönderiyi Planla"</strong> düğmesine tıklayın.</li>
          <li>Gönderiniz artık belirlenen tarihte ve saatte otomatik olarak yayınlanmak üzere sıraya alınacaktır.</li>
        </ul>

        <h2>Performansı İzleme:</h2>
        <p>
          Ekobol'ün analitik bölümünü kullanarak sosyal medya gönderilerinizin performansını takip edebilirsiniz. Erişim, etkileşim ve web sitenize veya ürün listelemelerinize yönlendirilen trafik gibi metrikleri izleyin. Bu veriler, gelecekteki sosyal medya stratejilerinizi iyileştirmenize yardımcı olacaktır.
        </p>

        <p>
          Ekobol'ün Sosyal Medya Zamanlayıcısı, sosyal medya varlığınızı yönetme şeklinizi basitleştirerek, daha etkili bir şekilde pazarlama yapmanıza ve en değerli varlığınız olan zamanı geri kazanmanıza olanak tanır.
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

export default SocialMediaSchedulerGuide;
