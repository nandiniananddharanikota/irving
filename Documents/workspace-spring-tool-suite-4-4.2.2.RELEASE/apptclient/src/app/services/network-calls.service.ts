import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class Appointment{
  constructor(
  public firstName: string,
  public lastName:string,
  public dob:string,
  public apptDate:string,
  public apptTime:string,
  public id:string,
  ){}
}
@Injectable({
  providedIn: 'root'
})
export class NetworkCallsService {
  private baseUrl ="http://localhost:8080";
 
  constructor(private httpClient: HttpClient) { }

  getAppointmentListCall(){
   return this.httpClient.get(this.baseUrl+"/getAppointments");
  }

  addAppointment(apptObj){

    return this.httpClient.post(this.baseUrl+"/create", apptObj)
  }

  deleteAppointment(apptObj){

    return this.httpClient.delete(this.baseUrl+"/delete/"+ apptObj.id);
  }
}
