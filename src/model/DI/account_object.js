export default class account_object {
  getIdProperty() {
    return 'account_object_id';
  }
}

account_object.prototype.fields = [
  {name: 'account_object_id', type: 'uuid'},
  {name: 'account_object_code', type: 'string'},
  {name: 'account_object_name', type: 'string'},
]