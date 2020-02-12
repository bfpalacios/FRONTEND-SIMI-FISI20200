package pe.edu.ceid.simi.management.infraestructure.estudiante.jdbc;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.management.domain.estudiante.model.Estudiante;
import pe.edu.ceid.simi.management.domain.estudiante.model.EstudianteDTO;
import pe.edu.ceid.simi.management.domain.estudiante.repository.EstudianteRepository;

@Component
public class EstudianteRepositoryImpl implements EstudianteRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	private EstudianteRowMapper row;

	@Override
	public Estudiante crearEstudiante(Estudiante estudiante) {
		String insertQuery = "INSERT INTO tmestudiante (CUSUARIO, CTIPO_ESTUDIANTE, FACULTAD) values (?, ?, ?)";
		int success = this.jdbcTemplate.update(insertQuery, estudiante.getCusuario(),
				estudiante.getCtipoEsudiante(), estudiante.getFacultad());
		
		if (success >= 0) {
			return estudiante;
		}
		
		return null;
	}

	@Override
	public Estudiante editEstudiante(Estudiante estudiante, int id) {
		String query = "UPDATE tmestudiante SET CUSUARIO = ?, CTIPO_ESTUDIANTE = ?, FACULTAD = ?"
				+ " WHERE CDOCENTE = "+ id;
		int update = this.jdbcTemplate.update(query, estudiante.getCusuario(),
				estudiante.getCtipoEsudiante(), estudiante.getFacultad());
		
		if (update == 1) {
			return estudiante;
		}
		
		return null;
	}

	@Override
	public boolean deleteEstudiante(int id) {
		String query = "DELETE FROM tmestudiante WHERE CESTUDIANTE = ?";
		int success = this.jdbcTemplate.update(query, id);
		
		if (success >= 0) {
			return true;
		}
		
		return false;
	}

	@Override
	public List<EstudianteDTO> getEstudiantes() {
		String query = "SELECT * FROM tmestudiante AS doc "
				+ "INNER JOIN tmusuario AS us ON doc.CUSUARIO = us.CUSUARIO "
				+ "INNER JOIN tmtipo_estudiante AS ti ON doc.CTIPO_ESTUDIANTE = ti.CTIPO_ESTUDIANTE";
		List<Map<String, Object>> rows = this.jdbcTemplate.queryForList(query);
		List<EstudianteDTO> estudiante = row.mapRowEstudiante(rows);
		return estudiante;
	}

	@Override
	public EstudianteDTO getEstudianteById(int id) {
		String query ="SELECT * FROM tmestudiante AS doc "
				+ "INNER JOIN tmusuario AS us ON doc.CUSUARIO = us.CUSUARIO "
				+ "INNER JOIN tmtipo_estudiante AS ti ON doc.CTIPO_ESTUDIANTE = ti.CTIPO_ESTUDIANTE "
				+ "WHERE CESTUDIANTE = " + id;
		List<EstudianteDTO> estudiante = this.row.mapRowEstudiante(this.jdbcTemplate.queryForList(query));
		
		if (estudiante.size() > 0) {
			return estudiante.get(0);
		}
		
		return null;
	}

}
