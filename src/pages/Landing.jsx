import React, { useState } from 'react'
import { Button } from './_ShamButton'
import { Award, Sparkles, Users, Briefcase, TrendingUp, Clock, Zap, Phone, BrainCircuit, DollarSign, PenSquare, Shield } from 'lucide-react'
import ThreeDBackground from '../components/landing/ThreeDBackground'
import FloatingParticles from '../components/landing/FloatingParticles'

const features = [
  { icon: BrainCircuit, title: 'סוכן AI חכם', description: 'נתח מסמכים משפטיים, חקור תקדימים וקבל המלצות אסטרטגיות.' , gradient: 'from-purple-500 to-pink-500'},
  { icon: Briefcase, title: 'ניהול תיקים מתקדם', description: 'טיימליין תיק, משימות, דיונים והתראות חכמות.', gradient: 'from-blue-500 to-cyan-500'},
  { icon: DollarSign, title: 'חיוב וגבייה אוטומטיים', description: 'מעקב שעות, חישוב שכ״ט והפקת חשבוניות בלחיצה.', gradient: 'from-green-500 to-emerald-500'},
  { icon: PenSquare, title: 'חתימות דיגיטליות', description: 'שליחה וחתימה מאובטחת של מסמכים מתוך המערכת.', gradient: 'from-orange-500 to-red-500'},
  { icon: Shield, title: 'אבטחת מידע מתקדמת', description: 'הצפנה, הרשאות ו־Audit Trail לכל פעולה.', gradient: 'from-indigo-500 to-purple-500'},
  { icon: Clock, title: 'מעקב זמן חכם', description: 'רישום אוטומטי, דוחות מפורטים וחיוב לקוחות.', gradient: 'from-teal-500 to-blue-500'},
]

const LOGIN_URL = 'https://lexi-flow-crm-088a2644.base44.app/login'

function Stat({icon:Icon, number, label}) {
  return (
    <div className="text-center group">
      <div className="flex items-center justify-center mb-3">
        <Icon className="w-8 h-8 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300" />
      </div>
      <div className="text-3xl font-bold text-white mb-1">{number}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  )
}

export default function Landing(){
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen overflow-hidden relative">
      <ThreeDBackground />
      <FloatingParticles />

      {/* Header */}
      <header className="relative z-20 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-black bg-gradient-to-r from-white via-purple-200 to-cyan-200 text-transparent bg-clip-text">
                LexiFlow
              </h1>
              <p className="text-xs text-gray-300 font-medium tracking-wide">Legal Management System</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Button onClick={()=>location.href=LOGIN_URL} variant="ghost">התחברות</Button>
            <Button onClick={()=>location.href=LOGIN_URL} primary>
              <span className="inline-flex items-center gap-2"><span>התחל עכשיו</span></span>
            </Button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section className="pt-20 pb-32 text-center max-w-7xl mx-auto px-6 relative">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-6 py-3 text-sm font-medium mb-8">
            <Award className="w-4 h-4 text-purple-400" />
            🚀 המערכת החדשנית ביותר לעורכי דין בישראל
            <Sparkles className="w-4 h-4 text-blue-400" />
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 text-transparent bg-clip-text">
              מערכת ניהול משרד עורכי דין
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text">
              המופעלת על ידי AI
            </span>
          </h2>

          <p className="text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            הצטרפו ל-500+ עורכי דין שכבר חוסכים שעות רבות בשבוע עם LexiFlow
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button onClick={()=>location.href=LOGIN_URL} primary big><span className="inline-flex items-center gap-3"><Zap className="w-6 h-6"/>התחילו היום - חינם ל-14 יום</span></Button>
            <Button onClick={()=>location.href='tel:036700000'} outline big><span className="inline-flex items-center gap-3"><Phone className="w-6 h-6"/>דברו איתנו: 03-6700000</span></Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat icon={Users} number="500+" label="עורכי דין" />
            <Stat icon={Briefcase} number="10,000+" label="תיקים מנוהלים" />
            <Stat icon={TrendingUp} number="98%" label="שביעות רצון" />
            <Stat icon={Clock} number="24/7" label="תמיכה" />
          </div>
        </section>

        {/* Features */}
        <section className="py-32 bg-gradient-to-b from-black/20 to-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h3 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
                  כל מה שהמשרד שלך צריך. ועוד הרבה יותר.
                </span>
              </h3>
              <p className="text-2xl text-gray-300">מערכת אחת, אינסוף אפשרויות לגדילת המשרד</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-xl hover:from-gray-800/90 hover:to-gray-700/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20 p-8">
                  <div className={`w-20 h-20 flex items-center justify-center rounded-3xl mb-8 bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-white">{feature.title}</h4>
                  <p className="text-gray-300 leading-relaxed text-lg">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-gradient-to-r from-purple-900/60 to-blue-900/60 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
                מוכנים להפוך את המשרד שלכם?
              </span>
            </h3>
            <p className="text-2xl text-gray-200 mb-12">
              הצטרפו ל-500+ עורכי דין שכבר חוסכים שעות רבות בשבוע עם LexiFlow
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button onClick={()=>location.href=LOGIN_URL} primary big><span className="inline-flex items-center gap-3"><Zap className="w-8 h-8"/>התחילו היום - חינם ל-14 יום</span></Button>
              <Button onClick={()=>location.href='tel:036700000'} outline big><span className="inline-flex items-center gap-3"><Phone className="w-8 h-8"/>דברו איתנו: 03-6700000</span></Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black/90 border-t border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">LexiFlow</span>
              <p className="text-gray-400 text-sm">הפתרון המשפטי של העתיד</p>
            </div>
          </div>
          <div className="text-gray-400 flex flex-col md:flex-row items-center gap-8">
            <span>&copy; {new Date().getFullYear()} LexiFlow. כל הזכויות שמורות.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

// A simple button shim using tailwind (to avoid a UI library)
export function ShamButton(){}
