export const BCV_RATE = 46.5; // Tasa referencial Bs. por USD

export const BARBERSHOP_DATA = {
  brand: "Buffalo's Barbershop",
  since: "2018",
  city: "Maracay",
  state: "Aragua",
  country: "Venezuela",
  mall: "Centro Comercial Las Américas",
  address: "Centro Comercial Las Américas, Av. Las Delicias, Nivel Feria / Comercial, Maracay, Edo. Aragua",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Centro+Comercial+Las+Americas+Maracay+Venezuela",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.069795648834!2d-67.60212062402127!3d10.25593856858169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e803c9d784fa0fb%3A0xe5dd2e22c954e38e!2sCentro%20Comercial%20Las%20Am%C3%A9ricas!5e0!3m2!1ses!2sve!4v1711000000000!5m2!1ses!2sve",
  phone: "+58 412-4328901",
  phoneRaw: "+584124328901",
  whatsapp: "+58 412-4328901",
  whatsappRaw: "584124328901",
  instagram: "buffalosbarbershop",
  instagramUrl: "https://instagram.com",
  workingHours: {
    weekdays: "Lunes a Sábado: 9:00 AM - 8:00 PM",
    sunday: "Domingo: 10:00 AM - 5:00 PM"
  },
  
  services: [
    // Cortes
    {
      id: "corte-fade",
      category: "cortes",
      name: {
        es: "Corte Degradado (Fade / Taper)",
        en: "Skin Fade / Taper Haircut"
      },
      duration: "40 min",
      priceUSD: 8,
      tag: "Popular",
      description: {
        es: "Degradado limpio a navaja o shaver, textura superior a tijera, lavado refrescante y peinado con cera mate.",
        en: "Clean fade to skin with razor or shaver, textured top, scalp wash and matte styling."
      }
    },
    {
      id: "corte-clasico",
      category: "cortes",
      name: {
        es: "Corte Clásico Tradicional",
        en: "Traditional Classic Cut"
      },
      duration: "35 min",
      priceUSD: 7,
      description: {
        es: "Estilo ejecutivo y corte a tijera pulido con líneas limpias, contornos a navaja y tónico capilar.",
        en: "Polished scissor cut, clean neck contour with razor and invigorating tonic."
      }
    },
    {
      id: "corte-infantil",
      category: "cortes",
      name: {
        es: "Corte Infantil (Niños hasta 12 años)",
        en: "Kids Haircut (Under 12)"
      },
      duration: "30 min",
      priceUSD: 6,
      description: {
        es: "Atención con paciencia y dinamismo para los más jóvenes, diseños opcionales y peinado estilizado.",
        en: "Patient and tailored haircut for youngsters, cool designs and premium pomade styling."
      }
    },
    
    // Barba
    {
      id: "arreglo-barba",
      category: "barba",
      name: {
        es: "Arreglo y Esculpido de Barba",
        en: "Beard Sculpting & Trim"
      },
      duration: "30 min",
      priceUSD: 5,
      tag: "Top",
      description: {
        es: "Recorte simétrico, degradado de patillas, perfilado de mejillas y cuello a navaja con bálsamo hidratante.",
        en: "Symmetrical trimming, fade blend, crisp razor edge-up and conditioning balm."
      }
    },
    {
      id: "barba-spa",
      category: "barba",
      name: {
        es: "Barba Terapia Spa con Toalla Caliente",
        en: "Hot Towel Beard Spa Therapy"
      },
      duration: "45 min",
      priceUSD: 8,
      tag: "Exclusivo",
      description: {
        es: "Doble toalla caliente aromática, exfoliación facial, aceites esenciales de cedro, perfilado y masaje relajante.",
        en: "Double aromatic hot towels, gentle scrub, essential oils, precision razor lining and relaxing massage."
      }
    },

    // Afeitado
    {
      id: "afeitado-clasico",
      category: "afeitado",
      name: {
        es: "Afeitado Real Tradicional (Royal Shave)",
        en: "Royal Straight Razor Shave"
      },
      duration: "35 min",
      priceUSD: 7,
      tag: "Clásico",
      description: {
        es: "Espuma densa con brocha de tejón, afeitado a navaja barbera de doble pasada, toalla helada y loción astringente.",
        en: "Warm rich lather with badger brush, two-pass straight razor shave, cold closure towel and soothing splash."
      }
    },
    {
      id: "afeitado-cabeza",
      category: "afeitado",
      name: {
        es: "Afeitado Completo de Cabeza a Navaja",
        en: "Full Head Straight Razor Shave"
      },
      duration: "35 min",
      priceUSD: 7,
      description: {
        es: "Rasurado suave y al ras con espuma térmica, masaje capilar revitalizante y loción protectora solar.",
        en: "Smooth head shave with thermal lather, scalp massage and protective soothing finish."
      }
    },

    // Combos
    {
      id: "combo-buffalos",
      category: "combos",
      name: {
        es: "Combo Buffalo's VIP (Corte + Barba + Mascarilla)",
        en: "Buffalo's VIP Combo (Cut + Beard + Facial)"
      },
      duration: "65 min",
      priceUSD: 14,
      tag: "Más Pedido",
      description: {
        es: "El servicio definitivo: Corte personalizado + arreglo de barba con toalla caliente + mascarilla de carbón activado.",
        en: "The ultimate gentleman experience: Custom cut, hot towel beard sculpting and purifying black peel mask."
      }
    },
    {
      id: "combo-duo",
      category: "combos",
      name: {
        es: "Combo Dúo Clásico (Corte + Barba)",
        en: "Classic Duo (Haircut + Beard)"
      },
      duration: "50 min",
      priceUSD: 11,
      tag: "Recomendado",
      description: {
        es: "Sincronización perfecta de corte moderno y perfilado de barba con acabado impecable a navaja.",
        en: "Harmonious haircut and beard line-up with sharp straight razor definition."
      }
    },
    {
      id: "combo-padre-hijo",
      category: "combos",
      name: {
        es: "Combo Padre e Hijo",
        en: "Father & Son Experience"
      },
      duration: "60 min",
      priceUSD: 13,
      description: {
        es: "Dos cortes completos con acabado profesional y bebida de cortesía para compartir la tradición.",
        en: "Two complete haircuts with styling products to share the barbershop ritual."
      }
    },

    // Cuidado / Tinturación
    {
      id: "cuidado-mascarilla",
      category: "tratamientos",
      name: {
        es: "Limpieza Facial Profunda & Mascarilla Black Mask",
        en: "Deep Facial Cleansing & Black Mask"
      },
      duration: "25 min",
      priceUSD: 6,
      description: {
        es: "Vaporizador de ozono para apertura de poros, extracción de impurezas y mascarilla tensora peel-off.",
        en: "Ozone facial steam, blackhead pore cleansing and refreshing peel-off mask."
      }
    },
    {
      id: "color-camo",
      category: "tratamientos",
      name: {
        es: "Camuflaje de Canas / Tinte para Barba",
        en: "Beard Gray Blending / Natural Tint"
      },
      duration: "30 min",
      priceUSD: 7,
      description: {
        es: "Tonalización natural libre de amoníaco que devuelve vigor y uniformidad a la barba y cabello.",
        en: "Natural ammonia-free tone correction for an even, youthfully refreshed beard."
      }
    }
  ],

  masters: [
    {
      id: "anthony",
      name: "Anthony R.",
      role: {
        es: "Master Stylist & Freestyle Artist",
        en: "Master Stylist & Freestyle Artist"
      },
      experience: "7+ años",
      specialty: {
        es: "Cortes modernos con textura, líneas freestyle y tijera avanzada",
        en: "Textured crops, sharp freestyle lines and scissor mastery"
      },
      photo: "/images/master-barber-cut.jpg"
    },
    {
      id: "reixon",
      name: "Reixon M.",
      role: {
        es: "Fade Specialist & Educator",
        en: "Fade Specialist & Educator"
      },
      experience: "8+ años",
      specialty: {
        es: "Low, Mid y High Fades milimétricos, afeitado a navaja libre",
        en: "Precision skin fades, taper fades and razor craftsmanship"
      },
      photo: "/images/salon-action.jpg"
    },
    {
      id: "juan-b",
      name: "Juan B.",
      role: {
        es: "Director Técnico & Master Barber",
        en: "Technical Director & Master Barber"
      },
      experience: "10+ años",
      specialty: {
        es: "Corte clásico ejecutivo, diseño de barba y mentor de la academia",
        en: "Executive classic cuts, beard architecture and academy instructor"
      },
      photo: "/images/academy-graduates.jpg"
    },
    {
      id: "iverson",
      name: "Iverson G.",
      role: {
        es: "Beard Sculptor & Hot Towel Specialist",
        en: "Beard Sculptor & Hot Towel Specialist"
      },
      experience: "6+ años",
      specialty: {
        es: "Perfilado milimétrico de barba, toallas calientes y tratamiento spa",
        en: "Beard sculpting, razor line-ups and thermal towel rituals"
      },
      photo: "/images/salon-interior-main.jpg"
    }
  ],

  products: [
    {
      id: "pomada-mate",
      name: "Pomada Fijación Extra Fuerte Mate",
      brand: "Buffalo's Grooming Co.",
      priceUSD: 12,
      category: "Cabello",
      description: {
        es: "Acabado mate sin brillo, fijación resistente al clima cálido de Maracay. Base agua de fácil lavado.",
        en: "Strong matte hold formulated for humid climates. Water soluble and easy rinse."
      },
      tag: "Bestseller"
    },
    {
      id: "aceite-barba",
      name: "Aceite Fortificante para Barba (Cedro & Bergamota)",
      brand: "Buffalo's Grooming Co.",
      priceUSD: 10,
      category: "Barba",
      description: {
        es: "Fórmula pura con aceite de argán, jojoba y vitamina E. Suaviza la barba y elimina la picazón.",
        en: "Pure argan, jojoba and Vitamin E formula. Eliminates itch and softens facial hair."
      },
      tag: "Esencial"
    },
    {
      id: "balsamo-barba",
      name: "Bálsamo Moldeador Hidratante",
      brand: "Buffalo's Grooming Co.",
      priceUSD: 11,
      category: "Barba",
      description: {
        es: "Cera de abejas y manteca de karité para dar forma, controlar vellos rebeldes y aportar volumen.",
        en: "Beeswax and shea butter to tame unruly hairs and provide healthy volume."
      }
    },
    {
      id: "aftershave-menthol",
      name: "Tónico Aftershave Ice Menthol",
      brand: "Buffalo's Grooming Co.",
      priceUSD: 8,
      category: "Afeitado",
      description: {
        es: "Sensación ultra refrescante post-afeitado. Cierra los poros e hidrata sin ardor excesivo.",
        en: "Ultra cooling menthol astringent. Tightens pores and soothes post-shave irritation."
      }
    }
  ],

  promotions: [
    {
      id: "promo-estudiantes",
      title: {
        es: "Martes de Estudiantes 🎓",
        en: "Student Tuesdays 🎓"
      },
      discount: "20% OFF",
      desc: {
        es: "Presenta tu carnet estudiantil vigente y recibe 20% de descuento en cualquier corte moderno.",
        en: "Show your valid student ID and get 20% off any modern haircut."
      },
      badge: "Todos los Martes"
    },
    {
      id: "promo-vip",
      title: {
        es: "Bienvenida Buffalo's VIP 💈",
        en: "Buffalo's VIP Welcome 💈"
      },
      discount: "15% OFF",
      desc: {
        es: "En tu primera visita, disfruta de nuestro Combo Buffalo's VIP (Corte + Barba + Mascarilla) con precio especial.",
        en: "On your first appointment, enjoy our signature Buffalo's VIP combo at a discounted rate."
      },
      badge: "Nuevos Clientes"
    },
    {
      id: "promo-padre-hijo",
      title: {
        es: "Experiencia Padre & Hijo ✂️",
        en: "Father & Son Experience ✂️"
      },
      discount: "$13 Combo",
      desc: {
        es: "Comparte el ritual de la barbería: 2 cortes con peinado y perfilado a un precio inigualable.",
        en: "Two complete haircuts with styling products to share the barbershop ritual."
      },
      badge: "Fines de Semana"
    }
  ],

  academy: {
    title: {
      es: "Buffalo's Academy & Masterclasses",
      en: "Buffalo's Academy & Masterclasses"
    },
    subtitle: {
      es: "Forjamos a la nueva generación de barberos de élite en Venezuela con certificación profesional avalada.",
      en: "Training the next generation of master barbers in Venezuela with certified credentials."
    },
    image: "/images/academy-graduates.jpg",
    stats: [
      { label: { es: "Barberos Graduados", en: "Certified Graduates" }, value: "150+" },
      { label: { es: "Cursos Dictados", en: "Masterclasses Held" }, value: "35+" },
      { label: { es: "Práctica en Modelos", en: "Live Model Practice" }, value: "85%" },
      { label: { es: "Inserción Laboral", en: "Job Placement" }, value: "92%" }
    ],
    courses: [
      {
        id: "curso-cero",
        title: {
          es: "Curso Integral: Barbero Profesional Desde Cero",
          en: "Complete Course: Professional Barber From Zero"
        },
        duration: "8 Semanas (60 Horas Académicas)",
        modality: "Presencial Teórico-Práctico",
        includes: [
          "Manejo ergonómico de tijeras y máquinas profesionales",
          "Técnicas maestras de degradados (Low, Mid, High Fade, Taper)",
          "Protocolo tradicional de toalla caliente y navaja libre",
          "Visagismo y diseño según morfología facial",
          "Certificado Oficial de Graduación Buffalo's Barbershop",
          "Kit de bienvenida con delantal y herramientas"
        ]
      },
      {
        id: "curso-fade-master",
        title: {
          es: "Masterclass Intensiva: Fade & Texturas Avanzadas",
          en: "Intensive Masterclass: Advanced Fades & Textures"
        },
        duration: "Intensivo de Fin de Semana (16 Horas)",
        modality: "Nivel Intermedio / Avanzado",
        includes: [
          "Eliminación rápida de líneas de demarcación",
          "Texturizado a tijera dentada y técnica Point Cut",
          "Alineación y micropigmentación de barba",
          "Fotografía y marketing digital para barberos en Instagram",
          "Certificado de Especialización Masterclass"
        ]
      }
    ]
  }
};
