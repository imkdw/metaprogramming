import { container } from "./container";
import { Database } from "./database";
import { SeatRepository } from "./seat.repository";

const seatRepository = container.resolve(SeatRepository);
