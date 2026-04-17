/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Globe, 
  BarChart3, 
  ShieldCheck, 
  Send, 
  ChevronRight,
  Mail,
  MessageSquare,
  Languages,
  Phone,
  Video
} from "lucide-react";
import { useState, type FormEvent } from "react";

const PLATFORMS = [
  "Spotify", "Apple Music", "YouTube Music", "TikTok", 
  "Amazon Music", "Deezer", "Tidal", "Pandora", "Boomplay"
];

type Language = "en" | "vi" | "id" | "ph";

const TRANSLATIONS = {
  en: {
    nav: { services: "Services", contact: "Contact" },
    hero: {
      tag: "Premium Distribution",
      title_1: "Unleash",
      title_2: "Your Music.",
      desc: "We provide high-end digital music distribution solutions, helping your work appear on every platform with the best quality.",
      btn_start: "Start Now",
      btn_more: "Learn More"
    },
    features: [
      {
        title: "Global Distribution",
        desc: "Your music will be available on over 150 of the world's largest digital music platforms."
      },
      {
        title: "Transparent Reporting",
        desc: "Track monthly revenue and streaming data in detail across all platforms."
      },
      {
        title: "Copyright Protection",
        desc: "Content ID systems help protect your intellectual property rights on social networks."
      }
    ],
    contact: {
      title: "Start your journey.",
      desc: "Don't let your work be forgotten. Contact Dark Music to bring your music to the world.",
      form_name: "Full Name",
      form_name_placeholder: "Enter your name...",
      form_email: "Email",
      form_email_placeholder: "Your contact email...",
      form_msg: "Message",
      form_msg_placeholder: "Tell us about your music project...",
      form_btn: "Send Request",
      form_success: "Sent Successfully!",
      chat_label: "Telegram / Zalo"
    }
  },
  vi: {
    nav: { services: "Dịch vụ", contact: "Liên hệ" },
    hero: {
      tag: "Phân phối cao cấp",
      title_1: "Giải phóng",
      title_2: "Âm nhạc của bạn.",
      desc: "Chúng tôi cung cấp giải pháp phân phối nhạc số cao cấp, giúp tác phẩm của bạn hiện diện trên mọi nền tảng với chất lượng tốt nhất.",
      btn_start: "Bắt đầu ngay",
      btn_more: "Tìm hiểu thêm"
    },
    features: [
      {
        title: "Phân phối toàn cầu",
        desc: "Âm nhạc của bạn sẽ có mặt trên hơn 150 nền tảng nhạc số lớn nhất thế giới."
      },
      {
        title: "Báo cáo minh bạch",
        desc: "Theo dõi doanh thu và lượt stream chi tiết hàng tháng từ các nền tảng."
      },
      {
        title: "Bảo vệ bản quyền",
        desc: "Hệ thống Content ID giúp bảo vệ quyền sở hữu trí tuệ của bạn trên mạng xã hội."
      }
    ],
    contact: {
      title: "Bắt đầu hành trình của bạn.",
      desc: "Đừng để sản phẩm của bạn bị lãng quên. Hãy liên hệ để Dark Music đưa âm nhạc của bạn đến với thế giới.",
      form_name: "Họ tên",
      form_name_placeholder: "Nhập tên của bạn...",
      form_email: "Email",
      form_email_placeholder: "Địa chỉ email liên hệ...",
      form_msg: "Tin nhắn",
      form_msg_placeholder: "Hãy kể về dự án nhạc của bạn...",
      form_btn: "Gửi yêu cầu hợp tác",
      form_success: "Đã gửi thành công!",
      chat_label: "Telegram / Zalo"
    }
  },
  id: {
    nav: { services: "Layanan", contact: "Kontak" },
    hero: {
      tag: "Distribusi Premium",
      title_1: "Lepaskan",
      title_2: "Musik Anda.",
      desc: "Kami menyediakan solusi distribusi musik digital kelas atas, membantu karya Anda muncul di setiap platform với chất lượng tốt nhất.",
      btn_start: "Mulai Sekarang",
      btn_more: "Pelajari Lebih Lanjut"
    },
    features: [
      {
        title: "Distribusi Global",
        desc: "Musik Anda akan tersedia di lebih dari 150 platform musik digital terbesar di thế giới."
      },
      {
        title: "Pelaporan Transparan",
        desc: "Lacak pendapatan bulanan và data streaming secara mendetail di semua platform."
      },
      {
        title: "Perlindungan Hak Cipta",
        desc: "Sistem Content ID membantu melindungi hak kekayaan intelektual Anda ở mạng xã hội."
      }
    ],
    contact: {
      title: "Mulai perjalanan Anda.",
      desc: "Jangan biarkan karya Anda dilupakan. Hubungi Dark Music untuk membawa musik Anda ke thế giới.",
      form_name: "Nama Lengkap",
      form_name_placeholder: "Masukkan nama Anda...",
      form_email: "Email",
      form_email_placeholder: "Alamat email kontak Anda...",
      form_msg: "Pesan",
      form_msg_placeholder: "Beri tahu chúng tôi về dự án âm nhạc của bạn...",
      form_btn: "Kirim Permintaan",
      form_success: "Berhasil Dikirim!",
      chat_label: "Telegram / Zalo"
    }
  },
  ph: {
    nav: { services: "Mga Serbisyo", contact: "Makipag-ugnayan" },
    hero: {
      tag: "Premium na Pamamahagi",
      title_1: "Ilabas",
      title_2: "Ang Iyong Musika.",
      desc: "Nagbibigay kami ng high-end na digital music distribution solutions, na tumutulong sa iyong gawa na lumabas sa bawat platform với chất lượng tốt nhất.",
      btn_start: "Magsimula Na",
      btn_more: "Dagdagan ang Nalalaman"
    },
    features: [
      {
        title: "Global na Pamamahagi",
        desc: "Ang iyong musika ay magiging available sa mahigit 150 pinakamalaking digital music platforms sa thế giới."
      },
      {
        title: "Transparent na Pag-uulat",
        desc: "Subaybayan ang buwanang kita at data ng streaming nang detalyado sa lahat ng platform."
      },
      {
        title: "Proteksyon sa Copyright",
        desc: "Ang mga Content ID system ay tumutulong sa pagprotekta sa iyong mga karapatan sa intelektwal na ari-arian ở mạng xã hội."
      }
    ],
    contact: {
      title: "Simulan ang iyong paglalakbay.",
      desc: "Huwag hayaang malimutan ang iyong gawa. Makipag-ugnayan sa Dark Music upang dalhin ang iyong musika sa thế giới.",
      form_name: "Buong Pangalan",
      form_name_placeholder: "Ipasok ang iyong pangalan...",
      form_email: "Email",
      form_email_placeholder: "Ang iyong contact email...",
      form_msg: "Mensahe",
      form_msg_placeholder: "Ipaalam sa amin ang tungkol sa iyong proyekto sa musika...",
      form_btn: "Ipadala ang Kahilingan",
      form_success: "Matagumpay na Naipadala!",
      chat_label: "Telegram / Zalo"
    }
  }
};

