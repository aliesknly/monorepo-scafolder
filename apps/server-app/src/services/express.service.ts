import express, { Express, Router } from "express";
import path from "path";

interface APIOptionsSInterface {
	port: number;
	routes: Router;
}

export class ExpressService {
	public app: Express;
	private readonly port: number;
	private readonly routes: Router;

	constructor(options: APIOptionsSInterface) {
		const { port, routes } = options;
		this.app = express();
		this.routes = Router();
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use("/assests", express.static(path.join(__dirname, "../assets")));
		this.port = port;
		this.routes = routes;
	}

	public start() {
		this.app.use("/api", this.routes);
		this.app.listen(this.port, () => {
			console.log(`⚡[server]: Server is running at port ${this.port}`);
		});
	}
}
