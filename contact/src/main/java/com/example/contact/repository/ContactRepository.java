package com.example.contact.repository;

import com.example.contact.model.Contact;
import com.example.contact.utils.ContactStub;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ContactRepository {

    public List<Contact> findAll() {

        return ContactStub.findAll();
    }

    public Contact findOne(Long id) {

        return ContactStub.findOne(id);
    }

    public void create(Contact contact) {

        ContactStub.create(contact);
    }
}
