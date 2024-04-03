package com.example.demo.repostoryImpl;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.ChatBot;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.ChatBotRepository;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import static com.example.demo.entity.QChatBot.chatBot;
import static com.example.demo.entity.QUser.user;

import java.util.List;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class ChatBotRepositoryImpl implements ChatBotRepository {

	private final EntityManager entityManager;
	private final JPAQueryFactory jPAQueryFactory;

	@Override
	public ChatBot save(ChatBot chatbot) {
		int result = entityManager.createNativeQuery(
				"INSERT chatbot(writer, type, content, regdate, root) "
				+ "SELECT"
				+ "    :writer, :type, :content,"
				+ "    :regdate,"
				+ "    IFNULL(:root, (SELECT COALESCE(MAX(seq), 0) + 1 FROM chatbot))"
				)
			.setParameter("writer", chatbot.getWriter())
			.setParameter("type", chatbot.getType())
			.setParameter("content", chatbot.getContent())
			.setParameter("regdate", chatbot.getRegdate())
			.setParameter("root", chatbot.getRoot())
			.executeUpdate();
		if (result > 0)
			return jPAQueryFactory.selectFrom(chatBot)
					.where(chatBot.writer.eq(chatbot.getWriter()))
					.orderBy(chatBot.regdate.desc())
					.limit(1)
					.fetchOne();
		else 
			return null;
	}

	@Override
	public List<ChatBot> selectAllFromRoot(ChatBot chatbot) {
		return jPAQueryFactory.selectFrom(chatBot)
				.where(chatBot.root.eq(chatbot.getRoot()))
				.orderBy(chatBot.regdate.asc())
				.fetch();
	}
	
	@Override
	public List<ChatBot> selectRootList(PageRequest pageRequest, SearchRequest searchRequest) {
		return jPAQueryFactory.select(Projections.bean(ChatBot.class, 
				chatBot.writer, chatBot.root, chatBot.ing, chatBot.regdate.max(), user.level.as("user_level")))
				.from(chatBot).leftJoin(user).on(chatBot.writer.eq(user.id))
				.groupBy(chatBot.root,chatBot.writer,chatBot.ing)
				.fetch();
	}
}
