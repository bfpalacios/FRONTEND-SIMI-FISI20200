package pe.edu.ceid.simi.operative.domain.authentication.model;

public class Authentication {

	private String email;
	private String password;
	
	public Authentication(String email, String password) {
		this.email = email;
		this.password = password;
	}
	
	public Authentication() {}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public static AuthenticationBuilder builder() {
		return new AuthenticationBuilder();
	}
	
	public static class AuthenticationBuilder {
		
		private String email;
		private String password;
		
		public AuthenticationBuilder() {
		}
		
		public AuthenticationBuilder email(String email) {
			this.email = email;
			return this;
		}
		
		public AuthenticationBuilder password(String password) {
			this.password = password;
			return this;
		}
		
		public Authentication build() {
			return new Authentication(email, password);
		}
	}
	
	
}
