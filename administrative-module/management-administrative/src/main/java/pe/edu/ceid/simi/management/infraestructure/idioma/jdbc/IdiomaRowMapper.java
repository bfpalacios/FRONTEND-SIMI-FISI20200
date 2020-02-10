package pe.edu.ceid.simi.management.infraestructure.idioma.jdbc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.swing.tree.RowMapper;
import javax.swing.tree.TreePath;

import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.management.domain.idioma.model.Idioma;



@Component
public class IdiomaRowMapper implements RowMapper {

	@Override
	public int[] getRowsForPaths(TreePath[] arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<Idioma> mapRowIdioma(List<Map<String, Object>> rows){
		List<Idioma> idiomass = new ArrayList<Idioma>();
		for(Map<String, Object> row: rows) {
			int cidioma = Integer.parseInt(row.get("CIDIOMA").toString());
			String descIdioma =row.get("DESC_IDIOMA").toString();
			String nomIdioma = row.get("NOM_IDIOMA").toString();
			
			
			Idioma i = new Idioma(cidioma,descIdioma,nomIdioma);
			idiomass.add(i);
		}
		return idiomass;
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
