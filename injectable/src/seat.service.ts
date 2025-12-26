import { Injectable } from "./injectable";
import { SeatRepository } from "./seat.repository";

@Injectable()
export class SeatService {
  constructor(private readonly seatRepository: SeatRepository) {}
}
