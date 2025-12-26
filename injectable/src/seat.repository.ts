// seat.repository.ts
import { Injectable } from "./injectable";
import { Database } from "./database";

@Injectable()
export class SeatRepository {
  constructor(private readonly database: Database) {}
}
