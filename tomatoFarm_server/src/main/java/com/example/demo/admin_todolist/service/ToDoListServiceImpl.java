package com.example.demo.admin_todolist.service;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.admin_todolist.entity.ToDoList;
import com.example.demo.admin_todolist.repository.TodoListRepository;

import lombok.RequiredArgsConstructor;

@Transactional
@RequiredArgsConstructor
@Service
public class ToDoListServiceImpl implements ToDoListService {

	private final TodoListRepository todolistRepository;

	@Override
	public List<ToDoList> selectAll() {
		return todolistRepository.selectAll();
	}

	@Override
	public List<ToDoList> selectAllByDate(LocalDate regdate) {
		return todolistRepository.selectAllByDate(regdate);
	}

	@Override
	public int insert(ToDoList entity) {
		LocalDate regdate = LocalDate.now();
		entity.setEnddate(regdate);
		return todolistRepository.insert(entity);
	}

}