const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "vi", name: "Tiếng Việt" },
  { code: "id", name: "Indonesian" },
  { code: "ph", name: "Philippines" }
] as const;

export default function App() {
  const [lang, setLang] = useState<Language>("en");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const t = TRANSLATIONS[lang];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen selection:bg-gear-accent selection:text-white relative bg-gear-bg text-white">
      {/* Decorative Blur Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gear-accent/10 blur-[120px] rounded-full pointer-events-none animate-float"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gear-secondary/10 blur-[120px] rounded-full pointer-events-none animate-float" style={{ animationDelay: "-5s" }}></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-gear-bg/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-brand font-black tracking-tighter text-2xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gear-secondary/50">Dark Music</span>
          </div>
          
          <div className="flex items-center gap-4 md:gap-8">
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all text-[10px] font-bold uppercase tracking-wider"
              >
                <Languages className="w-3.5 h-3.5 text-gear-accent" />
                <span className="hidden sm:inline">{LANGUAGES.find(l => l.code === lang)?.name}</span>
                <span className="sm:hidden uppercase">{lang}</span>
              </button>
              
              {showLangMenu && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-zinc-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-top-2">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code as Language);
                        setShowLangMenu(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider transition-colors ${lang === l.code ? 'bg-gear-accent text-white' : 'hover:bg-white/5 text-white/60'}`}
                    >
                      {l.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href="#contact" className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-gear-accent hover:text-white transition-all text-xs font-bold uppercase tracking-widest text-white/50">
              {t.nav.contact}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-8">
              <span className="h-[1px] w-8 bg-gear-accent"></span>
              <span className="text-gear-accent text-[10px] font-bold font-mono uppercase tracking-[0.3em]">
                {t.hero.tag}
              </span>
            </div>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-10">
              <span className="block italic text-white/20">{t.hero.title_1}</span> 
              {t.hero.title_2}
            </h1>
            <p className="text-xl text-white/60 mb-12 leading-relaxed font-light max-w-xl">
              {t.hero.desc}
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a 
                href="#contact"
                className="group relative px-10 py-5 bg-gear-accent text-white rounded-2xl font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-gear-accent/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t.hero.btn_start} <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gear-accent to-gear-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Platforms */}
      <div className="py-16 border-y border-white/5 overflow-hidden bg-white/[0.01] backdrop-blur-sm">
        <div className="flex flex-nowrap gap-16 animate-marquee-slower whitespace-nowrap opacity-50">
          {[...PLATFORMS, ...PLATFORMS].map((platform, i) => (
            <span key={i} className="text-white text-5xl font-black italic uppercase tracking-tighter px-4 hover:text-gear-accent transition-colors cursor-default">
              {platform}
            </span>
          ))}
        </div>
      </div>

      {/* Features Section Removed as requested */}

      {/* Removed Process Section as requested */}

      {/* Contact Section */}
      <section id="contact" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-5xl font-bold mb-10 tracking-tighter">{t.contact.title}</h2>
              <p className="text-white/50 mb-16 max-w-sm text-lg font-light leading-relaxed">
                {t.contact.desc}
              </p>
              
              <div className="flex flex-col gap-6">
                <a href="mailto:contact@darkmussic.co" className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-gear-accent transition-all group flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-gear-accent transition-colors">
                    <Mail className="w-5 h-5 text-white group-hover:text-gear-accent transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-white/30 font-mono tracking-widest mb-1">{t.contact.form_email}</p>
                    <p className="text-sm font-medium">contact@darkmussic.co</p>
                  </div>
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <a href="https://t.me/darkmusicent" target="_blank" rel="noopener noreferrer" className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-gear-accent transition-all group flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-gear-accent transition-colors">
                      <MessageSquare className="w-5 h-5 text-white group-hover:text-gear-accent transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-white/30 font-mono tracking-widest mb-1">Telegram</p>
                      <p className="text-sm font-medium">@darkmusicent</p>
                    </div>
                  </a>
                  
                  <a href="https://wa.me/84345957789" target="_blank" rel="noopener noreferrer" className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-gear-accent transition-all group flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-gear-accent transition-colors">
                      <Phone className="w-5 h-5 text-white group-hover:text-gear-accent transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-white/30 font-mono tracking-widest mb-1">WhatsApp</p>
                      <p className="text-sm font-medium">+84 345 957 789</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-16 flex gap-3">
                <a href="https://www.tiktok.com/@darkmusicentertainment?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="px-6 py-4 flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white hover:text-black transition-all font-bold text-sm">
                  <Video className="w-5 h-5" />
                  TikTok
                </a>
              </div>
            </div>

            <div className="relative group p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-gear-accent to-gear-secondary blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="bg-[#0A0A0B] border border-white/10 p-12 rounded-[2.5rem] relative">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase text-white/30 font-bold font-mono tracking-[0.2em] ml-1">{t.contact.form_name}</label>
                    <input required type="text" className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gear-accent focus:bg-white/[0.04] transition-all text-sm" placeholder={t.contact.form_name_placeholder} />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase text-white/30 font-bold font-mono tracking-[0.2em] ml-1">{t.contact.form_email}</label>
                    <input required type="email" className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gear-accent focus:bg-white/[0.04] transition-all text-sm" placeholder={t.contact.form_email_placeholder} />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase text-white/30 font-bold font-mono tracking-[0.2em] ml-1">{t.contact.form_msg}</label>
                    <textarea required rows={4} className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gear-accent focus:bg-white/[0.04] transition-all text-sm resize-none" placeholder={t.contact.form_msg_placeholder}></textarea>
                  </div>
                  <button disabled={isSubmitted} className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all ${isSubmitted ? 'bg-gear-accent text-white shadow-lg shadow-gear-accent/40' : 'bg-white text-black hover:bg-gear-accent hover:text-white shadow-xl shadow-white/5'}`}>
                    {isSubmitted ? t.contact.form_success : t.contact.form_btn} <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <span className="font-brand font-black tracking-tighter text-lg uppercase opacity-40">Dark Music</span>
          </div>
          <div className="flex gap-12 text-[10px] text-white/20 font-bold font-mono uppercase tracking-[0.4em]">
            <a href="#" className="hover:text-gear-accent transition-colors italic">Privacy</a>
            <a href="#" className="hover:text-gear-accent transition-colors">Copyright 2026</a>
            <a href="#" className="hover:text-gear-accent transition-colors italic">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
