package pe.edu.ceid.simi.management.infraestructure.grupohorario.jdbc;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.management.domain.grupohorario.model.GrupoHorario;
import pe.edu.ceid.simi.management.domain.grupohorario.repository.GrupoHorarioRepository;


@Component
public class GrupoHorarioRepositoryImpl implements GrupoHorarioRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	private GrupoHorarioRowMapper row;

	@Override
	public GrupoHorario crearGrupoHorario(GrupoHorario grupoHorario) {
		String insertQuery = "INSERT INTO grupo_horario (NOM_GRUPOHORARIO) values (?)";
		int success = this.jdbcTemplate.update(insertQuery,
				grupoHorario.getNomGrupoHorario());
		if (success >= 0) {
			return grupoHorario;
		}
		return null;
	}

	@Override
	public GrupoHorario editGrupoHorario(GrupoHorario grupoHorario, int id) {
		String query = "UPDATE grupo_horario  SET NOM_GRUPOHORARIO = ? WHERE ID_GRUPOHORARIO = " + id;
		int update = this.jdbcTemplate.update(query, grupoHorario.getNomGrupoHorario());
		
		if (update == 1) {
			return grupoHorario;
		}
		return null;
	}

	@Override
	public List<GrupoHorario> getGrupoHorario() {
		String query = "SELECT * FROM grupo_horario" ;

		List<Map<String, Object>> rows = this.jdbcTemplate.queryForList(query);
		List<GrupoHorario> grupoHorario = row.mapRowGrupoHorario(rows);
		return grupoHorario;
	}

	@Override
	public GrupoHorario getGrupoHorarioById(int id) {
		String query = "SELECT * FROM grupo_horario WHERE ID_GRUPOHORARIO = ?";
		List<GrupoHorario> grupoHorario = this.row.mapRowGrupoHorario(this.jdbcTemplate.queryForList(query));
		if (grupoHorario.size() > 0) {
			return grupoHorario.get(0);
		}
		return null;
	}

	@Override
	public boolean deleteGrupoHorario(int id) {
		String query = "DELETE FROM grupo_horario WHERE ID_GRUPOHORARIO = ?";

		int success = this.jdbcTemplate.update(query, id);
		if (success >= 0) {
			return true;
		}
		return false;
	}

}
