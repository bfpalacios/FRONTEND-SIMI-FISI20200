package pe.edu.ceid.simi.management.infraestructure.horario.jdbc;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.management.domain.horario.model.Horario;
import pe.edu.ceid.simi.management.domain.horario.model.HorarioDTO;
import pe.edu.ceid.simi.management.domain.horario.repository.HorarioRepository;



@Component
public class HorarioRepositoryImpl implements HorarioRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	private HorarioRowMapper row;

	@Override
	public Horario crearHorario(Horario horario) {
		String insertQuery = "insert into txhorario (CDIA, CHORA) values (?, ?)";
		int success = this.jdbcTemplate.update(insertQuery, horario.getCdia(), horario.getChora() );
		if (success >= 0) {
			return horario;
		}
		return null;
	}

	@Override
	public Horario editHorario(Horario horario, int id) {
		String query = "UPDATE txhorario SET CDIA = ?, CHORA = ? WHERE CHORARIO = "+ id;
		int update = this.jdbcTemplate.update(query, horario.getCdia(), horario.getChora());
		if (update == 1) {
			return horario;
		}
		return null;
	}

	@Override
	public boolean deleteHorario(int chorario) {
		String query = "DELETE FROM txhorario WHERE CHORARIO = ?";
		int success = this.jdbcTemplate.update(query, chorario);
		if (success >= 0) {
			return true;
		}
		return false;
	}

	@Override
	public List<HorarioDTO> getHorarios() {
		String query = "SELECT * FROM txhorario AS ho "
				+ "INNER JOIN txdias_clase AS di ON ho.CDIA = di.CDIA "
				+ "INNER JOIN txhoras_clase AS hr ON ho.CHORA = hr.CHORA";
		List<Map<String, Object>> rows = this.jdbcTemplate.queryForList(query);
		List<HorarioDTO> horarios = row.mapRowHorario(rows);
		return horarios;
	}

	@Override
	public HorarioDTO getHorarioById(int id) {
		String query = "SELECT * FROM txhorario AS ho "
				+ "INNER JOIN txdias_clase AS di ON ho.CDIA = di.CDIA "
				+ "INNER JOIN txhoras_clase AS hr ON ho.CHORA = hr.CHORA WHERE CHORARIO = " + id;
		List<HorarioDTO> horario = this.row.mapRowHorario(this.jdbcTemplate.queryForList(query));
		if (horario.size() > 0) {
			return horario.get(0);
		}
		return null;
	}

}
