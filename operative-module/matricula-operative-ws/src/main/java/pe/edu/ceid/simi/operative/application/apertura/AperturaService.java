package pe.edu.ceid.simi.operative.application.apertura;

import java.util.List;

import pe.edu.ceid.simi.operative.domain.apertura.model.Apertura;
import pe.edu.ceid.simi.operative.domain.apertura.model.AperturaDTO;

public interface AperturaService {
	List<AperturaDTO> getAperturas();
	boolean saveAperturas(List<Apertura> aperturas);
}
