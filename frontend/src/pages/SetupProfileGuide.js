
import React from 'react';

const SetupProfileGuide = () => {
  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
      <article className="max-w-4xl mx-auto prose lg:prose-xl dark:prose-invert prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-accent-primary hover:prose-a:text-accent-primary-dark prose-strong:text-text-primary prose-ul:text-text-secondary prose-ol:text-text-secondary">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-4">
            Ekobol Profilinizi Ayarlamak
          </h1>
          <p className="text-lg text-text-secondary">
            <time dateTime="2025-07-18">18 Temmuz 2025</time> tarafından <span className="font-semibold text-text-primary">Ekobol Destek Ekibi</span>
          </p>
        </header>

        <figure className="mb-8">
          <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1920&auto=format&fit=crop" alt="Profil ayarları arayüzü" className="w-full rounded-lg shadow-md" />
          <figcaption className="text-center text-sm text-text-secondary mt-2">
            Ekobol deneyiminizi kişiselleştirin.
          </figcaption>
        </figure>

        <p>
          Ekobol profilinizi doğru bir şekilde ayarlamak, sorunsuz bir deneyim ve kişiselleştirilmiş içgörüler için çok önemlidir. Bu kılavuz, hesabınızı kurarken ve kişisel bilgilerinizi yönetirken size yardımcı olacaktır.
        </p>

        <h2>1. Profil Ayarlarına Erişme</h2>
        <ul>
          <li>Ekobol kontrol panelinize giriş yapın.</li>
          <li>Genellikle sağ üst köşede bulunan profil resminize veya kullanıcı adınıza tıklayın.</li>
          <li>Açılır menüden <strong>"Profil Ayarları"</strong> veya <strong>"Hesabım"</strong> seçeneğini seçin.</li>
        </ul>

        <h2>2. Temel Bilgilerinizi Güncelleme</h2>
        <p>
          Profil ayarları sayfasında, adınız, e-posta adresiniz ve iletişim bilgileriniz gibi temel bilgilerinizi düzenleyebilirsiniz.
        </p>
        <ul>
          <li><strong>Ad ve Soyadı:</strong> Adınızı ve soyadınızı girin.</li>
          <li><strong>E-posta Adresi:</strong> Hesap bildirimleri için kullanılan e-posta adresinizdir. Gerekiyorsa güncelleyin.</li>
          <li><strong>Telefon Numarası:</strong> İletişim amacıyla isteğe bağlı olarak bir telefon numarası ekleyin.</li>
          <li>Değişiklikleri yaptıktan sonra <strong>"Kaydet"</strong> veya <strong>"Güncelle"</strong> düğmesine tıklamayı unutmayın.</li>
        </ul>

        <h2>3. Şifrenizi Değiştirme</h2>
        <p>
          Hesabınızın güvenliğini sağlamak için şifrenizi düzenli olarak değiştirmek iyi bir uygulamadır.
        </p>
        <ul>
          <li>"Şifre" veya "Güvenlik" bölümünü bulun.</li>
          <li>Mevcut şifrenizi girin.</li>
          <li>Yeni şifrenizi girin ve onaylayın. Güçlü bir şifre kullanmayı unutmayın (büyük harf, küçük harf, sayı ve sembol karışımı).</li>
          <li>Değişiklikleri onaylamak için <strong>"Şifreyi Değiştir"</strong> düğmesine tıklayın.</li>
        </ul>

        <h2>4. Pazar Yeri Tercihleri ve İş Bilgileri</h2>
        <p>
          Ekobol, işinizin ihtiyaçlarına göre özelleştirilmiş deneyimler sunar.
        </p>
        <ul>
          <li><strong>Pazar Yeri Rolü:</strong> Hangi pazar yerlerinde aktif olduğunuzu belirtin (Trendyol, Etsy, Amazon vb.). Bu, size daha alakalı ipuçları ve özellikler sunmamıza yardımcı olacaktır.</li>
          <li><strong>İşletme Adı:</strong> İşletmenizin adını girin (varsa).</li>
          <li><strong>Varsayılan Para Birimi/Dil:</strong> Kontrol paneliniz için varsayılan para birimini ve dili ayarlayın.</li>
        </ul>
        <p>
          Bu bilgileri güncellemek, Ekobol'ün iş akışınızı daha iyi optimize etmesine ve size en alakalı verileri sunmasına olanak tanır.
        </p>

        <h2>5. Bildirim Ayarları</h2>
        <p>
          Ekobol'den almak istediğiniz bildirim türlerini kontrol edin.
        </p>
        <ul>
          <li>Satış uyarıları, düşük stok bildirimleri, YZ önerileri veya genel güncellemeler gibi seçenekleri etkinleştirebilir veya devre dışı bırakabilirsiniz.</li>
          <li>Tercihlerinizi kaydedin.</li>
        </ul>

        <p>
          Profilinizi düzenli olarak gözden geçirmek ve güncellemek, Ekobol'den en iyi şekilde yararlanmanızı sağlayacaktır. Unutmayın, doğru ve güncel bilgiler, yapay zeka destekli araçlarımızın işinize en doğru ve faydalı içgörüleri sunması için temeldir.
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

export default SetupProfileGuide;
