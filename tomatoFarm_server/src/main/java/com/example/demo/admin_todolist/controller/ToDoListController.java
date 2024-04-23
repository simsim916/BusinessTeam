package com.example.demo.admin_todolist.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.admin_todolist.entity.PageTodo;
import com.example.demo.admin_todolist.service.ToDoListService;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/todo")
public class ToDoListController {
	
	ToDoListService toDoListService;
	
	@GetMapping("/selectall")
	public ResponseEntity<?>selectAll(){
		ResponseEntity<?> result = null;
		result = ResponseEntity.status(HttpStatus.OK).body(toDoListService.selectAll());
		return result;
	}
	
	@PostMapping("/selectbydate")
	public ResponseEntity<?>selectByDate(@RequestBody LocalDate enddate){
		ResponseEntity<?> result = null;
		List<PageTodo> list = toDoListService.selectAllByDate(enddate);
		result = ResponseEntity.status(HttpStatus.OK).body(list);
		return result;
	}
	
	@PostMapping("/insert")
	public ResponseEntity<?> insert(@RequestBody PageTodo entity){
		ResponseEntity<?> result = null;
		int list = toDoListService.insert(entity);
		result = ResponseEntity.status(HttpStatus.OK).body(list);
		return result;
		}
	

}
