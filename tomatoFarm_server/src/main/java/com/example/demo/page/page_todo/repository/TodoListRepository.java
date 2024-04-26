package com.example.demo.page.page_todo.repository;

import java.time.LocalDate;
import java.util.List;

import com.example.demo.page.page_todo.entity.PageTodo;

public interface TodoListRepository {
	List<PageTodo> selectAll();
	List<PageTodo> selectAllByDate(LocalDate regdate);
	int insert(PageTodo entity);
	int check(PageTodo entity);
	int uncheck(PageTodo entity);
	int delete(PageTodo entity);
	int update(PageTodo entity);
}
