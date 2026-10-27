export const BARBERSHOP_DATA = {
  name: "Barber Shop Maracay",
  slogan: "Cortes de precisión y estilo auténtico en el corazón de Maracay",
  location: {
    city: "Maracay",
    state: "Aragua",
    country: "Venezuela",
    address: "Av. Las Delicias / Calicanto, Maracay, Edo. Aragua",
    googleMapsUrl: "https://maps.google.com"
  },
  contact: {
    phone: "+58 412-1234567",
    whatsapp: "+584121234567",
    instagram: "@barbershop.maracay",
    workingHours: "Lunes a Sábado: 8:30 AM - 7:00 PM | Domingo: 9:00 AM - 3:00 PM"
  },
  currency: {
    primary: "USD",
    secondary: "Bs. (Tasa BCV)",
    symbol: "$"
  },
  services: [
    {
      id: "classic-cut",
      title: "Corte Clásico / Degradado (Fade)",
      duration: "35 min",
      priceUSD: 8,
      description: "Lavado, corte personalizado con máquina/tijera y acabado con navaja."
    },
    {
      id: "beard-trim",
      title: "Perfilado y Cuidado de Barba",
      duration: "25 min",
      priceUSD: 5,
      description: "Afeitado tradicional con toalla caliente, aceite hidratante y navaja."
    },
    {
      id: "combo-vip",
      title: "Combo VIP (Corte + Barba + Mascarilla)",
      duration: "60 min",
      priceUSD: 12,
      description: "Servicio completo: corte, perfilado de barba, vaporizador y mascarilla facial de puntos negros."
    },
    {
      id: "kids-cut",
      title: "Corte Infantil",
      duration: "30 min",
      priceUSD: 6,
      description: "Paciencia y estilo para los más pequeños con diseños creativos."
    }
  ]
};
