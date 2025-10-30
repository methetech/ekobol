
import React from 'react';
import { Link } from 'react-router-dom';

const NewImageStylesUpdate = () => {
  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
      <article className="max-w-4xl mx-auto prose lg:prose-xl dark:prose-invert prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-accent-primary hover:prose-a:text-accent-primary-dark prose-strong:text-text-primary prose-ul:text-text-secondary prose-ol:text-text-secondary">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-4">
            Özellik Güncellemesi: Yeni Görüntü Oluşturma Stilleri
          </h1>
          <p className="text-lg text-text-secondary">
            <time dateTime="2025-07-17">17 Temmuz 2025</time> tarafından <span className="font-semibold text-text-primary">Ekobol Ürün Ekibi</span>
          </p>
        </header>

        <figure className="mb-8">
          <img src="https://images.unsplash.com/photo-1579546305389-72210a424269?q=80&w=1920&auto=format&fit=crop" alt="Yapay zeka tarafından oluşturulmuş soyut görüntüler" className="w-full rounded-lg shadow-md" />
          <figcaption className="text-center text-sm text-text-secondary mt-2">
            Ürünlerinizi sergilemek için yeni yaratıcı olanaklar.
          </figcaption>
        </figure>

        <p>
          Ekobol'de, e-ticaret satıcılarının ürünlerini en iyi şekilde sergilemelerinin önemini anlıyoruz. Bu nedenle, YZ Görüntü Oluşturucumuz için üç heyecan verici yeni stil sunmaktan gurur duyuyoruz. Bu güncellemeler, ürün görsellerinizi daha önce hiç olmadığı kadar kişiselleştirmenize ve farklılaştırmanıza olanak tanıyacak.
        </p>

        <h2>Yeni Görüntü Stilleri</h2>
        <p>
          YZ Görüntü Oluşturucumuza eklenen yeni stiller şunlardır:
        </p>

        <h3>1. Minimalist Studio</h3>
        <p>
          Temiz, şık ve dikkat dağıtıcı olmayan bir estetik isteyenler için "Minimalist Studio" stili, ürününüzü ön plana çıkaran sade bir arka plan oluşturur. Ürününüzün detaylarına ve kalitesine odaklanmak istediğinizde idealdir.
        </p>
        <figure className="mb-8">
          <img src="https://images.unsplash.com/photo-1543886566-224449842a27?q=80&w=600&auto=format&fit=crop" alt="Minimalist stüdyo ortamında ürün" className="w-full rounded-lg shadow-md" />
          <figcaption className="text-center text-sm text-text-secondary mt-2">
            Ürüne odaklanan temiz ve şık bir görünüm.
          </figcaption>
        </figure>

        <h3>2. Doğal Ambiyans</h3>
        <p>
          Ürünlerinizi daha organik ve davetkar bir ortamda sergilemek istiyorsanız, "Doğal Ambiyans" tam size göre. Bu stil, doğal ışık ve dokularla dolu rahatlatıcı sahneler oluşturur, ürününüzün gerçek dünyadaki kullanımına dair bir his verir.
        </p>
        <figure className="mb-8">
          <img src="https://images.unsplash.com/photo-1627918074902-861f1816f1b3?q=80&w=600&auto=format&fit=crop" alt="Doğal ortamda bir ürün" className="w-full rounded-lg shadow-md" />
          <figcaption className="text-center text-sm text-text-secondary mt-2">
            Ürününüzü doğal bir ortamda sergileyin.
          </figcaption>
        </figure>

        <h3>3. Fütüristik Geometrik</h3>
        <p>
          Daha modern, yenilikçi veya teknoloji odaklı ürünler için "Fütüristik Geometrik" stili, dinamik hatlar ve soyut şekillerle göz alıcı, modern bir arka plan sunar. Ürününüzün yenilikçi yönünü vurgulamak için mükemmeldir.
        </p>
        <figure className="mb-8">
          <img src="https://images.unsplash.com/photo-1518458028780-ec9860b0e35f?q=80&w=600&auto=format&fit=crop" alt="Fütüristik geometrik arka planda ürün" className="w-full rounded-lg shadow-md" />
          <figcaption className="text-center text-sm text-text-secondary mt-2">
            Ürününüz için göz alıcı, modern bir sahne.
          </figcaption>
        </figure>

        <h2>Nasıl Kullanılır?</h2>
        <p>
          Bu yeni stilleri kullanmak çok kolay! Ekobol kontrol panelinizde YZ Görüntü Oluşturucu'ya gidin, ürün görselinizi yükleyin ve mevcut stil seçenekleri arasından yeni eklenenleri seçin. Yapay zekamız, seçtiğiniz stile göre saniyeler içinde çarpıcı görseller oluşturacaktır.
        </p>

        <p>
          Bu yeni stillerin ürünlerinizi pazar yerlerinde daha da öne çıkaracağına ve markanızın kimliğini güçlendireceğine inanıyoruz. Ekobol'ü tercih ettiğiniz için teşekkür ederiz!
        </p>

        <div className="mt-12 pt-8 border-t border-void-secondary dark:border-white/10 text-center">
          <p className="text-lg text-text-secondary mb-4">Bu yazıyı faydalı buldunuz mu? Daha fazla e-ticaret içgörüsü ve YZ stratejisi için bizi takip edin!</p>
          <Link to="/blog" className="inline-flex min-w-[160px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-accent-primary text-void-primary text-base font-bold leading-normal tracking-wide shadow-lg hover:bg-accent-primary-dark transition-shadow duration-300">
            <span className="truncate">Tüm Blog Yazılarını Görüntüle</span>
          </Link>
        </div>
      </article>
    </main>
  );
};

export default NewImageStylesUpdate;
