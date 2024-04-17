package com.example.demo.user.repository;


import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.user.domain.UserDTO;
import com.example.demo.user.entity.User;
import com.example.demo.module.SearchRequest;

@Repository
public interface UserRepository {
	
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */

	
	
	/* 🎃🎃🎃🎃🎃🎃 수미 🎃🎃🎃🎃🎃🎃 */
	
	public User selectUser(User entity);
	
	public int insertUser(UserDTO dto);
	
	public User updateUser(User entity);
	
	public List<User> selectUserWhereString(SearchRequest searchRequest);
	public List<User> selectUserWhereNumber(SearchRequest searchRequest);
	List<User> insertTest(List<User> list);
}
