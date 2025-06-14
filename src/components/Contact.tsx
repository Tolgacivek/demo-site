import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'E-posta',
      details: 'info@digimaxagency.com',
      link: 'mailto:info@digimaxagency.com'
    },
    {
      icon: Phone,
      title: 'Telefon',
      details: '+90 212 555 0123',
      link: 'tel:+902125550123'
    },
    {
      icon: MapPin,
      title: 'Adres',
      details: 'Maslak Mahallesi, İstanbul',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      details: 'Pazartesi - Cuma: 09:00 - 18:00',
      link: '#'
    }
  ];

  const services = [
    'SEO Optimizasyonu',
    'Google Ads Yönetimi',
    'Sosyal Medya Pazarlama',
    'İçerik Pazarlama',
    'E-ticaret Çözümleri',
    'Marka Danışmanlığı'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Bizimle
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}İletişime Geçin
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dijital pazarlama hedeflerinizi gerçekleştirmek için bugün başlayalım. 
            Ücretsiz danışmanlık için iletişime geçin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Teklif Formu</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Şirket Adı
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    İlgilendiğiniz Hizmet
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Hizmet Seçin</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Projeniz hakkında detayları paylaşın..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Teklif Al</span>
                </button>
              </form>

              <div className="mt-6 flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                24 saat içinde geri dönüş garantisi
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-600">{info.details}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ücretsiz Danışmanlık</h3>
              <p className="mb-6 opacity-90">
                Dijital pazarlama stratejinizi planlamak için 30 dakikalık ücretsiz danışmanlık hizmeti alın.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                Randevu Al
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-900">Sonuç almak ne kadar sürer?</h4>
                  <p className="text-gray-600">SEO için 3-6 ay, PPC reklamlar için 2-4 hafta içinde sonuçları görmeye başlarsınız.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Hangi sektörlerde çalışıyorsunuz?</h4>
                  <p className="text-gray-600">E-ticaret, SaaS, restoran, emlak, sağlık ve eğitim başta olmak üzere tüm sektörlerde.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;