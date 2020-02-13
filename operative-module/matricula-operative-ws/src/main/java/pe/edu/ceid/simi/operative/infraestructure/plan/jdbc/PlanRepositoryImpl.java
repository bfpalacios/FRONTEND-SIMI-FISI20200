package pe.edu.ceid.simi.operative.infraestructure.plan.jdbc;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.operative.domain.plan.model.Plan;
import pe.edu.ceid.simi.operative.domain.plan.model.PlanDTO;
import pe.edu.ceid.simi.operative.domain.plan.repository.PlanRepository;

@Component
public class PlanRepositoryImpl implements PlanRepository{

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	private PlanRowMapper row;
	
	@Override
	public List<PlanDTO> getPlan() {
		String query = "SELECT CURSO.ID_CURSO, CURSO.FK_ID_IDIOMA, CURSO.FK_ID_NIVEL, CURSO.CICLO, IDIOMA.NOM_IDIOMA, NIVEL.NOM_NIVEL, COUNT(CURSO.CICLO)" 
				+ "FROM TMCURSO CURSO"
				+ "INNER JOIN TMIDIOMA IDIOMA ON CURSO.FK_ID_IDIOMA = IDIOMA.ID_IDIOMA"
				+ "INNER JOIN TXNIVEL NIVEL ON CURSO.FK_ID_NIVEL = NIVEL.ID_NIVEL" 
				+ "GROUP BY IDIOMA.NOM_IDIOMA, NIVEL.NOM_NIVEL" 
				+ "ORDER BY IDIOMA.ID_IDIOMA, NIVEL.ID_NIVEL";
		
		List<Map<String, Object>> rows = this.jdbcTemplate.queryForList(query);
		List<PlanDTO> plan = row.mapRowPlan(rows);
		return plan;
	}
}
