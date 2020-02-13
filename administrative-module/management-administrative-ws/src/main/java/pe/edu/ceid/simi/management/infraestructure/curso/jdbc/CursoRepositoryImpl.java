package pe.edu.ceid.simi.management.infraestructure.curso.jdbc;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.management.domain.curso.model.Curso;
import pe.edu.ceid.simi.management.domain.curso.model.CursoDTO;
import pe.edu.ceid.simi.management.domain.curso.repository.CursoRepository;

@Component
public class CursoRepositoryImpl implements CursoRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	private CursoRowMapper row;

	@Override
	public Curso crearCurso(Curso curso) {
		String insertQuery = "INSERT INTO tmcurso (FK_ID_IDIOMA, FK_ID_NIVEL, CICLO) values (?, ?, ?)";
		int success = this.jdbcTemplate.update(insertQuery, curso.getCidioma(), curso.getCnivel(),
				curso.getCiclo());
		
		if (success >= 0) {
			return curso;
		}
		
		return null;
	}

	@Override
	public Curso editCurso(Curso curso, int id) {
		String query = "UPDATE tmcurso SET FK_ID_IDIOMA = ?, FK_ID_NIVEL = ?, CICLO = ? WHERE ID_CURSO = "+ id;
		int update = this.jdbcTemplate.update(query, curso.getCidioma(), curso.getCnivel(),
				curso.getCiclo());
		
		if (update == 1) {
			return curso;
		}
		
		return null;
	}
	
	@Override
	public boolean deleteCurso(int id) {
		String query = "DELETE FROM tmcurso WHERE ID_CURSO = ?";
		int success = this.jdbcTemplate.update(query, id);
		
		if (success >= 0) {
			return true;
		}
		
		return false;
	}
	
	@Override
	public List<CursoDTO> getCursos() {
		String query = "SELECT * FROM tmcurso AS cu "
				+ "INNER JOIN tmidioma AS id ON cu.FK_ID_IDIOMA = id.ID_IDIOMA "
				+ "INNER JOIN txnivel AS ni ON cu.FK_ID_NIVEL = ni.ID_NIVEL";
		List<Map<String, Object>> rows = this.jdbcTemplate.queryForList(query);
		List<CursoDTO> cursos = row.mapRowCurso(rows);
		return cursos;
	}

	@Override
	public CursoDTO getCursoById(int id) {
		String query = "SELECT * FROM tmcurso AS cu "
				+ "INNER JOIN tmidioma AS id ON cu.FK_ID_IDIOMA = id.ID_IDIOMA "
				+ "INNER JOIN txnivel AS ni ON cu.FK_ID_NIVEL = ni.ID_NIVEL WHERE ID_CURSO = " + id;
		List<CursoDTO> curso = this.row.mapRowCurso(this.jdbcTemplate.queryForList(query));
		
		if (curso.size() > 0) {
			return curso.get(0);
		}
		
		return null;
	}

}
