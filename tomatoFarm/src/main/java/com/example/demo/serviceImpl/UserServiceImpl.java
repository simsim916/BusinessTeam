package com.example.demo.serviceImpl;

import org.springframework.stereotype.Service;

import com.example.demo.domain.UserDTO;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;

import lombok.AllArgsConstructor;




@AllArgsConstructor
@Service
public class UserServiceImpl implements UserService{
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */

	
	
	/* 🎃🎃🎃🎃🎃🎃 수미 🎃🎃🎃🎃🎃🎃 */

	private final UserRepository userRepository;
	
	@Override
	public User selectUser(User entity) {
		
		return userRepository.selectUser(entity);
	}
	
	@Override
	public int insertUser(UserDTO dto) {
		return userRepository.insertUser(dto);
	}
	
	@Override
	public User updateUser(User entity) {
		return userRepository.updateUser(entity);
	}
}
