import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKursovaya4БазаКлиентаLForm from './forms/i-i-s-kursovaya4-база-клиента-l';
import IISKursovaya4ПокупкаLForm from './forms/i-i-s-kursovaya4-покупка-l';
import IISKursovaya4ЦенноваяСтелаLForm from './forms/i-i-s-kursovaya4-ценновая-стела-l';
import IISKursovaya4БазаКлиентаEForm from './forms/i-i-s-kursovaya4-база-клиента-e';
import IISKursovaya4ПокупкаEForm from './forms/i-i-s-kursovaya4-покупка-e';
import IISKursovaya4ЦенноваяСтелаEForm from './forms/i-i-s-kursovaya4-ценновая-стела-e';
import IISKursovaya4БазаКлиентаModel from './models/i-i-s-kursovaya4-база-клиента';
import IISKursovaya4ПокупкаModel from './models/i-i-s-kursovaya4-покупка';
import IISKursovaya4РезервуарModel from './models/i-i-s-kursovaya4-резервуар';
import IISKursovaya4ЦенноваяСтелаModel from './models/i-i-s-kursovaya4-ценновая-стела';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya4-база-клиента': IISKursovaya4БазаКлиентаModel,
    'i-i-s-kursovaya4-покупка': IISKursovaya4ПокупкаModel,
    'i-i-s-kursovaya4-резервуар': IISKursovaya4РезервуарModel,
    'i-i-s-kursovaya4-ценновая-стела': IISKursovaya4ЦенноваяСтелаModel
  },

  'application-name': 'Kursovaya4',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovaya4',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya4',
          title: 'Kursovaya4'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        kursovaya4: {
          caption: 'Kursovaya4',
          title: 'Kursovaya4',
          'i-i-s-kursovaya4-ценновая-стела-l': {
            caption: 'Ценновая стела',
            title: ''
          },
          'i-i-s-kursovaya4-база-клиента-l': {
            caption: 'База клиента',
            title: ''
          },
          'i-i-s-kursovaya4-покупка-l': {
            caption: 'Покупка',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kursovaya4-база-клиента-l': IISKursovaya4БазаКлиентаLForm,
    'i-i-s-kursovaya4-покупка-l': IISKursovaya4ПокупкаLForm,
    'i-i-s-kursovaya4-ценновая-стела-l': IISKursovaya4ЦенноваяСтелаLForm,
    'i-i-s-kursovaya4-база-клиента-e': IISKursovaya4БазаКлиентаEForm,
    'i-i-s-kursovaya4-покупка-e': IISKursovaya4ПокупкаEForm,
    'i-i-s-kursovaya4-ценновая-стела-e': IISKursovaya4ЦенноваяСтелаEForm
  },

});

export default translations;
