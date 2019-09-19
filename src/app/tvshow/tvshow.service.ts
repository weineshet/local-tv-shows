import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import { ICurrentTvshow } from "../icurrent-tvshow";

interface ICurrentTvshowData {
  name: string;
  schedule: { time: number };
  image: { medium: string };
}

@Injectable({
  providedIn: "root"
})
export class TvshowService {
  constructor(private httpClient: HttpClient) {}

  getCurrentTvshow(show: string) {
    return this.httpClient
      .get<ICurrentTvshowData>(
        `${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${show}&appId=${environment.appId}`
      )
      .pipe(map(data => this.transformToICurrentTvshow(data)));
  }

  private transformToICurrentTvshow(data: ICurrentTvshowData): ICurrentTvshow {
    return {
      show: data.name,
      schedule: data.schedule.time,
      image: data.image.medium
    };
  }
}
