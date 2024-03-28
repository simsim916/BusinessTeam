package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Visit_page;


public interface VisitService {

	
	public Visit_page update(Visit_page visit_page);
	public List<Visit_page> selectAll();
}
