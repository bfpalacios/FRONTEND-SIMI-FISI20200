package pe.edu.ceid.simi.operative.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pe.edu.ceid.simi.operative.application.autenticacion.AutenticacionService;

@CrossOrigin(origins = "localhost:4200")
@RestController
@RequestMapping({"/api/v1/autorizacion"})
public class AutorizacionController {
	
	@Autowired
	private AutenticacionService service;
	
	//localhost:8080/api/v1/autorizacion
	@GetMapping(path = {"/{codigo}/{tipo}"})
	public boolean accederSistema(@PathVariable("codigo") String codigo,@PathVariable("tipo") String tipo) {
		return this.service.accederSistema(codigo, tipo);
	}
}
