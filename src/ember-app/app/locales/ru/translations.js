import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovaya4',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya4',
          title: 'Kursovaya4'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
