package com.sample.appt.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sample.appt.model.Appointment;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MainController {
	@RequestMapping(value ="/getAppointments", method = RequestMethod.GET, produces = "application/json")
	public List<Appointment>  getAppointments(){
		return listOfAppointment;
	}
	@PostMapping
	public Appointment create(@RequestBody Appointment appointment){
		listOfAppointment.add(appointment);
		return appointment;
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping(path = {"/{id}"})
	public Appointment delete(@PathVariable("id") int id){
		Appointment deleteAppt = null;
			for(Appointment appt: listOfAppointment) {
				if(appt.getId().equals(id)) {
					listOfAppointment.remove(appt);
					deleteAppt = appt;
					break;
				}
			}	
		
		return deleteAppt;
	}
	
	
	private  List<Appointment> listOfAppointment = createAppointmentList();
	
	private static List<Appointment> createAppointmentList(){
		List<Appointment> tempAppt = new ArrayList<>();
		Appointment app1 = new Appointment();
		app1.setId("1");
		app1.setFirstName("John");
		app1.setLastName("John");
		app1.setApptDate("06/05/2019");
		app1.setApptTime("9:30AM");
		app1.setDob("01/01/1990");
		app1.setConfCode("001");
		
		Appointment app2 = new Appointment();
		app2.setFirstName("Mike");
		app2.setLastName("TEst");
		app2.setApptDate("06/05/2019");
		app2.setApptTime("10:30AM");
		app2.setDob("01/02/1990");
		app2.setConfCode("002");
		app1.setId("2");
		
		tempAppt.add(app1);
		tempAppt.add(app2);
				
		return tempAppt;
		
	}

}
