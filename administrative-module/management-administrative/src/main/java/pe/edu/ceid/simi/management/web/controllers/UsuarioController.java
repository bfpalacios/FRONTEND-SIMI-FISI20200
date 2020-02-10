package pe.edu.ceid.simi.management.web.controllers;

import java.util.List;

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

import pe.edu.ceid.simi.management.application.usuario.UsuarioService;
import pe.edu.ceid.simi.management.domain.usuario.model.Usuario;


@CrossOrigin(origins = "localhost:4200")
@RestController
@RequestMapping({"/api/usuario"})
public class UsuarioController {

	@Autowired
	private UsuarioService service;
	
	@GetMapping(path = {"/listUsuarios"})
	public List<Usuario> getUsuarios() {
		return this.service.getUsuarios();
	}
	
	@PutMapping(path = {"/actualizarUsuario/{id}"})
	public Usuario actualizarUsuarioById(@RequestBody Usuario usuario, @PathVariable int id) {
		usuario.setCusuario(id);
		return this.service.editUsuario(usuario, id);
	}

	@DeleteMapping(path = {"/eliminarUsuarioById/{id}"})
	public boolean eliminarUsuarioById(@PathVariable int id) {	
			return this.service.deleteUsuario(id);
	}
	
	@PostMapping(path = {"/crearUsuario"})
	public Usuario crearUsuario(@RequestBody Usuario usuario) {
		return this.service.crearUsuario(usuario);
	}
	
	@GetMapping(path= {"/obtenerUsuarioById/{id}"})
	public Usuario obtenerUsuario(@PathVariable int id) {
		return this.service.getUsuarioById(id);
	}
	
}
