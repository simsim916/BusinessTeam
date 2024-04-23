package com.example.demo.admin_todolist.service;

import java.time.LocalDate;
import java.util.List;

import com.example.demo.admin_todolist.entity.ToDoList;

public interface ToDoListService {
	
	List<ToDoList> selectAll();
	List<ToDoList> selectAllByDate(LocalDate regdate);
	int insert(ToDoList entity);
	
	
	

}
