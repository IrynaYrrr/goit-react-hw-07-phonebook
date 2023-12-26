import { createSelector } from 'reselect';

export const selectContacts = state => state.contacts;

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.isLoading;

export const selectError = state => state.error;


export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  ({ contacts }, { filter }) => {
    console.log('console.log: selectFilteredContacts');
    return contacts.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
)

// export const selectFilteredContacts = state => {
//   const { contacts } = selectContacts(state)
//   const { filter } = selectFilter(state)
//   console.log('console.log: selectFilteredContacts');
//   return contacts.filter((el) =>
//     el.name.toLowerCase().includes(filter.toLowerCase())
//   );
// }
