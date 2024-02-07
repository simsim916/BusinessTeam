package com.main.tomatoFarm.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.main.tomatoFarm.domain.KeywordDTO;
import com.main.tomatoFarm.model.KeywordDAO;


@Service
public class KeywordServiceImpl implements KeywordService{
	
	KeywordDAO dao;
	
	public int updateKeywordCnt(KeywordDTO dto) {
		return dao.updateKeywordCnt(dto);
	}

	public List<KeywordDTO> selectKeywordList() {
		return dao.selectKeywordList();
	}

}
