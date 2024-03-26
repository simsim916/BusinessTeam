package com.example.demo.repostoryImpl;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.example.demo.repository.Item_askUpdateRepository;


@Repository
public class Item_askUpdateRepositoryImpl implements Item_askUpdateRepository{
	
	@PersistenceContext
	private EntityManager entityManager;
	
	public void test() {
	}
}
