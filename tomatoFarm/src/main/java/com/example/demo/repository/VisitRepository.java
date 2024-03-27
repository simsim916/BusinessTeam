package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Visit_page;
import com.example.demo.entity.Visit_pageID;

public interface VisitRepository{

	public Visit_page update(Visit_page visit_page);
}
