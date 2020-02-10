package pe.edu.ceid.simi.management.domain.usuario.repository;

import java.util.List;

import pe.edu.ceid.simi.management.domain.usuario.model.Usuario;


public interface UsuarioRepository {
	Usuario crearUsuario(Usuario usuario);
	Usuario editUsuario(Usuario usuario, int id);
	List<Usuario> getUsuarios();
	boolean deleteUsuario(int cusuario);
	Usuario getUsuarioById(int id);
}
