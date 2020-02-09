package simi.infraestructure.curso.jdbc;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import simi.domain.curso.repository.CursoRepository;
import simi.domain.curso.model.Curso;
import simi.domain.curso.model.CursoDTO;

@Component
public class CursoRepositoryImpl implements CursoRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	private CursoRowMapper row;


//	(int ccurso, int cidioma,  int cnivel,int ciclo)
	@Override
	public Curso crearCurso(Curso curso) {
		String insertQuery = "insert into curso (CIDIOMA,CNIVEL,CICLO) values (?,?,?)";
		int success = this.jdbcTemplate.update(insertQuery,
				curso.getCidioma(), 
				curso.getCnivel(),
				curso.getCiclo() );
		if (success >= 0) {
			return curso;
		}
		return null;
	}

	@Override
	public Curso editCurso(Curso curso, int id) {
		String query = "UPDATE curso  SET CIDIOMA = ? , CNIVEL = ? , CICLO = ? WHERE CCURSO = "+ id;
		int update = this.jdbcTemplate.update(query, 
				curso.getCidioma() , curso.getCnivel(), curso.getCiclo() );
		
		if (update == 1) {
			return curso;
		}
		return null;
	}
	@Override
	public boolean deleteCurso(int id) {
		String query = "DELETE FROM curso WHERE CCURSO = ?";

		int success = this.jdbcTemplate.update(query, id);
		if (success >= 0) {
			return true;
		}
		return false;
	}
	@Override
	public List<CursoDTO> getCursos() {
		String query = "SELECT * FROM curso AS cu "
				+ "INNER JOIN idioma AS id ON cu.CIDIOMA = id.CIDIOMA "
				+ "INNER JOIN nivel AS ni ON cu.CNIVEL = ni.CNIVEL" ;

		List<Map<String, Object>> rows = this.jdbcTemplate.queryForList(query);
		List<CursoDTO> cursos = row.mapRowCurso(rows);
		return cursos;
	}

	@Override
	public CursoDTO getCursoById(int id) {
		String query = "SELECT * FROM curso AS cu "
				+ "INNER JOIN idioma AS id ON cu.CIDIOMA = id.CIDIOMA "
				+ "INNER JOIN nivel AS ni ON cu.CNIVEL = ni.CNIVEL  WHERE CCURSO  = " + id;
		List<CursoDTO> idioma = this.row.mapRowCurso(this.jdbcTemplate.queryForList(query));
		if (idioma.size() > 0) {
			return idioma.get(0);
		}
		return null;
	}



}
