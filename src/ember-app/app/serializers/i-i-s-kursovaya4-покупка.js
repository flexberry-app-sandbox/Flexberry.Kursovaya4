import { Serializer as ПокупкаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya4-покупка';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПокупкаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
