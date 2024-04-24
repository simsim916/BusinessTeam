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
				+ "FROM page_todo", PageTodo.class)
				.getResultList();
	}
	
	
	@Override
	public List<PageTodo> selectAllByDate(LocalDate regdate) {
		List<PageTodo> list = entityManager.createNativeQuery("SELECT *"
				+"FROM page_todo WHERE regdate = ?", PageTodo.class)
				.setParameter(1, regdate)
				.getResultList();
		return list;
	}
	
	@Override
	public int insert(PageTodo entity) {
		return entityManager.createNativeQuery("INSERT INTO page_todo(enddate, content, user_id_admin, user_id_editor, state) "
				+ "VALUE(?,?,?,?,?)")
				.setParameter(1, entity.getEnddate())
				.setParameter(2, entity.getContent())
				.setParameter(3, entity.getUserIdAdmin())
				.setParameter(4, entity.getUserIdEditor())
				.executeUpdate();
	}
}
