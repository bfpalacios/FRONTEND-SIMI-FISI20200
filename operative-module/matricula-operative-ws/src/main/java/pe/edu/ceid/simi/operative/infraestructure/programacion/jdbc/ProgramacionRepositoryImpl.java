package pe.edu.ceid.simi.operative.infraestructure.programacion.jdbc;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.operative.domain.programacion.model.ProgramacionDTO;
import pe.edu.ceid.simi.operative.domain.plan.model.PlanDTO;
import pe.edu.ceid.simi.operative.domain.programacion.model.Programacion;
import pe.edu.ceid.simi.operative.domain.programacion.repository.ProgramacionRepository;
import pe.edu.ceid.simi.operative.infraestructure.plan.jdbc.PlanRowMapper;

public class ProgramacionRepositoryImpl implements ProgramacionRepository{

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	private ProgramacionRowMapper row;
	
	@Override
	public List<ProgramacionDTO> getProgramacion() {
		String query = "IDIOMA.NOM_IDIOMA, NIVEL.NOM_NIVEL, CURSO.CICLO, PER.NOMBRE, PER.APELLIDO_PAT, PER.APELLIDO_MAT,"
				+ "IDIOMA.NOM_IDIOMA, NIVEL.NOM_NIVEL, CURSO.CICLO, PER.NOMBRE, PER.APELLIDO_PAT, PER.APELLIDO_MAT,"
				+ "GHOR.NOM_GRUPOHORARIO, HCLA.HORA_INICIO, HCLA.HORA_SALIDA" 
				+ "FROM TPPROG_CURSO PROG"
				+ "INNER JOIN TPPROG_DOC_CURSO PROGDC ON PROG.FK_ID_PROG_DOC_CUR = PROGDC.ID_PROG_DOC_CUR"
				+ "INNER JOIN TMCURSO CURSO ON CURSO.ID_CURSO = PROGDC.FK_ID_CURSO" 
				+ "INNER JOIN TMIDIOMA IDIOMA ON IDIOMA.ID_IDIOMA = CURSO.FK_ID_IDIOMA" 
				+ "INNER JOIN TXNIVEL NIVEL ON NIVEL.ID_NIVEL = CURSO.FK_ID_NIVEL" 
				+ "INNER JOIN TMDOCENTE DOC ON DOC.COD_DOCENTE_CI = PROGDC.FK_ID_DOCENTE" 
				+ "INNER JOIN TMUSUARIO USUARIO ON USUARIO.ID_USUARIO = DOC.FK_ID_USUARIO" 
				+ "INNER JOIN TMPERSONA PER ON PER.ID_PERSONA = USUARIO.FK_ID_PERSONA" 
				+ "INNER JOIN TMGRUPO_HORARIO GHOR ON GHOR.ID_GRUPOHORARIO = PROG.FK_ID_GRUPOHORARIO" 
				+ "INNER JOIN TMHORARIO_GRUPO_HORARIO HGO ON HGO.FK_ID_GRUPOHORARIO = GHOR.ID_GRUPOHORARIO"  
				+ "INNER JOIN TXHORAS_CLASE HCLA ON HCLA.ID_HORA = HGO.FK_ID_HORA" 
				+ "GROUP BY PROG.ID_PROGCURSO";
		
		List<Map<String, Object>> rows = this.jdbcTemplate.queryForList(query);
		List<ProgramacionDTO> plan = row.mapRowProgramacion(rows);
		return plan;
	}
}
