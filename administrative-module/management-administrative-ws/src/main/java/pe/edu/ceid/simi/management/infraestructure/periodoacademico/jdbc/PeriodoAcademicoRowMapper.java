package pe.edu.ceid.simi.management.infraestructure.periodoacademico.jdbc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.swing.tree.RowMapper;
import javax.swing.tree.TreePath;

import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.management.domain.periodoacademico.model.PeriodoAcademico;

@Component
public class PeriodoAcademicoRowMapper implements RowMapper {

	@Override
	public int[] getRowsForPaths(TreePath[] path) {
		// TODO Auto-generated method stub
		return null;
	}
	
	public List<PeriodoAcademico> mapRowPeriodoAcademico(List<Map<String, Object>> rows){
		List<PeriodoAcademico> periodoss = new ArrayList<PeriodoAcademico>();
		
		for(Map<String, Object> row: rows) {
			int cperiodo = Integer.parseInt(row.get("CPERIODO").toString());
			int anioPeriodo = Integer.parseInt(row.get("ANIO_PERIODO").toString());
			int mesPeriodo = Integer.parseInt(row.get("MES_PERIODO").toString());
			PeriodoAcademico p = new PeriodoAcademico(cperiodo, anioPeriodo, mesPeriodo);
			periodoss.add(p);
		}
		
		return periodoss;
	}
	
}
