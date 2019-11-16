require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'produccion',
  port: process.env.PORT || 3000,
  db_name: process.env.DB_NAME,
  db_password: process.env.DB_PASSWORD,
  db_user: process.env.DB_USER,
  db_host: process.env.DB_HOST,
  accoud_sid: process.env.ACOOUND_SID,
  auth_token: process.env.AUTH_TOKEN_TWILIO,
  default_Admin_Password: process.env.DEFAULT_ADMIN_PASSWORD,
  default_User_Password: process.env.DEFAULT_USER_PASSWORD,
  auth_Jwt_Secret: process.env.AUTH_JWT_SECRET,
  public_Apy_Key_Token: process.env.PUBLIC_APY_KEY_TOKEN,
  admin_Apy_Key_Token: process.env.ADMIN_APY_KEY_TOKEN,
};

module.exports = { config };

