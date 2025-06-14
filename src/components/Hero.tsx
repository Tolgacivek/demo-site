import React from 'react';
import { ArrowRight, Play, TrendingUp, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Dijital
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {' '}Dönüşüm{' '}
                </span>
                İle Markanızı
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {' '}Zirveye{' '}
                </span>
                Taşıyın
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Modern dijital pazarlama stratejileri ile markanızın online görünürlüğünü artırın, 
                hedef kitlenize ulaşın ve satışlarınızı katlamayın.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Hemen Başlayın</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Demo İzle</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">300%</div>
                <div className="text-sm text-gray-600">ROI Artışı</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Mutlu Müşteri</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-pink-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Ödül</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Dijital Pazarlama" 
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-semibold">Başarı Hikayeleri</h3>
                  <p className="text-gray-600">Müşterilerimizin dijital dönüşüm yolculuğu</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl transform rotate-6 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl transform -rotate-3 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;