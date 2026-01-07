import React, { useState, useEffect } from 'react';
import { Heart, Trophy, Ticket, ChevronDown, Star, Sparkles, Calendar, MapPin, DollarSign, MessageCircle, Shield, FileText, Lock, X, Check, ShoppingCart, Zap, TrendingUp, Users, Award, Camera } from 'lucide-react';

export default function ValentineRaffle() {
  const [selectedTickets, setSelectedTickets] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showBot, setShowBot] = useState(false);
  const [showTickets, setShowTickets] = useState(false);
  const [showGratification, setShowGratification] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [heartIntensity, setHeartIntensity] = useState(20);
  
  const ticketPrice = 50;
  const totalPrice = selectedPackage ? selectedPackage.price : selectedTickets * ticketPrice;
  const whatsappNumber = "5212221234567";
  const totalTickets = 1000;
  const soldTickets = 687;
  const availableTickets = totalTickets - soldTickets;
  const percentageSold = (soldTickets / totalTickets) * 100;

  const packages = [
    { id: 1, qty: 1, price: 50, discount: 0, label: "INDIVIDUAL", popular: false },
    { id: 2, qty: 3, price: 130, discount: 20, label: "POPULAR", popular: true, save: 20 },
    { id: 3, qty: 5, price: 200, discount: 33, label: "OFERTA LIMITADA", popular: false, save: 50, limited: true }
  ];

  const reviews = [
    { id: 1, name: "María González", avatar: "👩", rating: 5, text: "¡Gané $5,000! No lo podía creer. El proceso fue súper transparente y confiable.", date: "Hace 2 semanas" },
    { id: 2, name: "Carlos Ramírez", avatar: "👨", rating: 5, text: "Segunda vez que participo y volví a ganar. Excelente organización, todo muy claro.", date: "Hace 1 mes" },
    { id: 3, name: "Ana Martínez", avatar: "👩‍🦰", rating: 5, text: "El mejor regalo de San Valentín. Gané $2,000 y me lo depositaron el mismo día.", date: "Hace 3 semanas" },
    { id: 4, name: "Roberto Silva", avatar: "🧔", rating: 5, text: "100% recomendado. Transparente, rápido y confiable. Ya aparté mis boletos para esta rifa.", date: "Hace 5 días" },
    { id: 5, name: "Laura Pérez", avatar: "👱‍♀️", rating: 5, text: "Increíble experiencia. El sorteo en vivo me dio mucha confianza. ¡Ya soy ganadora!", date: "Hace 1 semana" }
  ];

  const proofPayments = [
    { id: 1, user: "Juan M.", amount: 130, tickets: 3, time: "Hace 5 min" },
    { id: 2, user: "Patricia L.", amount: 200, tickets: 5, time: "Hace 12 min" },
    { id: 3, user: "Miguel A.", amount: 50, tickets: 1, time: "Hace 18 min" },
    { id: 4, user: "Sofia R.", amount: 200, tickets: 5, time: "Hace 25 min" },
    { id: 5, user: "David C.", amount: 130, tickets: 3, time: "Hace 31 min" }
  ];

  const availableNumbers = [
    { num: "0234", status: "available" },
    { num: "0567", status: "available" },
    { num: "0892", status: "sold" },
    { num: "1023", status: "available" },
    { num: "1456", status: "available" },
    { num: "1789", status: "sold" },
    { num: "2034", status: "available" },
    { num: "2567", status: "reserved" },
    { num: "2890", status: "available" },
    { num: "3123", status: "available" },
    { num: "3456", status: "sold" },
    { num: "3789", status: "available" }
  ];

  useEffect(() => {
    const calculateTimeLeft = () => {
      const raffleDate = new Date('2026-02-13T20:00:00');
      const now = new Date();
      const difference = raffleDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartIntensity(prev => (prev >= 50 ? 20 : prev + 5));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCheckout = (pkg = null) => {
    if (pkg) setSelectedPackage(pkg);
    setShowCheckout(true);
  };

  const handlePayment = () => {
    setShowCheckout(false);
    setShowGratification(true);
    setTimeout(() => setShowGratification(false), 5000);
  };

  const prizes = [
    { id: 1, position: "1er Lugar", amount: 8000, icon: "🥇", color: "from-yellow-400 to-yellow-600" },
    { id: 2, position: "2do Lugar", amount: 5000, icon: "🥈", color: "from-gray-300 to-gray-500" },
    { id: 3, position: "3er Lugar", amount: 3000, icon: "🥉", color: "from-orange-400 to-orange-600" },
    { id: 4, position: "4to Lugar", amount: 2000, icon: "💖", color: "from-pink-400 to-pink-600" },
    { id: 5, position: "5to Lugar", amount: 2000, icon: "💝", color: "from-red-400 to-red-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-rose-100 relative">
      {/* Animated hearts background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(heartIntensity)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-200 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${15 + Math.random() * 30}px`,
              height: `${15 + Math.random() * 30}px`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-30px) rotate(15deg); opacity: 0.4; }
        }
      `}</style>

      {/* Header */}
      <header className="relative z-10 px-4 py-4 bg-white/90 backdrop-blur-sm shadow-md sticky top-0">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="text-red-500 fill-red-500 w-8 h-8 animate-pulse" />
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Rifa San Valentín
            </span>
          </div>
          <button 
            onClick={() => handleCheckout()}
            className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-4 md:px-6 py-2 rounded-full font-semibold transition-all hover:scale-105 shadow-lg flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Comprar</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-16 text-center">
        <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg animate-pulse">
          <Zap className="w-5 h-5" />
          <span className="font-black">¡ÚLTIMOS {availableTickets} BOLETOS DISPONIBLES!</span>
          <Zap className="w-5 h-5" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
          <span className="bg-gradient-to-r from-red-600 via-pink-500 to-red-600 bg-clip-text text-transparent">
            GANA HASTA
          </span>
          <br />
          <span className="text-6xl md:text-8xl bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
            $20,000
          </span>
        </h1>

        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
          En la Rifa más Confiable de San Valentín 💘
        </p>

        {/* Countdown Timer */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl shadow-2xl p-1 mb-8">
          <div className="bg-white rounded-xl p-6">
            <p className="text-gray-700 font-black mb-4 text-lg flex items-center justify-center gap-2">
              <Calendar className="w-6 h-6 text-red-500" />
              SORTEO: 13 DE FEBRERO • 8:00 PM
            </p>
            <div className="grid grid-cols-4 gap-3 md:gap-6">
              {[
                { label: 'DÍAS', value: timeLeft.days },
                { label: 'HORAS', value: timeLeft.hours },
                { label: 'MIN', value: timeLeft.minutes },
                { label: 'SEG', value: timeLeft.seconds }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-red-100 to-pink-100 rounded-xl p-3 md:p-4">
                  <div className="text-3xl md:text-5xl font-black text-red-600">{item.value}</div>
                  <div className="text-xs md:text-sm font-bold text-gray-600 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tickets Progress */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 mb-8 border-2 border-red-200">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-700 font-bold text-lg">🔥 Vendidos:</span>
            <span className="text-2xl font-black text-red-600">{soldTickets}/{totalTickets}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-6 mb-4 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-red-500 via-pink-500 to-red-500 h-6 rounded-full transition-all duration-1000 flex items-center justify-end px-2"
              style={{ width: `${percentageSold}%` }}
            >
              <span className="text-white font-bold text-sm">{percentageSold.toFixed(0)}%</span>
            </div>
          </div>
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-3 animate-pulse">
            <p className="text-yellow-800 font-black text-center">
              ⚡ ¡SE ESTÁN AGOTANDO RÁPIDO!
            </p>
          </div>
        </div>
      </div>

      {/* Special Packages */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            🎁 PAQUETES ESPECIALES
          </h2>
          <p className="text-xl text-gray-600 font-semibold">¡Más boletos, más oportunidades de ganar!</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-4 ${
                pkg.popular ? 'border-yellow-400 scale-105' : pkg.limited ? 'border-red-400' : 'border-pink-200'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-black shadow-lg">
                  ⭐ MÁS POPULAR
                </div>
              )}
              {pkg.limited && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-black shadow-lg animate-pulse">
                  ⚡ TIEMPO LIMITADO
                </div>
              )}
              
              <div className="text-center mt-4">
                <div className="text-5xl font-black text-gray-800 mb-2">{pkg.qty}</div>
                <p className="text-gray-600 font-bold mb-4">BOLETOS</p>
                
                {pkg.save && (
                  <div className="bg-green-100 text-green-700 rounded-lg px-3 py-2 mb-4 inline-block font-black">
                    ¡AHORRAS ${pkg.save}!
                  </div>
                )}
                
                <div className="mb-4">
                  {pkg.discount > 0 && (
                    <div className="text-gray-400 line-through text-xl mb-1">
                      ${pkg.qty * 50}
                    </div>
                  )}
                  <div className="text-4xl font-black text-red-600">
                    ${pkg.price}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    ${(pkg.price / pkg.qty).toFixed(0)} por boleto
                  </div>
                </div>
                
                <button
                  onClick={() => handleCheckout(pkg)}
                  className={`w-full py-3 rounded-xl font-black text-lg transition-all hover:scale-105 shadow-lg ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
                      : pkg.limited
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white animate-pulse'
                      : 'bg-gradient-to-r from-pink-400 to-red-400 text-white'
                  }`}
                >
                  Comprar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prizes */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-gray-800">
          🏆 5 GANADORES • $20,000 EN PREMIOS
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {prizes.map((prize, index) => (
            <div
              key={prize.id}
              className={`bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-3 border-4 ${
                index === 0 ? 'border-yellow-400 sm:col-span-2 lg:col-span-1' : 'border-pink-200'
              }`}
            >
              <div className={`bg-gradient-to-br ${prize.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <span className="text-4xl">{prize.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-600 mb-2">{prize.position}</h3>
              <p className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
                ${prize.amount.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            ⭐ GANADORES REALES
          </h2>
          <p className="text-xl text-gray-600 font-semibold">Lo que dicen nuestros participantes</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review) => (
            <div key={review.id} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-100 hover:border-pink-300 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">{review.avatar}</div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800">{review.name}</h4>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">{review.text}</p>
              <p className="text-xs text-gray-500">{review.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Proof of Payments */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            💳 COMPRAS EN TIEMPO REAL
          </h2>
          <p className="text-xl text-gray-600 font-semibold">Personas apartando sus boletos ahora</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-2xl mx-auto">
          {proofPayments.map((payment) => (
            <div key={payment.id} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">{payment.user}</p>
                  <p className="text-sm text-gray-600">{payment.tickets} boleto{payment.tickets > 1 ? 's' : ''}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-black text-green-600">${payment.amount}</p>
                <p className="text-xs text-gray-500">{payment.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Numbers */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            🎟️ BOLETOS DISPONIBLES
          </h2>
          <p className="text-xl text-gray-600 font-semibold">Verifica qué números están libres</p>
        </div>
        
        <button
          onClick={() => setShowTickets(!showTickets)}
          className="mx-auto block bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-xl font-black text-lg hover:scale-105 transition-all shadow-lg mb-6"
        >
          {showTickets ? 'Ocultar Boletos' : 'Ver Boletos Disponibles'}
        </button>
        
        {showTickets && (
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-4xl mx-auto">
            {availableNumbers.map((ticket) => (
              <div
                key={ticket.num}
                className={`p-4 rounded-xl text-center font-bold ${
                  ticket.status === 'available'
                    ? 'bg-green-100 text-green-700 border-2 border-green-300'
                    : ticket.status === 'sold'
                    ? 'bg-gray-200 text-gray-500 line-through'
                    : 'bg-yellow-100 text-yellow-700 border-2 border-yellow-300'
                }`}
              >
                {ticket.num}
              </div>
            ))}
          </div>
        )}
        
        <div className="flex justify-center gap-6 mt-8 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span>Disponible</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
            <span>Reservado</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-400 rounded"></div>
            <span>Vendido</span>
          </div>
        </div>
      </div>

      {/* Chatbot Button */}
      <button
        onClick={() => setShowBot(!showBot)}
        className="fixed bottom-6 right-
