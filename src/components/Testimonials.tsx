import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmet Yılmaz',
      position: 'CEO, TechStart Yazılım',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'DigiMax Agency ile çalışmaya başladıktan sonra online satışlarımız 400% arttı. Profesyonel yaklaşımları ve sonuç odaklı stratejileri ile gerçekten fark yaratıyorlar.',
      rating: 5,
      company: 'TechStart'
    },
    {
      name: 'Elif Kaya',
      position: 'Pazarlama Müdürü, GreenLife',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'SEO ve sosyal medya pazarlama konusundaki uzmanlıkları sayesinde marka bilinirliğimiz inanılmaz artış gösterdi. Kesinlikle tavsiye ediyorum.',
      rating: 5,
      company: 'GreenLife'
    },
    {
      name: 'Mehmet Demir',
      position: 'Kurucu, FoodHub',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Google Ads kampanyalarımızda ROI\'mız %300 arttı. Ekip çok responsive, her zaman ulaşılabilir durumda ve sonuçları şeffaf şekilde raporluyorlar.',
      rating: 5,
      company: 'FoodHub'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Müşterilerimiz
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Ne Diyor?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Başarılı dijital pazarlama projeleri gerçekleştirdiğimiz müşterilerimizin deneyimleri
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="flex justify-center mb-6">
                  <Quote className="h-12 w-12 text-blue-600 opacity-20" />
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-xs text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex -space-x-2">
              {testimonials.map((testimonial, index) => (
                <img 
                  key={index}
                  src={testimonial.image} 
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-gray-900">500+ Mutlu Müşteri</div>
              <div className="text-xs text-gray-600">%98 Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;