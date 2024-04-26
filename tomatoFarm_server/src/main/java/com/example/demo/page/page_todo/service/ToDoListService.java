package com.example.demo.page.page_todo.service;

import java.time.LocalDate;
import java.util.List;

import com.example.demo.page.page_todo.entity.PageTodo;

public interface ToDoListService {
	
	List<PageTodo> selectAll();
	List<PageTodo> selectAllByDate(LocalDate regdate);
	List<PageTodo> insert(PageTodo entity);
	List<PageTodo> check(PageTodo entity);
	List<PageTodo> uncheck(PageTodo entity);
	List<PageTodo> delete(PageTodo entity);
	List<PageTodo> update(PageTodo entity);
	
	
	

}
