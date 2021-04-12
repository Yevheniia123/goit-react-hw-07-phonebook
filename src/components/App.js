import SectionTitle from './SectionTitle/SectionTitle';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactsList/ContactList';
import { connect } from 'react-redux';
import contactOperation from '../redux/phonebook/phonebook-operation';
import React, { Component } from 'react';
import phonebookSelectors from '../redux/phonebook/phonebook-selectors';

class App extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    return (
      <div>
        {this.props.isLoadingContact && <h2>...LOADING</h2>}
        <SectionTitle title="Phonebook">
          <ContactForm />
        </SectionTitle>

        <SectionTitle title="Contacts">
          <Filter />
          <ContactList />
        </SectionTitle>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoadingContact: phonebookSelectors.getLoading(state),
});
const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(contactOperation.fetchContact()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
