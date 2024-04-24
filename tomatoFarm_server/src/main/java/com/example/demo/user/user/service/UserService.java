package com.example.demo.user.user.service;

import java.util.List;

import com.example.demo.user.user.domain.SignForm;
import com.example.demo.user.user.domain.UserToken;
import com.example.demo.user.user.entity.User;
import com.example.demo.module.SearchRequest;

public interface UserService {

	UserToken selectUser(User dto);
	boolean adminCheck(String userId);

	void signup(SignForm signForm);

	Boolean checkID(String id);

	List<User> selectUserWhere(SearchRequest searchRequest);
	
	List<User> saveAll(List<User> list);
	
	void delete(String userId);
	
//	=================================
	
}
