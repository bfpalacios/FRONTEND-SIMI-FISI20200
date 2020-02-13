package pe.edu.ceid.simi.management.infraestructure.grupohorario.jdbc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.swing.tree.RowMapper;
import javax.swing.tree.TreePath;

import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.management.domain.grupohorario.model.GrupoHorario;


@Component
public class GrupoHorarioRowMapper implements RowMapper {
	
	@Override
	public int[] getRowsForPaths(TreePath[] arg0) {
		// TODO Auto-generated method stub
		return null;
	}
	
	public List<GrupoHorario> mapRowGrupoHorario(List<Map<String, Object>> rows){
		List<GrupoHorario> grupoHorario = new ArrayList<GrupoHorario>();
		for(Map<String, Object> row: rows) {
			int cgrupoHorario = Integer.parseInt(row.get("ID_GRUPOHORARIO").toString());
			String nomGrupoHorario = row.get("NOM_GRUPOHORARIO").toString();
			
			GrupoHorario g = new GrupoHorario(cgrupoHorario, nomGrupoHorario);
			
			grupoHorario.add(g);
		}
		return grupoHorario;
	}
	
}
