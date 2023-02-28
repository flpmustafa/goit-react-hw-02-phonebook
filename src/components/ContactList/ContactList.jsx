import css from '../ContactList/ContactList.module.css';

const ContactList = ({ contacts, onDeleted, children }) => {
  return (
    <div className={css.contact__list}>
      <h2>Contacts</h2>
      {children}
      <ul className={css.contact__roster}>
        {contacts.length === 0 ? null : (
          <>
            {contacts.map(contact => {
              return (
                <li 
                 key={contact.id}
                 className={css.contact__item}>
                  <p>
                    <span>{contact.name} : </span>
                    {contact.number}
                  </p>
                  <button 
                    className={css.btn__list}
                    onClick={() => {
                      onDeleted(contact.id);
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </>
        )}
      </ul>
    </div>
  );
};

export default ContactList;