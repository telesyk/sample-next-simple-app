const MESSAGES = {
  error: {
    dataNotFound: 'Events data not found',
    emailRegistered: 'This email has been already registered',
    emailEmpty: 'Email can not be empty!',
    emailInvalid: 'Please, insert correct email address',
  },
  success: {
    eventRegistered: 'You have been successfully registered for event',
  },
  info: {
    form: {
      label: 'Please, register for this event',
      button: 'Submit',
    },
    slotsLeft: 'Left slots for registration',
    slotsEnd: 'All slots for registration ended',
  },
};

const LIMITS = {
  emailsPerEvent: 10,
};

export { MESSAGES, LIMITS };
