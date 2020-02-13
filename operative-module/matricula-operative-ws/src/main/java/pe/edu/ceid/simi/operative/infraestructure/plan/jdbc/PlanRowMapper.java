package pe.edu.ceid.simi.operative.infraestructure.plan.jdbc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.swing.tree.RowMapper;
import javax.swing.tree.TreePath;

import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.operative.domain.plan.model.PlanDTO;

public class PlanRowMapper implements RowMapper{

	public int[] getRowsForPaths(TreePath[] arg0) {
		// TODO Auto-generated method stub
		return null;
	}
	
	public List<PlanDTO> mapRowPlan(List<Map<String, Object>> rows){
		List<PlanDTO> plan = new ArrayList<PlanDTO>();
		for(Map<String, Object> row: rows) {
			int idCurso = Integer.parseInt(row.get("ID_CURSO").toString());
			int idIdioma = Integer.parseInt(row.get("FK_ID_IDIOMA").toString());
			String nomIdioma =row.get("NOM_IDIOMA").toString();
			int idNivel = Integer.parseInt(row.get("FK_ID_NIVEL").toString());
			String nomNivel = row.get("NOM_NIVEL").toString();
			int ciclo = Integer.parseInt(row.get("CICLO").toString());
			int countCiclo = Integer.parseInt(row.get("COUNTCICLO").toString());
			
			PlanDTO i = new PlanDTO(idCurso, idIdioma, nomIdioma, idNivel, nomNivel, ciclo, countCiclo);
			
			plan.add(i);
		}
		return plan;
	}
}
