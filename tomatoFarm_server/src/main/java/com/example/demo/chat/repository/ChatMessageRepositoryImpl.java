package com.example.demo.chat.repository;

import javax.persistence.EntityManager;

import com.example.demo.chat.entity.ChatMessage;
import org.springframework.stereotype.Repository;

import com.example.demo.chat.domain.ChatMessageDTO;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import static com.example.demo.chat.entity.QChatMessage.chatMessage;
import static com.example.demo.user.user.entity.QUser.user;

import java.util.List;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class ChatMessageRepositoryImpl implements ChatMessageRepository {

	private final EntityManager entityManager;
	private final JPAQueryFactory jPAQueryFactory;

	@Override
	public ChatMessage insertMessage(ChatMessage entity) {
		return entityManager.merge(entity);
	}

	@Override
	public List<ChatMessageDTO> selectAllmessageWhereRoomSeq(ChatMessage entity) {
		return jPAQueryFactory
				.select(Projections.bean(ChatMessageDTO.class, chatMessage.content, chatMessage.chatRoomSeq, chatMessage.seq,
						chatMessage.writer, chatMessage.regdate, user.userLevelCode.as("user_level")))
				.from(chatMessage).leftJoin(user).on(chatMessage.writer.eq(user.id))
				.where(chatMessage.chatRoomSeq.eq(entity.getChatRoomSeq()))
				.orderBy(chatMessage.regdate.asc())
				.orderBy(chatMessage.regdate.asc())
				.fetch();
	}

}
