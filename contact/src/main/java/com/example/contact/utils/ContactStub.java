package com.example.contact.utils;

import com.example.contact.model.Contact;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ContactStub {

    private static Map<Long, Contact> store = new HashMap<>();
    private static Long counter;

    static {
        store.put(1L, new Contact(1L, "Alex", "Josh", "ajosh@gmail.com", "(734) 234 7654"));
        store.put(2L, new Contact(2L, "Richard", "Jackson", "rjackson@gmail.com", "(734) 434 8798"));
        store.put(3L, new Contact(3L, "John", "New", "jnew@gmail.com", "(734) 675 8798"));
        counter = 3L;
    }

    public static List<Contact> findAll() {

        return new ArrayList<>(store.values());
    }

    public static Contact findOne(Long id) {

        return store.get(id);
    }

    public static void create(Contact contact) {

        contact.setId(++counter);
        store.put(counter, contact);
    }
}
