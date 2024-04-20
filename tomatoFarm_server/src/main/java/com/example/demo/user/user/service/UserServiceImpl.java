package com.example.demo.user.user.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import com.example.demo.page.page_keyword.entity.PageKeyword;
import com.example.demo.page.page_keyword.repository.pageKeywordRepository;
import com.example.demo.user.user.domain.UserDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.user.user.domain.UserToken;
import com.example.demo.user.user.entity.User;
import com.example.demo.module.jwtToken.TokenProvider;
import com.example.demo.module.SearchRequest;
import com.example.demo.user.user.repository.UserRepository;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {

	private final UserRepository userRepository;
	private final pageKeywordRepository pageKeywordRepository;
	private final PasswordEncoder passwordEncoder;
	private final TokenProvider tokenProvider;
	
	@Override
	public UserToken selectUser(User entity) {
		UserToken userToken = new UserToken();
		
		String password = entity.getPassword();
		System.out.println(passwordEncoder.encode((password)));
		entity = userRepository.selectUser(entity);
		
		if (entity != null) { 
			// 로그인성공
			if (passwordEncoder.matches(password, entity.getPassword())) {
				 List<PageKeyword> pageKeyword_list = pageKeywordRepository.findByUserIdOrderBySearchDateDesc(entity.getId());
				 List<String> keyword = new ArrayList<>();
				 for (PageKeyword e : pageKeyword_list){
					 keyword.add(e.getKeyword());
				 }
				final String token = tokenProvider.create(entity);
				userToken = UserToken.builder()
						.token(token)
						.id(entity.getId())
						.username(entity.getName())
						.admin(entity.getUserLevelCode() < 100)
						.keyword(keyword)
						.build();
			} else {
				userToken.setError("비밀번호가 일치하지 않습니다.");
			}
		} else { // 조회실패
			userToken.setError("일치하는 ID가 없습니다.");
		}
		
		return userToken;
	}
	
	@Override
	public boolean adminCheck(String userId) {
		boolean result = false;
		User entity = User.builder().id(userId).build();
		entity=userRepository.selectUser(entity);
		if(entity.getUserLevelCode() < 100)
			result = true;
		
		return result;
	}

	@Override
	public int insertUser(UserDTO dto) {
		return userRepository.insertUser(dto);
	}

	@Override
	public User updateUser(User entity) {
		return userRepository.updateUser(entity);
	}

	@Override
	public List<User> selectUserWhere(SearchRequest searchRequest) {
		if (searchRequest.getKeyword().matches("^[0-9]*$")) {
			return userRepository.selectUserWhereNumber(searchRequest);
		} else {
			return userRepository.selectUserWhereString(searchRequest);
		}
	}
	
	@Override
	@Transactional
	public List<User> insertTest(List<User> list) {
		return userRepository.insertTest(list);
	}
}
