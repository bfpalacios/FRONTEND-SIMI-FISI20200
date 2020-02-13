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
		String query = "CALL SP_PLAN_LIST";
		
		List<Map<String, Object>> rows = this.jdbcTemplate.queryForList(query);
		List<PlanDTO> plan = row.mapRowPlan(rows);
		return plan;
	}
}
