package management.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import management.application.alumno.AlumnoService;
import management.domain.alumno.model.Alumno;

@CrossOrigin(origins = "localhost:4200")
@RestController
@RequestMapping({"/prueba"})
public class AlumnoController {

	@Autowired
	private AlumnoService service;
	
	@GetMapping(path = {"/prueba"})
	public List<Alumno> getConfiguracionSistemaGeneral() {
		return service.getAlumnos();
	}
}
