package com.example.demo.repostoryImpl;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.ItemOrder;
import com.example.demo.repository.OrderRepository;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class OrderRepositoryImpl implements OrderRepository {
	
	private final EntityManager entityManager;
	
	@Override
	public ItemOrder singleOrder(ItemOrder order) {
		return entityManager.merge(order);
	}
}
