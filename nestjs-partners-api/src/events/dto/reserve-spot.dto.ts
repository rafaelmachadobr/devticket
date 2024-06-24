import { TicketKind } from '@prisma/client';

export class ReverseSpotDto {
  spots: string[];
  ticket_kind: TicketKind;
  email: string;
}
