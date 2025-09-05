interface DatabaseConfig {
  ConnString: string;
}

const dbConfig: DatabaseConfig = {
  ConnString: process.env.DB_CONN_STRING || "mongodb://localhost:27017/mydb",
};

export { dbConfig };
