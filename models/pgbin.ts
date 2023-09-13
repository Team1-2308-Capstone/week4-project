import { Sequelize, Model, DataTypes } from 'sequelize'
import sequelize from '../utils/sequelize';

class PgBin extends Model {
  toJSON() {
    const original = { ...super.toJSON() };
    return original
  }
}

PgBin.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: 'id'
  },
  binId: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    field: 'bin_id'
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    field: 'created_at'
  },
  lastRequest: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    field: 'last_request'
  },
}, {
  sequelize,
  tableName: 'pg_bins',
  underscored: true,
  modelName: 'pgbin',
});

export default PgBin;