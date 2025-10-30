
import React from 'react';

const ProductEditDeleteGuide = () => {
  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
      <article className="max-w-4xl mx-auto prose lg:prose-xl dark:prose-invert prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-accent-primary hover:prose-a:text-accent-primary-dark prose-strong:text-text-primary prose-ul:text-text-secondary prose-ol:text-text-secondary">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-4">
            Ekobol'de Ürünleri Düzenleme ve Silme
          </h1>
          <p className="text-lg text-text-secondary">
            <time dateTime="2025-07-25">25 Temmuz 2025</time> tarafından <span className="font-semibold text-text-primary">Ekobol Ürün Ekibi</span>
          </p>
        </header>

        <figure className="mb-8">
          <img src="https://images.unsplash.com/photo-1576566588028-cdfd587872e0?q=80&w=1920&auto=format&fit=crop" alt="Ürün listesi yönetimi arayüzü" className="w-full rounded-lg shadow-md" />
          <figcaption className="text-center text-sm text-text-secondary mt-2">
            Ürünlerinizi kontrol panelinizden kolayca yönetin.
          </figcaption>
        </figure>

        <p>
          Ekobol, tüm bağlı pazar yerlerinizdeki ürün listelemelerinizi merkezi bir konumdan kolayca yönetmenizi sağlar. Bu kılavuz, mevcut ürünlerinizi nasıl düzenleyeceğinizi ve artık gerekli olmayan ürünleri nasıl kaldıracağınızı adım adım açıklayacaktır.
        </p>

        <h2>1. Ürün Yönetimi Bölümüne Erişme</h2>
        <ul>
          <li>Ekobol kontrol panelinize giriş yapın.</li>
          <li>Sol kenar çubuğundaki navigasyonda <strong>"Ürünler"</strong> bölümüne gidin.</li>
          <li>Bu bölüm, tüm ürünlerinizin bir özetini tablo formatında gösterecektir.</li>
        </ul>

        <h2>2. Bir Ürünü Düzenleme</h2>
        <p>
          Bir ürünün bilgilerini güncellemek için:
        </p>
        <ul>
          <li>Düzenlemek istediğiniz ürünü bulun ve yanındaki <strong>"Düzenle"</strong> düğmesine tıklayın. Bu sizi ürün düzenleme sayfasına götürecektir.</li>
          <li>Burada şunları değiştirebilirsiniz:
            <ul>
              <li><strong>Ürün Adı ve SKU:</strong> Ürünün temel tanımlayıcılarını güncelleyin.</li>
              <li><strong>Açıklama:</strong> YZ Açıklama Yazıcımızı kullanarak mevcut açıklamayı düzenleyin veya YZ ile yeni bir tane oluşturun.</li>
              <li><strong>Fiyat:</strong> YZ Fiyat Optimizasyon aracını kullanarak fiyatı manuel olarak ayarlayın veya optimize edin.</li>
              <li><strong>Stok Miktarı:</strong> Mevcut stok seviyesini ayarlayın. Ekobol, bu güncellemeyi tüm bağlı kanallarınıza yayacaktır.</li>
              <li><strong>Ürün Görselleri:</strong> Yeni görseller yükleyin veya mevcut görselleri YZ Görüntü Oluşturucumuzu kullanarak düzenleyin.</li>
              <li><strong>Listelenecek Kanallar:</strong> Ürünün hangi pazar yerlerinde aktif olacağını seçin veya seçimini kaldırın.</li>
            </ul>
          </li>
          <li>Tüm değişiklikleri yaptıktan sonra, ürün düzenleme sayfasının altındaki <strong>"Ürünü Kaydet"</strong> düğmesine tıklayın. Değişiklikleriniz hemen tüm ilgili pazar yerlerine senkronize edilecektir.</li>
        </ul>

        <h2>3. Bir Ürünü Silme</h2>
        <p>
          Bir ürünü artık satmıyorsanız veya listeden kaldırmak istiyorsanız, onu Ekobol'den silebilirsiniz.
        </p>
        <p className="text-red-600 font-semibold">
          Uyarı: Bir ürünü silmek kalıcı bir eylemdir ve tüm bağlı pazar yerlerinizden kaldıracaktır.
        </p>
        <ul>
          <li><strong>"Ürünler"</strong> bölümündeki ürün tablosuna geri dönün.</li>
          <li>Silmek istediğiniz ürünü bulun.</li>
          <li>Yanındaki <strong>"Eylemler"</strong> sütununda (veya ilgili bir menüde) bir <strong>"Sil"</strong> düğmesi veya seçeneği bulun.</li>
          <li>Silme işlemini onaylamanız istenecektir. Devam etmek için onayı tıklayın.</li>
          <li>Ürün Ekobol'den ve tüm senkronize pazar yerlerinden kaldırılacaktır.</li>
        </ul>

        <h2>Alternatif: Arşivleme veya Taslak Olarak İşaretleme</h2>
        <p>
          Bir ürünü kalıcı olarak silmek istemiyorsanız, ancak onu aktif listelerinizden kaldırmak istiyorsanız, onu arşivleyebilir veya taslak olarak işaretleyebilirsiniz:
        </p>
        <ul>
          <li><strong>Taslak:</strong> Ürün henüz satışa hazır değilse veya düzenlemeye devam ediyorsanız kullanışlıdır. Ürünü yalnızca Ekobol'de görünür tutar ve hiçbir pazar yerinde yayınlanmaz.</li>
          <li><strong>Arşivle:</strong> Ürünü artık satmıyorsanız ancak geçmiş verilerini saklamak veya gelecekte yeniden kullanmak istiyorsanız kullanışlıdır. Ürünü aktif listenizden kaldırır ancak Ekobol hesabınızdan kalıcı olarak silmez.</li>
        </ul>

        <p>
          Ekobol'ün ürün yönetimi araçları, envanterinizi verimli bir şekilde yönetmenizi sağlar, böylece işinizin sürekli değişen ihtiyaçlarına uyum sağlayabilirsiniz.
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

export default ProductEditDeleteGuide;
