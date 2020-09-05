module.exports = {
  async MigrateAll(UserModel, IslandModel) {
    const users = await this.MigrateUser(UserModel);
    const islands = await this.MigrateIsland(IslandModel);

    if (users && islands) {
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
          name: "Sumatra",
          imgSrc: `${process.cwd()}/public/image/sumatra.png`,
          trivias: [
            {
              content:
                "Mengapa Rumah Gadang  memiliki atapnya yang berbentuk tanduk runcing?bentuk tanduk kerbau tersebut merupakan simbol kemenangan adu kerbau raja Minangkabau melawan kerbau raja di Jawa. Sejak saat itu, tanduk kerbau menjadi penanda kejayaan Minangkabau",
              imgSrc: `${process.cwd()}/public/image/trivia.png`,
            },
            {
              content:
                "Mengapa Rumah Gadang  memiliki atapnya yang berbentuk tanduk runcing?bentuk tanduk kerbau tersebut merupakan simbol kemenangan adu kerbau raja Minangkabau melawan kerbau raja di Jawa. Sejak saat itu, tanduk kerbau menjadi penanda kejayaan Minangkabau",
              imgSrc: `${process.cwd()}/public/image/trivia.png`,
            },
          ],
        },
        {
          name: "Jawa",
          imgSrc: `${process.cwd()}/public/image/jawa.png`,
          trivias: [
            {
              content:
                "Mengapa Rumah Gadang  memiliki atapnya yang berbentuk tanduk runcing?bentuk tanduk kerbau tersebut merupakan simbol kemenangan adu kerbau raja Minangkabau melawan kerbau raja di Jawa. Sejak saat itu, tanduk kerbau menjadi penanda kejayaan Minangkabau",
              imgSrc: `${process.cwd()}/public/image/trivia.png`,
            },
            {
              content:
                "Mengapa Rumah Gadang  memiliki atapnya yang berbentuk tanduk runcing?bentuk tanduk kerbau tersebut merupakan simbol kemenangan adu kerbau raja Minangkabau melawan kerbau raja di Jawa. Sejak saat itu, tanduk kerbau menjadi penanda kejayaan Minangkabau",
              imgSrc: `${process.cwd()}/public/image/trivia.png`,
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
