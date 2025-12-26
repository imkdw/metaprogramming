import { Injectable } from "./injectable";
import { SeatRepository } from "./seat.repository";

@Injectable()
export class Database {
  constructor(private readonly seatRepository: SeatRepository) {}
}
