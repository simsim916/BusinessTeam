package com.ncs.spring02.service;

import java.util.List;

import com.ncs.spring02.domain.BoardDTO;

public interface BoardService {
	
	//** selectList
	public List<BoardDTO> selectList();
	
	//** selectOne
	public BoardDTO selectOne(int seq);
	
	//** Insert
	public int insert(BoardDTO dto);
	
	//** Update
	public int update(BoardDTO dto);
	
	//** Delete
	public int delete(int seq);
	
} //class