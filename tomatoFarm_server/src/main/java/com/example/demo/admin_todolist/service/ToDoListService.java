package com.example.demo.admin_todolist.service;

import java.time.LocalDate;
import java.util.List;

import com.example.demo.admin_todolist.entity.PageTodo;

public interface ToDoListService {
	
	List<PageTodo> selectAll();
	List<PageTodo> selectAllByDate(LocalDate regdate);
	int insert(PageTodo entity);
	
	
	

}
