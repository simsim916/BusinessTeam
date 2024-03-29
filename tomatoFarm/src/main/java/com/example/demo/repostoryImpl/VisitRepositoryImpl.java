package com.example.demo.repostoryImpl;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.Visit_page;
import com.example.demo.entity.Visit_pageID;
import com.example.demo.repository.VisitRepository;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;

import static com.example.demo.entity.QVisit_page.visit_page;
//import static com.example.demo.entity.QVisit_pageID.visit_pageID;

@Repository
@AllArgsConstructor
public class VisitRepositoryImpl implements VisitRepository {

	private final EntityManager entityManager;
	private final JPAQueryFactory jPAQueryFactory;

	public Visit_page update(Visit_page entity, Visit_pageID visitPageID) {

		Visit_page check = entityManager.find(Visit_page.class, visitPageID);
		if (check != null) {
			Integer count = check.getVisit_count();
			check.setVisit_count(count + 1);
			return entityManager.merge(check);
		} else {
			return entityManager.merge(entity);
		}
	}

	@Override
//	public List<Visit_page> selectAll(Visit_page entity) {
//	    return jPAQueryFactory
//	            .select(Projections.bean(Visit_page.class, visit_page.page.max().as("page"),
//	                    visit_page.visit_date, visit_page.visit_count.sum().as("visit_count")))
//	            .from(visit_page)
//	            .groupBy(visit_page.visit_date) // visit_date만 GROUP BY에 추가
//	            .fetch();
//	}
//	public List<Visit_page> selectAll(Visit_page entity) {
//	    return jPAQueryFactory
//	            .select(Projections.bean(Visit_page.class, visit_page.page.max().as("page"),
//	                    visit_page.visit_date, visit_page.visit_count.sum().as("visit_count")))
//	            .from(visit_page)
//	            .groupBy(visit_page.visit_date) // visit_date만 GROUP BY에 추가
//	            .fetch();
//	}
	public List<Visit_page> selectAll(Visit_page entity) {
		return jPAQueryFactory
				.select(Projections.bean(Visit_page.class,
						visit_page.page,visit_page.visit_date,visit_page.visit_count))
				.from(visit_page)
				.orderBy(visit_page.visit_date.asc())
				.fetch();
	}
	

}
