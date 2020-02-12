package pe.edu.ceid.simi.management.infraestructure.usuario.jdbc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.swing.tree.RowMapper;
import javax.swing.tree.TreePath;

import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.management.domain.usuario.model.Usuario;


@Component
public class UsuarioRowMapper implements RowMapper {

	@Override
	public int[] getRowsForPaths(TreePath[] arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<Usuario> mapRowUsuario(List<Map<String, Object>> rows){
		List<Usuario> usuarioss = new ArrayList<Usuario>();
		for(Map<String, Object> row: rows) {
			int cusuario = Integer.parseInt(row.get("CUSUARIO").toString());
			String nombre = row.get("NOMBRE").toString();
			String apellidoPat = row.get("APELLIDOPAT").toString();
			String apellidoMat =row.get("APELLIDOMAT").toString();
			String email = row.get("EMAIL").toString();
			String contrasenia =row.get("CONTRASENIA").toString();
			int dni = Integer.parseInt(row.get("DNI").toString());
			int genero = Integer.parseInt(row.get("GENERO").toString());
			int crol = Integer.parseInt(row.get("CROL").toString());
			
			Usuario u = new Usuario(cusuario,nombre,apellidoPat,apellidoMat,email,contrasenia,dni,genero,crol);
			usuarioss.add(u);
		}
		return usuarioss;
	}
}
