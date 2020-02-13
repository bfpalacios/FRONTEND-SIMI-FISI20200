package pe.edu.ceid.simi.management.infraestructure.progdoccurso.jdbc;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.management.domain.progdoccurso.model.ProgDocCurso;
import pe.edu.ceid.simi.management.domain.progdoccurso.model.ProgDocCursoDTO;
import pe.edu.ceid.simi.management.domain.progdoccurso.repository.ProgDocCursoRepository;

@Component
public class ProgDocCursoRepositoryImpl implements ProgDocCursoRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	private ProgDocCursoRowMapper row;

	@Override
	public ProgDocCurso crearProgDocCurso(ProgDocCurso progDocCurso) {
		String insertQuery = "INSERT INTO tpprog_doc_curso (FK_ID_DOCENTE, FK_ID_CURSO, FK_ID_PERIODO) "
				+ "VALUES (?, ?, ?)";
		int success = this.jdbcTemplate.update(insertQuery, progDocCurso.getCdocente(), progDocCurso.getCcurso(),
				progDocCurso.getCperiodo());
		
		if (success >= 0) {
			return progDocCurso;
		}
		
		return null;
	}

	@Override
	public ProgDocCurso editProgDocCurso(ProgDocCurso progDocCurso, int id) {
		String query = "UPDATE tpprog_doc_curso SET FK_ID_DOCENTE = ?, FK_ID_CURSO = ?, FK_ID_PERIODO = ? "
				+ "WHERE ID_PROG_DOC_CUR = "+ id;
		int update = this.jdbcTemplate.update(query, progDocCurso.getCdocente(), progDocCurso.getCcurso(),
				progDocCurso.getCperiodo());
		
		if (update == 1) {
			return progDocCurso;
		}
		
		return null;
	}

	@Override
	public boolean deleteProgDocCurso(int id) {
		String query = "DELETE FROM tpprog_doc_curso WHERE ID_PROG_DOC_CUR = ?";
		int success = this.jdbcTemplate.update(query, id);
		
		if (success >= 0) {
			return true;
		}
		
		return false;
	}

	@Override
	public List<ProgDocCursoDTO> getProgDocCursos() {
		String query = "SELECT * FROM tpprog_doc_curso AS pdc " + 
				"INNER JOIN tmdocente AS doc ON doc.COD_DOCENTE_CI = pdc.FK_ID_DOCENTE " + 
				"INNER JOIN tmusuario AS us ON us.ID_USUARIO = doc.FK_ID_USUARIO " + 
				"INNER JOIN tmpersona AS pe ON pe.ID_PERSONA = us.FK_ID_PERSONA " + 
				"INNER JOIN tmcurso AS cu ON cu.ID_CURSO = pdc.FK_ID_CURSO " + 
				"INNER JOIN txnivel AS ni ON ni.ID_NIVEL = cu.FK_ID_NIVEL " + 
				"INNER JOIN tmidioma AS id ON id.ID_IDIOMA = cu.FK_ID_IDIOMA " + 
				"INNER JOIN tmperiodo_academico AS pe ON pe.ID_PERIODO = pdc.FK_ID_PERIODO";
		List<Map<String, Object>> rows = this.jdbcTemplate.queryForList(query);
		List<ProgDocCursoDTO> progs = row.mapRowProgDocCurso(rows);
		return progs;
	}

	@Override
	public ProgDocCursoDTO getProgDocCursoById(int id) {
		String query = "SELECT * FROM tpprog_doc_curso AS pr " + 
				"INNER JOIN tmdocente AS doc ON doc.COD_DOCENTE_CI = pr.FK_ID_DOCENTE " + 
				"INNER JOIN tmusuario AS us ON us.ID_USUARIO = doc.FK_ID_USUARIO " + 
				"INNER JOIN tmcurso AS cu ON cu.ID_CURSO = pr.FK_ID_CURSO " + 
				"INNER JOIN txnivel AS ni ON ni.ID_NIVEL = cu.FK_ID_NIVEL " + 
				"INNER JOIN tmidioma AS id ON id.ID_IDIOMA = cu.FK_ID_IDIOMA " + 
				"INNER JOIN tmperiodo_academico AS pe ON pe.ID_PERIODO = pr.FK_ID_PERIODO " +
				"WHERE ID_PROG_DOC_CUR = " + id;
		List<ProgDocCursoDTO> progs = this.row.mapRowProgDocCurso(this.jdbcTemplate.queryForList(query));
		
		if (progs.size() > 0) {
			return progs.get(0);
		}
		
		return null;
	}

}
