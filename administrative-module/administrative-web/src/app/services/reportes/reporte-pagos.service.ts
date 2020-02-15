import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Path } from 'src/app/infrastructure/constans/Path';
import { Voucher } from 'src/app/domain/Voucher';

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
    return this.http.get<Voucher[]>(this.url + '/vouchers');
  }

  public saveVouchers(vouchers: Voucher[]) {
    return this.http.post<boolean>(this.url + '/vouchers', vouchers);
  }
}
