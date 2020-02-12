package pe.edu.ceid.simi.management.infraestructure.aula.jdbc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.swing.tree.RowMapper;
import javax.swing.tree.TreePath;

import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.management.domain.aula.model.AulaDTO;


@Component
public class AulaRowMapper implements RowMapper {

	@Override
	public int[] getRowsForPaths(TreePath[] arg0) {
		// TODO Auto-generated method stub
		return null;
	}
	
	public List<AulaDTO> mapRowAula(List<Map<String, Object>> rows){
		List<AulaDTO> aulas = new ArrayList<AulaDTO>();
		for(Map<String, Object> row: rows) {
			int caula = Integer.parseInt(row.get("CAULA").toString());
			int csede = Integer.parseInt(row.get("CSEDE").toString());
			String nomSede = row.get("NOM_SEDE").toString();
			String nomAula =row.get("NOM_AULA").toString();
			String refAula = row.get("REF_AULA").toString();
			int capacAula = Integer.parseInt(row.get("CAPAC_AULA").toString());
			AulaDTO a = new AulaDTO(caula, nomAula, refAula, csede, nomSede, capacAula);
			
			aulas.add(a);
		}
		return aulas;
	}
}
