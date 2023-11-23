import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya4.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya4.title'),
          children: [{
            link: 'i-i-s-kursovaya4-ценновая-стела-l',
            caption: i18n.t('forms.application.sitemap.kursovaya4.i-i-s-kursovaya4-ценновая-стела-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya4.i-i-s-kursovaya4-ценновая-стела-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-kursovaya4-база-клиента-l',
            caption: i18n.t('forms.application.sitemap.kursovaya4.i-i-s-kursovaya4-база-клиента-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya4.i-i-s-kursovaya4-база-клиента-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-kursovaya4-покупка-l',
            caption: i18n.t('forms.application.sitemap.kursovaya4.i-i-s-kursovaya4-покупка-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya4.i-i-s-kursovaya4-покупка-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})