package com.example.demo.admin_todolist.repository;

import java.time.LocalDate;
import java.util.List;

import com.example.demo.admin_todolist.entity.ToDoList;

public interface TodoListRepository {
	List<ToDoList> selectAll();
	List<ToDoList> selectAllByDate(LocalDate regdate);
	int insert(ToDoList entity);
}
