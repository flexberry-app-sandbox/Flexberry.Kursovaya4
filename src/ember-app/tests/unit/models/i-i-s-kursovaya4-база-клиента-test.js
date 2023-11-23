import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya4-база-клиента', 'Unit | Model | i-i-s-kursovaya4-база-клиента', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kursovaya4-база-клиента',
    'model:i-i-s-kursovaya4-покупка',
    'model:i-i-s-kursovaya4-резервуар',
    'model:i-i-s-kursovaya4-ценновая-стела',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
