package com.example.demo.repostoryImpl;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.Itemorder;
import com.example.demo.entity.OrderDetail;
import com.example.demo.repository.ItemorderRepository;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class ItemorderRepositoryImpl implements ItemorderRepository {

	private final EntityManager entityManager;

	@Override
	public Itemorder merge(Itemorder entity) {
		return entityManager.merge(entity);
	}

}
