package com.example.demo.entity;

import javax.persistence.*;

import lombok.Data;

@Entity
@Data
@Table(name = "useraddress")
public class UserAddress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer code;

    @Column(name = "id")
    private String id;

    @Column(name = "address_code")
    private Integer addressCode;

    @Column(name = "address1", length = 50)
    private String address1;

    @Column(name = "address2", length = 50)
    private String address2;
    
    private Integer phonenumber;
    
    private String info;

}
