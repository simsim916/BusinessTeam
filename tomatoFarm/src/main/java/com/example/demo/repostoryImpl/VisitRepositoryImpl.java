package com.example.demo.repostoryImpl;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.Visit_page;
import com.example.demo.entity.Visit_pageID;
import com.example.demo.repository.VisitRepository;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class VisitRepositoryImpl implements VisitRepository {

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
}
