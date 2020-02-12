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

//	(int ccurso, int cidioma,  int cnivel,int ciclo)
	@Override
	public Curso crearCurso(Curso curso) {
		String insertQuery = "INSERT INTO tmcurso (CIDIOMA, CNIVEL, CICLO) values (?, ?, ?)";
		int success = this.jdbcTemplate.update(insertQuery, curso.getCidioma(), curso.getCnivel(),
				curso.getCiclo());
		if (success >= 0) {
			return curso;
		}
		return null;
	}

	@Override
	public Curso editCurso(Curso curso, int id) {
		String query = "UPDATE tmcurso  SET CIDIOMA = ?, CNIVEL = ?, CICLO = ? WHERE CCURSO = "+ id;
		int update = this.jdbcTemplate.update(query, curso.getCidioma(), curso.getCnivel(),
				curso.getCiclo());
		if (update == 1) {
			return curso;
		}
		return null;
	}
	
	@Override
	public boolean deleteCurso(int id) {
		String query = "DELETE FROM tmcurso WHERE CCURSO = ?";
		int success = this.jdbcTemplate.update(query, id);
		if (success >= 0) {
			return true;
		}
		return false;
	}
	
	@Override
	public List<CursoDTO> getCursos() {
		String query = "SELECT * FROM tmcurso AS cu "
				+ "INNER JOIN tmidioma AS id ON cu.CIDIOMA = id.CIDIOMA "
				+ "INNER JOIN txnivel AS ni ON cu.CNIVEL = ni.CNIVEL";
		List<Map<String, Object>> rows = this.jdbcTemplate.queryForList(query);
		List<CursoDTO> cursos = row.mapRowCurso(rows);
		return cursos;
	}

	@Override
	public CursoDTO getCursoById(int id) {
		String query = "SELECT * FROM tmcurso AS cu "
				+ "INNER JOIN tmidioma AS id ON cu.CIDIOMA = id.CIDIOMA "
				+ "INNER JOIN txnivel AS ni ON cu.CNIVEL = ni.CNIVEL  WHERE CCURSO  = " + id;
		List<CursoDTO> curso = this.row.mapRowCurso(this.jdbcTemplate.queryForList(query));
		if (curso.size() > 0) {
			return curso.get(0);
		}
		return null;
	}

}
