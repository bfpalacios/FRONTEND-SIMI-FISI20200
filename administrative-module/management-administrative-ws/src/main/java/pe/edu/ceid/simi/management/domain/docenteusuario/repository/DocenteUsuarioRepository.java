package pe.edu.ceid.simi.management.domain.docenteusuario.repository;

import java.util.List;

import pe.edu.ceid.simi.management.domain.docenteusuario.model.DocenteUsuario;

public interface DocenteUsuarioRepository {
	DocenteUsuario crearDocenteUsuario(DocenteUsuario docenteUsuario);
	DocenteUsuario editDocenteUsuario(DocenteUsuario docenteUsuario, int id);
	List<DocenteUsuario> getDocenteUsuario();
	boolean deleteDocenteUsuario(int cdocenteUsuario);
	DocenteUsuario getDocenteUsuarioById(int id);
}
