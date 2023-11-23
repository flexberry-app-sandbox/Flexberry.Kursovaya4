import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDКлиента: DS.attr('number'),
  логин: DS.attr('string'),
  номерКарты: DS.attr('number'),
  пароль: DS.attr('string')
});

export let ValidationRules = {
  iDКлиента: {
    descriptionKey: 'models.i-i-s-kursovaya4-база-клиента.validations.iDКлиента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  логин: {
    descriptionKey: 'models.i-i-s-kursovaya4-база-клиента.validations.логин.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерКарты: {
    descriptionKey: 'models.i-i-s-kursovaya4-база-клиента.validations.номерКарты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  пароль: {
    descriptionKey: 'models.i-i-s-kursovaya4-база-клиента.validations.пароль.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БазаКлиентаE', 'i-i-s-kursovaya4-база-клиента', {
    iDКлиента: attr('I d клиента', { index: 0 }),
    логин: attr('Логин', { index: 1 }),
    пароль: attr('Пароль', { index: 2 }),
    номерКарты: attr('Номер карты', { index: 3 })
  });

  modelClass.defineProjection('БазаКлиентаL', 'i-i-s-kursovaya4-база-клиента', {
    iDКлиента: attr('I d клиента', { index: 0 }),
    логин: attr('Логин', { index: 1 }),
    пароль: attr('Пароль', { index: 2 }),
    номерКарты: attr('Номер карты', { index: 3 })
  });
};
