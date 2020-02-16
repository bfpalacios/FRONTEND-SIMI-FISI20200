package pe.edu.ceid.simi.operative.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pe.edu.ceid.simi.operative.domain.apertura.model.Apertura;
import pe.edu.ceid.simi.operative.domain.apertura.model.AperturaDTO;
import pe.edu.ceid.simi.operative.application.apertura.AperturaService;

@CrossOrigin(origins = "localhost:4200")
@RestController
@RequestMapping({"/api/aperturas"})

public class AperturaController {
	
	@Autowired
	private AperturaService service;
	
	@GetMapping
	public List<AperturaDTO> getAperturas() {
		return this.service.getAperturas();
	}
	
	@PostMapping
	public boolean saveAperturas(@RequestBody List<Apertura> aperturas) {
		return this.service.saveAperturas(aperturas);
	}
	
}
