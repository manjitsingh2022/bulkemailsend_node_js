const db = require('./db');

const getRecipients = async () => {
  try {
    const [rows] = await db.query('SELECT id, email FROM users');
    return rows.map(row => row.email); 
  } catch (error) {
    console.error('❌ Error fetching recipients from the database:', error.message);
    return []; 
  }
};

module.exports = getRecipients;
