package com.ctsousa.econcilia;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ApplicationStarter {

	public static void main(String[] args) {
		System.out.println("teste...");
		SpringApplication.run(ApplicationStarter.class, args);
	}

}
