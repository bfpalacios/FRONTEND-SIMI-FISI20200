import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Path } from 'src/app/infrastructure/constans/Path';

@Injectable({
  providedIn: 'root'
})
export class ReportePagosService {

  private url: string;
  constructor(
    private http: HttpClient
  ) {
    this.url = Path.url;
  }

  public getVouchers() {
    return this.http.get<any[]>(this.url + '/vouchers');
  }

  public saveVouchers(vouchers: any) {
    return this.http.post<boolean>(this.url + '/vouchers', vouchers);
  }
}
