package com.example.demo.repository;


import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Keyword;
import com.example.demo.entity.KeywordID;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KeywordRepository extends JpaRepository<Keyword, KeywordID>{

    List<Keyword> findByIdOrderBySearchDateDesc(String id);


}
