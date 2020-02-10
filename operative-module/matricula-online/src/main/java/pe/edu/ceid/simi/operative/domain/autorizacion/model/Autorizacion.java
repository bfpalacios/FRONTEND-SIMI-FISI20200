package pe.edu.ceid.simi.operative.domain.autorizacion.model;

public class Autorizacion {

	private String codigo;
	private int tipo;
	
	public Autorizacion(String codigo, int tipo) {
		this.codigo = codigo;
		this.tipo = tipo;
	}
	
	public String getCodigo() {
		return codigo;
	}
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}
	public int getTipo() {
		return tipo;
	}
	public void setTipo(int ctipousuario) {
		this.tipo = ctipousuario;
	}
	
	public static AutorizacionBuilder builder() {
		return new AutorizacionBuilder();
	}
	
	public static class AutorizacionBuilder {
		
		private String codigo;
		private int tipo;
		
		public AutorizacionBuilder() {
		}
		
		public AutorizacionBuilder codigo(String codigo) {
			this.codigo = codigo;
			return this;
		}
		
		public AutorizacionBuilder tipo(int tipo) {
			this.tipo = tipo;
			return this;
		}
		
		public Autorizacion build() {
			return new Autorizacion(codigo, tipo);
		}
	}
}
