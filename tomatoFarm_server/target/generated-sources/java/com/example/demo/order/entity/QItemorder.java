package com.example.demo.order.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QItemorder is a Querydsl query type for Itemorder
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QItemorder extends EntityPathBase<Itemorder> {

    private static final long serialVersionUID = 798756426L;

    public static final QItemorder itemorder = new QItemorder("itemorder");

    public final StringPath address1 = createString("address1");

    public final StringPath address2 = createString("address2");

    public final NumberPath<Integer> addressCode = createNumber("addressCode", Integer.class);

    public final NumberPath<Integer> code = createNumber("code", Integer.class);

    public final DateTimePath<java.time.LocalDateTime> deliverydate = createDateTime("deliverydate", java.time.LocalDateTime.class);

    public final NumberPath<Integer> deliveryprice = createNumber("deliveryprice", Integer.class);

    public final StringPath order_message = createString("order_message");

    public final DateTimePath<java.time.LocalDateTime> orderdate = createDateTime("orderdate", java.time.LocalDateTime.class);

    public final NumberPath<Integer> orderprice = createNumber("orderprice", Integer.class);

    public final NumberPath<Integer> status = createNumber("status", Integer.class);

    public final NumberPath<Integer> usepoint = createNumber("usepoint", Integer.class);

    public final StringPath userId = createString("userId");

    public QItemorder(String variable) {
        super(Itemorder.class, forVariable(variable));
    }

    public QItemorder(Path<? extends Itemorder> path) {
        super(path.getType(), path.getMetadata());
    }

    public QItemorder(PathMetadata metadata) {
        super(Itemorder.class, metadata);
    }

}

