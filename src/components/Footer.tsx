import React from 'react';
import { Zap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const services = [
    'SEO Optimizasyonu',
    'Google Ads',
    'Sosyal Medya',
    'İçerik Pazarlama',
    'E-ticaret',
    'Marka Danışmanlığı'
  ];

  const company = [
    'Hakkımızda',
    'Ekibimiz',
    'Kariyer',
    'Blog',
    'Referanslar',
    'İletişim'
  ];

  const resources = [
    'Dijital Pazarlama Rehberi',
    'SEO Kontrol Listesi',
    'Sosyal Medya Takvimi',
    'Google Ads Kılavuzu',
    'E-kitaplar',
    'Webinarlar'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">DigiMax Agency</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Dijital pazarlama alanında 5+ yıllık deneyimimiz ile markanızın online başarısını garanti altına alıyoruz.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>info@digimaxagency.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+90 212 555 0123</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Maslak Mahallesi, İstanbul</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Şirket</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kaynaklar</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg border border-blue-500/30">
              <h4 className="font-semibold mb-2">Newsletter</h4>
              <p className="text-sm text-gray-300 mb-3">Dijital pazarlama ipuçları ve güncellemeler</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:border-blue-500"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-r-lg hover:shadow-lg transition-shadow">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 DigiMax Agency. Tüm hakları saklıdır.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
              <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
              <a href="#" className="hover:text-white transition-colors">Çerez Politikası</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;