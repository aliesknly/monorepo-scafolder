import mongoose from "mongoose";

interface MongoDBOptionsInterface {
  host: string;
  userName: string;
  password: string;
  databaseName: string;
}

export class MongoDBService {
  private readonly host: string;
  private readonly userName: string;
  private readonly password: string;
  private readonly databaseName: string;

  constructor(options: MongoDBOptionsInterface) {
    const { host, userName, password, databaseName } = options;
    this.host = host;
    this.userName = userName;
    this.password = password;
    this.databaseName = databaseName;
  }

  public async connect() {
    await mongoose
      .connect(`mongodb://${this.host}`, {
        authSource: "admin",
        retryWrites: true,
        user: this.userName,
        pass: this.password,
        dbName: this.databaseName,
        appName: "workshop_flow",

      })
      .then(() => {
        console.log("✅ MongoDB connected");
      })
      .catch((error) => {
        console.group("❌ MongoDB connection error");
        console.log(error);
        console.groupEnd();
      });
  }
}
