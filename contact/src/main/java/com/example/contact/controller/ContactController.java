package com.example.contact.controller;

import com.example.contact.model.Contact;
import com.example.contact.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/contacts")
public class ContactController {

    @Autowired
    ContactRepository repository;

    @GetMapping
    public List<Contact> findAll() {

        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Contact findOne(@PathVariable Long id) {

        return repository.findOne(id);
    }

    @PostMapping
    public void create(@RequestBody Contact contact){
        repository.create(contact);
    }

}
