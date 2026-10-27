import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2, MessageCircle, Clock, BookOpen, Users, Star } from 'lucide-react';
import { BARBERSHOP_DATA } from '../data/barbershopData';

export function AcademySection({ lang, t }) {
  const [selectedCourse, setSelectedCourse] = useState(BARBERSHOP_DATA.academy.courses[0].id);

  const activeCourse = BARBERSHOP_DATA.academy.courses.find(c => c.id === selectedCourse) || BARBERSHOP_DATA.academy.courses[0];

  return (
    <section id="academia" className="py-24 bg-dark-900 relative overflow-hidden border-t border-dark-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-xs font-bold tracking-widest text-gold-400 uppercase mb-4">
            <GraduationCap className="w-4 h-4" />
            <span>{t.academy.badge}</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t.academy.title}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {t.academy.subtitle}
          </p>
        </div>

        {/* Feature Hero: Certificates Graduation Photo Card */}
        <div className="mb-16 rounded-3xl bg-dark-850 border border-gold-500/30 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            {/* The Cleaned & Enhanced Certificate Graduation Image */}
            <div className="lg:col-span-7 relative h-80 sm:h-96 lg:h-full min-h-[420px] overflow-hidden group bg-black">
              <img
                src={BARBERSHOP_DATA.academy.image}
                alt="Curso de Barbería Buffalo's Barbershop - Certificados y Graduación"
                className="w-full h-full object-cover object-center barber-photo filter contrast-110 brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-dark-850 opacity-90" />
              
              {/* Image floating badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-dark-950/90 backdrop-blur-md border border-gold-500/40 px-4 py-2.5 rounded-xl flex items-center gap-2.5 text-xs sm:text-sm text-gold-300 font-bold shadow-xl">
                <Award className="w-5 h-5 text-gold-400 shrink-0" />
                <span>Certificación Oficial Buffalo's Barbershop</span>
              </div>
            </div>

            {/* Description & Stats */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-gold-400 block mb-2">
                  {t.academy.graduatesTitle}
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-4">
                  Forjando Profesionales de Éxito en Maracay
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-8">
                  {t.academy.graduatesSub}
                </p>

                {/* Academy Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {BARBERSHOP_DATA.academy.stats.map((stat, i) => (
                    <div key={i} className="bg-dark-900/80 p-3.5 rounded-xl border border-dark-750">
                      <p className="font-cinzel text-2xl font-extrabold text-gold-400">
                        {stat.value}
                      </p>
                      <p className="text-[11px] text-gray-400 mt-0.5">
                        {stat.label[lang] || stat.label.es}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct WhatsApp Enrollment Button */}
              <a
                href={`https://wa.me/${BARBERSHOP_DATA.whatsappRaw}?text=${encodeURIComponent(
                  t.academy.whatsappAcademyMsg
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.academy.requestInfo}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Courses Interactive Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BARBERSHOP_DATA.academy.courses.map((course) => (
            <div
              key={course.id}
              className="rounded-2xl bg-dark-850 border border-dark-750 hover:border-gold-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-gold-400 uppercase mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                  <span className="text-dark-600">•</span>
                  <span>{course.modality}</span>
                </div>

                <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-4">
                  {course.title[lang] || course.title.es}
                </h4>

                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  {t.academy.includesTitle}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {course.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/${BARBERSHOP_DATA.whatsappRaw}?text=${encodeURIComponent(
                  `Hola Buffalo's Barbershop! Deseo inscribirme o conocer fechas de inicio para: ${course.title[lang] || course.title.es}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg bg-dark-800 hover:bg-gold-500 text-gold-300 hover:text-dark-950 font-bold text-xs uppercase tracking-wider border border-dark-700 hover:border-gold-400 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Inscribirme en este Curso</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
