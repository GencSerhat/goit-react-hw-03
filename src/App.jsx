import React, { useEffect, useState } from 'react';
import ContactList from './components/contactList/ContactList';
import SearchBox from './components/searchBox/SearchBox';
import {nanoid} from 'nanoid';
import ContactForm from './components/contactForm/ContactForm';

const App = () => {

  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];


  const [contacts, setContacts] = useState(()=>{
    // Localstorage dan verileri çek yoksa varsayılanı kullan
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });
useEffect(()=>{
  //contacts değiştikçe localstorage a kaydet
  localStorage.setItem('contacts', JSON.stringify(contacts));
},[contacts]);
const deleteContact = (id) => {
  console.log("Silinecek ID:", id);  // Hangi ID'nin silinmeye çalışıldığını görmek için
  setContacts(contacts.filter(contact => contact.id !==id));
 
};

const [filter, setFilter] = useState('');

const handleSearchChange=(event) => {
  setFilter(event.target.value);
};
//Arama fonksiyonu Büyük küçük harf duyarsız
const filteredContacts = contacts.filter(contact =>contact.name.toLowerCase().includes(filter.toLowerCase()));

const handleAddContact = (name, number) => {
  const newContact = {
    id:nanoid(), // id oluşturuldu
    name,
    number,
  };
  setContacts([...contacts, newContact]); // Yeni kişi ekliyoruz
};


  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filter} onSearchChange={handleSearchChange} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;