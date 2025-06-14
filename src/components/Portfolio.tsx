import React from 'react';
import { ExternalLink, TrendingUp, Eye, Users } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Ticaret Platformu',
      category: 'SEO & Google Ads',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: [
        { icon: TrendingUp, value: '+450%', label: 'Organik Trafik' },
        { icon: Eye, value: '+280%', label: 'Görüntülenme' },
        { icon: Users, value: '+320%', label: 'Dönüşüm' }
      ],
      description: 'Online mağaza için kapsamlı SEO ve PPC stratejisi ile satışlarda 5 kat artış.'
    },
    {
      title: 'SaaS Yazılım Şirketi',
      category: 'İçerik Pazarlama',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: [
        { icon: Users, value: '+650%', label: 'Lead Generation' },
        { icon: TrendingUp, value: '+180%', label: 'Brand Awareness' },
        { icon: Eye, value: '+420%', label: 'Social Engagement' }
      ],
      description: 'B2B hedef kitle için özelleştirilmiş içerik stratejisi ile pazarda lider konuma.'
    },
    {
      title: 'Restoran Zinciri',
      category: 'Sosyal Medya',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: [
        { icon: Users, value: '+850%', label: 'Takipçi Artışı' },
        { icon: Eye, value: '+520%', label: 'Etkileşim' },
        { icon: TrendingUp, value: '+380%', label: 'Rezervasyon' }
      ],
      description: 'Viral içerik stratejisi ve influencer iş birlikleri ile marka bilinirliğinde patlama.'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Başarı
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Hikayelerimiz
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Müşterilerimizin dijital dönüşüm yolculuğunda elde ettiği sonuçlar ve başarılar
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={project.title} className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                      <ExternalLink className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  {project.results.map((result) => (
                    <div key={result.label} className="text-center">
                      <div className="flex justify-center mb-2">
                        <result.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {result.value}
                      </div>
                      <div className="text-sm text-gray-600">{result.label}</div>
                    </div>
                  ))}
                </div>

                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2">
                  <span>Detayları İncele</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300">
            Tüm Projeleri Gör
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;