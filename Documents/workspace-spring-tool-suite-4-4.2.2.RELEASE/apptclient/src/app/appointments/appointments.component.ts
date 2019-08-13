import { Component, OnInit } from '@angular/core';
import { NetworkCallsService } from '../services/network-calls.service';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  title = 'apptclient';
  appointments:any;
  constructor(private httpClientService: NetworkCallsService ) { }

  ngOnInit() {
    this.httpClientService.getAppointmentListCall().subscribe(response=>{
      console.log(JSON.stringify(response));
      this.appointments =response;
    })
  }

  deleteAppointment(apptObj){
    this.httpClientService.deleteAppointment(apptObj).subscribe(response=>{
      console.log(JSON.stringify(response));
      this.appointments = this.appointments.filter(res => res!==response);
    })
  }
}
