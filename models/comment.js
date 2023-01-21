const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    comment_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    comment_by: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'user',
            key: 'username',
  },
}
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);
module.exports = Comment;