package simi.domain.idioma.repository;
import java.util.List;
import simi.domain.idioma.model.Idioma;

public interface IdiomaRepository {

	Idioma crearIdioma(Idioma idioma);
	Idioma editIdioma(Idioma idioma, int id);
	List<Idioma> getIdiomas();
	boolean deleteIdioma(int cidioma);
	Idioma getIdiomaById(int id);
}
