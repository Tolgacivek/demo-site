import React from 'react';
import { Search, MousePointer, Share2, BarChart3, Smartphone, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'SEO Optimizasyonu',
      description: 'Google\'da üst sıralarda yer alın. Organik trafik ve görünürlüğünüzü artırın.',
      features: ['Anahtar Kelime Analizi', 'İçerik Optimizasyonu', 'Teknik SEO', 'Link Building']
    },
    {
      icon: MousePointer,
      title: 'Google Ads Yönetimi',
      description: 'Hedefli reklamlarla hızlı sonuçlar alın. ROI\'nizi maksimize edin.',
      features: ['Kampanya Kurulumu', 'Anahtar Kelime Yönetimi', 'A/B Testing', 'Performans Takibi']
    },
    {
      icon: Share2,
      title: 'Sosyal Medya Pazarlama',
      description: 'Sosyal platformlarda marka farkındalığınızı ve etkileşiminizi artırın.',
      features: ['İçerik Üretimi', 'Topluluk Yönetimi', 'Influencer Marketing', 'Sosyal Medya Reklamları']
    },
    {
      icon: BarChart3,
      title: 'Veri Analizi & Raporlama',
      description: 'Detaylı analizlerle stratejilerinizi optimize edin ve büyümeyi sürdürün.',
      features: ['Google Analytics', 'Conversion Tracking', 'Performans Raporları', 'ROI Analizi']
    },
    {
      icon: Smartphone,
      title: 'Mobil Pazarlama',
      description: 'Mobil kullanıcılara özel stratejilerle daha geniş kitlelere ulaşın.',
      features: ['Mobil SEO', 'App Store Optimization', 'SMS Pazarlama', 'Location-Based Marketing']
    },
    {
      icon: Palette,
      title: 'Marka Tasarımı',
      description: 'Güçlü bir marka kimliği oluşturun ve dijital varlığınızı güçlendirin.',
      features: ['Logo Tasarımı', 'Brand Identity', 'Web Tasarımı', 'Grafik Tasarım']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dijital Pazarlama
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Hizmetlerimiz
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            360 derece dijital pazarlama çözümleri ile markanızı güçlendirin ve rekabette öne geçin
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                    Detaylı Bilgi
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;