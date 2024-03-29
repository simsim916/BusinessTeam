package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table(name = "order_detail") // order_detail 테이블과 매핑
@IdClass(OrderDetailID.class) // 복합 기본 키 클래스를 지정
public class OrderDetail {

    @Id
    @Column(name = "order_code")
    private int orderCode;

    @Id
    @Column(name = "item_code")
    private int itemCode;

    @Column(name = "item_amount")
    private Integer itemAmount;

    private Integer discount;

    // Getter and Setter methods
}