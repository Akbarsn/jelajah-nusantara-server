module.exports = {
    InitDB(mongoose, DB_URI, logger) {
      mongoose.connect(DB_URI, { useNewUrlParser: true });
  
      const db = mongoose.connection;
      db.once("open", () => {
        logger.info("Database connected");
      });
  
      db.on("error", (err) => {
        logger.error("connection error:", err);
      });
    },
  };
  