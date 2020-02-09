package simi.infraestructure.nivel.jdbc;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;


import simi.domain.nivel.model.Nivel;
import simi.domain.nivel.repository.NivelRepository;

@Component
public class NivelRepositoryImpl implements NivelRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	private NivelRowMapper row;



	@Override
	public List<Nivel> getNiveles() {
		String query = "SELECT * FROM nivel";

		List<Map<String, Object>> rows = this.jdbcTemplate.queryForList(query);
		List<Nivel> nivel = row.mapRowNivel(rows);
		return nivel;
	}

	@Override
	public Nivel getNivelById(int id) {
		String find ="SELECT * FROM  nivel WHERE CNIVEL  = " + id;
		List<Nivel> nivel = this.row.mapRowNivel(this.jdbcTemplate.queryForList(find));
		if (nivel.size() > 0) {
			return nivel.get(0);
		}
		return null;
	}

}
