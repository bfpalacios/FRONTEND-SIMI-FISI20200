package pe.edu.ceid.simi.operative.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pe.edu.ceid.simi.operative.application.authentication.AuthenticationService;
import pe.edu.ceid.simi.operative.domain.authentication.model.Authentication;

@CrossOrigin(origins = "localhost:4200")
@RestController
@RequestMapping({ "/api/v1/authentication" })
public class AuthenticationController {

	@Autowired
	private AuthenticationService service;

	@PostMapping(path = {"withEmailAndPassword"})
	public Authentication signInWithEmailAndPassword(@RequestBody Authentication auth) {
		return this.service.signInWithEmailAndPassword(auth.getUser(), auth.getPassword());
	}
	
	@PostMapping(path = {"invited"})
	public Authentication signInInvited() {
		return this.service.signInInvited();
	}
}
