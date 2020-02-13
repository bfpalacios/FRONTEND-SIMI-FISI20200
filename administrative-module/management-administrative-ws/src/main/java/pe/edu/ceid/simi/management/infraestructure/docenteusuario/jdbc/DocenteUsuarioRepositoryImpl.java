package pe.edu.ceid.simi.management.infraestructure.docenteusuario.jdbc;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.management.domain.docenteusuario.model.DocenteUsuario;
import pe.edu.ceid.simi.management.domain.docenteusuario.repository.DocenteUsuarioRepository;
import pe.edu.ceid.simi.management.infraestructure.docente.jdbc.DocenteRowMapper;

@Component
public class DocenteUsuarioRepositoryImpl implements DocenteUsuarioRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	private DocenteRowMapper row;

	@Override
	public DocenteUsuario crearDocenteUsuario(DocenteUsuario docenteUsuario) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DocenteUsuario editDocenteUsuario(DocenteUsuario docenteUsuario, int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<DocenteUsuario> getDocenteUsuario() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteDocenteUsuario(int cdocenteUsuario) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public DocenteUsuario getDocenteUsuarioById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
