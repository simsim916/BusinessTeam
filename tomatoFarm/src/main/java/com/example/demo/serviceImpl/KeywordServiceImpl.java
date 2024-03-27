package com.example.demo.serviceImpl;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Keyword;
import com.example.demo.repository.KeywordRepository;
import com.example.demo.service.KeywordService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class KeywordServiceImpl implements KeywordService{
	
	private KeywordRepository keywordRepository;

	
	@Transactional
	@Override
	public Keyword updateKeyword(Keyword keyword) {
		return keywordRepository.updateKeyword(keyword);
	}
}
