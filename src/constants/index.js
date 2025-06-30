import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Fitur",
    url: "#features",
  },
  {
    id: "1",
    title: "Harga",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Cara Penggunaan",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Peta Jalan",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "/register",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "/login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Pembuatan foto",
  "Foto ditingkatkan",
  "Integrasi yang Sempurna",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Pengenalan suara",
    text: "Memungkinkan chatbot memahami dan menanggapi perintah suara, sehingga memudahkan pengguna berinteraksi dengan aplikasi tanpa menggunakan tangan.",
    date: "Juni 2025",
    status: "selesai",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamifikasi",
    text: "Tambahkan elemen seperti permainan, seperti lencana atau papan peringkat, untuk memberi insentif kepada pengguna agar lebih sering terlibat dengan chatbot.",
    date: "Juni 2025",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Kustomisasi chatbot",
    text: "Memungkinkan pengguna menyesuaikan tampilan dan perilaku chatbot, menjadikannya lebih menarik dan menyenangkan untuk berinteraksi.",
    date: "Juni 2025",
    status: "selesai",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integrasi dengan API",
    text: "Izinkan chatbot mengakses sumber data eksternal, seperti API cuaca atau API berita, untuk memberikan rekomendasi yang lebih relevan.",
    date: "Juni 2025",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Dengan otomatisasi cerdas dan keamanan terbaik, ini adalah solusi sempurna bagi tim yang ingin bekerja lebih cerdas.";

export const collabContent = [
  {
    id: "0",
    title: "Integrasi yang Sempurna",
    text: collabText,
  },
  {
    id: "1",
    title: "Otomasi Cerdas",
  },
  {
    id: "2",
    title: "Keamanan Terbaik",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Chatbot AI, rekomendasi yang dipersonalisasi",
    price: "0",
    features: [
      "Chatbot AI yang dapat memahami pertanyaan Anda",
      "Rekomendasi yang dipersonalisasi berdasarkan preferensi Anda",
      "Kemampuan untuk menjelajahi aplikasi dan fiturnya tanpa biaya apa pun",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description:
      "Chatbot AI tingkat lanjut, dukungan prioritas, dasbor analitik",
    price: "9.99",
    features: [
      "Chatbot AI canggih yang dapat memahami pertanyaan kompleks",
      "Dasbor analitik untuk melacak percakapan Anda",
      "Dukungan prioritas untuk menyelesaikan masalah dengan cepat",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Chatbot AI khusus, analitik tingkat lanjut, akun khusus",
    price: null,
    features: [
      "Chatbot AI yang dapat memahami pertanyaan Anda",
      "Rekomendasi yang dipersonalisasi berdasarkan preferensi Anda",
      "Kemampuan untuk menjelajahi aplikasi dan fiturnya tanpa biaya apa pun",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Temukan Jawaban Instan",
    text: "Pengguna dapat menemukan jawaban atas pertanyaan mereka dengan cepat, tanpa perlu menelusuri berbagai sumber informasi.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Belajar dan Berkembang Setiap Hari",
    text: "Didukung oleh pemrosesan bahasa alami (NLP), aplikasi ini memahami pertanyaan Anda dan memberikan jawaban yang akurat dan relevan.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Akses Dimana Saja, Kapan Saja",
    text: "Terhubung dengan chatbot AI kami dari perangkat apa pun, di mana pun Anda berada. Kemudahan akses dalam genggaman Anda!",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Respon Kilat",
    text: "Dapatkan jawaban yang Anda butuhkan dengan segera. Tidak perlu menunggu lama untuk mendapatkan informasi yang relevan.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ajukan Pertanyaan Apa Pun",
    text: "Jangan ragu untuk bertanya! Temukan solusi cepat untuk masalah Anda atau perluas pengetahuan Anda dengan mudah.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Asisten Personal Anda",
    text: "Manfaatkan kekuatan AI untuk membantu Anda belajar, bekerja, atau sekadar mencari informasi dengan cara yang lebih efisien.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
