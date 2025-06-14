import React from 'react';
import { Target, Lightbulb, Users, Trophy } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Hedef Odaklı',
      description: 'Her stratejimizi müşterilerimizin iş hedefleri doğrultusunda tasarlıyoruz.'
    },
    {
      icon: Lightbulb,
      title: 'Yenilikçi Çözümler',
      description: 'En güncel teknolojiler ve trendler ile yaratıcı çözümler üretiyoruz.'
    },
    {
      icon: Users,
      title: 'Müşteri Memnuniyeti',
      description: 'Müşteri başarısı bizim başarımızdır. %100 müşteri memnuniyeti hedefliyoruz.'
    },
    {
      icon: Trophy,
      title: 'Kanıtlanmış Başarı',
      description: '5+ yıllık deneyimimiz ve 500+ başarılı proje ile güvenilir ortağınızız.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Dijital Pazarlamada
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Güvenilir Ortağınız
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              2018'den beri dijital pazarlama alanında faaliyet gösteren ajansımız, 
              yüzlerce markanın dijital dönüşüm yolculuğuna rehberlik etmiştir. 
              Deneyimli uzman kadromuz ve kanıtlanmış metodolojilerimiz ile 
              işletmenizin online başarısını garanti altına alıyoruz.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <span className="text-gray-700">500+ Başarılı Proje</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <span className="text-gray-700">25+ Sektörde Deneyim</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <span className="text-gray-700">%95+ Müşteri Memnuniyeti</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <span className="text-gray-700">7/24 Müşteri Desteği</span>
              </div>
            </div>

            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
              Hikayemiz
            </button>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Ekibimiz" 
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {values.map((value) => (
            <div key={value.title} className="text-center group">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;