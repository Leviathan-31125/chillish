export const articles = [
    {
        id: 1,
        slug: 'pentingnya-emotional-intelligence',
        title: 'Pentingnya Emotional Intelligence bagi Guru',
        date: '10 Oktober 2023',
        readTime: '5 menit baca',
        image: '/images/article-eq.jpg', // Pastikan gambar ada di folder public/images
        content: `Di era digital ini, tantangan guru bukan lagi sekadar transfer ilmu, melainkan bagaimana membangun koneksi dengan siswa.

Emotional Intelligence (EQ) menjadi kunci utama. Guru yang memiliki EQ tinggi mampu mengenali emosi siswa, mengelola kelas dengan lebih tenang, dan menciptakan lingkungan belajar yang aman.

Penelitian menunjukkan bahwa siswa belajar lebih baik ketika mereka merasa dimengerti dan dihargai. Inilah mengapa skill empati sama pentingnya dengan penguasaan materi pelajaran.`
    },
    {
        id: 2,
        slug: 'tips-public-speaking-pemula',
        title: '3 Tips Public Speaking untuk Pemula',
        date: '15 Oktober 2023',
        readTime: '3 menit baca',
        image: '/images/article-speaking.jpg',
        content: `Banyak orang merasa takut ketika harus berbicara di depan umum. Padahal, public speaking adalah skill yang bisa dipelajari, bukan bakat bawaan.

Pertama, fokus pada pesan, bukan pada diri sendiri. Ketika kita sibuk memikirkan "apakah saya terlihat bodoh?", kita kehilangan koneksi dengan audiens.

Kedua, latihan pernapasan. Gugup itu wajar, tapi napas yang pendek membuat otak kekurangan oksigen dan pikiran jadi blank.

Ketiga, siapkan struktur materi yang jelas: Pembuka, Isi, dan Penutup.`
    }
];

export const getArticleBySlug = (slug) => {
    return articles.find(article => article.slug === slug);
};

export const getAllArticles = () => {
    return articles;
};