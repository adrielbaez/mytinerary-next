// Generated by https://quicktype.io

export interface ActivitiesCityResponse {
  success: boolean;
  respuesta: Activity[];
}

export interface Activity {
  _id: string;
  title: string;
  image: string;
  itineraryId: string;
  __v: number;
}
