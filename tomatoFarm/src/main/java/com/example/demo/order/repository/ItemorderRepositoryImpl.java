package com.example.demo.repostoryImpl;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.Itemorder;
import com.example.demo.repository.ItemorderRepository;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class ItemorderRepositoryImpl implements ItemorderRepository {

	private final EntityManager entityManager;
	private final JPAQueryFactory jPAQueryFactory;

	@Override
	public Itemorder merge(Itemorder entity) {
		return entityManager.merge(entity);
	}

}
