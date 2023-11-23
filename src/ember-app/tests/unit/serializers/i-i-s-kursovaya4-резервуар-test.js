import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya4-резервуар', 'Unit | Serializer | i-i-s-kursovaya4-резервуар', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya4-резервуар',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
