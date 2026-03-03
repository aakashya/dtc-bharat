<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Delphinium Travelcorp | DTC Bharat</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  {{-- Tailwind CDN --}}
  <script src="https://cdn.tailwindcss.com"></script>

  {{-- Tailwind custom theme to support your "navy/electric/primary" classes + rounded-5xl etc --}}
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            navy: '#0b2554',
            'navy-light': '#12366f',
            'navy-lighter': '#1f4b87',
            electric: '#1e88e5',
            'electric-light': '#4ea5ff',
            primary: '#ff5b57',
            'primary-light': '#ff7a54',
            'primary-dark': '#ff3b2f',
          },
          borderRadius: {
            '4xl': '1.5rem',
            '5xl': '2rem',
          },
          boxShadow: {
            'soft': '0 20px 60px rgba(0,0,0,0.15)',
            'card': '0 18px 45px rgba(0,0,0,0.18)',
          },
          fontFamily: {
            display: ['Inter', 'system-ui', 'sans-serif'],
          }
        }
      }
    }
  </script>

  {{-- Remix Icons --}}
  <link href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    html { scroll-behavior: smooth; }
  </style>
</head>

<body class="bg-white font-display">

<div class="min-h-screen bg-white">

  {{-- ================= NAVBAR ================= --}}
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/90 backdrop-blur-xl shadow-lg">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">

        <a class="flex items-center gap-3 group" href="#home">
          <div class="w-12 h-12 flex items-center justify-center">
            <img alt="Delphinium Travelcorp Logo" class="w-full h-full object-contain"
              src="{{ asset('images/logo/dtc-logo.JPG') }}">
          </div>
          <div class="flex flex-col">
            <span class="font-display font-black text-lg leading-tight text-navy">Delphinium Travelcorp</span>
            <span class="text-xs font-semibold text-electric">DTC Bharat</span>
          </div>
        </a>

        <div class="hidden lg:flex items-center gap-8">
          <a class="relative font-semibold transition-colors whitespace-nowrap text-navy-lighter hover:text-primary group" href="#home">
            Home
            <span class="absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 w-full"></span>
          </a>
          <a class="relative font-semibold transition-colors whitespace-nowrap text-navy-lighter hover:text-primary group" href="#profile">
            Profile
            <span class="absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-full"></span>
          </a>
          <a class="relative font-semibold transition-colors whitespace-nowrap text-navy-lighter hover:text-primary group" href="#services">
            Services
            <span class="absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-full"></span>
          </a>
          <a class="relative font-semibold transition-colors whitespace-nowrap text-navy-lighter hover:text-primary group" href="#team">
            Team
            <span class="absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-full"></span>
          </a>
          <a class="relative font-semibold transition-colors whitespace-nowrap text-navy-lighter hover:text-primary group" href="#tours">
            Tours
            <span class="absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-full"></span>
          </a>
          <a class="relative font-semibold transition-colors whitespace-nowrap text-navy-lighter hover:text-primary group" href="#contact">
            Contact
            <span class="absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-full"></span>
          </a>
        </div>

        <div class="hidden lg:block">
          <a class="relative px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white font-bold rounded-full overflow-hidden shadow-soft hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.03] whitespace-nowrap cursor-pointer"
             href="#contact">
            <span class="relative z-10">Book a Cab Now</span>
            <div class="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        <button class="lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer text-navy" aria-label="Toggle menu">
          <i class="ri-menu-line text-2xl"></i>
        </button>

      </div>
    </div>
  </nav>

  {{-- ================= FLOATING BUTTONS ================= --}}
  <div class="fixed bottom-8 right-8 z-40">
    <a class="group relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-primary to-primary-light rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110 cursor-pointer"
       href="#contact">
      <i class="ri-taxi-line text-2xl text-white"></i>
      <div class="absolute inset-0 rounded-full bg-primary/30 animate-ping"></div>
      <div class="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-electric rounded-full">
        <span class="text-xs font-bold text-white">24/7</span>
      </div>
    </a>
  </div>

  <div class="fixed bottom-8 left-8 z-40">
    <a href="https://wa.me/911244444444" target="_blank" rel="noopener noreferrer"
       class="group relative w-14 h-14 flex items-center justify-center bg-green-500 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 cursor-pointer">
      <i class="ri-whatsapp-line text-2xl text-white"></i>
      <div class="absolute inset-0 rounded-full bg-green-500/20 animate-pulse"></div>
    </a>
  </div>

  {{-- ================= HERO SECTION ================= --}}
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <div class="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-electric">
      <div class="absolute inset-0 opacity-25">
        <div class="absolute top-20 left-20 w-96 h-96 bg-electric rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      </div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div class="grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <h1 class="font-display font-black text-6xl lg:text-7xl xl:text-8xl text-white leading-tight mb-6"
              style="text-shadow: rgba(30, 136, 229, 0.45) 0px 0px 40px;">
            On Time.<br>Round the Clock.
          </h1>

          <p class="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-10 max-w-xl">
            Precision-driven corporate mobility solutions built on safety and performance.
          </p>

          <div class="flex flex-wrap gap-4">
            <a class="px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-black rounded-full hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 whitespace-nowrap"
               href="#contact">
              Book a Cab Now
            </a>

            <a class="px-8 py-4 border-2 border-white/90 text-white font-black rounded-full hover:bg-white hover:text-navy transition-all duration-300 whitespace-nowrap"
               href="#services">
              Explore Services
            </a>
          </div>
        </div>

        <div class="relative">
          <div class="grid grid-cols-2 gap-6">

            <div class="bg-white/10 backdrop-blur-xl rounded-5xl p-10 border border-white/20 shadow-card hover:-translate-y-1 transition">
              <div class="w-12 h-12 flex items-center justify-center mb-5">
                <i class="ri-time-line text-4xl text-primary"></i>
              </div>
              <div class="font-display font-black text-5xl text-white mb-2">24/7</div>
              <div class="text-sm text-gray-200 font-semibold">Availability</div>
            </div>

            <div class="bg-white/10 backdrop-blur-xl rounded-5xl p-10 border border-white/20 shadow-card hover:-translate-y-1 transition">
              <div class="w-12 h-12 flex items-center justify-center mb-5">
                <i class="ri-map-pin-line text-4xl text-primary"></i>
              </div>
              <div class="font-display font-black text-5xl text-white mb-2">PAN</div>
              <div class="text-sm text-gray-200 font-semibold">India Operations</div>
            </div>

            <div class="bg-white/10 backdrop-blur-xl rounded-5xl p-10 border border-white/20 shadow-card hover:-translate-y-1 transition">
              <div class="w-12 h-12 flex items-center justify-center mb-5">
                <i class="ri-building-line text-4xl text-primary"></i>
              </div>
              <div class="font-display font-black text-5xl text-white mb-2">100+</div>
              <div class="text-sm text-gray-200 font-semibold">Corporate Clients</div>
            </div>

            <div class="bg-white/10 backdrop-blur-xl rounded-5xl p-10 border border-white/20 shadow-card hover:-translate-y-1 transition">
              <div class="w-12 h-12 flex items-center justify-center mb-5">
                <i class="ri-car-line text-4xl text-primary"></i>
              </div>
              <div class="font-display font-black text-5xl text-white mb-2">500+</div>
              <div class="text-sm text-gray-200 font-semibold">Vehicles</div>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
      <div class="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
        <div class="w-1 h-3 bg-white rounded-full animate-bounce"></div>
      </div>
    </div>
  </section>

  {{-- ================= ABOUT SECTION ================= --}}
  <section id="profile" class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <div class="relative rounded-5xl overflow-hidden shadow-card h-96">
            <img alt="DTC Bharat Corporate Office" class="w-full h-full object-cover"
                 src="https://readdy.ai/api/search-image?query=modern%20corporate%20office%20building%20with%20professional%20fleet%20of%20luxury%20vehicles%20parked%20in%20organized%20rows%2C%20professional%20business%20environment%20with%20glass%20architecture%20and%20clean%20design%2C%20corporate%20transportation%20hub%20with%20premium%20cars%2C%20bright%20daylight%20photography%2C%20professional%20corporate%20aesthetic&width=600&height=700&seq=dtc-about-1&orientation=portrait">
            <div class="absolute inset-0 bg-gradient-to-t from-electric/50 to-transparent"></div>
          </div>
        </div>

        <div>
          <div class="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span class="text-sm font-black text-primary uppercase tracking-wide">About DTC Bharat</span>
          </div>

          <h2 class="font-display font-black text-5xl lg:text-6xl text-navy mb-6 leading-tight">
            Trusted Corporate Mobility Partner
          </h2>

          <p class="text-lg text-gray-600 leading-relaxed mb-6">
            Founded in <strong>2006</strong> and incorporated in <strong>2011</strong>, DTC Bharat is a structured,
            technology-enabled corporate transportation partner delivering disciplined fleet management,
            real-time monitoring, and enterprise reporting.
          </p>

          <p class="text-lg text-gray-600 leading-relaxed mb-10">
            We ensure an environment that clients, cab users, and staff are proud to be part of, built on our core values of
            safety, timeliness, professionalism, and long-term partnerships.
          </p>

          <a class="inline-flex items-center gap-2 px-7 py-3 border-2 border-electric text-electric font-black rounded-full hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
             href="#services">
            Learn More About Us <i class="ri-arrow-right-line"></i>
          </a>
        </div>

      </div>
    </div>
  </section>

  {{-- ================= FLEET SECTION ================= --}}
  <section id="services" class="py-24 bg-gradient-to-br from-navy via-navy-light to-navy relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-full h-full"
           style="background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.06) 35px, rgba(255,255,255,0.06) 70px);">
      </div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

      <div class="text-center mb-16">
        <h2 class="font-display font-black text-5xl lg:text-6xl text-white mb-4">Our Premium Fleet</h2>
        <div class="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p class="text-xl text-gray-200 max-w-3xl mx-auto">
          From compact hatchbacks to luxury buses, we offer a diverse fleet equipped with cutting-edge technology and safety features.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {{-- Hatchback --}}
        <div class="bg-white rounded-5xl overflow-hidden shadow-card hover:-translate-y-3 transition duration-500">
          <div class="relative h-64 overflow-hidden">
            <img alt="Hatchback" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                 src="https://readdy.ai/api/search-image?query=modern%20white%20hatchback%20car%20on%20clean%20minimal%20background%2C%20compact%20city%20car%20with%20sleek%20design%2C%20professional%20automotive%20photography%2C%20side%20angle%20view%2C%20studio%20lighting%2C%20simple%20background&width=400&height=500&seq=fleet-hatchback-1&orientation=portrait">
          </div>
          <div class="p-6">
            <div class="inline-block px-3 py-1 bg-primary rounded-full mb-4">
              <span class="text-xs font-black text-white uppercase">Hatchback</span>
            </div>
            <ul class="space-y-2 mb-6">
              <li class="text-sm text-gray-700 flex items-center gap-2"><span class="w-1.5 h-1.5 bg-electric rounded-full"></span>Wagon-R</li>
              <li class="text-sm text-gray-700 flex items-center gap-2"><span class="w-1.5 h-1.5 bg-electric rounded-full"></span>Ritz</li>
              <li class="text-sm text-gray-700 flex items-center gap-2"><span class="w-1.5 h-1.5 bg-electric rounded-full"></span>Santro</li>
              <li class="text-sm text-gray-700 flex items-center gap-2"><span class="w-1.5 h-1.5 bg-electric rounded-full"></span>Liva</li>
            </ul>

            <div class="flex items-center gap-4 pt-4 border-t border-gray-100 text-electric">
              <i class="ri-map-pin-line" title="GPS Tracking"></i>
              <i class="ri-shield-check-line" title="Safety"></i>
              <i class="ri-temp-cold-line" title="AC"></i>
            </div>
          </div>
        </div>

        {{-- Sedan --}}
        <div class="bg-white rounded-5xl overflow-hidden shadow-card hover:-translate-y-3 transition duration-500">
          <div class="relative h-64 overflow-hidden">
            <img alt="Sedan" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                 src="https://readdy.ai/api/search-image?query=elegant%20silver%20sedan%20car%20on%20clean%20minimal%20background%2C%20professional%20business%20sedan%20with%20modern%20design%2C%20automotive%20photography%2C%20side%20angle%20view%2C%20studio%20lighting%2C%20simple%20background&width=400&height=500&seq=fleet-sedan-1&orientation=portrait">
          </div>
          <div class="p-6">
            <div class="inline-block px-3 py-1 bg-primary rounded-full mb-4">
              <span class="text-xs font-black text-white uppercase">Sedan</span>
            </div>
            <ul class="space-y-2 mb-6">
              <li class="text-sm text-gray-700 flex items-center gap-2"><span class="w-1.5 h-1.5 bg-electric rounded-full"></span>Xcent</li>
              <li class="text-sm text-gray-700 flex items-center gap-2"><span class="w-1.5 h-1.5 bg-electric rounded-full"></span>Swift Dzire</li>
              <li class="text-sm text-gray-700 flex items-center gap-2"><span class="w-1.5 h-1.5 bg-electric rounded-full"></span>Etios</li>
            </ul>

            <div class="flex items-center gap-4 pt-4 border-t border-gray-100 text-electric">
              <i class="ri-map-pin-line"></i>
              <i class="ri-shield-check-line"></i>
              <i class="ri-temp-cold-line"></i>
            </div>
          </div>
        </div>

        {{-- SUV/MUV --}}
        <div class="bg-white rounded-5xl overflow-hidden shadow-card hover:-translate-y-3 transition duration-500">
          <div class="relative h-64 overflow-hidden">
            <img alt="SUV/MUV" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                 src="https://readdy.ai/api/search-image?query=premium%20black%20SUV%20vehicle%20on%20clean%20minimal%20background%2C%20luxury%20multi-purpose%20vehicle%20with%20commanding%20presence%2C%20professional%20automotive%20photography%2C%20side%20angle%20view%2C%20studio%20lighting%2C%20simple%20background&width=400&height=500&seq=fleet-suv-1&orientation=portrait">
          </div>
          <div class="p-6">
            <div class="inline-block px-3 py-1 bg-primary rounded-full mb-4">
              <span class="text-xs font-black text-white uppercase">SUV/MUV</span>
            </div>
            <ul class="space-y-2 mb-6">
              <li class="text-sm text-gray-700 flex items-center gap-2"><span class="w-1.5 h-1.5 bg-electric rounded-full"></span>Ertiga</li>
              <li class="text-sm text-gray-700 flex items-center gap-2"><span class="w-1.5 h-1.5 bg-electric rounded-full"></span>Enjoy</li>
              <li class="text-sm text-gray-700 flex items-center gap-2"><span class="w-1.5 h-1.5 bg-electric rounded-full"></span>Xylo</li>
              <li class="text-sm text-gray-700 flex items-center gap-2"><span class="w-1.5 h-1.5 bg-electric rounded-full"></span>Innova</li>
            </ul>

            <div class="flex items-center gap-4 pt-4 border-t border-gray-100 text-electric">
              <i class="ri-map-pin-line"></i>
              <i class="ri-shield-check-line"></i>
              <i class="ri-temp-cold-line"></i>
            </div>
          </div>
        </div>

        {{-- Bus --}}
        <div class="bg-white rounded-5xl overflow-hidden shadow-card hover:-translate-y-3 transition duration-500">
          <div class="relative h-64 overflow-hidden">
            <img alt="Bus" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                 src="https://readdy.ai/api/search-image?query=modern%20white%20luxury%20bus%20on%20clean%20minimal%20background%2C%20premium%20corporate%20transport%20bus%20with%20sleek%20design%2C%20professional%20automotive%20photography%2C%20side%20angle%20view%2C%20studio%20lighting%2C%20simple%20background&width=400&height=500&seq=fleet-bus-1&orientation=portrait">
          </div>
          <div class="p-6">
            <div class="inline-block px-3 py-1 bg-primary rounded-full mb-4">
              <span class="text-xs font-black text-white uppercase">Bus</span>
            </div>
            <ul class="space-y-2 mb-6">
              <li class="text-sm text-gray-700 flex items-center gap-2"><span class="w-1.5 h-1.5 bg-electric rounded-full"></span>Traveller</li>
              <li class="text-sm text-gray-700 flex items-center gap-2"><span class="w-1.5 h-1.5 bg-electric rounded-full"></span>Mini Bus</li>
              <li class="text-sm text-gray-700 flex items-center gap-2"><span class="w-1.5 h-1.5 bg-electric rounded-full"></span>Luxury Bus</li>
            </ul>

            <div class="flex items-center gap-4 pt-4 border-t border-gray-100 text-electric">
              <i class="ri-map-pin-line"></i>
              <i class="ri-shield-check-line"></i>
              <i class="ri-temp-cold-line"></i>
            </div>
          </div>
        </div>

      </div>

      {{-- Technology features row --}}
      <div class="mt-16 bg-white/10 backdrop-blur-xl rounded-5xl p-8 border border-white/20 shadow-card">
        <div class="grid md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          <div class="flex flex-col items-center gap-3">
            <div class="w-14 h-14 flex items-center justify-center bg-primary/20 rounded-full">
              <i class="ri-map-pin-user-line text-2xl text-white"></i>
            </div>
            <span class="text-sm font-bold text-white">GPS Tracking</span>
          </div>

          <div class="flex flex-col items-center gap-3">
            <div class="w-14 h-14 flex items-center justify-center bg-primary/20 rounded-full">
              <i class="ri-alarm-warning-line text-2xl text-white"></i>
            </div>
            <span class="text-sm font-bold text-white">Panic Alert</span>
          </div>

          <div class="flex flex-col items-center gap-3">
            <div class="w-14 h-14 flex items-center justify-center bg-primary/20 rounded-full">
              <i class="ri-shield-user-line text-2xl text-white"></i>
            </div>
            <span class="text-sm font-bold text-white">Female Safety</span>
          </div>

          <div class="flex flex-col items-center gap-3">
            <div class="w-14 h-14 flex items-center justify-center bg-primary/20 rounded-full">
              <i class="ri-route-line text-2xl text-white"></i>
            </div>
            <span class="text-sm font-bold text-white">AI Route Optimization</span>
          </div>

          <div class="flex flex-col items-center gap-3">
            <div class="w-14 h-14 flex items-center justify-center bg-primary/20 rounded-full">
              <i class="ri-tools-line text-2xl text-white"></i>
            </div>
            <span class="text-sm font-bold text-white">Preventive Maintenance</span>
          </div>
        </div>
      </div>

    </div>
  </section>

  {{-- ================= AMENITIES ================= --}}
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="inline-block px-4 py-2 bg-gray-100 rounded-full mb-4">
          <span class="text-sm font-black text-gray-600 uppercase tracking-wide">Premium Amenities</span>
        </div>
        <h2 class="font-display font-black text-5xl lg:text-6xl text-navy mb-4">Comfort & Convenience</h2>
      </div>

      @php
        $amenities = [
          ['icon'=>'ri-newspaper-line','label'=>'Newspaper'],
          ['icon'=>'ri-first-aid-kit-line','label'=>'First Aid'],
          ['icon'=>'ri-hand-sanitizer-line','label'=>'Sanitizers'],
          ['icon'=>'ri-charging-pile-2-line','label'=>'Charging Ports'],
          ['icon'=>'ri-wifi-line','label'=>'Wi-Fi'],
          ['icon'=>'ri-temp-cold-line','label'=>'AC Control'],
          ['icon'=>'ri-medicine-bottle-line','label'=>'Emergency Kit'],
        ];
      @endphp

      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
        @foreach($amenities as $item)
          <div class="bg-white rounded-4xl p-7 border border-gray-100 shadow-lg hover:shadow-card hover:-translate-y-1 transition duration-300">
            <div class="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-electric/10 rounded-full">
              <i class="{{ $item['icon'] }} text-3xl text-electric"></i>
            </div>
            <h3 class="text-sm font-black text-navy text-center">{{ $item['label'] }}</h3>
          </div>
        @endforeach
      </div>

    </div>
  </section>

  {{-- ================= WHY CHOOSE US ================= --}}
  <section class="py-24 bg-gradient-to-br from-electric via-electric-light to-electric relative overflow-hidden" id="team">
    <div class="absolute inset-0 opacity-10"
         style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0); background-size: 38px 38px;">
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="font-display font-black text-5xl lg:text-6xl text-white mb-6">Why Choose DTC Bharat?</h2>
      </div>

      @php
        $features = [
          ['icon'=>'ri-customer-service-2-line','title'=>'24/7 Control Room','desc'=>'Round-the-clock monitoring and support for seamless operations and immediate assistance.'],
          ['icon'=>'ri-shield-check-line','title'=>'Certified Drivers','desc'=>'Professionally trained and verified drivers ensuring safety and excellent service standards.'],
          ['icon'=>'ri-settings-3-line','title'=>'Structured Processes','desc'=>'Disciplined fleet management with standardized protocols for consistent quality delivery.'],
          ['icon'=>'ri-file-list-3-line','title'=>'Transparent Billing','desc'=>'Clear, itemized invoicing with no hidden charges and comprehensive MIS reporting.'],
          ['icon'=>'ri-line-chart-line','title'=>'MIS Reporting','desc'=>'Real-time analytics and detailed reports for informed decision-making and optimization.'],
          ['icon'=>'ri-expand-diagonal-line','title'=>'Scalable Operations','desc'=>'Flexible fleet solutions that grow with your business needs across multiple locations.'],
        ];
      @endphp

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        @foreach($features as $f)
          <div class="bg-white/95 backdrop-blur-xl rounded-5xl p-10 shadow-card hover:-translate-y-2 transition duration-300">
            <div class="w-16 h-16 flex items-center justify-center mb-6 bg-gradient-to-br from-electric to-electric-light rounded-3xl">
              <i class="{{ $f['icon'] }} text-3xl text-white"></i>
            </div>
            <h3 class="font-display font-black text-2xl text-navy mb-4">{{ $f['title'] }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ $f['desc'] }}</p>
          </div>
        @endforeach
      </div>

    </div>
  </section>

  {{-- ================= TESTIMONIALS ================= --}}
  <section class="py-24 bg-gray-50" id="tours">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="font-display font-black text-5xl lg:text-6xl text-navy mb-4">Client Testimonials</h2>
        <div class="w-20 h-1 bg-primary mx-auto"></div>
      </div>

      @php
        $testimonials = [
          ['name'=>'Rajesh Kumar','company'=>'Tech Solutions Pvt Ltd','initial'=>'R',
            'text'=>'DTC Bharat has transformed our employee transportation. Their punctuality and professional service are unmatched. The GPS tracking gives us complete peace of mind.'],
          ['name'=>'Priya Sharma','company'=>'Global Finance Corp','initial'=>'P',
            'text'=>'Outstanding service quality and reliability. The 24/7 control room support is exceptional. Their transparent billing and detailed MIS reports make fleet management effortless.'],
          ['name'=>'Amit Patel','company'=>'Manufacturing Industries Ltd','initial'=>'A',
            'text'=>'We have been using DTC Bharat for over 3 years. Their commitment to safety, especially for night shifts, is commendable. Highly professional team and excellent fleet maintenance.'],
        ];
      @endphp

      <div class="grid md:grid-cols-3 gap-8">
        @foreach($testimonials as $t)
          <div class="bg-white rounded-5xl p-8 shadow-lg hover:shadow-card hover:-translate-y-1 transition duration-300">
            <div class="flex items-center gap-1 mb-4">
              @for($i=0;$i<5;$i++) <i class="ri-star-fill text-xl text-yellow-400"></i> @endfor
            </div>

            <p class="text-gray-700 leading-relaxed mb-8 italic">
              "{{ $t['text'] }}"
            </p>

            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gradient-to-br from-electric to-electric-light rounded-full flex items-center justify-center">
                <span class="text-white font-black text-lg">{{ $t['initial'] }}</span>
              </div>
              <div>
                <div class="font-black text-navy">{{ $t['name'] }}</div>
                <div class="text-sm text-gray-500">{{ $t['company'] }}</div>
              </div>
            </div>
          </div>
        @endforeach
      </div>

    </div>
  </section>

  {{-- ================= CTA SECTION ================= --}}
  <section id="contact" class="py-24 bg-gradient-to-r from-primary via-primary-light to-primary relative overflow-hidden">
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <h2 class="font-display font-black text-5xl lg:text-6xl text-white mb-6">
        Ready to Transform Your Corporate Mobility?
      </h2>

      <p class="text-xl text-white/90 mb-10 leading-relaxed">
        Join 100+ leading companies who trust DTC Bharat for their transportation needs.
        Experience the difference of professional, technology-driven fleet management.
      </p>

      <a class="inline-block px-12 py-5 bg-white text-primary font-black text-lg rounded-full hover:bg-navy hover:text-white transition-all duration-300 hover:scale-105 shadow-2xl"
         href="#home">
        Get Started Today
      </a>
    </div>
  </section>

  {{-- ================= FOOTER ================= --}}
  <footer class="bg-navy text-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 flex items-center justify-center">
              <img alt="DTC Logo" class="w-full h-full object-contain"
                   src="{{ asset('images/logo/dtc-logo.JPG') }}">
            </div>
            <div class="flex flex-col">
              <span class="font-display font-black text-base leading-tight">Delphinium Travelcorp</span>
              <span class="text-xs text-electric-light font-semibold">DTC Bharat</span>
            </div>
          </div>

          <p class="text-sm text-gray-300 leading-relaxed mb-4">
            Corporate travel managed with safety and excellence since 2006. Delivering precision-driven mobility solutions across India.
          </p>

          <p class="text-xs text-electric-light font-semibold italic">
            Safe & Joyful Journey in Excellent Timings
          </p>
        </div>

        <div>
          <h3 class="font-display font-black text-lg mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><a class="text-sm text-gray-300 hover:text-primary transition-colors" href="#home">Home</a></li>
            <li><a class="text-sm text-gray-300 hover:text-primary transition-colors" href="#profile">Our Profile</a></li>
            <li><a class="text-sm text-gray-300 hover:text-primary transition-colors" href="#services">Services</a></li>
            <li><a class="text-sm text-gray-300 hover:text-primary transition-colors" href="#team">Why Choose Us</a></li>
            <li><a class="text-sm text-gray-300 hover:text-primary transition-colors" href="#tours">Testimonials</a></li>
            <li><a class="text-sm text-gray-300 hover:text-primary transition-colors" href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-display font-black text-lg mb-4">Our Services</h3>
          <ul class="space-y-2">
            <li class="text-sm text-gray-300">Employee Transportation</li>
            <li class="text-sm text-gray-300">Shuttle Services</li>
            <li class="text-sm text-gray-300">Spot Rental</li>
            <li class="text-sm text-gray-300">Outstation Travel</li>
            <li class="text-sm text-gray-300">Corporate Events</li>
            <li class="text-sm text-gray-300">Airport Transfers</li>
          </ul>
        </div>

        <div>
          <h3 class="font-display font-black text-lg mb-4">Contact Us</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <div class="w-5 h-5 flex items-center justify-center mt-0.5">
                <i class="ri-map-pin-line text-primary"></i>
              </div>
              <span class="text-sm text-gray-300">Sector 34, Gurugram, Haryana, India</span>
            </li>

            <li class="flex items-center gap-3">
              <div class="w-5 h-5 flex items-center justify-center">
                <i class="ri-phone-line text-primary"></i>
              </div>
              <a href="tel:+911244444444" class="text-sm text-gray-300 hover:text-primary transition-colors">+91 124 444 4444</a>
            </li>

            <li class="flex items-center gap-3">
              <div class="w-5 h-5 flex items-center justify-center">
                <i class="ri-mail-line text-primary"></i>
              </div>
              <a href="mailto:info@royalcorptravel.com" class="text-sm text-gray-300 hover:text-primary transition-colors">info@royalcorptravel.com</a>
            </li>
          </ul>

          <div class="flex items-center gap-3 mt-6">
            <a href="#" class="w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 hover:border-primary hover:bg-primary transition-all" aria-label="Facebook">
              <i class="ri-facebook-fill text-sm"></i>
            </a>
            <a href="#" class="w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 hover:border-primary hover:bg-primary transition-all" aria-label="Twitter">
              <i class="ri-twitter-x-line text-sm"></i>
            </a>
            <a href="#" class="w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 hover:border-primary hover:bg-primary transition-all" aria-label="LinkedIn">
              <i class="ri-linkedin-fill text-sm"></i>
            </a>
            <a href="#" class="w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 hover:border-primary hover:bg-primary transition-all" aria-label="Instagram">
              <i class="ri-instagram-line text-sm"></i>
            </a>
          </div>

        </div>

      </div>
    </div>

    <div class="border-t border-primary/30">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-sm text-gray-400 text-center md:text-left">&copy; 2017-2026 Delphinium Travelcorp. All rights reserved.</p>
          <p class="text-sm text-gray-400 text-center md:text-right">On Time. Round the Clock.</p>
        </div>
      </div>
    </div>
  </footer>

</div>
</body>
</html>

