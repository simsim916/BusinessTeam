package com.example.demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer{
	
	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/").setViewName("redirect:/home");
	}
	
	public void addViewControllers2(ViewControllerRegistry registry) {
		registry.addViewController("/orderpage").setViewName("redirect:/orderpage");
	}
	
	
	
}
