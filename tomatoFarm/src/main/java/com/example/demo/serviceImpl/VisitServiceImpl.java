package com.example.demo.serviceImpl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Visit_page;
import com.example.demo.repository.VisitRepository;
import com.example.demo.service.VisitService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class VisitServiceImpl implements VisitService {

	VisitRepository visitRepository;

	@Override
	@Transactional
	public Visit_page update(Visit_page visit_page) {
		return visitRepository.update(visit_page);
	}
	
	@Override
	public List<Visit_page> selectAll() {
		return visitRepository.selectAll();
	}

}
