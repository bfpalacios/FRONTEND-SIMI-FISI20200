package pe.edu.ceid.simi.management.infraestructure.aula.jdbc;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.management.domain.aula.model.Aula;
import pe.edu.ceid.simi.management.domain.aula.model.AulaDTO;
import pe.edu.ceid.simi.management.domain.aula.repository.AulaRepository;


@Component
public class AulaRepositoryImpl implements AulaRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	private AulaRowMapper row;

	@Override
	public Aula crearAula(Aula aula) {
		String insertQuery = "INSERT INTO tmaula (CSEDE, NOM_AULA, REF_AULA, CAPAC_AULA) values (?, ?, ?, ?)";
		int success = this.jdbcTemplate.update(insertQuery, aula.getCsede(), aula.getNomAula(), aula.getRefAula(),
				 aula.getRefAula(), aula.getCapacAula());
		if (success >= 0) {
			return aula;
		}
		return null;
	}

	@Override
	public Aula editAula(Aula aula, int id) {
		String query = "UPDATE tmaula SET CSEDE = ?, NOM_AULA = ? , REF_AULA = ? , CAPAC_AULA = ? WHERE CAULA = "+ id;
		int update = this.jdbcTemplate.update(query, aula.getCsede(), aula.getNomAula(), aula.getRefAula(),
				aula.getRefAula(), aula.getCapacAula());
		if (update == 1) {
			return aula;
		}
		return null;
	}

	@Override
	public List<AulaDTO> getAulas() {
		String query = "SELECT * FROM tmaula AS au "
				+ "INNER JOIN tmsede AS se ON au.CSEDE = se.CSEDE";

		List<Map<String, Object>> rows = this.jdbcTemplate.queryForList(query);
		List<AulaDTO> aulas = row.mapRowAula(rows);
		return aulas;
	}

	@Override
	public AulaDTO getAulaById(int id) {
		String query = "SELECT * FROM tmaula AS au "
				+ "INNER JOIN tmsede AS se ON au.CSEDE = se.CSEDE WHERE CAULA  = " + id;
		List<AulaDTO> aula = this.row.mapRowAula(this.jdbcTemplate.queryForList(query));
		if (aula.size() > 0) {
			return aula.get(0);
		}
		return null;
	}

	@Override
	public boolean deleteAula(int id) {
		String query = "DELETE FROM tmaula WHERE CAULA = ?";

		int success = this.jdbcTemplate.update(query, id);
		if (success >= 0) {
			return true;
		}
		return false;
	}

}
