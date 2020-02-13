package pe.edu.ceid.simi.operative.infraestructure.matricula.jdbc;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.operative.domain.matricula.model.Matricula;
import pe.edu.ceid.simi.operative.domain.matricula.model.MatriculaDTO;
import pe.edu.ceid.simi.operative.domain.matricula.repository.MatriculaRepository;

public class MatriculaRepositoryImpl implements MatriculaRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	private MatriculaRowMapper row;
	
	@Override
	public Matricula crearMatricula(Matricula matricula) {
		String insertQuery = "INSERT INTO tpmatricula (FK_COD_ESTUDIANTE_CI, FK_ID_PROGCURSO, FK_NUM_VOUCHER, FK_ID_ESTADO_MATRICULA) values (?, ?, ?, ?)";
		int success = this.jdbcTemplate.update(insertQuery, matricula.getCodEstudiante(), matricula.getIdProgcurso(),
				matricula.getNumvouvher(), matricula.getEstadoMat());
		if (success >= 0) {
			return matricula;
		}
		return null;
	}

	@Override
	public Matricula editMatricula(Matricula matricula, int id) {
		String query = "UPDATE tpmatricula  SET FK_COD_ESTUDIANTE_CI = ?, FK_ID_PROGCURSO = ?, FK_NUM_VOUCHER = ?, FK_ID_ESTADO_MATRICULA = ? WHERE ID_MATRICULA = "+ id;
		int update = this.jdbcTemplate.update(query,matricula.getCodEstudiante(), matricula.getIdProgcurso(),
				matricula.getNumvouvher(), matricula.getEstadoMat());
		if (update == 1) {
			return matricula;
		}
		return null;
	}

	@Override
	public boolean deleteMatricula(int id) {
		String query = "DELETE FROM tpmatricula WHERE ID_MATRICULA = ?";
		int success = this.jdbcTemplate.update(query, id);
		if (success >= 0) {
			return true;
		}		return false;
	}

	@Override
	public List<MatriculaDTO> getMatricula() {
		String query = "CALL SP_MATRICULA_LIST";
		
		List<Map<String, Object>> rows = this.jdbcTemplate.queryForList(query);
		List<MatriculaDTO> matriculas = row.mapRowMatricula(rows);
		return matriculas;
	}

	@Override
	public MatriculaDTO getMatriculaById(int id) {
		String query = "CALL USP_MATRICULA_LIST ("+id+")";
		
		List<MatriculaDTO> matricula = this.row.mapRowMatricula(this.jdbcTemplate.queryForList(query));
		if (matricula.size() > 0) {
			return matricula.get(0);
		}
		return null;
	}
	
	
}
