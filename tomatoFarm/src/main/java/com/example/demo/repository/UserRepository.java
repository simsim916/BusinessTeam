package com.example.demo.repository;


import org.springframework.stereotype.Repository;

import com.example.demo.domain.UserDTO;

@Repository
public interface UserRepository{
	
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */

	
	
	/* 🎃🎃🎃🎃🎃🎃 수미 🎃🎃🎃🎃🎃🎃 */
	
	public UserDTO selectUser(UserDTO dto);
	
	public int insertUser(UserDTO dto);
}
