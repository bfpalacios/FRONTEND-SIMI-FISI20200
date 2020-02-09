package simi.web.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import simi.application.curso.CursoService;
import simi.domain.curso.model.Curso;
import simi.domain.curso.model.CursoDTO;

import java.util.List;

@CrossOrigin(origins = "localhost:4200")
@RestController
@RequestMapping({"/api/curso"})

public class CursoController {

	@Autowired
	private CursoService service;
	
	@GetMapping(path = {"/listCursos"})
	public List<CursoDTO> getCursos() {
		return this.service.getCursos();
	}
	
	@PutMapping(path = {"/actualizarCurso/{id}"})
	public Curso actualizarCurso(@RequestBody Curso curso, @PathVariable int id) {
		
		curso.setCcurso(id);
		return this.service.editCurso(curso, id);
	}

	@DeleteMapping(path = {"/eliminarCursoById/{id}"})
	public boolean eliminarCursoById( @PathVariable int id) {	
			return this.service.deleteCurso(id);
	}
	
	@PostMapping(path = {"/crearCurso"})
	public Curso crearCurso(@RequestBody Curso curso) {
		return this.service.crearCurso(curso);
	}
	
	@GetMapping(path= {"/obtenerCursoById/{id}"})
	public CursoDTO obtenerCursoById(@PathVariable int id) {
		return this.service.getCursoById(id);
	}
	
}
