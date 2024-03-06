package com.example.demo.serviceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Sorttable;
import com.example.demo.repository.SortRepository;
import com.example.demo.service.SortService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class SortServiceImpl implements SortService{

	private final SortRepository sortRepository;
	
	@Override
	public List<Sorttable> selectAllSortb_D() {
		return sortRepository.selectAllSortb_D();
	}
	
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */
	
}
