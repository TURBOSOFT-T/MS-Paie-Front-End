package com.web.mspaie;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

import javax.annotation.PostConstruct;
import java.util.TimeZone;
/**
 * @author thoma
 *
 */
@SpringBootApplication
@EnableAutoConfiguration
public class MSPayApplication {
	

	@PostConstruct
	void init() {
		TimeZone.setDefault(TimeZone.getTimeZone("UTC"));
	}
	
	
	

	public static void main(String[] args) {
		SpringApplication.run(MSPayApplication.class, args);
	}
}
