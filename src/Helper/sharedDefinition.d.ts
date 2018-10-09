interface IEventType {
  EventTypeDesc: string;
  EventTypeID: number;
  MasterEventTypeID: number;
  Slug: string;
}
interface IVenue {
  Venue: string;
  StateCode: string;
  Slug: string;
}

interface IEvent {
  EventID: number;
  MasterEventID: number;
  EventName: string;
  EventTypeDesc: string;
  MasterEventName: string;
  AdvertisedStartTime: string;
  RaceNumber: number;
  EventType: IEventType;
  Venue: IVenue;
  IsMultiAllowed: boolean;
  Slug: string;
  DateSlug: string;
  RacingStreamAllowed: boolean;
  RacingReplayStreamAllowed: boolean;
  Ticks?: string;
}
