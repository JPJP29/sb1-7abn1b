import React, { useState } from 'react';
import {
  Leaf,
  Recycle,
  DollarSign,
  MapPin,
  Shield,
  Gift,
  Trophy,
  TrendingUp,
  Users,
  BarChart,
  Headphones,
  Send,
} from 'lucide-react';
import ContactSection from './components/ContactSection';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ email: '', phone: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <header className="bg-green-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              ¡Gana recompensas increibles con tus botellas de plástico! ♻️💰
            </h1>
            <p className="text-xl mb-8">
              Únete a la comunidad que está cambiando el mundo, una botella a la
              vez.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors">
                Descargar para iOS
              </button>
              <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors">
                Descargar para Android
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* What is Grin Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">
              ¿Qué es Grin?
            </h2>
            <div className="flex items-center justify-center mb-8">
              <Leaf className="w-12 h-12 text-green-600" />
            </div>
            <p className="text-lg text-gray-600">
              Grin es una app que conecta personas como tú con nuestros miles de
              acopiadores para que, puedas ganar recompensas a cambio de tus
              botellas. Ganar nunca fue tan fácil, rápido y Seguro. Únete a Grin
              y empieza a ganar hoy. ¡Descárgala ahora!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Subscription Form */}

      {/* Benefits for Users */}
      <section className="bg-green-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            ¡Gana recompensas nunca fue tan fácil y gratificante
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <MapPin className="w-8 h-8" />,
                title: 'Puntos cercanos',
                description:
                  'Encuentra un agente Grin cerca de ti, sin importar dónde estés.',
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Seguridad garantizada',
                description:
                  'Verificamos la información y documentos de todos los agentes Grin para tu tranquilidad.',
              },
              {
                icon: <Gift className="w-8 h-8" />,
                title: 'Gana recompensas',
                description:
                  'Entrega tus botellas y recibe Grin, nuestra moneda virtual canjeable por dinero real.',
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: 'Recompensas extra',
                description:
                  'Cumple con los desafíos y metas de reciclaje para ganar aún más Grin.',
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: 'Mejora el mundo',
                description:
                  'Tú eliges el precio que mejor se adapte a tus necesidades.',
              },
              {
                icon: <Recycle className="w-8 h-8" />,
                title: 'Elige al agente Grin',
                description:
                  'Consulta ubicaciones, compara precios y elige la mejor opción.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-green-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Collectors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Aumenta tus ingresos ¡Gana hasta 100 soles sin salir de casa!
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Aumenta tus ingresos',
                description:
                  'Recibe un flujo constante de botellas de plástico de usuarios Grin en tu zona.',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Amplía tu red de contactos',
                description:
                  'Conéctate con otros acopiadores y transportistas de la comunidad Grin.',
              },
              {
                icon: <BarChart className="w-8 h-8" />,
                title: 'Herramientas para tu éxito',
                description:
                  'Accede a reportes, estadísticas y análisis para optimizar tu negocio.',
              },
              {
                icon: <Headphones className="w-8 h-8" />,
                title: 'Soporte dedicado',
                description:
                  'Nuestro equipo te ayudará en cada paso del camino.',
              },
              {
                icon: <Headphones className="w-8 h-8" />,
                title: 'Más clientes',
                description:
                  'Atrae más clientes a tu negocio a través de las recompensas de grin.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-green-50 p-6 rounded-xl hover:bg-green-100 transition-colors"
              >
                <div className="text-green-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              ¡Únete a la comunidad Grin!
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
                <input
                  type="tel"
                  placeholder="Tu teléfono"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </section>
      */}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">Grin - Recicla, gana y cuida el planeta.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
