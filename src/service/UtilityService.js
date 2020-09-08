const User = require("../model/User");
const Island = require("../model/Island");
const Story = require("../model/Story");

function GetBaseURL() {
  // const env = require("../config").GetEnvVariable();

  // const host = env.Server.Host;
  // const port = env.Server.Port;

  // return `${host}:${port}`;

  return "https://jelajah-nusantara.herokuapp.com";
}

module.exports = {
  async MigrateAll() {
    const users = await this.MigrateUser(User);
    const islands = await this.MigrateIsland(Island);
    const stories = await this.MigrateStory(Story);

    if (users && islands && stories) {
      return true;
    } else {
      return false;
    }
  },
  async MigrateUser(UserModel) {
    try {
      await UserModel.deleteMany({});
      await UserModel.insertMany([
        {
          fullName: "Akbar Satya Nugraha",
          username: "akbarsn",
        },
        {
          fullName: "John Doe",
          username: "johndoe",
        },
        {
          fullName: "Budi",
          username: "budi",
        },
      ]);

      return true;
    } catch (error) {
      return false;
    }
  },

  async MigrateIsland(IslandModel) {
    try {
      await IslandModel.deleteMany({});
      await IslandModel.insertMany([
        {
          _id: 1,
          name: "Pulau Sumatera",
          imgSrc: `${GetBaseURL()}/public/image/sumatera.png`,
          trivias: [
            {
              content:
                "Mengapa Rumah Gadang  memiliki atapnya yang berbentuk tanduk runcing?bentuk tanduk kerbau tersebut merupakan simbol kemenangan adu kerbau raja Minangkabau melawan kerbau raja di Jawa. Sejak saat itu, tanduk kerbau menjadi penanda kejayaan Minangkabau",
              imgSrc: `${GetBaseURL()}/public/image/trivia.png`,
            },
          ],
        },
        {
          _id: 2,
          name: "Pulau Jawa",
          imgSrc: `${GetBaseURL()}/public/image/jawa.png`,
          trivias: [
            {
              content: "",
              imgSrc: `${GetBaseURL()}/public/image/trivia.png`,
            },
          ],
        },
        {
          _id: 3,
          name: "Pulau Bali",
          imgSrc: `${GetBaseURL()}/public/image/bali.png`,
          trivias: [
            {
              content: "",
              imgSrc: `${GetBaseURL()}/public/image/trivia.png`,
            },
          ],
        },
        {
          _id: 4,
          name: "Kepulauan Nusa Tenggara",
          imgSrc: `${GetBaseURL()}/public/image/nt.png`,
          trivias: [
            {
              content: "",
              imgSrc: `${GetBaseURL()}/public/image/trivia.png`,
            },
          ],
        },
        {
          _id: 5,
          name: "Pulau Kalimantan",
          imgSrc: `${GetBaseURL()}/public/image/kalimantan.png`,
          trivias: [
            {
              content: "",
              imgSrc: `${GetBaseURL()}/public/image/trivia.png`,
            },
          ],
        },
        {
          _id: 6,
          name: "Pulau Sulawesi",
          imgSrc: `${GetBaseURL()}/public/image/sulawesi.png`,
          trivias: [
            {
              content: "",
              imgSrc: `${GetBaseURL()}/public/image/trivia.png`,
            },
          ],
        },
        {
          _id: 7,
          name: "Pulau Papua",
          imgSrc: `${GetBaseURL()}/public/image/papua.png`,
          trivias: [
            {
              content: "",
              imgSrc: `${GetBaseURL()}/public/image/trivia.png`,
            },
          ],
        },
      ]);

      return true;
    } catch (error) {
      return false;
    }
  },

  async MigrateStory(StoryModel) {
    try {
      await StoryModel.deleteMany({});
      await StoryModel.insertMany([
        {
          _id: 1,
          islandID: 1,
          title: "Atu Belah Atu Bertangkup",
          description: "Cerita Rakyat Dari Provinsi Nangroe Aceh Dasusalam",
          imgSrc: `${GetBaseURL()}/public/story/1.png`,
          steps: [
            {
              imgSrc: `${GetBaseURL()}/public/story/1-1.png`,
              content:
                "Dahulu kala, hiduplah sepasang suami isteri yang sangat miskin. Suami isteri itu memiliki dua anak laki laki yang masih kecil. Kehidupan keluarga itu sangt prihatin. setiap hari suami bekerja di ladang",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/1-2.png`,
              content:
                "Jika hasil ladang tidak begitu baik, sisuami berburu di hutan. apabila beruntung, si suami akan mendapatkan seekor rusa yang gemuk. ",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/1-3.png`,
              content:
                "Namun, sering kali rusa sulit didapatkan. Jika demikian hanya belalang yang bisa ditangkapnya Belalang - belalang yang ditangkap, di simpan di lumbung agar tidak beterbangan keluar",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/1-4.png`,
              content:
                "Pagi itu si suami berkata “Hari ini aku akan berburu kijang. tunggulah sampai siang, kita akan makan daging rusa sepuasnya!” si suami juga berpesan kalau masuk kelumbung jangan lupa menutup pintunya agar belalang-belalang itu tidak kabur.",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/1-5.png`,
              content:
                "Si suami segera masuk kehutan dengan harapan mendapatkan seekor kijang yang gemuk. Istri dan anak anaknya tentunya sangat bahagia jika makan daging rusa yang lezat",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/1-6.png`,
              content:
                "Ketika hari semikin siang, si sulung rupanya didera rasa lapar “Sabarlah dulu, Nak! Sebentar lagi ayahmu membawa pulang seekor rusa yang gemuk” Ucap sang ibu",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/1-7.png`,
              content:
                "Matahari pun mulai condong kebarat. Si sulung mulai merengek, “Bu aku benar - benar lapar, apakah tidak bisa kalau kita menggoreng beberapa ekor belalang?” Ibu lalu berkata “ Baiklah ibu akan menggoreng beberapa ekor belalang untukmu”",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/1-8.png`,
              content:
                "Si sulung pun masuk ke lumbung. Sayangnya, dia lupa untuk menutup pintu kembali. Akibatnya, belalang - belalang yang berada di dalam lubung tersebut semuanya terbang keluar",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/1-9.png`,
              content:
                "Si sulung pun menemui ibunya, dan berkata tidak ada seekor belalang pun di lumbung karena dia lupa menutup pintu lumbung.  Karena tidak kuat menahan lapar, si sulung pun terpaksa makan nasi tanpa lauk",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/1-10.png`,
              content:
                "ketika Si sulung sedang makan, ayahnya ternyata pulang tanpa membawa seekor hewan buruan pun. Bahkan tidak seekor belalang pun ditemuinya. Dia pun berkata pada istrinya untuk menggoreng beberapa ekor belalang dalam lumbung",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/1-11.png`,
              content:
                "ketika Si sulung sedang makan, ayahnya ternyata pulang tanpa membawa seekor hewan buruan pun. Bahkan tidak seekor belalang pun ditemuinya. Dia pun berkata pada istrinya untuk menggoreng beberapa ekor belalang dalam lumbung",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/1-12.png`,
              content:
                "Sang istri yang mengetahui tabiat suaminya itupun tidak punya pilihan lain selain pergi dari rumah. dengan sengaja dia menutupi kesalahan anak sulungnya",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/1-13.png`,
              content:
                "Sambil menangis sedih, sang istri pergi dari rumah dan berjalan tidak tentu arah. Hingga akhirnya dia beristirahat sambil bersandar di sebuah batu besar",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/1-14.png`,
              content:
                "Batu itu dikenal dengan nama atu belah, yang akan menelan siapa saja yang bersedih didekatnya. Hingga kemudian terasa bumi bergoncang. Batu besar itu terbelah dan menelan sang istri yang sedang bersedih",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/1-15.png`,
              content:
                "Sementara itu si sulung dan bungsu sangat terkejut melihat ibu mereka ditelan batu besar. Diam - diam mereka mengikuti sang ibu yang berjalan tanpa arah. Si sulung pun berjanji akan membesarkan adik dan membesarkannya dengan penuh kasih sayang",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/1-16.png`,
              content:
                "Tiba - tiba beberapa helai rambut keluar dari batu itu. Si sulung segera mengambil helai rambut itu dan menyimpanya “Selamat tinggal ibu, kami tidak akan melupakan ibu” Ucap si sulung sambil menangis",
            },
          ],
          quiz: [
            {
              question:
                "Hiduplah sepasang suami isteri yang sangat miskin. Apakah penulisan kata “isteri” sudah benar ? Jika salah, pilih kata yang benar",
              answers: [
                {
                  id: 1,
                  answer: "Benar, menggunakan kata 'Isteri'",
                },
                {
                  id: 2,
                  answer: "Salah, yang benar 'istari'",
                },
                {
                  id: 3,
                  answer: "Salah, yang benar 'istri'",
                },
              ],
              correctAnswerId: 3,
            },
            {
              question:
                "Ketika hari semikin siang, si sulung rupanya didera rasa lapar. Sinonim atau padanan kata dari kata yang di garis bawah adalah ?",
              answers: [
                {
                  id: 1,
                  answer: "Anak tertua atau anak pertama",
                },
                {
                  id: 2,
                  answer: "Anak paling terakhir ",
                },
                {
                  id: 3,
                  answer: "Anak tunggal atau anak satu satunya",
                },
              ],
              correctAnswerId: 1,
            },
            {
              question:
                "Matahari pun mulai condong kebarat. Sinonim atau padanan kata dari kata dari “Matahari condong ke barat” adalah ?",
              answers: [
                {
                  id: 1,
                  answer: "Fajar pagi hari",
                },
                {
                  id: 2,
                  answer: "Siang Hari",
                },
                {
                  id: 3,
                  answer: "Sore hari menjelang malam",
                },
              ],
              correctAnswerId: 3,
            },
            {
              question:
                "Sang suami marah besar dan mengusir istrinya dari rumah. Antonim atau lawan kata dari dari kata mengusir adalah ?",
              answers: [
                {
                  id: 1,
                  answer: "Mengejar",
                },
                {
                  id: 2,
                  answer: "Mengundang",
                },
                {
                  id: 3,
                  answer: "Memecat",
                },
              ],
              correctAnswerId: 2,
            },
            {
              question:
                "Pesan moral yang dapat diambil dari cerita rakyat Atu Belah Atu Bertangkup dari Provinsi Nangroe Aceh Dasusalam adalah ?",
              answers: [
                {
                  id: 1,
                  answer:
                    "Kita harus senantiasa bersabar dalam menghadapi sesuatu.",
                },
                {
                  id: 2,
                  answer: "Kita harus bersikap jujur dimanapun kita berada",
                },
                {
                  id: 3,
                  answer: "Kita harus berbakti kepada kedua orang tua",
                },
              ],
              correctAnswerId: 0,
            },
          ],
        },
        {
          _id: 2,
          islandID: 1,
          title: "Hikayat Putri Hijau",
          description: "Cerita Rakyat Dari Provinsi Sumatera Utara",
          imgSrc: `${GetBaseURL()}/public/story/2.png`,
          steps: [
            {
              imgSrc: `${GetBaseURL()}/public/story/2-1.png`,
              content:
                "Hikayat putri hijau bermula dari Kesultanan Aceh yang terletak di sebelah Utara Kesultanan Deli. Ketika itu Kesultanan Aceh memiliki armada angkatan laut yang sangat tangguh. Kekuatan militer Kesultanan Aceh merupakan salah satu yang terkuat di nusantara",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/2-2.png`,
              content:
                "Sore itu Sultan Aceh duduk ditaman istana. Meskipun disegani negara tetangganya, Sultan Aceh masih merasa belum lengkap menjadi pemimpin, karena belum menemukan sosok yang layak menjadi permaisurinya. Tiba - tiba saja Sultan Aceh melihat sebuah cahaya hijau di langit. cahaya hijau itu berasal dari Selatan",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/2-3.png`,
              content:
                "Sultan Aceh pun meminta dua prajurit kepercayaannya menuju kearah selatan untuk menyelidiki asal muasal cahaya hijau itu. Hingga sampailah kedua prajurit itu kewilayah Kesultanan Deli",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/2-4.png`,
              content:
                'Sesampainya di wilayah Kesultanan Deli, dua prajurit itu segera bertanya kepada warga yang ditemuinya "Maaf tuan kami hendak bertanya, kalau kami boleh tau dari mana asal cahaya hijau dilangit ketika sore hari" Tanya seorang prajurit. "Oh itu berasal dari Putri Hijau, anak ketiga dari Sultan Deli" Jawab seorang warga',
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/2-5.png`,
              content:
                "Setelah mngetahui asal cahaya hijau itu dua Prajurit Aceh segera kembali ke istana dan melapor ke Sultan Aceh “Yang mulia cahaya hijau itu ternyata berasal dari Putri Hijau, putri dari Sultan Deli” Lapor seorang prajurit kepada Sultan Aceh",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/2-6.png`,
              content:
                "Meskipun belum pernah bertemu Putri Hijau. Namun, Sultan Aceh sudah yakin menjadikan Putri Hijau  sebagai permaisurinya. Rombongan besar kapal - kapal Kesultanan Aceh pun berangkat menuju Kesultanan Deli. Tujuan rombongan itu untuk melamar Putri Hijau",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/2-7.png`,
              content:
                "Sultan Deli sendiri memiliki 3 anak yaitu Mambang Yazid, Mambang Hayali, dan Putri Hijau. Hari itu mereka bersiap menyambut kedatangan Sultan Aceh. Namun, mereka belum tau apa maksud kedatangan rombongan Sultan Aceh ke istana mereka",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/2-8.png`,
              content:
                "“Saya mengucapkan terimakasih untuk sambutan yang sangat hangat ini, kami sungguh sangat terhormat berkesempatan menjadi tamu di istana Kesultanan Deli” Kata Sultan Aceh Sultan Aceh juga membawa sedikit oleh - oleh sebagai tanda persahabatan",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/2-9.png`,
              content:
                "Sultan Deli sangat terkejut dengan oleh oleh yang diberikan, kemudian dia berkata “Perhiasan yang banyak ini merupakan hal yang sangat mewah bagi kami, saya belum pernah melihat perhiasan yang sangat indah dan dalam jumlah yang banyak. Maaf Sultan Aceh, kalau boleh tahu apa tujuan Sultan Aceh berkunjung ke istana kami ?” ",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/2-10.png`,
              content:
                "Sultan Aceh pun memberi tahu maksud kedatangannya ke istana Kesultanan Deli untuk meminang Tuan Putri Hijau. Sultan Deli merasa sangat terhormat dengat pinangan tersebut. Tetapi sebagai seorang ayah, Sultan Deli menyerahkan keputusannya kepada putrinya ",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/2-11.png`,
              content:
                "“Kamu telah mendengar sendiri maksud kedatangan Sultan Aceh, sekarang keputusannya ada ditanganmu. Apa jawabanmu perihal pinangan dari tamu kita ini ?” Tanya Sultan Deli kepada Putrinya. Putri Hijau pun menjawab “Ayahanda maafkan Ananda, untuk saat ini Ananda belum siap untuk menikah”",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/2-12.png`,
              content:
                "Mendengar lamarannya di tolak, Sultan Aceh pu marah luar biasa karena merasa terhina, dengan segera Sultan Aceh memanggil panglima perangnya. Sultan Aceh memerintahkan panglima perangnya untuk menyiapkan armada perang dan menyerang Kesultanan Deli dengan segera",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/2-13.png`,
              content:
                "Perang pun pecah seketika, tembakan meriam dari prajurit aceh seolah tanpa henti menghujani benteng petahanan Kesultanan Deli. Pelan tapi pasti, para Prajurit Aceh semakin mendekati benteng Kesultanan Deli dan berhasil masuk. Terjadilah pertempuran sengit didalam benteng",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/2-14.png`,
              content:
                "Sementara itu, didalam istana Kesultanan Deli. Sultan Deli berpesan “Anak - anakku sepertinya kita tidak bisa bertahan lebih lama lagi. Putriku jika nanti kamu tertawan mintalah agar dimasukkan kedalam kotak kaca. Selain itu mintalah 9 butir telur ayam dan segenggam beras. nanti dalam perjalanan dari atas kapal, panggillah nama kakakmu Mambang Yazid dan lemparlah telur beserta beras itu ke dalam laut”",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/2-15.png`,
              content:
                "Setelah memberikan nasehat kepada anak anaknya, Sultan Deli menghilang entah kemana. Sementara Mambang Hayali memimpin Kesultanan Deli bertahan menghadapi serbuan Prajurit Aceh. Sedangkan Mambang Yazid pergi menuju kearah laut",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/2-16.png`,
              content:
                "Akhirnya Putri Hijau pun tertawan, kakaknya Mambang Hayali tewas dalam pertempuran. Seperti pesan ayahnya, Purti Hijau meminta kotak kaca, sembilan butir telur ayam dan segenggam emas",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/2-17.png`,
              content:
                "Di selat Malaka, dalam perjalanan menuju Aceh. Tiba - tiba Putri Hijau keluar dari kotak kaca, dilemparkannya telur - telur ayam dan segenggam beras kedalam lautan “Mambang Yazid, Mambang Yazid” Teriak Putri Hijau",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/2-18.png`,
              content:
                "Tidak lama kemudian, seekor naga besar muncul dari dalam lautan. Sultan Aceh sangat terkejut, tidak hanya karena naga besar mendekati kapalnya tetapi naga itu juga membawa putri hijau. Sang Sultan tidak bisa berbuat apa apa untuk menghentikan naga tersebut. Sultan Aceh pun menyesal telah memaksa Putri Hijau untuk menjadi permaisurinya ",
            },
          ],
          quiz: [
            {
              question:
                "Kekuatan militer Kesultanan Aceh merupakan salah satu yang terkuat di nusantar. Antonim atau lawan kata dari kata “kuat” adalah ?",
              answers: [
                {
                  id: 1,
                  answer: "Kecil",
                },
                {
                  id: 2,
                  answer: "Lemah",
                },
                {
                  id: 3,
                  answer: "Lambat",
                },
              ],
              correctAnswerId: 2,
            },
            {
              question:
                "Karena belum menemukan sosok yang layak menjadi permaisurinya. Sinonim atau padanan kata dari kata permaisuri adalah ?",
              answers: [
                {
                  id: 1,
                  answer: "Prajurit Sultan",
                },
                {
                  id: 2,
                  answer: "Istri Sultan",
                },
                {
                  id: 3,
                  answer: "Istri Sultan",
                },
              ],
              correctAnswerId: 2,
            },
            {
              question:
                "Namun, mereka belum tau apa maksud kedatangan rombongan Sultan Aceh ke istana mereka. Apakah penulisan kata “tau” sudah benar ? Jika salah, pilih kata yang benar  ",
              answers: [
                {
                  id: 1,
                  answer: "Sudah benar, tau",
                },
                {
                  id: 2,
                  answer: "Salah, yang benar tahu",
                },
                {
                  id: 3,
                  answer: "Salah, yang benar tauh",
                },
              ],
              correctAnswerId: 2,
            },
            {
              question:
                "Sultan Aceh juga membawa sedikit oleh - oleh sebagai tanda persahabatan. Sinonim atau padanan kata oleh-oleh adalah",
              answers: [
                {
                  id: 1,
                  answer: "Buah tangan",
                },
                {
                  id: 2,
                  answer: "Hadiah",
                },
                {
                  id: 3,
                  answer: "Cindramata",
                },
              ],
              correctAnswerId: 1,
            },
            {
              question:
                "Setelah memberikan nasehat kepada anak anaknya Apakah penulisan kata “nasihat” sudah benar ? Jika salah, pilih kata yang benar",
              answers: [
                {
                  id: 1,
                  answer: "Sudah benar, nasehat",
                },
                {
                  id: 2,
                  answer: "Salah, yang benar nasyehat",
                },
                {
                  id: 3,
                  answer: "Salah, yang benar nasihat",
                },
              ],
              correctAnswerId: 3,
            },
            {
              question:
                "Pesan moral yang dapat diambil dari cerita rakyat Hikayat Putri Hijau dari Provinsi Sumatera Utara adalah ?",
              answers: [
                {
                  id: 1,
                  answer: "Kita harus patuh kepada orang tua",
                },
                {
                  id: 2,
                  answer: "Kita tidak boleh memiliki sikap sombong",
                },
                {
                  id: 3,
                  answer: "Pentingnya menjaga persatuan dan kesatuan bangsa",
                },
              ],
              correctAnswerId: 0,
            },
          ],
        },
        {
          _id: 3,
          islandID: 2,
          title: "Legenda Batu Kuwung",
          description: "Cerita Rakyat Dari Provinsi Banten",
          imgSrc: `${GetBaseURL()}/public/story/3.png`,
          steps: [
            {
              imgSrc: `${GetBaseURL()}/public/story/3-1.png`,
              content:
                "Pada suatu waktu dimasa yang lampau, hidup seorang kepala desa yang sangat sewenang wenang terhadap rakyatnya. Kepala Desa itu menguasai seluruh lahan pertanian dan memperkerjakan rakyatnya dengan upah yang sangat minimum. Bagi rakyat yang membangkang perintahnya maka kepala desa tidak segan - segan untuk melakukan penyiksaan.",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/3-2.png`,
              content:
                "Memimpin dengan sewenang wenang dan kejam membuat kepala desa itu mudah mengumpulkan harta. Tidak terhitung jumlah kekayaannya dari hasil memeras keringat rakyatya. Ketika rakyatnya menderita kekurangan makanan, Si Kepala Desa jutru makan dengan berlebihan setiap harinya.",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/3-3.png`,
              content:
                "Suatu hari datanglah kakek tua kerumah Kepala Desa. Kakek itu terlihat kumal dan seperti pengemis, kelihatannya kakek tersebut sangat lapar. Si Kepala Desa langsung saja memerintah anak buahnya untuk mengusir pengemis tua itu.",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/3-4.png`,
              content:
                "Keesokan harinya, pengemis itu datang lagi. Kepala desa langsung memerintahkan para pengawal untuk mengusirnya.",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/3-5.png`,
              content:
                "Dihari ketiga, kakek itu datang lagi. Bedanya meskipun diusir secara kasar kakek tua itu hanya diam ditempat. “Pengawal, Jika pengemis itu tidak mau pergi, hajar saja dia !” Kata Si Kepala Desa.",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/3-6.png`,
              content:
                "Para pengawal Kepala Desa yang jahat segera memukuli kakek tua dengan tongkat. Anehnya, tongkat para pengawal itu jutru patah. Lebih aneh lagi para pengawal itu justru jatuh ditanah, sambil mengerang kesakitan. Padahal kakek tua itu hanya diam saja.",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/3-7.png`,
              content:
                "Kemudian kakek tua itu berkata”Aku datang secara baik baik kesini dan sekarang untuk ketiga kalinya kamu memperlakukanku dengan cara yang sangat buruk. Aku datang kesini untuk memberimu peringatan. Tunggulah esok pagi dan lihat hasil perbuatanmu selama ini”.",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/3-8.png`,
              content:
                "Malam harinya kepala desa menjadi sulit tidur karena rasa takutnya mendengar apa yang disampaikan kakek tua itu. Sampai akhirnya kepala desa itu pun tertidur.",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/3-9.png`,
              content:
                "Pagi harinya, tubuh Kepala desa tidak dapat digerakkan. Tabib datang silih berganti mencoba mengobati kepala desa. Tapi sepertinya tidak ada satupun tabib yang berhasil. Puluhan tabib dari desa lainnya telah didatangkan dan hasilnya sia - sia.",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/3-10.png`,
              content:
                "Tiba tiba kakek tua itu datang dan berkata ”Kepala Desa lihatlah dirimu, itu semua karena ulahmu sendiri. Agar bisa sembuh ada 3 syarat yang harus kamu penuhi”.",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/3-11.png`,
              content:
                "“Syarat pertama, kamu harus berhenti bersikap kejam dan kikir. Jika kamu dapat melakukannya maka kelumpuhanmu dapat berkurang sedikit. Kedua kamu harus bertapa pada sebuah batu cekung digunung karang selama 40 hari. Dan ketiga kamu harus memberikan semua hartamu kepada warga” Lanjut kakek tua itu.",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/3-12.png`,
              content:
                "Kepala Desa mengikuti apa yang dikatakan kakek itu. Dia meninggalkan sifatnya yang kejam, bengis, kikir dan sombong. Benar yang dikatakan kakek itu kelumpuhannya berkurang sedikit. Dia mampu berdiri dan berjalan menuju gunung karang meskipun dengan bantuan tongkat dan tertatih tatih.",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/3-13.png`,
              content:
                "Setelah bersusah payah, kepala desa itu menemukan sebuah batu cekung. Dia pun kemudian bertapa ditempat itu. Kepala Desa itu bertapa dengan sungguh sungguh. Teriknya siang, angin kencang, dan malam hari yang menggigil dilaluinya tanpa menyerah.",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/3-14.png`,
              content:
                "Dihari yang ke empat puluh, tiba - tiba saja didekat kepala desa itu bertapa muncul sebuah sumber air panas. Kepala desa menghentikan pertapaannya. Dia kemudian berendam di mata air tersebut. Tidak berapa lama kemudian kelumpuhanya sembuh total.",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/3-15.png`,
              content:
                "Sekembalinya dari bertapa, Kepala Desa itu membagi bagikan semua harta kekayaannya kepada warga. Semua tanahnya juga diberikan kepada petani. Dia hanya menyisakan sepetak kecil sawah untuk memenuhi kebutuhanya sehari hari. Karena menyadari kesalahannya selama ini, dia tidak menyesal jatuh miskin dan harus bekerja disawah",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/3-16.png`,
              content:
                "Sumber mata air panas itu sekarang dikenal dengan nama batu kuwung yang berarti batu cekung, sebagaimana tempat Kepala Desa itu bertapa. Batu kuwung kemudian menjadi salah satu tempat wisata pemandian air panas, yang terlatak di Desa Batu Kuwung, Kecamatan Padarincang, Kabupaten Serang, Provinsi Banten",
            },
          ],
          quiz: [
            {
              question:
                "Memperkerjakan rakyatnya dengan upah yang sangat minimum. Sinonim atau persamaan kata dari kata “upah” adalah ?",
              answers: [
                {
                  id: 1,
                  answer: "Sumpah",
                },
                {
                  id: 2,
                  answer: "Uang",
                },
                {
                  id: 3,
                  answer: "Gaji",
                },
              ],
              correctAnswerId: 3,
            },
            {
              question:
                "Kakek itu terlihat kumal dan seperti pengemis, kelihatannya kakek tersebut sangat lapar. Antonim atau lawan kata dari kata “lapar” adalah ?",
              answers: [
                {
                  id: 1,
                  answer: "Makan",
                },
                {
                  id: 2,
                  answer: "Kenyang",
                },
                {
                  id: 3,
                  answer: "Haus",
                },
              ],
              correctAnswerId: 2,
            },
            {
              question:
                "Tapi sepertinya tidak ada satupun tabib yang berhasil. Sinonim atau persamaan kata dari kata “tabib” adalah ?",
              answers: [
                {
                  id: 1,
                  answer: "Orang pintar",
                },
                {
                  id: 2,
                  answer: "Dokter",
                },
                {
                  id: 3,
                  answer: "Pelayan",
                },
              ],
              correctAnswerId: 2,
            },
            {
              question:
                "Kepala Desa lihatlah dirimu, itu semua karena ulahmu sendiri. Apakah penulisan kata “karena” sudah benar ? Jika salah, pilih kata yang benar ?",
              answers: [
                {
                  id: 1,
                  answer: "Sudah benar “karena”",
                },
                {
                  id: 2,
                  answer: "Salah, yang benar “Karna”",
                },
                {
                  id: 3,
                  answer: "Salah, yang benar “Krena”",
                },
              ],
              correctAnswerId: 1,
            },
            {
              question: "Teriknya siang, angin kencang, dan malam hari yang menggigil dilaluinya tanpa menyerah. Antonim atau lawan kata dari kata “kencang” adalah ?",
              answers: [
                {
                  id: 1,
                  answer: "Ringan",
                },
                {
                  id: 2,
                  answer: "Pelan",
                },
                {
                  id: 3,
                  answer: "Lancar",
                },
              ],
              correctAnswerId: 2,
            },
            {
              question: "Pesan moral yang dapat diambil dari cerita rakyat Legenda Batu Kuwung dari Provinsi Banten adalah ?",
              answers: [
                {
                  id: 1,
                  answer: "Dengan bersedekah membuat hidup lebih indah",
                },
                {
                  id: 2,
                  answer: "Kita harus memiliki sikap jujur",
                },
                {
                  id: 3,
                  answer: "Kita wajib menaati perintah orang tua",
                },
              ],
              correctAnswerId: 0,
            },
          ],
        },
        {
          _id: 4,
          islandID: 2,
          title: "Asal Usul Rawa Pening",
          description: "Cerita Rakyat Dari Provinsi Jawa Tengah ",
          imgSrc: `${GetBaseURL()}/public/story/4.png`,
          steps: [
            {
              imgSrc: `${GetBaseURL()}/public/story/4-1.png`,
              content:
                "Pada zaman dahulu kala, ada seorang anak kecil yang hidup sebatang kara. Ayah ibunya sudah lama meninggal, anak kecil itu sudah tidak memiliki keluarga hingga harus hidup sendirian",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/4-2.png`,
              content:
                "Anak kecil itu bukan anak pada umumnya. Yang Maha Kuasa memberikan kelebihan kepada anak kecil tersebut. Anak kecil itu ternyata memiliki kemampuan menyembuhkan berbagai penyakit. Setiap hari, rumah anak itu didatangi oleh warga yang meminta pertolongan",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/4-3.png`,
              content:
                "Tetapi, selalu saja ada yang dengki dengan kelebihan dan kebaikan orang lain. Hari itu seorang nenek sihir melihat dengan penuh kedengkian rumah anak kecil yang ramai dengan orang",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/4-4.png`,
              content:
                "Malam harinya nenek sihir itu mengetuk rumah anak kecil itu. “Maaf nek, ada yang bisa saya bantu?” Tanya anak kecil itu. “Hei bocah gara gara kamu sekarang tidak ada lagi yang datang berobat padaku, maka terimalah hukuman dari ku” Kata nenek sihir itu",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/4-5.png`,
              content:
                "Nenek sihir yang jahat itu mengarahkan tongkatnya ke arah anak kecil itu. Tiba-tiba saja tubuh anak kecil itu memliki luka yang membusuk dan baunya sangat menyengat",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/4-6.png`,
              content:
                "Kemudia nenek sihir itu berkata “Nah, rasakan sekarang tubuhmu bau busuk. Orang -  orang tidak akan mau lagi dekat dengamu. Hihihihi”",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/4-7.png`,
              content:
                "Keesokan harinya beberapa warga desa datang dan terkejut melihat kondisi anak kecil itu. “Hai apa yang terjadi dengamu? kenapa tubuhmu menjadi seperti itu” kata seorang warga desa. Anak kecil itu menjelaskan asal usul tubuhnya bisa penuh luka dan berbau busuk",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/4-8.png`,
              content:
                "Malam harinya anak kecil itu bermimpi mendengar suara. ”Pergilah dari desa ini, dan carilah seorang perempuan tua, dia yang akan menyembuhkan penyakitmu”",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/4-9.png`,
              content:
                "Pagi pagi sekali, anak kecil sudah berangkat meninggalkan rumah dan desa, dia menempuh perjalanan menyusuhi hutan hingga berhari hari lamanya. Hingga akhirnya anak kecil itu kehabisan bekal. Dia pun menuju rumah penduduk desa untuk meminta sedikit makanan. Namun, anak kecil itu selalu diusir karena badannya bau busuk ",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/4-10.png`,
              content:
                "Anak kecil yang kehausan dan kelaparan itu, melihat sebuah pesta di kampung. Ketika datang kepesta tersebut, seperti hanya warga desa, orang orang langsung mengusirnya. Anak kecil itu kembali melanjutkan perjalannya",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/4-11.png`,
              content:
                "Di tepian desa dia melihat rumah gubuk tua, anak kecil itu pun menghampiri rumah gubuk tersebut. “Maaf nek, bolehkan saya meminta seteguk air saja?” Tanya anak kecil kepada nenek tua itu. “Nak, semalam aku bermimpi kalau aku harus memberi minum dan makanan ke seorang anak kecil yang tubuhnya penuh luka, sepertinya anak kecil itu kamu” Ucap nenek tua itu",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/4-12.png`,
              content:
                "Anak kecil itu makan dengan lahapnya. Selesai makan, tiba tiba saja tubuh anak kecil itu sembuh seperti sedia kala. Anak kecil itupun bercerita jika dia pernah bermimpi mendengar suara  untuk menemukan seorang nenek, sepertinya nenek itu yang di maksud dalam suara di mimpinya",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/4-13.png`,
              content:
                "Kemudian anak kecil itu pun bercerita jika dirinya pernah diusir oleh penduduk kampung disana. Nenek pun juga bercerita bahwa awalnya dia memiliki rumah di dalam kampung, karena kurang mampu nenek disuruh pergi dari desa dan membuat gubuk tua dipinggiran desa",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/4-14.png`,
              content:
                "“Nek, nanti malam bersiaplah menaiki lesung, akan ada air banjir besar disini” Kata anak kecil itu. “Tapi, nama bisa ada banjir?” ucap nenek tidak percaya. Anak kecil itu pun kembali pergi ke dalam desa ",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/4-15.png`,
              content:
                "Malam pun tiba, pesta yang diadakan penduduk itu berlangsung meriah. Anak kecil itu datang dan memanggil para penduduk kampung. Penduduk kampung pun berteriak mengusirnya “Hei anak kecil, cepat pergi dari sini atau kami tidak segan bersikap kasar kepadamu, kamu mengganggu pesta penduduk sini” ucap penduduk kampung dengan kasar",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/4-16.png`,
              content:
                "Anak kecil itu segera menancapkan lidi ketanah dan berkata dengan lantang. “Aku akan segera segera pergi dari sini, jika kalian mampu mencabut lidi ini” ",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/4-17.png`,
              content:
                "Para penduduk itu bergantian berusaha keras mencabut lidi tersebut, sungguh aneh tidak ada satu pun yang mampu mencabut lidi itu",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/4-18.png`,
              content:
                "“ Orang yang berhati jahat, tidak akan mampu mencabut lidi ini” kata anak kecil itu. Dengan mudah anak kecil  mencabut lidi yang menancap ditanah",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/4-19.png`,
              content:
                "Tidak butuh waktu lama, desa tersebut tenggelam dan menjadi sebuah danau. Tiba tiba saja nenek sihir datang. “Hihihihiii, hei bocah jangan kira aku akan berhenti menyihirmu meskipun desa ini sudah menjadi danau” Kata nenek sihir itu",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/4-20.png`,
              content:
                "“Dasar kamu penyihir jahat, kali ini aku akan melawanmu” Kata anak kecil itu. “Jangan bermimpi kamu bisa melawanku, hanya seekor naga yang mampu membunuhku. Hihihii” Kata nenek sihir itu dengan sombong. Anak kecil itupun tiba tiba menyeburkan dirinya kedalam air",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/4-21.png`,
              content:
                "Seketika itu juga, muncul seekor naga besar dari dalam danau, nenek sihir sungguh ketakutan”Hei nenek sihir, sungguh sia sia hidupmu hanya kamu gunakan untuk berbuat jahat, sekarang terimalah hukumanmu” Kata naga besar itu dengan menyemburkan api dari dalam mulutnya",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/4-22.png`,
              content:
                "Nenek sihir itupun mati kepanasan disembur naga penjelmaan anak kecil itu. Setelah si nenek sihir itu mati, naga pun kembali menyelam kedalam air",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/4-23.png`,
              content:
                "Sementara itu, nenek tua yang menolong anak kecil itu selamat dari banjir yang menerjang desanya. Dia berhasil menaiki lesungnya dan sampai dipinggir danau. Desa yang berubah menjadi danau itu kemudian dikenal dengan nama rawa pening dan sekrang menjadi salah satu tujuan wisata di Semarang",
            },
          ],
          quiz: [
            {
              question: "Pada jaman dahulu kala, ada seorang anak kecil yang hidup sebatang kara. Apakah penulisan kata “jaman” sudah benar ? Jika salah, pilih kata yang benar ?",
              answers: [
                {
                  id: 1,
                  answer: "Sudah benar, jaman",
                },
                {
                  id: 2,
                  answer: "Salah, yang benar Zaman",
                },
                {
                  id: 3,
                  answer: "Salah, yang benar Saman",
                },
              ],
              correctAnswerId: 2,
            },
            {
              question: "Nah, rasakan sekarang tubuhmu bauk busuk. Apakah penulisan kata “bauk” sudah benar ? Jika salah, pilih kata yang benar ?",
              answers: [
                {
                  id: 1,
                  answer: "Sudah benar “bauk”",
                },
                {
                  id: 2,
                  answer: "Salah, yang benar “bau”",
                },
                {
                  id: 3,
                  answer: "Salah, yang benar “bauh”",
                },
              ],
              correctAnswerId: 2,
            },
            {
              question: "Selesai makan, tiba tiba saja tubuh anak kecil itu pulih seperti sedia kala. Sinonim atau persamaan kata dari kata “pulih” adalah ?",
              answers: [
                {
                  id: 1,
                  answer: "Sembuh",
                },
                {
                  id: 2,
                  answer: "Sakit",
                },
                {
                  id: 3,
                  answer: "Kembali",
                },
              ],
              correctAnswerId: 1,
            },
            {
              question: "“Tapi, mana bisa ada banjir?” ucap nenek tidak percaya Sinonim atau persamaan kata dari kata “percaya” adalah ?",
              answers: [
                {
                  id: 1,
                  answer: "Jujur",
                },
                {
                  id: 2,
                  answer: "Mengetahui",
                },
                {
                  id: 3,
                  answer: "Yakin",
                },
              ],
              correctAnswerId: 3,
            },
            // {
            //   question: "Sungguh aneh tidak ada satu pun yang bisa mencabut lidi itu Sinonim atau persamaan kata dari kata “percaya” adalah ?",
            //   answers: [
            //     {
            //       id: 1,
            //       answer: "",
            //     },
            //     {
            //       id: 2,
            //       answer: "",
            //     },
            //     {
            //       id: 3,
            //       answer: "",
            //     },
            //   ],
            //   correctAnswerId: 0,
            // },
            {
              question: "Pesan moral yang dapat diambil dari cerita rakyat Asal Mula Rawa Pening dari Provinsi Jawa Tengah adalah ? ",
              answers: [
                {
                  id: 1,
                  answer: "Saling membantu dan tolong menolong kepada siapapun",
                },
                {
                  id: 2,
                  answer: "Musyawarah untuk memecahkan masalah",
                },
                {
                  id: 3,
                  answer: "Jadilah orang yang pantang menyerah",
                },
              ],
              correctAnswerId: 0,
            },
          ],
        },
        {
          _id: 5,
          islandID: 3,
          title: "Legenda Garuda Wisnu Kencana",
          description: "Cerita Rakyat Dari Provinsi Bali",
          imgSrc: `${GetBaseURL()}/public/story/5.png`,
          steps: [
            {
              imgSrc: `${GetBaseURL()}/public/story/5-1.png`,
              content:
                "Pada zaman dahulu di pulau Bali hiduplah seorang resih sakti bernama Resih Kasyapah. Sang resih sakti memiliki dua orang putri. Putri pertama bernama kadru, dan putri kedua bernama Winata",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/5-2.png`,
              content:
                "Suatu hari Resih Kasyapah memberikan kepada kedua putrinya masing masing sebutir telur berwarna putih yang besar. “Kadru dan Winata, jagalah telur telur itu apapun yang menetas harus kalian rawat seperti anak sendiri” Kata Resih Kasyapah",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/5-3.png`,
              content:
                "Setelah beberapa bulan telur telur itu pun menetas. Telur milik kadru menetas dan menghasilkan sembilan ekor naga. Memelihara sembilan ekor naga membuat Kadru kewalahan. Setiap hari sembilan ekor naga itu ribut dan berlarian kesana kemari",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/5-4.png`,
              content:
                "Sedangkan telur milik Winata menetas dan melahrikan seekor burung elang yang diberi nama garuda.Setiap hari dengan sabar Winata memberinya makan dan membantunya belajar terbang",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/5-5.png`,
              content:
                "Rasa dengki selalu menghingapi manusia yang berhati buruk. Demikian juga dengan Kadru.Setiap hari melihat Winata yang tidak pernah kerepotan mengurus garuda, Kadru pun merasa dengki. Dia pun mencari rencana jahat agar Winata mau memelihara sembilan naga miliknya",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/5-6.png`,
              content:
                "Keesokan harinya Kadru menemui ayahnya untuk meminta mendatangkan kuda ucai suara kerumahnya agar Kadru dan Winata bisa melihatnya karena selama ini mereka hanya pernah mendengar namanya. Dan ayahnya Resih Kasyapah menyetujui untuk mendatangkan kuda ucai suara ",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/5-7.png`,
              content:
                "Setelah menemui ayahnya, Kadru kemudian menemui adiknya Winata, dan berkata ”Adinda ada kabar gembira, besok ayahanda akan memanggil kuda ucai suara kemari. Kita berdua belum pernah melihat kuda yang bisa terbang itu",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/5-8.png`,
              content:
                "Kadru menantang Winata untuk bermain tebak tebakan, apa warna kuda ucai suara tersebut dan yang kalah harus mematuhi perintah yang menang.Kadru menebak kuda itu berwarna hitam dan winata menebak kuda itu berwarna putih",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/5-9.png`,
              content:
                "Kadru kemudian menemui anak anaknya, dan bercerita bahwa dirinya bertaruh dengan Winata. Namun salah satu anaknya berkata bahwa dia telah bertanya kepada Resih Kasyapah warna kuda ucai suara. Dan Resih Kasyapah menjawab warna kuda ucai suara adalah putih",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/5-10.png`,
              content:
                "Setelah mengetahui warna kuda ucai suara Kadru memiliki ide dan berkata kepada anak anaknya. “Kalian cegat kuda ucai suara sebelum datang kemari, kemudian kaliansembur sehingga kuda itu berwarna hitam. Kalian mengerti !”Anak - anak itu pun menjawab “Mengerti Ibu”",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/5-11.png`,
              content:
                "Keesokan harinya kuda ucai suara dalam perjalanan menuju rumah Resik Kasyapah. Ketika masih dalam perjalanan tersebut tanpa sempat di sadari oleh kuda ucai suara, sembilan naga menyemburnya. Akibatnya tubuh kuda ucai suara berubah dari putih menjadi hitam legam",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/5-12.png`,
              content:
                "Sesampainya di rumah Resik Kasyapah. Kadru yang melihat kuda ucai suara berkata kepada Winata. “Lihatlah adinda kuda ucai suara berwarn hitam, nah mulai sekarang kamu harus mematuhi semua perintahku” ",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/5-13.png`,
              content:
                "Setelah itu sesuai perjanjian, Winata harus mengurus sembilan ekor naga sedangkan kadru setiap hari hanya bermalas malasan",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/5-14.png`,
              content:
                "Selama bertahun tahun Winata harus memelihara sembilan naga tersebut. Sampai suatu ketika garuda yang sudah dewasa bertanya kepada ibunya apa alasan ibunya harus repot -  repot mengurus sembilan naga itu. Winata pun menjelaskan asal usul kenapa dia harus mengurus sembilan naga itu kepada garuda",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/5-15.png`,
              content:
                "Garuda yang mengetahui hal tersebut menjadi sangat marah, kemudian dia berkata. “Pasti ini ulah sembilan naga itu, Aku sudah terbang kekayangan dan melihat sendiri kuda ucai suara itu berwarna putih",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/5-16.png`,
              content:
                "Garuda yang sangat marah, segera menemui sembilan naga. Mereka bertarung dengan sangat dahsyat. Garuda yang cakarnya sangat kuat dan bisa terbang mampu mengalahkan sembilan ekor naga tersebut",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/5-17.png`,
              content:
                "Melihat anak anaknya kesakitan, Kudra pun berkata. “Garuda, meskipun kamu bisa mengalahkan anak - anakku bukan berarti ibumu bisa bebas. Agar ibumu bisa bebas kamu harus membawa tirta amarta dan kau berikan kepada anak - anakku” Tirta amarta adalah air keabadian. Siapapun yang meminumnya meskipun hanya setetes akan hidup abadi",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/5-18.png`,
              content:
                "Garuda pun terbang menjelajahi tujuh samudra mencari tirta amarta. Selama berhari hari, air keabadian yang dicarinya tidak kunjung ketemu. Hingga sampai akhirnya garuda bertemu Dewa Wisnu",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/5-19.png`,
              content:
                "Dewa Wisnu bertanya apa alasan garuda menjelajahi tujuh samudra, dan garuda pun menjelaskan tentang tujuannya mencari tirta amarta.Kemudian Dewa Wisnu berkata “Aku bisa memberimu secangkir tirta amarta dengan syarat kau mau menjadi tungganganku”",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/5-20.png`,
              content:
                "Pulanglah garuda kerumah dengan membawa tirta amarta dan memberikanya kepada Kadru. Namun, ketika Kadru hendak memberikan cangkir berisi tirta amarta kepada anak anaknya tiba tiba datang Dewa Indra",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/5-21.png`,
              content:
                "Kemudian Dewa Indra merebut cangkir tersebut, sebagian isi tirta amarta jatuh kerumput ilalang yang berdaun tajam. Sembilan naga berebut menjilati rumput ilalang. Namun sayang, rumput ilalang yang berdaun tajam membuat lidah naga terbelah bagian tengahnya. Itulah mengapa hingga saat ini lidah naga terbelah bagian tengahnya, untuk pelajaran kepada siapa saja yang berani berbuat sewenang wenang.",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/5-22.png`,
              content:
                "Garuda juga memenuhi janjinya kepada Dewa Wisnu. Garuda mengantarkan Dewa Wisnu keseluruh penjuru bumi dan langit. Sejak itulah sang garuda kemudian dikenal dengan julukan Garuda Wisnu Kencana",
            },
            {
              imgSrc: `${GetBaseURL()}/public/story/5-23.png`,
              content:
                "Kegigihan garuda untuk membebaskan ibunya dari perbudakan, mengilhami pendiri bangsa ini. Mereka menggunakn burung garuda sebagai simbol negara kesatuan republik Indonesia",
            },
          ],
          quiz: [
            {
              question: "",
              answers: [
                {
                  id: 1,
                  answer: "",
                },
                {
                  id: 2,
                  answer: "",
                },
                {
                  id: 3,
                  answer: "",
                },
              ],
              correctAnswerId: 0,
            },
          ],
        },
      ]);

      return true;
    } catch (error) {
      return false;
    }
  },
};
