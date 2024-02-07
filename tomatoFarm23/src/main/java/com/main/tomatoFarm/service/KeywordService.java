package com.main.tomatoFarm.service;

import java.util.List;

import com.main.tomatoFarm.domain.KeywordDTO;

public interface KeywordService{

	
	public int updateKeywordCnt(KeywordDTO dto);
	public List<KeywordDTO> selectKeywordList();
	
}
