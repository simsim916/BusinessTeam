package com.example.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Keyword;
import com.example.demo.entity.KeywordID;

public interface KeywordRepository extends JpaRepository<Keyword, KeywordID>{
	
	
}
