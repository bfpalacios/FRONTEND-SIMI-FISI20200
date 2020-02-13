package pe.edu.ceid.simi.operative.infraestructure.programacion.jdbc;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.operative.domain.programacion.model.ProgramacionDTO;
import pe.edu.ceid.simi.operative.domain.programacion.repository.ProgramacionRepository;

@Component
public class ProgramacionRepositoryImpl implements ProgramacionRepository{

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	private ProgramacionRowMapper row;
	
	@Override
	public List<ProgramacionDTO> getProgramacion() {
		String query = "CALL SP_PROGRAMACION_LIST;";
		
		List<Map<String, Object>> rows = this.jdbcTemplate.queryForList(query);
		List<ProgramacionDTO> plan = row.mapRowProgramacion(rows);
		return plan;
	}
}
