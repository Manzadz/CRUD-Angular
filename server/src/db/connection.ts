import { Sequelize } from "sequelize";

const sequelize = new Sequelize('crud', 'root', 'leo040820',{
    host: 'localhost',
    dialect: 'mariadb',
});

export default sequelize;