package pe.edu.ceid.simi.management.infraestructure.usuario.jdbc;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.management.domain.usuario.model.Usuario;
import pe.edu.ceid.simi.management.domain.usuario.repository.UsuarioRepository;


@Component
public class UsuarioRepositoryImpl implements UsuarioRepository{

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	private UsuarioRowMapper row;

	@Override
	public Usuario crearUsuario(Usuario usuario) {
		String insertQuery = "INSERT INTO tmusuario (NOMBRES, APPATERNO, APMATERNO, EMAIL, PASSWORD, NUMDOC, SEXO, CTIPOUSUARIO)"
				+ "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
		int success = this.jdbcTemplate.update(insertQuery, usuario.getNombre(), usuario.getApellidoPat(),
				usuario.getApellidoMat(), usuario.getEmail(), usuario.getContrasenia(), usuario.getCdni(),
				usuario.getGenero(), usuario.getRol());
		
		if (success >= 0) {
			return usuario;
		}
		
		return null;
	}

	@Override
	public Usuario editUsuario(Usuario usuario, int id) {
		String query = "UPDATE tmusuario SET NOMBRES = ?, APPATERNO = ?, APMATERNO = ?, EMAIL = ?,"
				+ " PASSWORD = ?, NUMDOC = ?, SEXO = ?, CTIPOUSUARIO = ? WHERE CIDIOMA = "+ id;
		int update = this.jdbcTemplate.update(query, usuario.getNombre(), usuario.getApellidoPat(), usuario.getApellidoMat(),
				usuario.getEmail(), usuario.getContrasenia(), usuario.getCdni(), usuario.getGenero(), usuario.getRol());
		
		if (update == 1) {
			return usuario;
		}
		
		return null;
	}

	@Override
	public List<Usuario> getUsuarios() {
		String query = "SELECT * FROM tmusuario";
		List<Map<String, Object>> rows = this.jdbcTemplate.queryForList(query);
		List<Usuario> usuario = row.mapRowUsuario(rows);
		return usuario;
	}

	@Override
	public boolean deleteUsuario(int cusuario) {
		String query = "DELETE FROM tmusuario WHERE CUSUARIO = ?";
		int success = this.jdbcTemplate.update(query, cusuario);
		
		if (success >= 0) {
			return true;
		}
		
		return false;
	}

	@Override
	public Usuario getUsuarioById(int id) {
		String findIdioma ="SELECT * FROM tmusuario WHERE CUSUARIO = " + id;
		List<Usuario> usuario = this.row.mapRowUsuario(this.jdbcTemplate.queryForList(findIdioma));
		
		if (usuario.size() > 0) {
			return usuario.get(0);
		}
		
		return null;
	}

}
