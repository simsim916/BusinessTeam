package com.example.demo.user.user_level.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "user_level")
public class UserLevel {
    @Id
    @Column(name = "code", nullable = false)
    private Integer id;

    @Column(name = "name", length = 20)
    private String name;

}