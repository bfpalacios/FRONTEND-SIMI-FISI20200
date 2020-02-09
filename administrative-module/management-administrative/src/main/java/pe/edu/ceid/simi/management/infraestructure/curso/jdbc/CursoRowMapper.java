package pe.edu.ceid.simi.management.infraestructure.curso.jdbc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.swing.tree.RowMapper;
import javax.swing.tree.TreePath;

import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.management.domain.curso.model.CursoDTO;


@Component
public class CursoRowMapper implements RowMapper {

	@Override
	public int[] getRowsForPaths(TreePath[] arg0) {
		// TODO Auto-generated method stub
		return null;
	}
	
	public List<CursoDTO> mapRowCurso(List<Map<String, Object>> rows){
		List<CursoDTO> cursos = new ArrayList<CursoDTO>();
		for(Map<String, Object> row: rows) {
			int ccurso = Integer.parseInt(row.get("CCURSO").toString());
			int cidioma = Integer.parseInt(row.get("CIDIOMA").toString());
			String nomIdioma =row.get("NOM_IDIOMA").toString();
			int cnivel = Integer.parseInt(row.get("CNIVEL").toString());
			String nomNivel = row.get("NOM_NIVEL").toString();
			int ciclo = Integer.parseInt(row.get("CICLO").toString());
			CursoDTO i = new CursoDTO(ccurso, cidioma, nomIdioma, cnivel, nomNivel, ciclo);
			
			cursos.add(i);
		}
		return cursos;
	}
	
	/*
	public List<TipoUsuarioPermiso> mapRowTipoUsuarioPermiso(List<Map<String, Object>> rows) {
		List<TipoUsuarioPermiso> list = new ArrayList<TipoUsuarioPermiso>();
		for(Map<String, Object> row: rows) {
			int ctipouspermiso = Integer.parseInt(row.get("CTIPOUSPERMISO").toString()); 
			int ctipousuario = Integer.parseInt(row.get("CTIPOUSUARIO").toString());
			int cpermiso = Integer.parseInt(row.get("CPERMISO").toString());
			TipoUsuarioPermiso tipouspermiso = new TipoUsuarioPermiso(ctipouspermiso, ctipousuario, cpermiso);
			list.add(tipouspermiso);
		}
		return list;
	}
	
	@Override
	public int[] getRowsForPaths(TreePath[] path) {
		return new int[0];
	}*/
}
