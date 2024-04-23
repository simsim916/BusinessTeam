package com.example.demo.admin_todolist.repository;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.admin_todolist.entity.PageTodo;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class TodoListRepositoryImpl implements TodoListRepository{

	private final EntityManager entityManager;
	
	@Override
	public List<PageTodo> selectAll() {
		return entityManager.createNativeQuery("SELECT * "
				+ "FROM todolist", PageTodo.class)
				.getResultList();
	}
	
	
	@Override
	public List<PageTodo> selectAllByDate(LocalDate regdate) {
		List<PageTodo> list = entityManager.createNativeQuery("SELECT *"
				+"FROM todolist WHERE regdate = ?", PageTodo.class)
				.setParameter(1, regdate)
				.getResultList();
		return list;
	}
	
	@Override
	public int insert(PageTodo entity) {
		return entityManager.createNativeQuery("INSERT INTO todolist(enddate, content, userIdAdmin, userIdEditor, state) "
				+ "VALUE(?,?,?,?,?)")
				.setParameter(1, entity.getEnddate())
				.setParameter(2, entity.getContent())
				.setParameter(3, entity.getUserIdAdmin())
				.setParameter(4, entity.getUserIdEditor())
				.setParameter(5, entity.getState())
				.executeUpdate();
	}
}
