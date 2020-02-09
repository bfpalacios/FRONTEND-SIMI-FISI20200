package simi.application.idioma;

import java.util.List;

import simi.domain.idioma.model.Idioma;

public interface IdiomaService {

	Idioma crearIdioma(Idioma idioma);
	Idioma editIdioma(Idioma idioma, int id);
	List<Idioma> getIdiomas();
	boolean deleteIdioma(int cidioma);
	
}
