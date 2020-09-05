const User = require("../model/User");
const Island = require("../model/Island");
const Story = require("../model/Story");

function GetBaseURL() {
  // const env = require("../config").GetEnvVariable();

  // const host = env.Server.Host;
  // const port = env.Server.Port;

  // return `${host}:${port}`;

  return "https://jelajah-nusantara.herokuapp.com"
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
          name: "Sumatra",
          imgSrc: `${GetBaseURL()}/public/image/sumatra.png`,
          trivias: [
            {
              content:
                "Mengapa Rumah Gadang  memiliki atapnya yang berbentuk tanduk runcing?bentuk tanduk kerbau tersebut merupakan simbol kemenangan adu kerbau raja Minangkabau melawan kerbau raja di Jawa. Sejak saat itu, tanduk kerbau menjadi penanda kejayaan Minangkabau",
              imgSrc: `${GetBaseURL()}/public/image/trivia.png`,
            },
            {
              content:
                "Mengapa Rumah Gadang  memiliki atapnya yang berbentuk tanduk runcing?bentuk tanduk kerbau tersebut merupakan simbol kemenangan adu kerbau raja Minangkabau melawan kerbau raja di Jawa. Sejak saat itu, tanduk kerbau menjadi penanda kejayaan Minangkabau",
              imgSrc: `${GetBaseURL()}/public/image/trivia.png`,
            },
          ],
        },
        {
          _id: 2,
          name: "Jawa",
          imgSrc: `${GetBaseURL()}/public/image/jawa.png`,
          trivias: [
            {
              content:
                "Mengapa Rumah Gadang  memiliki atapnya yang berbentuk tanduk runcing?bentuk tanduk kerbau tersebut merupakan simbol kemenangan adu kerbau raja Minangkabau melawan kerbau raja di Jawa. Sejak saat itu, tanduk kerbau menjadi penanda kejayaan Minangkabau",
              imgSrc: `${GetBaseURL()}/public/image/trivia.png`,
            },
            {
              content:
                "Mengapa Rumah Gadang  memiliki atapnya yang berbentuk tanduk runcing?bentuk tanduk kerbau tersebut merupakan simbol kemenangan adu kerbau raja Minangkabau melawan kerbau raja di Jawa. Sejak saat itu, tanduk kerbau menjadi penanda kejayaan Minangkabau",
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
          ],
        },
      ]);

      return true;
    } catch (error) {
      return false;
    }
  },
};
