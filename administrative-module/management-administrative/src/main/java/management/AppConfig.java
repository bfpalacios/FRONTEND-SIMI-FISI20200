package management;

import javax.sql.DataSource;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.io.support.EncodedResource;
import org.springframework.core.io.support.PropertySourceFactory;
import java.io.IOException;
import java.io.InputStream;
import java.util.LinkedHashMap;
import java.util.Map;
import org.springframework.core.env.MapPropertySource;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.env.Environment;

@Configuration
@PropertySource(value = Config.CONFIGURATION, factory = AppConfig.JsonLoader.class)
public class AppConfig extends WebMvcConfigurerAdapter {
	
	@Autowired
	 private Environment env;
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/**").addResourceLocations("classpath:/static/");
	}
	
	@Bean("jsonObject")
	public LinkedHashMap<Object, Object> getProperty() {
		JSONObject json = env.getProperty("configuracion", JSONObject.class);
		@SuppressWarnings("unchecked")LinkedHashMap<Object, Object> database = (LinkedHashMap<Object, Object>) json.get("database");
		return database;
	}

	@Bean
    public DataSource getDataSource() {
		String driver = (String)getProperty().get("driver");
		String url = "jdbc:"+ (String) getProperty().get("type") + "://" + (String)getProperty().get("ip") + ":" +(String)getProperty().get("port") + "/db_simi?autoReconnect=true&useSSL=false";
        String username = (String)getProperty().get("username");
        String password = (String)getProperty().get("password");
		DataSourceBuilder dataSourceBuilder = DataSourceBuilder.create();
        dataSourceBuilder.driverClassName(driver);
        dataSourceBuilder.url(url);
        dataSourceBuilder.username(username);
        dataSourceBuilder.password(password);
        System.out.println(url);
        return dataSourceBuilder.build();
    }
	
    @Bean("jdbcTemplate")
    JdbcTemplate JdbcTemplate(DataSource centralDataSource) {
        return new JdbcTemplate(centralDataSource);
    }
	
	public static class JsonLoader implements PropertySourceFactory {

		@Override
		@SuppressWarnings("unchecked")
		public org.springframework.core.env.PropertySource<?> createPropertySource(String name,
				EncodedResource resource) {
			
			Map<String, Object> readValue = null;
			InputStream inputStream;
			try {
				inputStream = resource.getInputStream();
				ObjectMapper objectMapper = new ObjectMapper();
				readValue = objectMapper.readValue(inputStream, Map.class);
	            return new MapPropertySource("json-source", readValue);
			} catch (IOException e) {
				e.printStackTrace();
				return null;
			}
			
		}

    }
}
