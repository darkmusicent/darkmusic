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
  Video,
  Facebook,
  Instagram
} from "lucide-react";
import { useState } from "react";

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
      title_1: "Release",
      title_2: "Your Music.",
      desc: "We provide high-end digital music distribution solutions, helping your work appear on every platform with the best quality.",
      btn_start: "Start Now",
      btn_more: "Learn More",
      engine_title: "Distribution\nEngine",
      details: [
        { label: "SPEED", value: "24H DELIVERY" },
        { label: "TOOLS", value: "MANUAL TIKTOK CLAIM" },
        { label: "SECURITY", value: "PIRACY REPORT" },
        { label: "REVENUE", value: "HIGH & TRANSPARENT" }
      ]
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
      title: "CONTACT",
      desc: "Connect with us",
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
      btn_more: "Tìm hiểu thêm",
      engine_title: "Hệ thống\nPhát hành",
      details: [
        { label: "TỐC ĐỘ", value: "GIAO NHẠC 24H" },
        { label: "CÔNG CỤ", value: "CLAIM TIKTOK THỦ CÔNG" },
        { label: "BẢO MẬT", value: "BÁO CÁO LẬU" },
        { label: "DOANH THU", value: "CAO VÀ MINH BẠCH" }
      ]
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
      title: "LIÊN HỆ",
      desc: "Kết nối với chúng tôi",
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
      btn_more: "Pelajari Lebih Lanjut",
      engine_title: "Mesin\nDistribusi",
      details: [
        { label: "KECEPATAN", value: "PENGIRIMAN 24H" },
        { label: "ALAT", value: "KLAIM TIKTOK MANUAL" },
        { label: "KEAMANAN", value: "LAPORAN BAJAKAN" },
        { label: "PENDAPATAN", value: "TINGGI & TRANSPARAN" }
      ]
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
      title: "KONTAK",
      desc: "Hubungi kami",
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
      btn_more: "Dagdagan ang Nalalaman",
      engine_title: "Distribusyon\nEngine",
      details: [
        { label: "BILIS", value: "24H DELIVERY" },
        { label: "TOOLS", value: "MANUAL TIKTOK CLAIM" },
        { label: "SEGURIDAD", value: "PIRACY REPORT" },
        { label: "REVENUE", value: "HIGH & TRANSPARENT" }
      ]
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
      title: "KONTAK",
      desc: "Makipag-ugnayan",
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
  const [showLangMenu, setShowLangMenu] = useState(false);

  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen selection:bg-gear-accent selection:text-white relative bg-gear-bg text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-gear-border bg-gear-bg/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-brand font-black tracking-tighter text-2xl uppercase text-white hover:text-gear-accent transition-colors cursor-default">Dark Music</span>
          </div>
          
          <div className="flex items-center gap-4 md:gap-8">
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-gear-border hover:bg-gear-accent/10 transition-all text-[10px] font-bold uppercase tracking-wider"
              >
                <Languages className="w-3.5 h-3.5 text-gear-accent" />
                <span className="hidden sm:inline">{LANGUAGES.find(l => l.code === lang)?.name}</span>
                <span className="sm:hidden uppercase">{lang}</span>
              </button>
              
              {showLangMenu && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-zinc-950 border border-gear-border shadow-2xl z-50">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code as Language);
                        setShowLangMenu(false);
                      }}
                      className={`w-full px-5 py-4 text-left text-[10px] font-bold uppercase tracking-wider transition-colors ${lang === l.code ? 'bg-gear-accent text-white' : 'hover:bg-gear-accent/20 text-white/60'}`}
                    >
                      {l.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href="#contact" className="px-8 py-2.5 bg-gear-accent text-white hover:bg-gear-accent/80 transition-all text-xs font-bold uppercase tracking-widest">
              {t.nav.contact}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-4 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-px bg-gear-border border border-gear-border">
          <div className="bg-gear-bg p-6 lg:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-2 py-0.5 bg-gear-accent/10 border border-gear-accent/20 text-gear-accent text-[8px] font-bold uppercase tracking-[0.2em]">
                {t.hero.tag}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-6">
              <span className="block text-gear-accent">{t.hero.title_1}</span> 
              {t.hero.title_2}
            </h1>
            <p className="text-sm text-white/50 mb-8 leading-relaxed max-w-sm font-medium capitalize">
              {t.hero.desc}
            </p>
            <div>
              <a 
                href="#contact"
                className="inline-flex items-center gap-4 px-8 py-4 bg-gear-accent text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all group"
              >
                {t.hero.btn_start} <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
          <div className="bg-zinc-950 p-6 lg:p-10 flex flex-col justify-end lg:border-l border-gear-border relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="grid grid-cols-4 gap-px w-[200%] h-[200%] rotate-12">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="border border-white/20 aspect-video"></div>
                ))}
              </div>
            </div>
            <div className="relative z-10">
              <div className="mb-8">
                <div className="w-16 h-1.5 bg-gear-accent mb-4"></div>
                <p className="text-3xl font-brand font-black uppercase tracking-tighter text-white/20 leading-none whitespace-pre-line">{t.hero.engine_title}</p>
              </div>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-[9px] uppercase font-bold tracking-[0.2em] text-white/40">
                {t.hero.details?.map((detail, idx) => (
                  <div key={idx} className="group/item">
                    <p className="mb-1 text-gear-accent brightness-125 group-hover/item:text-white transition-colors">{detail.label}</p>
                    <p className="text-white/60 group-hover/item:text-white/90 transition-colors uppercase">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Platforms */}
      <div className="bg-gear-bg border-y border-gear-border overflow-hidden">
        <div className="flex flex-nowrap animate-marquee-slower whitespace-nowrap py-10">
          {[...PLATFORMS, ...PLATFORMS].map((platform, i) => (
            <div key={i} className="flex items-center">
              <span className="text-white text-2xl font-black uppercase tracking-tighter px-12 hover:text-gear-accent transition-colors cursor-default border-r border-gear-border">
                {platform}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 border-b border-gear-border pb-4">
            <h2 className="text-2xl font-black uppercase tracking-widest text-gear-accent">{t.contact.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-gear-border border border-gear-border">
            {/* Email Card */}
            <a href="mailto:contact@darkmusic.co" className="bg-gear-bg p-5 flex flex-col justify-between hover:bg-gear-accent transition-all group border-b lg:border-b-0 border-gear-border">
              <Mail className="w-6 h-6 mb-8 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-[11px] uppercase font-bold tracking-[0.2em] text-white/70 mb-1 group-hover:text-white">Email</p>
                <p className="text-xs font-black group-hover:text-white">contact@darkmusic.co</p>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a href="https://wa.me/84345957789" target="_blank" rel="noopener noreferrer" className="bg-zinc-950 p-5 flex flex-col justify-between hover:bg-gear-accent transition-all group border-b lg:border-b-0 border-gear-border">
              <Phone className="w-6 h-6 mb-8 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-[11px] uppercase font-bold tracking-[0.2em] text-white/70 mb-1 group-hover:text-white">WhatsApp</p>
                <p className="text-xs font-black group-hover:text-white">+84 345 957 789</p>
              </div>
            </a>

            {/* Facebook Card */}
            <a href="https://web.facebook.com/nttai4323/" target="_blank" rel="noopener noreferrer" className="bg-gear-bg p-5 flex flex-col justify-between hover:bg-gear-accent transition-all group border-b sm:border-b-0 lg:border-r border-gear-border">
              <Facebook className="w-6 h-6 mb-8 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-[11px] uppercase font-bold tracking-[0.2em] text-white/70 mb-1 group-hover:text-white">Facebook</p>
                <p className="text-xs font-black group-hover:text-white">Nguyễn Tú Tài</p>
              </div>
            </a>

            {/* Telegram Card */}
            <a href="https://t.me/darkmusicent" target="_blank" rel="noopener noreferrer" className="bg-zinc-950 p-5 flex flex-col justify-between hover:bg-gear-accent transition-all group border-b lg:border-b-0 border-gear-border text-left">
              <MessageSquare className="w-6 h-6 mb-8 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-[11px] uppercase font-bold tracking-[0.2em] text-white/70 mb-1 group-hover:text-white">Telegram</p>
                <p className="text-xs font-black group-hover:text-white">@darkmusicent</p>
              </div>
            </a>
            
            {/* Instagram Card */}
            <a href="https://www.instagram.com/darkmusicent/" target="_blank" rel="noopener noreferrer" className="bg-gear-bg p-5 flex flex-col justify-between hover:bg-gear-accent transition-all group">
              <Instagram className="w-6 h-6 mb-8 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-[11px] uppercase font-bold tracking-[0.2em] text-white/70 mb-1 group-hover:text-white">Instagram</p>
                <p className="text-xs font-black group-hover:text-white">@darkmusicent</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-gear-border bg-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-sm font-brand font-black tracking-tighter uppercase text-white/20">Dark Music &copy; 2026</div>
          <div className="flex gap-12 text-[10px] text-white/20 font-bold uppercase tracking-[0.4em]">
            <a href="#" className="hover:text-gear-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-gear-accent transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
