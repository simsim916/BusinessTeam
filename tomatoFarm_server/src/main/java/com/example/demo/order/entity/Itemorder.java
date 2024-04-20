package com.example.demo.order.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "itemorder") // order 테이블과 매핑
@Data
@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Itemorder {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer code;
    @Column(name = "user_id")
    private String userId;
    @Column(name = "address_code")
    private Integer addressCode;
    @Column(name = "address1")
    private String address1;
    @Column(name = "address2")
    private String address2;
    @Column(name = "orderprice")
    private Integer orderprice;
    @Column(name = "deliveryprice")
    private Integer deliveryprice;
    @Column(name = "usepoint")
    private Integer usepoint;
    
    @Column(name = "orderdate")
    private LocalDateTime orderdate;
    
    @Builder.Default
    @Column(name="status")
    private Integer status=0;

    @Column(name="deliverydate")
    private LocalDateTime deliverydate;

    @Column(name="order_message")
    private String order_message;



}
