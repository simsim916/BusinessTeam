package com.example.demo.chat.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.example.demo.chat.entity.ChatMessage;
import com.example.demo.chat.entity.ChatRoom;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.chat.domain.ChatMessageDTO;
import com.example.demo.chat.domain.ChatRoomDTO;
import com.example.demo.module.jwtToken.TokenProvider;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.chat.service.ChatService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/chat")
public class ChatController {

    ChatService chatService;
    TokenProvider tokenProvider;

    @PostMapping("/makeroom")
    public ResponseEntity<?> makeroom(HttpServletRequest request, @RequestBody ChatRoom entity, @AuthenticationPrincipal String userId) {
        long beforeTime = System.currentTimeMillis();
        ResponseEntity<?> result = null;
        if(entity.getUserIdAdmin()==null) {
        	entity.setUserIdUser(userId);
        }
        entity = chatService.insertRoom(entity);
        if (entity != null) {
            result = ResponseEntity.status(HttpStatus.OK).body(entity);
        } else {
            result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("makeroom failed");
        }
        long afterTime  = System.currentTimeMillis();
        System.out.println("makeroom time: " + (afterTime - beforeTime));
        return result;
    }

    @PostMapping("/insertmessage")
    public ResponseEntity<?> insertmessage(HttpServletRequest request, @RequestBody ChatMessage entity) {
        ResponseEntity<?> result = null;
        String token = tokenProvider.parseBearerToken(request);
        String id = tokenProvider.validateAndGetUserId(token);
        entity.setWriter(id);
        if (entity.getContent() != null && !entity.getContent().trim().isEmpty()) {
            if (chatService.insertMessage(entity).getSeq() != null) {
                List<ChatMessageDTO> list = chatService.selectAllmessageWhereRoomSeq(entity);
                result = ResponseEntity.status(HttpStatus.OK).body(list);
            } else {
                result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("insertmessage failed");
            }
        } else {
            result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("insertmessage is empty");
        }
        return result;
    }

    @GetMapping("/selectmessage")
    public ResponseEntity<?> selectmessage(HttpServletRequest request, ChatMessage entity) {
        ResponseEntity<?> result = null;
        String token = tokenProvider.parseBearerToken(request);
        String id = tokenProvider.validateAndGetUserId(token);
        entity.setWriter(id);
        List<ChatMessageDTO> list = chatService.selectAllmessageWhereRoomSeq(entity);
        if (list != null) {
            result = ResponseEntity.status(HttpStatus.OK).body(list);
        } else {
            result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("selectmessage failed");
        }
        return result;
    }

    @GetMapping("/selectroom")
    public ResponseEntity<?> selectroom(PageRequest pageRequest, SearchRequest searchRequest, @AuthenticationPrincipal String userId) {
        ResponseEntity<?> result = null;
        List<ChatRoomDTO> list = chatService.selectRoom(pageRequest, searchRequest, userId);
        result = ResponseEntity.status(HttpStatus.OK).body(list);
        return result;
    }
}
