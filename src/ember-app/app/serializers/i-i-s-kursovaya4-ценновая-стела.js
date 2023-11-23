import { Serializer as ЦенноваяСтелаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya4-ценновая-стела';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЦенноваяСтелаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
