import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Scissors, User, Calendar, Clock, MessageCircle, ChevronRight, ChevronLeft, Star } from 'lucide-react';
import { BARBERSHOP_DATA, BCV_RATE } from '../data/barbershopData';

export function BookingModal({ isOpen, onClose, preselectedService, preselectedMaster, lang, t }) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedMaster, setSelectedMaster] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [notes, setNotes] = useState('');

  // Generate the next 7 days for the date picker
  const [availableDates, setAvailableDates] = useState([]);

  useEffect(() => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);
      const dayName = d.toLocaleDateString(lang === 'es' ? 'es-VE' : 'en-US', { weekday: 'short' });
      const dayNum = d.getDate();
      const monthName = d.toLocaleDateString(lang === 'es' ? 'es-VE' : 'en-US', { month: 'short' });
      dates.push({
        full: d.toISOString().split('T')[0],
        label: i === 0 ? (lang === 'es' ? 'Hoy' : 'Today') : (i === 1 ? (lang === 'es' ? 'Mañana' : 'Tomorrow') : `${dayName}`),
        sub: `${dayNum} ${monthName}`
      });
    }
    setAvailableDates(dates);
    if (dates.length > 0 && !selectedDate) {
      setSelectedDate(dates[0].full);
    }
  }, [lang]);

  // Set preselected values if passed
  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
      setStep(2);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedMaster) {
      setSelectedMaster(preselectedMaster);
      if (!selectedService) {
        setStep(1);
      } else {
        setStep(3);
      }
    }
  }, [preselectedMaster]);

  const timeSlots = [
    '09:00 AM', '09:45 AM', '10:30 AM', '11:15 AM',
    '01:00 PM', '01:45 PM', '02:30 PM', '03:15 PM',
    '04:00 PM', '04:45 PM', '05:30 PM', '06:15 PM', '07:00 PM'
  ];

  if (!isOpen) return null;

  const currentServiceName = selectedService
    ? (selectedService.name[lang] || selectedService.name.es)
    : '';

  const currentMasterName = selectedMaster
    ? selectedMaster.name
    : (lang === 'es' ? 'Cualquier barbero disponible' : 'Any available barber');

  const handleFinishBooking = () => {
    const priceBs = selectedService ? (selectedService.priceUSD * BCV_RATE).toFixed(0) : 0;
    const msg = `💈 *NUEVA RESERVA ONLINE - BUFFALO'S BARBERSHOP* 💈\n\n` +
      `📍 *Sede:* Centro Comercial Las Américas, Maracay\n` +
      `👤 *Cliente:* ${clientName || 'Cliente'}\n` +
      `📞 *Teléfono:* ${clientPhone || 'No especificado'}\n` +
      `✂️ *Servicio:* ${currentServiceName} ($${selectedService?.priceUSD} / ~${priceBs} Bs.)\n` +
      `💈 *Barbero:* ${currentMasterName}\n` +
      `📅 *Fecha:* ${selectedDate}\n` +
      `⏰ *Hora:* ${selectedTime || 'Por coordinar'}\n` +
      (notes ? `📝 *Notas:* ${notes}\n` : '') +
      `\n_Por favor confirmar disponibilidad. ¡Gracias!_`;

    const url = `https://wa.me/${BARBERSHOP_DATA.whatsappRaw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-dark-950/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-2xl bg-dark-900 border border-gold-500/30 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Top Modal Header */}
        <div className="p-6 border-b border-dark-800 flex items-center justify-between bg-dark-950/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-gold-500 to-amber-300">
              <img
                src="/images/logo-buffalos.jpg"
                alt="Buffalo's"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white">
                {t.bookingModal.title}
              </h3>
              <p className="text-xs text-gold-400">CC Las Américas • Maracay</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-dark-800 hover:bg-dark-700 text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Indicator */}
        <div className="px-6 py-3 bg-dark-850/50 border-b border-dark-800 flex items-center justify-between text-xs font-semibold">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              onClick={() => step > s && setStep(s)}
              className={`flex items-center gap-2 cursor-pointer transition-colors ${
                step === s
                  ? 'text-gold-400'
                  : step > s
                  ? 'text-emerald-400'
                  : 'text-gray-400'
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  step === s
                    ? 'bg-gold-500 text-dark-950'
                    : step > s
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'bg-dark-800 text-gray-400'
                }`}
              >
                {step > s ? '✓' : s}
              </span>
              <span className="hidden sm:inline">
                {s === 1 && (lang === 'es' ? 'Servicio' : 'Service')}
                {s === 2 && (lang === 'es' ? 'Barbero' : 'Barber')}
                {s === 3 && (lang === 'es' ? 'Fecha y Hora' : 'Date & Time')}
                {s === 4 && (lang === 'es' ? 'Confirmar' : 'Confirm')}
              </span>
            </div>
          ))}
        </div>

        {/* Modal Body: Dynamic Step Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* STEP 1: SELECT SERVICE */}
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="font-cinzel text-base font-bold text-white mb-2">
                1. {lang === 'es' ? 'Selecciona tu servicio:' : 'Select your service:'}
              </h4>
              <div className="grid grid-cols-1 gap-2.5 max-h-96 overflow-y-auto pr-1">
                {BARBERSHOP_DATA.services.map((srv) => {
                  const isSelected = selectedService?.id === srv.id;
                  const priceBs = (srv.priceUSD * BCV_RATE).toFixed(0);

                  return (
                    <div
                      key={srv.id}
                      onClick={() => setSelectedService(srv)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-gold-500/15 border-gold-500 shadow-md'
                          : 'bg-dark-850 border-dark-750 hover:border-gold-500/40 hover:bg-dark-800'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <h5 className="font-bold text-sm text-white">
                            {srv.name[lang] || srv.name.es}
                          </h5>
                          {srv.tag && (
                            <span className="text-[10px] uppercase font-bold text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded">
                              {srv.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                          ⏱ {srv.duration}
                        </p>
                      </div>

                      <div className="text-right">
                        <span className="font-cinzel text-base font-extrabold text-gold-400 block">
                          ${srv.priceUSD}
                        </span>
                        <span className="text-[10px] text-gray-400">
                          ~{priceBs} Bs.
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: SELECT MASTER BARBER */}
          {step === 2 && (
            <div className="space-y-4">
              <h4 className="font-cinzel text-base font-bold text-white mb-2">
                2. {lang === 'es' ? '¿Con qué barbero deseas atenderte?' : 'Which barber do you prefer?'}
              </h4>

              {/* Any available option */}
              <div
                onClick={() => setSelectedMaster(null)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  selectedMaster === null
                    ? 'bg-gold-500/15 border-gold-500 shadow-md'
                    : 'bg-dark-850 border-dark-750 hover:border-gold-500/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center font-bold">
                    ★
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">
                      {t.bookingModal.anyBarber}
                    </h5>
                    <p className="text-xs text-gray-400">
                      {lang === 'es' ? 'Mayor disponibilidad y rapidez' : 'Fastest availability'}
                    </p>
                  </div>
                </div>
                {selectedMaster === null && <Check className="w-5 h-5 text-gold-400" />}
              </div>

              {/* Specific Masters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BARBERSHOP_DATA.masters.map((m) => {
                  const isSelected = selectedMaster?.id === m.id;

                  return (
                    <div
                      key={m.id}
                      onClick={() => setSelectedMaster(m)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
                        isSelected
                          ? 'bg-gold-500/15 border-gold-500 shadow-md'
                          : 'bg-dark-850 border-dark-750 hover:border-gold-500/40'
                      }`}
                    >
                      <img
                        src={m.photo}
                        alt={m.name}
                        className="w-12 h-12 rounded-lg object-cover barber-photo border border-dark-700"
                      />
                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-sm text-white truncate">{m.name}</h5>
                        <p className="text-[11px] text-gold-400 truncate font-medium">
                          {m.role[lang] || m.role.es}
                        </p>
                        <p className="text-[10px] text-gray-400">{m.experience}</p>
                      </div>
                      {isSelected && <Check className="w-5 h-5 text-gold-400 shrink-0" />}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: SELECT DATE & TIME */}
          {step === 3 && (
            <div className="space-y-6">
              {/* Day selection */}
              <div>
                <h4 className="font-cinzel text-sm font-bold text-white mb-3">
                  {t.bookingModal.selectDate}
                </h4>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {availableDates.map((item) => {
                    const isSelected = selectedDate === item.full;

                    return (
                      <button
                        key={item.full}
                        type="button"
                        onClick={() => setSelectedDate(item.full)}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-gradient-to-b from-gold-500 to-amber-500 text-dark-950 border-gold-400 font-bold shadow-md'
                            : 'bg-dark-850 border-dark-750 text-gray-300 hover:border-gold-500/40'
                        }`}
                      >
                        <span className="block text-[11px] uppercase tracking-wider">{item.label}</span>
                        <span className="block text-xs font-bold mt-0.5">{item.sub}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time slot selection */}
              <div>
                <h4 className="font-cinzel text-sm font-bold text-white mb-3">
                  {t.bookingModal.selectTime}
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-48 overflow-y-auto pr-1">
                  {timeSlots.map((time) => {
                    const isSelected = selectedTime === time;

                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-3 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-gold-500 text-dark-950 border-gold-400 font-bold shadow-sm'
                            : 'bg-dark-850 border-dark-750 text-gray-300 hover:border-gold-500/40'
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: CLIENT INFO & SUMMARY */}
          {step === 4 && (
            <div className="space-y-6">
              {/* Summary Card */}
              <div className="p-4 rounded-xl bg-dark-950 border border-gold-500/30 text-xs sm:text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">{t.bookingModal.serviceText}</span>
                  <span className="font-bold text-white">{currentServiceName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">{t.bookingModal.barberText}</span>
                  <span className="font-bold text-gold-400">{currentMasterName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">{t.bookingModal.dateTimeText}</span>
                  <span className="font-bold text-white">{selectedDate} - {selectedTime || 'Por acordar'}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-dark-800">
                  <span className="text-gray-400">{t.bookingModal.priceText}</span>
                  <span className="font-cinzel text-base font-extrabold text-gold-400">
                    ${selectedService?.priceUSD} (~{(selectedService?.priceUSD * BCV_RATE).toFixed(0)} Bs.)
                  </span>
                </div>
              </div>

              {/* Input fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1">
                    {t.bookingModal.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Ej. Carlos Mendoza"
                    className="w-full px-4 py-2.5 rounded-lg bg-dark-850 border border-dark-750 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1">
                    {t.bookingModal.phoneLabel} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="Ej. 0412-1234567"
                    className="w-full px-4 py-2.5 rounded-lg bg-dark-850 border border-dark-750 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1">
                    {t.bookingModal.notesLabel}
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ej. Deseo degradado bajo y toalla caliente"
                    className="w-full px-4 py-2.5 rounded-lg bg-dark-850 border border-dark-750 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 text-sm"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-5 border-t border-dark-800 bg-dark-950/80 flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 rounded-lg bg-dark-800 hover:bg-dark-700 text-gray-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{t.bookingModal.backBtn}</span>
            </button>
          ) : <div />}

          {step < 4 ? (
            <button
              onClick={() => {
                if (step === 1 && !selectedService) {
                  alert(lang === 'es' ? 'Por favor selecciona un servicio' : 'Please select a service');
                  return;
                }
                setStep(step + 1);
              }}
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-dark-950 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
            >
              <span>{t.bookingModal.nextBtn}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleFinishBooking}
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.bookingModal.confirmBtn}</span>
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
