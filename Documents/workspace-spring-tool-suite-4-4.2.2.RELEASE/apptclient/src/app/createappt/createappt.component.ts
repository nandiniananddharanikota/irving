import { Component, OnInit } from '@angular/core';
import { NetworkCallsService, Appointment } from '../services/network-calls.service';
import{FormGroup,FormControl} from "@angular/forms"
@Component({
  selector: 'app-createappt',
  templateUrl: './createappt.component.html',
  styleUrls: ['./createappt.component.css']
})
export class CreateapptComponent implements OnInit {
appointment:Appointment = new Appointment("","","","","","");
addAppointmentForm = new FormGroup({
  firstName: new FormControl(""),
  lastName:new FormControl(""),
  dob:new FormControl(""),
  apptDate: new FormControl(""),
  apptTime:new FormControl("")
});
  constructor(private httpClientService: NetworkCallsService) { }

  ngOnInit() {
  }
  addAppointment(){
    this.httpClientService.addAppointment(this.appointment).subscribe(data=>{
      alert("appointemnt has succesfully saved");
    })

  }

}
