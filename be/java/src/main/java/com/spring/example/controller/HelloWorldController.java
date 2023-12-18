package com.spring.example.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.client.RestTemplate;

@CrossOrigin
@RestController
public class HelloWorldController {
	
	@GetMapping("/hello")
	public ResponseEntity<?> hello() {
		return new ResponseEntity<>("Hello World, from Java Spring Boot!", HttpStatus.OK);
	}

	@GetMapping("/go")
	public ResponseEntity<?> golang() {
		final String uri = "http://localhost:1081/hello";

		RestTemplate restTemplate = new RestTemplate();
		String result = restTemplate.getForObject(uri, String.class);

		return new ResponseEntity<>("Java call: " + result, HttpStatus.OK);
	}
}
