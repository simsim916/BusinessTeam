package com.example.demo.repository;


import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.Visit_page;

import lombok.AllArgsConstructor;


@Repository
@AllArgsConstructor
public class VisitRepository{

	private final EntityManager entityManager;

	public Visit_page update(Visit_page visit_page) {
		Visit_page check =  entityManager.find(Visit_page.class, visit_page.getVisit_pageID());
		if(check != null) {
			Integer count = check.getVisit_count();
			check.setVisit_count(count+1);
			return entityManager.merge(check);
		} else {
			return entityManager.merge(visit_page);
		}
	}
	
	public List<Visit_page> selectAll() {
		return entityManager.createQuery("SELECT v FROM visit_page", Visit_page.class)
			    .getResultList();
	}
	
}
