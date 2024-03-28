package com.example.demo.repository;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.Keyword;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class KeywordRepository {

	private final EntityManager entityManager;
	
	public Keyword updateKeyword(Keyword keyword) {
		Keyword entity = entityManager.find(Keyword.class, keyword.getKeywordID());
		
		if(entity != null) {
			entity.setSearch_count(entity.getSearch_count() + 1);
			return entityManager.merge(entity);
		} else {
			return entityManager.merge(keyword);
		}
		
	}
	
}
