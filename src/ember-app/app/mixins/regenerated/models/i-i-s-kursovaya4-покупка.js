import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('decimal'),
  сумма: DS.attr('decimal'),
  базаКлиента: DS.belongsTo('i-i-s-kursovaya4-база-клиента', { inverse: null, async: false }),
  ценноваяСтела: DS.belongsTo('i-i-s-kursovaya4-ценновая-стела', { inverse: null, async: false }),
  резервуар: DS.hasMany('i-i-s-kursovaya4-резервуар', { inverse: 'покупка', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-kursovaya4-покупка.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-kursovaya4-покупка.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  базаКлиента: {
    descriptionKey: 'models.i-i-s-kursovaya4-покупка.validations.базаКлиента.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  ценноваяСтела: {
    descriptionKey: 'models.i-i-s-kursovaya4-покупка.validations.ценноваяСтела.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  резервуар: {
    descriptionKey: 'models.i-i-s-kursovaya4-покупка.validations.резервуар.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПокупкаE', 'i-i-s-kursovaya4-покупка', {
    количество: attr('Количество', { index: 0 }),
    сумма: attr('Сумма', { index: 1 }),
    ценноваяСтела: belongsTo('i-i-s-kursovaya4-ценновая-стела', 'Ценновая стела', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' }),
    базаКлиента: belongsTo('i-i-s-kursovaya4-база-клиента', 'База клиента', {
      логин: attr('Логин', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'логин' }),
    резервуар: hasMany('i-i-s-kursovaya4-резервуар', 'Резервуар', {
      колвоТоп: attr('Колво топ', { index: 0 }),
      состояние: attr('Состояние', { index: 1 }),
      idР: attr('Id Р', { index: 2 })
    })
  });

  modelClass.defineProjection('ПокупкаL', 'i-i-s-kursovaya4-покупка', {
    количество: attr('Количество', { index: 0 }),
    сумма: attr('Сумма', { index: 1 }),
    ценноваяСтела: belongsTo('i-i-s-kursovaya4-ценновая-стела', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true }),
    базаКлиента: belongsTo('i-i-s-kursovaya4-база-клиента', 'Логин', {
      логин: attr('Логин', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
